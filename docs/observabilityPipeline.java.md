# `observabilityPipeline` Submodule <a name="`observabilityPipeline` Submodule" id="@cdktf/provider-datadog.observabilityPipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObservabilityPipeline <a name="ObservabilityPipeline" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline datadog_observability_pipeline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipeline;

ObservabilityPipeline.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .config(ObservabilityPipelineConfigA)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The pipeline name. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigA">ObservabilityPipelineConfigA</a></code> | config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The pipeline name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigA">ObservabilityPipelineConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#config ObservabilityPipeline#config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.resetConfig">resetConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.putConfig"></a>

```java
public void putConfig(ObservabilityPipelineConfigA value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigA">ObservabilityPipelineConfigA</a>

---

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.resetConfig"></a>

```java
public void resetConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ObservabilityPipeline resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipeline;

ObservabilityPipeline.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipeline;

ObservabilityPipeline.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipeline;

ObservabilityPipeline.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipeline;

ObservabilityPipeline.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ObservabilityPipeline.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ObservabilityPipeline resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ObservabilityPipeline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ObservabilityPipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ObservabilityPipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference">ObservabilityPipelineConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.configInput">configInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigA">ObservabilityPipelineConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.config"></a>

```java
public ObservabilityPipelineConfigAOutputReference getConfig();
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference">ObservabilityPipelineConfigAOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.configInput"></a>

```java
public java.lang.Object getConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigA">ObservabilityPipelineConfigA</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ObservabilityPipelineConfig <a name="ObservabilityPipelineConfig" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfig;

ObservabilityPipelineConfig.builder()
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
    .name(java.lang.String)
//  .config(ObservabilityPipelineConfigA)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.name">name</a></code> | <code>java.lang.String</code> | The pipeline name. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigA">ObservabilityPipelineConfigA</a></code> | config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The pipeline name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.config"></a>

```java
public ObservabilityPipelineConfigA getConfig();
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigA">ObservabilityPipelineConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#config ObservabilityPipeline#config}

---

### ObservabilityPipelineConfigA <a name="ObservabilityPipelineConfigA" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigA;

ObservabilityPipelineConfigA.builder()
//  .destinations(ObservabilityPipelineConfigDestinations)
//  .processors(ObservabilityPipelineConfigProcessors)
//  .sources(ObservabilityPipelineConfigSources)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigA.property.destinations">destinations</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinations">ObservabilityPipelineConfigDestinations</a></code> | destinations block. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigA.property.processors">processors</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors">ObservabilityPipelineConfigProcessors</a></code> | processors block. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigA.property.sources">sources</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSources">ObservabilityPipelineConfigSources</a></code> | sources block. |

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigA.property.destinations"></a>

```java
public ObservabilityPipelineConfigDestinations getDestinations();
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinations">ObservabilityPipelineConfigDestinations</a>

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#destinations ObservabilityPipeline#destinations}

---

##### `processors`<sup>Optional</sup> <a name="processors" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigA.property.processors"></a>

```java
public ObservabilityPipelineConfigProcessors getProcessors();
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors">ObservabilityPipelineConfigProcessors</a>

processors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#processors ObservabilityPipeline#processors}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigA.property.sources"></a>

```java
public ObservabilityPipelineConfigSources getSources();
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSources">ObservabilityPipelineConfigSources</a>

sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#sources ObservabilityPipeline#sources}

---

### ObservabilityPipelineConfigDestinations <a name="ObservabilityPipelineConfigDestinations" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigDestinations;

ObservabilityPipelineConfigDestinations.builder()
//  .datadogLogs(IResolvable)
//  .datadogLogs(java.util.List<ObservabilityPipelineConfigDestinationsDatadogLogs>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinations.property.datadogLogs">datadogLogs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogs">ObservabilityPipelineConfigDestinationsDatadogLogs</a>></code> | datadog_logs block. |

---

##### `datadogLogs`<sup>Optional</sup> <a name="datadogLogs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinations.property.datadogLogs"></a>

```java
public java.lang.Object getDatadogLogs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogs">ObservabilityPipelineConfigDestinationsDatadogLogs</a>>

datadog_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#datadog_logs ObservabilityPipeline#datadog_logs}

---

### ObservabilityPipelineConfigDestinationsDatadogLogs <a name="ObservabilityPipelineConfigDestinationsDatadogLogs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigDestinationsDatadogLogs;

ObservabilityPipelineConfigDestinationsDatadogLogs.builder()
    .id(java.lang.String)
    .inputs(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogs.property.id">id</a></code> | <code>java.lang.String</code> | The unique ID of the destination. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogs.property.inputs">inputs</a></code> | <code>java.util.List<java.lang.String></code> | The inputs for the destination. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogs.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The unique ID of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogs.property.inputs"></a>

```java
public java.util.List<java.lang.String> getInputs();
```

- *Type:* java.util.List<java.lang.String>

The inputs for the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}

---

### ObservabilityPipelineConfigProcessors <a name="ObservabilityPipelineConfigProcessors" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigProcessors;

ObservabilityPipelineConfigProcessors.builder()
//  .addFields(IResolvable)
//  .addFields(java.util.List<ObservabilityPipelineConfigProcessorsAddFields>)
//  .filter(IResolvable)
//  .filter(java.util.List<ObservabilityPipelineConfigProcessorsFilter>)
//  .parseJson(IResolvable)
//  .parseJson(java.util.List<ObservabilityPipelineConfigProcessorsParseJson>)
//  .quota(IResolvable)
//  .quota(java.util.List<ObservabilityPipelineConfigProcessorsQuota>)
//  .removeFields(IResolvable)
//  .removeFields(java.util.List<ObservabilityPipelineConfigProcessorsRemoveFields>)
//  .renameFields(IResolvable)
//  .renameFields(java.util.List<ObservabilityPipelineConfigProcessorsRenameFields>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors.property.addFields">addFields</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFields">ObservabilityPipelineConfigProcessorsAddFields</a>></code> | add_fields block. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilter">ObservabilityPipelineConfigProcessorsFilter</a>></code> | filter block. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors.property.parseJson">parseJson</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJson">ObservabilityPipelineConfigProcessorsParseJson</a>></code> | parse_json block. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors.property.quota">quota</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota">ObservabilityPipelineConfigProcessorsQuota</a>></code> | quota block. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors.property.removeFields">removeFields</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFields">ObservabilityPipelineConfigProcessorsRemoveFields</a>></code> | remove_fields block. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors.property.renameFields">renameFields</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFields">ObservabilityPipelineConfigProcessorsRenameFields</a>></code> | rename_fields block. |

---

##### `addFields`<sup>Optional</sup> <a name="addFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors.property.addFields"></a>

```java
public java.lang.Object getAddFields();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFields">ObservabilityPipelineConfigProcessorsAddFields</a>>

add_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#add_fields ObservabilityPipeline#add_fields}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilter">ObservabilityPipelineConfigProcessorsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#filter ObservabilityPipeline#filter}

---

##### `parseJson`<sup>Optional</sup> <a name="parseJson" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors.property.parseJson"></a>

```java
public java.lang.Object getParseJson();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJson">ObservabilityPipelineConfigProcessorsParseJson</a>>

parse_json block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#parse_json ObservabilityPipeline#parse_json}

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors.property.quota"></a>

```java
public java.lang.Object getQuota();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota">ObservabilityPipelineConfigProcessorsQuota</a>>

quota block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#quota ObservabilityPipeline#quota}

---

##### `removeFields`<sup>Optional</sup> <a name="removeFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors.property.removeFields"></a>

```java
public java.lang.Object getRemoveFields();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFields">ObservabilityPipelineConfigProcessorsRemoveFields</a>>

remove_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#remove_fields ObservabilityPipeline#remove_fields}

---

##### `renameFields`<sup>Optional</sup> <a name="renameFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors.property.renameFields"></a>

```java
public java.lang.Object getRenameFields();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFields">ObservabilityPipelineConfigProcessorsRenameFields</a>>

rename_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#rename_fields ObservabilityPipeline#rename_fields}

---

### ObservabilityPipelineConfigProcessorsAddFields <a name="ObservabilityPipelineConfigProcessorsAddFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFields.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigProcessorsAddFields;

ObservabilityPipelineConfigProcessorsAddFields.builder()
    .id(java.lang.String)
    .include(java.lang.String)
    .inputs(java.util.List<java.lang.String>)
//  .field(IResolvable)
//  .field(java.util.List<ObservabilityPipelineConfigProcessorsAddFieldsField>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFields.property.id">id</a></code> | <code>java.lang.String</code> | The unique ID of the processor. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFields.property.include">include</a></code> | <code>java.lang.String</code> | A Datadog search query used to determine which logs this processor targets. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFields.property.inputs">inputs</a></code> | <code>java.util.List<java.lang.String></code> | The inputs for the processor. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFields.property.field">field</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsField">ObservabilityPipelineConfigProcessorsAddFieldsField</a>></code> | field block. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFields.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The unique ID of the processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFields.property.include"></a>

```java
public java.lang.String getInclude();
```

- *Type:* java.lang.String

A Datadog search query used to determine which logs this processor targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFields.property.inputs"></a>

```java
public java.util.List<java.lang.String> getInputs();
```

- *Type:* java.util.List<java.lang.String>

The inputs for the processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFields.property.field"></a>

```java
public java.lang.Object getField();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsField">ObservabilityPipelineConfigProcessorsAddFieldsField</a>>

field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#field ObservabilityPipeline#field}

---

### ObservabilityPipelineConfigProcessorsAddFieldsField <a name="ObservabilityPipelineConfigProcessorsAddFieldsField" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsField"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsField.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigProcessorsAddFieldsField;

ObservabilityPipelineConfigProcessorsAddFieldsField.builder()
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsField.property.name">name</a></code> | <code>java.lang.String</code> | The field name to add. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsField.property.value">value</a></code> | <code>java.lang.String</code> | The value to assign to the field. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsField.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The field name to add.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsField.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value to assign to the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#value ObservabilityPipeline#value}

---

### ObservabilityPipelineConfigProcessorsFilter <a name="ObservabilityPipelineConfigProcessorsFilter" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigProcessorsFilter;

ObservabilityPipelineConfigProcessorsFilter.builder()
    .id(java.lang.String)
    .include(java.lang.String)
    .inputs(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilter.property.id">id</a></code> | <code>java.lang.String</code> | The unique ID of the processor. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilter.property.include">include</a></code> | <code>java.lang.String</code> | A Datadog search query used to determine which logs should pass through the filter. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilter.property.inputs">inputs</a></code> | <code>java.util.List<java.lang.String></code> | The inputs for the processor. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilter.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The unique ID of the processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilter.property.include"></a>

```java
public java.lang.String getInclude();
```

- *Type:* java.lang.String

A Datadog search query used to determine which logs should pass through the filter.

Logs that match this query continue to downstream components; others are dropped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilter.property.inputs"></a>

```java
public java.util.List<java.lang.String> getInputs();
```

- *Type:* java.util.List<java.lang.String>

The inputs for the processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}

---

### ObservabilityPipelineConfigProcessorsParseJson <a name="ObservabilityPipelineConfigProcessorsParseJson" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJson"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJson.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigProcessorsParseJson;

ObservabilityPipelineConfigProcessorsParseJson.builder()
    .field(java.lang.String)
    .id(java.lang.String)
    .include(java.lang.String)
    .inputs(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJson.property.field">field</a></code> | <code>java.lang.String</code> | The field to parse. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJson.property.id">id</a></code> | <code>java.lang.String</code> | The unique ID of the processor. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJson.property.include">include</a></code> | <code>java.lang.String</code> | A Datadog search query used to determine which logs this processor targets. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJson.property.inputs">inputs</a></code> | <code>java.util.List<java.lang.String></code> | The inputs for the processor. |

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJson.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

The field to parse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#field ObservabilityPipeline#field}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJson.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The unique ID of the processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJson.property.include"></a>

```java
public java.lang.String getInclude();
```

- *Type:* java.lang.String

A Datadog search query used to determine which logs this processor targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJson.property.inputs"></a>

```java
public java.util.List<java.lang.String> getInputs();
```

- *Type:* java.util.List<java.lang.String>

The inputs for the processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}

---

### ObservabilityPipelineConfigProcessorsQuota <a name="ObservabilityPipelineConfigProcessorsQuota" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigProcessorsQuota;

ObservabilityPipelineConfigProcessorsQuota.builder()
    .dropEvents(java.lang.Boolean)
    .dropEvents(IResolvable)
    .id(java.lang.String)
    .include(java.lang.String)
    .inputs(java.util.List<java.lang.String>)
    .limit(ObservabilityPipelineConfigProcessorsQuotaLimit)
    .name(java.lang.String)
//  .ignoreWhenMissingPartitions(java.lang.Boolean)
//  .ignoreWhenMissingPartitions(IResolvable)
//  .overrides(IResolvable)
//  .overrides(java.util.List<ObservabilityPipelineConfigProcessorsQuotaOverrides>)
//  .partitionFields(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.dropEvents">dropEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to drop events exceeding the limit. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.id">id</a></code> | <code>java.lang.String</code> | The unique ID of the processor. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.include">include</a></code> | <code>java.lang.String</code> | A Datadog search query used to determine which logs this processor targets. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.inputs">inputs</a></code> | <code>java.util.List<java.lang.String></code> | The inputs for the processor. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.limit">limit</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimit">ObservabilityPipelineConfigProcessorsQuotaLimit</a></code> | limit block. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.name">name</a></code> | <code>java.lang.String</code> | The name of the quota. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.ignoreWhenMissingPartitions">ignoreWhenMissingPartitions</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to ignore when partition fields are missing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.overrides">overrides</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverrides">ObservabilityPipelineConfigProcessorsQuotaOverrides</a>></code> | overrides block. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.partitionFields">partitionFields</a></code> | <code>java.util.List<java.lang.String></code> | List of partition fields. |

---

##### `dropEvents`<sup>Required</sup> <a name="dropEvents" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.dropEvents"></a>

```java
public java.lang.Object getDropEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to drop events exceeding the limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#drop_events ObservabilityPipeline#drop_events}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The unique ID of the processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.include"></a>

```java
public java.lang.String getInclude();
```

- *Type:* java.lang.String

A Datadog search query used to determine which logs this processor targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.inputs"></a>

```java
public java.util.List<java.lang.String> getInputs();
```

- *Type:* java.util.List<java.lang.String>

The inputs for the processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.limit"></a>

```java
public ObservabilityPipelineConfigProcessorsQuotaLimit getLimit();
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimit">ObservabilityPipelineConfigProcessorsQuotaLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#limit ObservabilityPipeline#limit}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the quota.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}

---

##### `ignoreWhenMissingPartitions`<sup>Optional</sup> <a name="ignoreWhenMissingPartitions" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.ignoreWhenMissingPartitions"></a>

```java
public java.lang.Object getIgnoreWhenMissingPartitions();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to ignore when partition fields are missing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#ignore_when_missing_partitions ObservabilityPipeline#ignore_when_missing_partitions}

---

##### `overrides`<sup>Optional</sup> <a name="overrides" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.overrides"></a>

```java
public java.lang.Object getOverrides();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverrides">ObservabilityPipelineConfigProcessorsQuotaOverrides</a>>

overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#overrides ObservabilityPipeline#overrides}

---

##### `partitionFields`<sup>Optional</sup> <a name="partitionFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.partitionFields"></a>

```java
public java.util.List<java.lang.String> getPartitionFields();
```

- *Type:* java.util.List<java.lang.String>

List of partition fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#partition_fields ObservabilityPipeline#partition_fields}

---

### ObservabilityPipelineConfigProcessorsQuotaLimit <a name="ObservabilityPipelineConfigProcessorsQuotaLimit" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimit.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigProcessorsQuotaLimit;

ObservabilityPipelineConfigProcessorsQuotaLimit.builder()
    .enforce(java.lang.String)
    .limit(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimit.property.enforce">enforce</a></code> | <code>java.lang.String</code> | Whether to enforce by 'bytes' or 'events'. Valid values are `bytes`, `events`. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimit.property.limit">limit</a></code> | <code>java.lang.Number</code> | The daily quota limit. |

---

##### `enforce`<sup>Required</sup> <a name="enforce" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimit.property.enforce"></a>

```java
public java.lang.String getEnforce();
```

- *Type:* java.lang.String

Whether to enforce by 'bytes' or 'events'. Valid values are `bytes`, `events`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#enforce ObservabilityPipeline#enforce}

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimit.property.limit"></a>

```java
public java.lang.Number getLimit();
```

- *Type:* java.lang.Number

The daily quota limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#limit ObservabilityPipeline#limit}

---

### ObservabilityPipelineConfigProcessorsQuotaOverrides <a name="ObservabilityPipelineConfigProcessorsQuotaOverrides" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverrides.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigProcessorsQuotaOverrides;

ObservabilityPipelineConfigProcessorsQuotaOverrides.builder()
    .limit(ObservabilityPipelineConfigProcessorsQuotaOverridesLimit)
//  .field(IResolvable)
//  .field(java.util.List<ObservabilityPipelineConfigProcessorsQuotaOverridesField>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverrides.property.limit">limit</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimit">ObservabilityPipelineConfigProcessorsQuotaOverridesLimit</a></code> | limit block. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverrides.property.field">field</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesField">ObservabilityPipelineConfigProcessorsQuotaOverridesField</a>></code> | field block. |

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverrides.property.limit"></a>

```java
public ObservabilityPipelineConfigProcessorsQuotaOverridesLimit getLimit();
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimit">ObservabilityPipelineConfigProcessorsQuotaOverridesLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#limit ObservabilityPipeline#limit}

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverrides.property.field"></a>

```java
public java.lang.Object getField();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesField">ObservabilityPipelineConfigProcessorsQuotaOverridesField</a>>

field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#field ObservabilityPipeline#field}

---

### ObservabilityPipelineConfigProcessorsQuotaOverridesField <a name="ObservabilityPipelineConfigProcessorsQuotaOverridesField" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesField"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesField.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesField;

ObservabilityPipelineConfigProcessorsQuotaOverridesField.builder()
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesField.property.name">name</a></code> | <code>java.lang.String</code> | The field name. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesField.property.value">value</a></code> | <code>java.lang.String</code> | The field value. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesField.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesField.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The field value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#value ObservabilityPipeline#value}

---

### ObservabilityPipelineConfigProcessorsQuotaOverridesLimit <a name="ObservabilityPipelineConfigProcessorsQuotaOverridesLimit" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimit.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimit;

ObservabilityPipelineConfigProcessorsQuotaOverridesLimit.builder()
    .enforce(java.lang.String)
    .limit(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimit.property.enforce">enforce</a></code> | <code>java.lang.String</code> | Whether to enforce by 'bytes' or 'events'. Valid values are `bytes`, `events`. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimit.property.limit">limit</a></code> | <code>java.lang.Number</code> | The daily quota limit. |

---

##### `enforce`<sup>Required</sup> <a name="enforce" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimit.property.enforce"></a>

```java
public java.lang.String getEnforce();
```

- *Type:* java.lang.String

Whether to enforce by 'bytes' or 'events'. Valid values are `bytes`, `events`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#enforce ObservabilityPipeline#enforce}

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimit.property.limit"></a>

```java
public java.lang.Number getLimit();
```

- *Type:* java.lang.Number

The daily quota limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#limit ObservabilityPipeline#limit}

---

### ObservabilityPipelineConfigProcessorsRemoveFields <a name="ObservabilityPipelineConfigProcessorsRemoveFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFields.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigProcessorsRemoveFields;

ObservabilityPipelineConfigProcessorsRemoveFields.builder()
    .fields(java.util.List<java.lang.String>)
    .id(java.lang.String)
    .include(java.lang.String)
    .inputs(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFields.property.fields">fields</a></code> | <code>java.util.List<java.lang.String></code> | List of fields to remove from the events. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFields.property.id">id</a></code> | <code>java.lang.String</code> | The unique ID of the processor. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFields.property.include">include</a></code> | <code>java.lang.String</code> | A Datadog search query used to determine which logs this processor targets. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFields.property.inputs">inputs</a></code> | <code>java.util.List<java.lang.String></code> | The inputs for the processor. |

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFields.property.fields"></a>

```java
public java.util.List<java.lang.String> getFields();
```

- *Type:* java.util.List<java.lang.String>

List of fields to remove from the events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#fields ObservabilityPipeline#fields}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFields.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The unique ID of the processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFields.property.include"></a>

```java
public java.lang.String getInclude();
```

- *Type:* java.lang.String

A Datadog search query used to determine which logs this processor targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFields.property.inputs"></a>

```java
public java.util.List<java.lang.String> getInputs();
```

- *Type:* java.util.List<java.lang.String>

The inputs for the processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}

---

### ObservabilityPipelineConfigProcessorsRenameFields <a name="ObservabilityPipelineConfigProcessorsRenameFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFields.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigProcessorsRenameFields;

ObservabilityPipelineConfigProcessorsRenameFields.builder()
    .id(java.lang.String)
    .include(java.lang.String)
    .inputs(java.util.List<java.lang.String>)
//  .field(IResolvable)
//  .field(java.util.List<ObservabilityPipelineConfigProcessorsRenameFieldsField>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFields.property.id">id</a></code> | <code>java.lang.String</code> | The unique ID of the processor. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFields.property.include">include</a></code> | <code>java.lang.String</code> | A Datadog search query used to determine which logs this processor targets. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFields.property.inputs">inputs</a></code> | <code>java.util.List<java.lang.String></code> | he inputs for the processor. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFields.property.field">field</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsField">ObservabilityPipelineConfigProcessorsRenameFieldsField</a>></code> | field block. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFields.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The unique ID of the processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFields.property.include"></a>

```java
public java.lang.String getInclude();
```

- *Type:* java.lang.String

A Datadog search query used to determine which logs this processor targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFields.property.inputs"></a>

```java
public java.util.List<java.lang.String> getInputs();
```

- *Type:* java.util.List<java.lang.String>

he inputs for the processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFields.property.field"></a>

```java
public java.lang.Object getField();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsField">ObservabilityPipelineConfigProcessorsRenameFieldsField</a>>

field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#field ObservabilityPipeline#field}

---

### ObservabilityPipelineConfigProcessorsRenameFieldsField <a name="ObservabilityPipelineConfigProcessorsRenameFieldsField" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsField"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsField.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigProcessorsRenameFieldsField;

ObservabilityPipelineConfigProcessorsRenameFieldsField.builder()
    .destination(java.lang.String)
    .preserveSource(java.lang.Boolean)
    .preserveSource(IResolvable)
    .source(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsField.property.destination">destination</a></code> | <code>java.lang.String</code> | Destination field name. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsField.property.preserveSource">preserveSource</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to keep the original field. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsField.property.source">source</a></code> | <code>java.lang.String</code> | Source field to rename. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsField.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

Destination field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#destination ObservabilityPipeline#destination}

---

##### `preserveSource`<sup>Required</sup> <a name="preserveSource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsField.property.preserveSource"></a>

```java
public java.lang.Object getPreserveSource();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to keep the original field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#preserve_source ObservabilityPipeline#preserve_source}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsField.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

Source field to rename.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#source ObservabilityPipeline#source}

---

### ObservabilityPipelineConfigSources <a name="ObservabilityPipelineConfigSources" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigSources;

ObservabilityPipelineConfigSources.builder()
//  .datadogAgent(IResolvable)
//  .datadogAgent(java.util.List<ObservabilityPipelineConfigSourcesDatadogAgent>)
//  .kafka(IResolvable)
//  .kafka(java.util.List<ObservabilityPipelineConfigSourcesKafka>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSources.property.datadogAgent">datadogAgent</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgent">ObservabilityPipelineConfigSourcesDatadogAgent</a>></code> | datadog_agent block. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSources.property.kafka">kafka</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka">ObservabilityPipelineConfigSourcesKafka</a>></code> | kafka block. |

---

##### `datadogAgent`<sup>Optional</sup> <a name="datadogAgent" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSources.property.datadogAgent"></a>

```java
public java.lang.Object getDatadogAgent();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgent">ObservabilityPipelineConfigSourcesDatadogAgent</a>>

datadog_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#datadog_agent ObservabilityPipeline#datadog_agent}

---

##### `kafka`<sup>Optional</sup> <a name="kafka" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSources.property.kafka"></a>

```java
public java.lang.Object getKafka();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka">ObservabilityPipelineConfigSourcesKafka</a>>

kafka block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#kafka ObservabilityPipeline#kafka}

---

### ObservabilityPipelineConfigSourcesDatadogAgent <a name="ObservabilityPipelineConfigSourcesDatadogAgent" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgent.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigSourcesDatadogAgent;

ObservabilityPipelineConfigSourcesDatadogAgent.builder()
    .id(java.lang.String)
//  .tls(IResolvable)
//  .tls(java.util.List<ObservabilityPipelineConfigSourcesDatadogAgentTls>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgent.property.id">id</a></code> | <code>java.lang.String</code> | The unique ID of the source. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgent.property.tls">tls</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTls">ObservabilityPipelineConfigSourcesDatadogAgentTls</a>></code> | tls block. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgent.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The unique ID of the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgent.property.tls"></a>

```java
public java.lang.Object getTls();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTls">ObservabilityPipelineConfigSourcesDatadogAgentTls</a>>

tls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}

---

### ObservabilityPipelineConfigSourcesDatadogAgentTls <a name="ObservabilityPipelineConfigSourcesDatadogAgentTls" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTls.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigSourcesDatadogAgentTls;

ObservabilityPipelineConfigSourcesDatadogAgentTls.builder()
    .crtFile(java.lang.String)
//  .caFile(java.lang.String)
//  .keyFile(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTls.property.crtFile">crtFile</a></code> | <code>java.lang.String</code> | Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTls.property.caFile">caFile</a></code> | <code>java.lang.String</code> | Path to the Certificate Authority (CA) file used to validate the server’s TLS certificate. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTls.property.keyFile">keyFile</a></code> | <code>java.lang.String</code> | Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication. |

---

##### `crtFile`<sup>Required</sup> <a name="crtFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTls.property.crtFile"></a>

```java
public java.lang.String getCrtFile();
```

- *Type:* java.lang.String

Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}

---

##### `caFile`<sup>Optional</sup> <a name="caFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTls.property.caFile"></a>

```java
public java.lang.String getCaFile();
```

- *Type:* java.lang.String

Path to the Certificate Authority (CA) file used to validate the server’s TLS certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}

---

##### `keyFile`<sup>Optional</sup> <a name="keyFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTls.property.keyFile"></a>

```java
public java.lang.String getKeyFile();
```

- *Type:* java.lang.String

Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}

---

### ObservabilityPipelineConfigSourcesKafka <a name="ObservabilityPipelineConfigSourcesKafka" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigSourcesKafka;

ObservabilityPipelineConfigSourcesKafka.builder()
    .groupId(java.lang.String)
    .id(java.lang.String)
    .sasl(ObservabilityPipelineConfigSourcesKafkaSasl)
    .topics(java.util.List<java.lang.String>)
//  .librdkafkaOption(IResolvable)
//  .librdkafkaOption(java.util.List<ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption>)
//  .tls(IResolvable)
//  .tls(java.util.List<ObservabilityPipelineConfigSourcesKafkaTls>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka.property.groupId">groupId</a></code> | <code>java.lang.String</code> | The Kafka consumer group ID. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka.property.id">id</a></code> | <code>java.lang.String</code> | The unique ID of the source. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka.property.sasl">sasl</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSasl">ObservabilityPipelineConfigSourcesKafkaSasl</a></code> | sasl block. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka.property.topics">topics</a></code> | <code>java.util.List<java.lang.String></code> | A list of Kafka topic names to subscribe to. The source ingests messages from each topic specified. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka.property.librdkafkaOption">librdkafkaOption</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption">ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption</a>></code> | librdkafka_option block. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka.property.tls">tls</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTls">ObservabilityPipelineConfigSourcesKafkaTls</a>></code> | tls block. |

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

The Kafka consumer group ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#group_id ObservabilityPipeline#group_id}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The unique ID of the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sasl`<sup>Required</sup> <a name="sasl" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka.property.sasl"></a>

```java
public ObservabilityPipelineConfigSourcesKafkaSasl getSasl();
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSasl">ObservabilityPipelineConfigSourcesKafkaSasl</a>

sasl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#sasl ObservabilityPipeline#sasl}

---

##### `topics`<sup>Required</sup> <a name="topics" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka.property.topics"></a>

```java
public java.util.List<java.lang.String> getTopics();
```

- *Type:* java.util.List<java.lang.String>

A list of Kafka topic names to subscribe to. The source ingests messages from each topic specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#topics ObservabilityPipeline#topics}

---

##### `librdkafkaOption`<sup>Optional</sup> <a name="librdkafkaOption" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka.property.librdkafkaOption"></a>

```java
public java.lang.Object getLibrdkafkaOption();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption">ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption</a>>

librdkafka_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#librdkafka_option ObservabilityPipeline#librdkafka_option}

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka.property.tls"></a>

```java
public java.lang.Object getTls();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTls">ObservabilityPipelineConfigSourcesKafkaTls</a>>

tls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}

---

### ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption <a name="ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption;

ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption.builder()
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption.property.name">name</a></code> | <code>java.lang.String</code> | The name of the librdkafka option. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption.property.value">value</a></code> | <code>java.lang.String</code> | The value of the librdkafka option. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the librdkafka option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the librdkafka option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#value ObservabilityPipeline#value}

---

### ObservabilityPipelineConfigSourcesKafkaSasl <a name="ObservabilityPipelineConfigSourcesKafkaSasl" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSasl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSasl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigSourcesKafkaSasl;

ObservabilityPipelineConfigSourcesKafkaSasl.builder()
    .mechanism(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSasl.property.mechanism">mechanism</a></code> | <code>java.lang.String</code> | SASL mechanism to use (e.g., PLAIN, SCRAM-SHA-256, SCRAM-SHA-512). Valid values are `PLAIN`, `SCRAM-SHA-256`, `SCRAM-SHA-512`. |

---

##### `mechanism`<sup>Required</sup> <a name="mechanism" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSasl.property.mechanism"></a>

```java
public java.lang.String getMechanism();
```

- *Type:* java.lang.String

SASL mechanism to use (e.g., PLAIN, SCRAM-SHA-256, SCRAM-SHA-512). Valid values are `PLAIN`, `SCRAM-SHA-256`, `SCRAM-SHA-512`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#mechanism ObservabilityPipeline#mechanism}

---

### ObservabilityPipelineConfigSourcesKafkaTls <a name="ObservabilityPipelineConfigSourcesKafkaTls" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTls.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigSourcesKafkaTls;

ObservabilityPipelineConfigSourcesKafkaTls.builder()
    .crtFile(java.lang.String)
//  .caFile(java.lang.String)
//  .keyFile(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTls.property.crtFile">crtFile</a></code> | <code>java.lang.String</code> | Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTls.property.caFile">caFile</a></code> | <code>java.lang.String</code> | Path to the Certificate Authority (CA) file used to validate the server’s TLS certificate. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTls.property.keyFile">keyFile</a></code> | <code>java.lang.String</code> | Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication. |

---

##### `crtFile`<sup>Required</sup> <a name="crtFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTls.property.crtFile"></a>

```java
public java.lang.String getCrtFile();
```

- *Type:* java.lang.String

Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}

---

##### `caFile`<sup>Optional</sup> <a name="caFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTls.property.caFile"></a>

```java
public java.lang.String getCaFile();
```

- *Type:* java.lang.String

Path to the Certificate Authority (CA) file used to validate the server’s TLS certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}

---

##### `keyFile`<sup>Optional</sup> <a name="keyFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTls.property.keyFile"></a>

```java
public java.lang.String getKeyFile();
```

- *Type:* java.lang.String

Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}

---

## Classes <a name="Classes" id="Classes"></a>

### ObservabilityPipelineConfigAOutputReference <a name="ObservabilityPipelineConfigAOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigAOutputReference;

new ObservabilityPipelineConfigAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.putDestinations">putDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.putProcessors">putProcessors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.putSources">putSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.resetDestinations">resetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.resetProcessors">resetProcessors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.resetSources">resetSources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinations` <a name="putDestinations" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.putDestinations"></a>

```java
public void putDestinations(ObservabilityPipelineConfigDestinations value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.putDestinations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinations">ObservabilityPipelineConfigDestinations</a>

---

##### `putProcessors` <a name="putProcessors" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.putProcessors"></a>

```java
public void putProcessors(ObservabilityPipelineConfigProcessors value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.putProcessors.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors">ObservabilityPipelineConfigProcessors</a>

---

##### `putSources` <a name="putSources" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.putSources"></a>

```java
public void putSources(ObservabilityPipelineConfigSources value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.putSources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSources">ObservabilityPipelineConfigSources</a>

---

##### `resetDestinations` <a name="resetDestinations" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.resetDestinations"></a>

```java
public void resetDestinations()
```

##### `resetProcessors` <a name="resetProcessors" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.resetProcessors"></a>

```java
public void resetProcessors()
```

##### `resetSources` <a name="resetSources" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.resetSources"></a>

```java
public void resetSources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference">ObservabilityPipelineConfigDestinationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.processors">processors</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference">ObservabilityPipelineConfigProcessorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.sources">sources</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference">ObservabilityPipelineConfigSourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.destinationsInput">destinationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinations">ObservabilityPipelineConfigDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.processorsInput">processorsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors">ObservabilityPipelineConfigProcessors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.sourcesInput">sourcesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSources">ObservabilityPipelineConfigSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigA">ObservabilityPipelineConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.destinations"></a>

```java
public ObservabilityPipelineConfigDestinationsOutputReference getDestinations();
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference">ObservabilityPipelineConfigDestinationsOutputReference</a>

---

##### `processors`<sup>Required</sup> <a name="processors" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.processors"></a>

```java
public ObservabilityPipelineConfigProcessorsOutputReference getProcessors();
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference">ObservabilityPipelineConfigProcessorsOutputReference</a>

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.sources"></a>

```java
public ObservabilityPipelineConfigSourcesOutputReference getSources();
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference">ObservabilityPipelineConfigSourcesOutputReference</a>

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.destinationsInput"></a>

```java
public java.lang.Object getDestinationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinations">ObservabilityPipelineConfigDestinations</a>

---

##### `processorsInput`<sup>Optional</sup> <a name="processorsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.processorsInput"></a>

```java
public java.lang.Object getProcessorsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors">ObservabilityPipelineConfigProcessors</a>

---

##### `sourcesInput`<sup>Optional</sup> <a name="sourcesInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.sourcesInput"></a>

```java
public java.lang.Object getSourcesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSources">ObservabilityPipelineConfigSources</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigA">ObservabilityPipelineConfigA</a>

---


### ObservabilityPipelineConfigDestinationsDatadogLogsList <a name="ObservabilityPipelineConfigDestinationsDatadogLogsList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList;

new ObservabilityPipelineConfigDestinationsDatadogLogsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.get"></a>

```java
public ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogs">ObservabilityPipelineConfigDestinationsDatadogLogs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogs">ObservabilityPipelineConfigDestinationsDatadogLogs</a>>

---


### ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference <a name="ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference;

new ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.property.inputsInput">inputsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.property.inputs">inputs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogs">ObservabilityPipelineConfigDestinationsDatadogLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inputsInput`<sup>Optional</sup> <a name="inputsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.property.inputsInput"></a>

```java
public java.util.List<java.lang.String> getInputsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.property.inputs"></a>

```java
public java.util.List<java.lang.String> getInputs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogs">ObservabilityPipelineConfigDestinationsDatadogLogs</a>

---


### ObservabilityPipelineConfigDestinationsOutputReference <a name="ObservabilityPipelineConfigDestinationsOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigDestinationsOutputReference;

new ObservabilityPipelineConfigDestinationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.putDatadogLogs">putDatadogLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.resetDatadogLogs">resetDatadogLogs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatadogLogs` <a name="putDatadogLogs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.putDatadogLogs"></a>

```java
public void putDatadogLogs(IResolvable OR java.util.List<ObservabilityPipelineConfigDestinationsDatadogLogs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.putDatadogLogs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogs">ObservabilityPipelineConfigDestinationsDatadogLogs</a>>

---

##### `resetDatadogLogs` <a name="resetDatadogLogs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.resetDatadogLogs"></a>

```java
public void resetDatadogLogs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.property.datadogLogs">datadogLogs</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList">ObservabilityPipelineConfigDestinationsDatadogLogsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.property.datadogLogsInput">datadogLogsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogs">ObservabilityPipelineConfigDestinationsDatadogLogs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinations">ObservabilityPipelineConfigDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datadogLogs`<sup>Required</sup> <a name="datadogLogs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.property.datadogLogs"></a>

```java
public ObservabilityPipelineConfigDestinationsDatadogLogsList getDatadogLogs();
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList">ObservabilityPipelineConfigDestinationsDatadogLogsList</a>

---

##### `datadogLogsInput`<sup>Optional</sup> <a name="datadogLogsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.property.datadogLogsInput"></a>

```java
public java.lang.Object getDatadogLogsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogs">ObservabilityPipelineConfigDestinationsDatadogLogs</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinations">ObservabilityPipelineConfigDestinations</a>

---


### ObservabilityPipelineConfigProcessorsAddFieldsFieldList <a name="ObservabilityPipelineConfigProcessorsAddFieldsFieldList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList;

new ObservabilityPipelineConfigProcessorsAddFieldsFieldList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.get"></a>

```java
public ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsField">ObservabilityPipelineConfigProcessorsAddFieldsField</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsField">ObservabilityPipelineConfigProcessorsAddFieldsField</a>>

---


### ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference <a name="ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference;

new ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsField">ObservabilityPipelineConfigProcessorsAddFieldsField</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsField">ObservabilityPipelineConfigProcessorsAddFieldsField</a>

---


### ObservabilityPipelineConfigProcessorsAddFieldsList <a name="ObservabilityPipelineConfigProcessorsAddFieldsList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigProcessorsAddFieldsList;

new ObservabilityPipelineConfigProcessorsAddFieldsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.get"></a>

```java
public ObservabilityPipelineConfigProcessorsAddFieldsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFields">ObservabilityPipelineConfigProcessorsAddFields</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFields">ObservabilityPipelineConfigProcessorsAddFields</a>>

---


### ObservabilityPipelineConfigProcessorsAddFieldsOutputReference <a name="ObservabilityPipelineConfigProcessorsAddFieldsOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference;

new ObservabilityPipelineConfigProcessorsAddFieldsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.putField">putField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.resetField">resetField</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putField` <a name="putField" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.putField"></a>

```java
public void putField(IResolvable OR java.util.List<ObservabilityPipelineConfigProcessorsAddFieldsField> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.putField.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsField">ObservabilityPipelineConfigProcessorsAddFieldsField</a>>

---

##### `resetField` <a name="resetField" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.resetField"></a>

```java
public void resetField()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.field">field</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList">ObservabilityPipelineConfigProcessorsAddFieldsFieldList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.fieldInput">fieldInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsField">ObservabilityPipelineConfigProcessorsAddFieldsField</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.includeInput">includeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.inputsInput">inputsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.include">include</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.inputs">inputs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFields">ObservabilityPipelineConfigProcessorsAddFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.field"></a>

```java
public ObservabilityPipelineConfigProcessorsAddFieldsFieldList getField();
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList">ObservabilityPipelineConfigProcessorsAddFieldsFieldList</a>

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.fieldInput"></a>

```java
public java.lang.Object getFieldInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsField">ObservabilityPipelineConfigProcessorsAddFieldsField</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `includeInput`<sup>Optional</sup> <a name="includeInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.includeInput"></a>

```java
public java.lang.String getIncludeInput();
```

- *Type:* java.lang.String

---

##### `inputsInput`<sup>Optional</sup> <a name="inputsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.inputsInput"></a>

```java
public java.util.List<java.lang.String> getInputsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.include"></a>

```java
public java.lang.String getInclude();
```

- *Type:* java.lang.String

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.inputs"></a>

```java
public java.util.List<java.lang.String> getInputs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFields">ObservabilityPipelineConfigProcessorsAddFields</a>

---


### ObservabilityPipelineConfigProcessorsFilterList <a name="ObservabilityPipelineConfigProcessorsFilterList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigProcessorsFilterList;

new ObservabilityPipelineConfigProcessorsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.get"></a>

```java
public ObservabilityPipelineConfigProcessorsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilter">ObservabilityPipelineConfigProcessorsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilter">ObservabilityPipelineConfigProcessorsFilter</a>>

---


### ObservabilityPipelineConfigProcessorsFilterOutputReference <a name="ObservabilityPipelineConfigProcessorsFilterOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference;

new ObservabilityPipelineConfigProcessorsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.includeInput">includeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.inputsInput">inputsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.include">include</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.inputs">inputs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilter">ObservabilityPipelineConfigProcessorsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `includeInput`<sup>Optional</sup> <a name="includeInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.includeInput"></a>

```java
public java.lang.String getIncludeInput();
```

- *Type:* java.lang.String

---

##### `inputsInput`<sup>Optional</sup> <a name="inputsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.inputsInput"></a>

```java
public java.util.List<java.lang.String> getInputsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.include"></a>

```java
public java.lang.String getInclude();
```

- *Type:* java.lang.String

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.inputs"></a>

```java
public java.util.List<java.lang.String> getInputs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilter">ObservabilityPipelineConfigProcessorsFilter</a>

---


### ObservabilityPipelineConfigProcessorsOutputReference <a name="ObservabilityPipelineConfigProcessorsOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigProcessorsOutputReference;

new ObservabilityPipelineConfigProcessorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putAddFields">putAddFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putParseJson">putParseJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putQuota">putQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putRemoveFields">putRemoveFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putRenameFields">putRenameFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.resetAddFields">resetAddFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.resetParseJson">resetParseJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.resetQuota">resetQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.resetRemoveFields">resetRemoveFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.resetRenameFields">resetRenameFields</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAddFields` <a name="putAddFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putAddFields"></a>

```java
public void putAddFields(IResolvable OR java.util.List<ObservabilityPipelineConfigProcessorsAddFields> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putAddFields.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFields">ObservabilityPipelineConfigProcessorsAddFields</a>>

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<ObservabilityPipelineConfigProcessorsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilter">ObservabilityPipelineConfigProcessorsFilter</a>>

---

##### `putParseJson` <a name="putParseJson" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putParseJson"></a>

```java
public void putParseJson(IResolvable OR java.util.List<ObservabilityPipelineConfigProcessorsParseJson> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putParseJson.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJson">ObservabilityPipelineConfigProcessorsParseJson</a>>

---

##### `putQuota` <a name="putQuota" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putQuota"></a>

```java
public void putQuota(IResolvable OR java.util.List<ObservabilityPipelineConfigProcessorsQuota> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putQuota.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota">ObservabilityPipelineConfigProcessorsQuota</a>>

---

##### `putRemoveFields` <a name="putRemoveFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putRemoveFields"></a>

```java
public void putRemoveFields(IResolvable OR java.util.List<ObservabilityPipelineConfigProcessorsRemoveFields> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putRemoveFields.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFields">ObservabilityPipelineConfigProcessorsRemoveFields</a>>

---

##### `putRenameFields` <a name="putRenameFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putRenameFields"></a>

```java
public void putRenameFields(IResolvable OR java.util.List<ObservabilityPipelineConfigProcessorsRenameFields> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putRenameFields.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFields">ObservabilityPipelineConfigProcessorsRenameFields</a>>

---

##### `resetAddFields` <a name="resetAddFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.resetAddFields"></a>

```java
public void resetAddFields()
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetParseJson` <a name="resetParseJson" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.resetParseJson"></a>

```java
public void resetParseJson()
```

##### `resetQuota` <a name="resetQuota" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.resetQuota"></a>

```java
public void resetQuota()
```

##### `resetRemoveFields` <a name="resetRemoveFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.resetRemoveFields"></a>

```java
public void resetRemoveFields()
```

##### `resetRenameFields` <a name="resetRenameFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.resetRenameFields"></a>

```java
public void resetRenameFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.addFields">addFields</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList">ObservabilityPipelineConfigProcessorsAddFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList">ObservabilityPipelineConfigProcessorsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.parseJson">parseJson</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList">ObservabilityPipelineConfigProcessorsParseJsonList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.quota">quota</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList">ObservabilityPipelineConfigProcessorsQuotaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.removeFields">removeFields</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList">ObservabilityPipelineConfigProcessorsRemoveFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.renameFields">renameFields</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList">ObservabilityPipelineConfigProcessorsRenameFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.addFieldsInput">addFieldsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFields">ObservabilityPipelineConfigProcessorsAddFields</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilter">ObservabilityPipelineConfigProcessorsFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.parseJsonInput">parseJsonInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJson">ObservabilityPipelineConfigProcessorsParseJson</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.quotaInput">quotaInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota">ObservabilityPipelineConfigProcessorsQuota</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.removeFieldsInput">removeFieldsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFields">ObservabilityPipelineConfigProcessorsRemoveFields</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.renameFieldsInput">renameFieldsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFields">ObservabilityPipelineConfigProcessorsRenameFields</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors">ObservabilityPipelineConfigProcessors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addFields`<sup>Required</sup> <a name="addFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.addFields"></a>

```java
public ObservabilityPipelineConfigProcessorsAddFieldsList getAddFields();
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList">ObservabilityPipelineConfigProcessorsAddFieldsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.filter"></a>

```java
public ObservabilityPipelineConfigProcessorsFilterList getFilter();
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList">ObservabilityPipelineConfigProcessorsFilterList</a>

---

##### `parseJson`<sup>Required</sup> <a name="parseJson" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.parseJson"></a>

```java
public ObservabilityPipelineConfigProcessorsParseJsonList getParseJson();
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList">ObservabilityPipelineConfigProcessorsParseJsonList</a>

---

##### `quota`<sup>Required</sup> <a name="quota" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.quota"></a>

```java
public ObservabilityPipelineConfigProcessorsQuotaList getQuota();
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList">ObservabilityPipelineConfigProcessorsQuotaList</a>

---

##### `removeFields`<sup>Required</sup> <a name="removeFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.removeFields"></a>

```java
public ObservabilityPipelineConfigProcessorsRemoveFieldsList getRemoveFields();
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList">ObservabilityPipelineConfigProcessorsRemoveFieldsList</a>

---

##### `renameFields`<sup>Required</sup> <a name="renameFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.renameFields"></a>

```java
public ObservabilityPipelineConfigProcessorsRenameFieldsList getRenameFields();
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList">ObservabilityPipelineConfigProcessorsRenameFieldsList</a>

---

##### `addFieldsInput`<sup>Optional</sup> <a name="addFieldsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.addFieldsInput"></a>

```java
public java.lang.Object getAddFieldsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFields">ObservabilityPipelineConfigProcessorsAddFields</a>>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilter">ObservabilityPipelineConfigProcessorsFilter</a>>

---

##### `parseJsonInput`<sup>Optional</sup> <a name="parseJsonInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.parseJsonInput"></a>

```java
public java.lang.Object getParseJsonInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJson">ObservabilityPipelineConfigProcessorsParseJson</a>>

---

##### `quotaInput`<sup>Optional</sup> <a name="quotaInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.quotaInput"></a>

```java
public java.lang.Object getQuotaInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota">ObservabilityPipelineConfigProcessorsQuota</a>>

---

##### `removeFieldsInput`<sup>Optional</sup> <a name="removeFieldsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.removeFieldsInput"></a>

```java
public java.lang.Object getRemoveFieldsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFields">ObservabilityPipelineConfigProcessorsRemoveFields</a>>

---

##### `renameFieldsInput`<sup>Optional</sup> <a name="renameFieldsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.renameFieldsInput"></a>

```java
public java.lang.Object getRenameFieldsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFields">ObservabilityPipelineConfigProcessorsRenameFields</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors">ObservabilityPipelineConfigProcessors</a>

---


### ObservabilityPipelineConfigProcessorsParseJsonList <a name="ObservabilityPipelineConfigProcessorsParseJsonList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigProcessorsParseJsonList;

new ObservabilityPipelineConfigProcessorsParseJsonList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.get"></a>

```java
public ObservabilityPipelineConfigProcessorsParseJsonOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJson">ObservabilityPipelineConfigProcessorsParseJson</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJson">ObservabilityPipelineConfigProcessorsParseJson</a>>

---


### ObservabilityPipelineConfigProcessorsParseJsonOutputReference <a name="ObservabilityPipelineConfigProcessorsParseJsonOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference;

new ObservabilityPipelineConfigProcessorsParseJsonOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.fieldInput">fieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.includeInput">includeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.inputsInput">inputsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.field">field</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.include">include</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.inputs">inputs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJson">ObservabilityPipelineConfigProcessorsParseJson</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.fieldInput"></a>

```java
public java.lang.String getFieldInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `includeInput`<sup>Optional</sup> <a name="includeInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.includeInput"></a>

```java
public java.lang.String getIncludeInput();
```

- *Type:* java.lang.String

---

##### `inputsInput`<sup>Optional</sup> <a name="inputsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.inputsInput"></a>

```java
public java.util.List<java.lang.String> getInputsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.include"></a>

```java
public java.lang.String getInclude();
```

- *Type:* java.lang.String

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.inputs"></a>

```java
public java.util.List<java.lang.String> getInputs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJson">ObservabilityPipelineConfigProcessorsParseJson</a>

---


### ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference <a name="ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference;

new ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.property.enforceInput">enforceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.property.limitInput">limitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.property.enforce">enforce</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.property.limit">limit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimit">ObservabilityPipelineConfigProcessorsQuotaLimit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enforceInput`<sup>Optional</sup> <a name="enforceInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.property.enforceInput"></a>

```java
public java.lang.String getEnforceInput();
```

- *Type:* java.lang.String

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.property.limitInput"></a>

```java
public java.lang.Number getLimitInput();
```

- *Type:* java.lang.Number

---

##### `enforce`<sup>Required</sup> <a name="enforce" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.property.enforce"></a>

```java
public java.lang.String getEnforce();
```

- *Type:* java.lang.String

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.property.limit"></a>

```java
public java.lang.Number getLimit();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimit">ObservabilityPipelineConfigProcessorsQuotaLimit</a>

---


### ObservabilityPipelineConfigProcessorsQuotaList <a name="ObservabilityPipelineConfigProcessorsQuotaList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigProcessorsQuotaList;

new ObservabilityPipelineConfigProcessorsQuotaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.get"></a>

```java
public ObservabilityPipelineConfigProcessorsQuotaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota">ObservabilityPipelineConfigProcessorsQuota</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota">ObservabilityPipelineConfigProcessorsQuota</a>>

---


### ObservabilityPipelineConfigProcessorsQuotaOutputReference <a name="ObservabilityPipelineConfigProcessorsQuotaOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference;

new ObservabilityPipelineConfigProcessorsQuotaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.putLimit">putLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.putOverrides">putOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.resetIgnoreWhenMissingPartitions">resetIgnoreWhenMissingPartitions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.resetOverrides">resetOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.resetPartitionFields">resetPartitionFields</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLimit` <a name="putLimit" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.putLimit"></a>

```java
public void putLimit(ObservabilityPipelineConfigProcessorsQuotaLimit value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.putLimit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimit">ObservabilityPipelineConfigProcessorsQuotaLimit</a>

---

##### `putOverrides` <a name="putOverrides" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.putOverrides"></a>

```java
public void putOverrides(IResolvable OR java.util.List<ObservabilityPipelineConfigProcessorsQuotaOverrides> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.putOverrides.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverrides">ObservabilityPipelineConfigProcessorsQuotaOverrides</a>>

---

##### `resetIgnoreWhenMissingPartitions` <a name="resetIgnoreWhenMissingPartitions" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.resetIgnoreWhenMissingPartitions"></a>

```java
public void resetIgnoreWhenMissingPartitions()
```

##### `resetOverrides` <a name="resetOverrides" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.resetOverrides"></a>

```java
public void resetOverrides()
```

##### `resetPartitionFields` <a name="resetPartitionFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.resetPartitionFields"></a>

```java
public void resetPartitionFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.limit">limit</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference">ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.overrides">overrides</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList">ObservabilityPipelineConfigProcessorsQuotaOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.dropEventsInput">dropEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.ignoreWhenMissingPartitionsInput">ignoreWhenMissingPartitionsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.includeInput">includeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.inputsInput">inputsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.limitInput">limitInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimit">ObservabilityPipelineConfigProcessorsQuotaLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.overridesInput">overridesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverrides">ObservabilityPipelineConfigProcessorsQuotaOverrides</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.partitionFieldsInput">partitionFieldsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.dropEvents">dropEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.ignoreWhenMissingPartitions">ignoreWhenMissingPartitions</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.include">include</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.inputs">inputs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.partitionFields">partitionFields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota">ObservabilityPipelineConfigProcessorsQuota</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.limit"></a>

```java
public ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference getLimit();
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference">ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference</a>

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.overrides"></a>

```java
public ObservabilityPipelineConfigProcessorsQuotaOverridesList getOverrides();
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList">ObservabilityPipelineConfigProcessorsQuotaOverridesList</a>

---

##### `dropEventsInput`<sup>Optional</sup> <a name="dropEventsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.dropEventsInput"></a>

```java
public java.lang.Object getDropEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ignoreWhenMissingPartitionsInput`<sup>Optional</sup> <a name="ignoreWhenMissingPartitionsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.ignoreWhenMissingPartitionsInput"></a>

```java
public java.lang.Object getIgnoreWhenMissingPartitionsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeInput`<sup>Optional</sup> <a name="includeInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.includeInput"></a>

```java
public java.lang.String getIncludeInput();
```

- *Type:* java.lang.String

---

##### `inputsInput`<sup>Optional</sup> <a name="inputsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.inputsInput"></a>

```java
public java.util.List<java.lang.String> getInputsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.limitInput"></a>

```java
public java.lang.Object getLimitInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimit">ObservabilityPipelineConfigProcessorsQuotaLimit</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `overridesInput`<sup>Optional</sup> <a name="overridesInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.overridesInput"></a>

```java
public java.lang.Object getOverridesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverrides">ObservabilityPipelineConfigProcessorsQuotaOverrides</a>>

---

##### `partitionFieldsInput`<sup>Optional</sup> <a name="partitionFieldsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.partitionFieldsInput"></a>

```java
public java.util.List<java.lang.String> getPartitionFieldsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dropEvents`<sup>Required</sup> <a name="dropEvents" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.dropEvents"></a>

```java
public java.lang.Object getDropEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ignoreWhenMissingPartitions`<sup>Required</sup> <a name="ignoreWhenMissingPartitions" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.ignoreWhenMissingPartitions"></a>

```java
public java.lang.Object getIgnoreWhenMissingPartitions();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.include"></a>

```java
public java.lang.String getInclude();
```

- *Type:* java.lang.String

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.inputs"></a>

```java
public java.util.List<java.lang.String> getInputs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `partitionFields`<sup>Required</sup> <a name="partitionFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.partitionFields"></a>

```java
public java.util.List<java.lang.String> getPartitionFields();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota">ObservabilityPipelineConfigProcessorsQuota</a>

---


### ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList <a name="ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList;

new ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.get"></a>

```java
public ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesField">ObservabilityPipelineConfigProcessorsQuotaOverridesField</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesField">ObservabilityPipelineConfigProcessorsQuotaOverridesField</a>>

---


### ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference <a name="ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference;

new ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesField">ObservabilityPipelineConfigProcessorsQuotaOverridesField</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesField">ObservabilityPipelineConfigProcessorsQuotaOverridesField</a>

---


### ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference <a name="ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference;

new ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.property.enforceInput">enforceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.property.limitInput">limitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.property.enforce">enforce</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.property.limit">limit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimit">ObservabilityPipelineConfigProcessorsQuotaOverridesLimit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enforceInput`<sup>Optional</sup> <a name="enforceInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.property.enforceInput"></a>

```java
public java.lang.String getEnforceInput();
```

- *Type:* java.lang.String

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.property.limitInput"></a>

```java
public java.lang.Number getLimitInput();
```

- *Type:* java.lang.Number

---

##### `enforce`<sup>Required</sup> <a name="enforce" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.property.enforce"></a>

```java
public java.lang.String getEnforce();
```

- *Type:* java.lang.String

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.property.limit"></a>

```java
public java.lang.Number getLimit();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimit">ObservabilityPipelineConfigProcessorsQuotaOverridesLimit</a>

---


### ObservabilityPipelineConfigProcessorsQuotaOverridesList <a name="ObservabilityPipelineConfigProcessorsQuotaOverridesList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList;

new ObservabilityPipelineConfigProcessorsQuotaOverridesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.get"></a>

```java
public ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverrides">ObservabilityPipelineConfigProcessorsQuotaOverrides</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverrides">ObservabilityPipelineConfigProcessorsQuotaOverrides</a>>

---


### ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference <a name="ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference;

new ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.putField">putField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.putLimit">putLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.resetField">resetField</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putField` <a name="putField" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.putField"></a>

```java
public void putField(IResolvable OR java.util.List<ObservabilityPipelineConfigProcessorsQuotaOverridesField> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.putField.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesField">ObservabilityPipelineConfigProcessorsQuotaOverridesField</a>>

---

##### `putLimit` <a name="putLimit" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.putLimit"></a>

```java
public void putLimit(ObservabilityPipelineConfigProcessorsQuotaOverridesLimit value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.putLimit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimit">ObservabilityPipelineConfigProcessorsQuotaOverridesLimit</a>

---

##### `resetField` <a name="resetField" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.resetField"></a>

```java
public void resetField()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.property.field">field</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList">ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.property.limit">limit</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference">ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.property.fieldInput">fieldInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesField">ObservabilityPipelineConfigProcessorsQuotaOverridesField</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.property.limitInput">limitInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimit">ObservabilityPipelineConfigProcessorsQuotaOverridesLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverrides">ObservabilityPipelineConfigProcessorsQuotaOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.property.field"></a>

```java
public ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList getField();
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList">ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList</a>

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.property.limit"></a>

```java
public ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference getLimit();
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference">ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference</a>

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.property.fieldInput"></a>

```java
public java.lang.Object getFieldInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesField">ObservabilityPipelineConfigProcessorsQuotaOverridesField</a>>

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.property.limitInput"></a>

```java
public java.lang.Object getLimitInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimit">ObservabilityPipelineConfigProcessorsQuotaOverridesLimit</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverrides">ObservabilityPipelineConfigProcessorsQuotaOverrides</a>

---


### ObservabilityPipelineConfigProcessorsRemoveFieldsList <a name="ObservabilityPipelineConfigProcessorsRemoveFieldsList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList;

new ObservabilityPipelineConfigProcessorsRemoveFieldsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.get"></a>

```java
public ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFields">ObservabilityPipelineConfigProcessorsRemoveFields</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFields">ObservabilityPipelineConfigProcessorsRemoveFields</a>>

---


### ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference <a name="ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference;

new ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.fieldsInput">fieldsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.includeInput">includeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.inputsInput">inputsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.fields">fields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.include">include</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.inputs">inputs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFields">ObservabilityPipelineConfigProcessorsRemoveFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.fieldsInput"></a>

```java
public java.util.List<java.lang.String> getFieldsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `includeInput`<sup>Optional</sup> <a name="includeInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.includeInput"></a>

```java
public java.lang.String getIncludeInput();
```

- *Type:* java.lang.String

---

##### `inputsInput`<sup>Optional</sup> <a name="inputsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.inputsInput"></a>

```java
public java.util.List<java.lang.String> getInputsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.fields"></a>

```java
public java.util.List<java.lang.String> getFields();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.include"></a>

```java
public java.lang.String getInclude();
```

- *Type:* java.lang.String

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.inputs"></a>

```java
public java.util.List<java.lang.String> getInputs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFields">ObservabilityPipelineConfigProcessorsRemoveFields</a>

---


### ObservabilityPipelineConfigProcessorsRenameFieldsFieldList <a name="ObservabilityPipelineConfigProcessorsRenameFieldsFieldList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList;

new ObservabilityPipelineConfigProcessorsRenameFieldsFieldList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.get"></a>

```java
public ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsField">ObservabilityPipelineConfigProcessorsRenameFieldsField</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsField">ObservabilityPipelineConfigProcessorsRenameFieldsField</a>>

---


### ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference <a name="ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference;

new ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.destinationInput">destinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.preserveSourceInput">preserveSourceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.destination">destination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.preserveSource">preserveSource</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsField">ObservabilityPipelineConfigProcessorsRenameFieldsField</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.destinationInput"></a>

```java
public java.lang.String getDestinationInput();
```

- *Type:* java.lang.String

---

##### `preserveSourceInput`<sup>Optional</sup> <a name="preserveSourceInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.preserveSourceInput"></a>

```java
public java.lang.Object getPreserveSourceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

---

##### `preserveSource`<sup>Required</sup> <a name="preserveSource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.preserveSource"></a>

```java
public java.lang.Object getPreserveSource();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsField">ObservabilityPipelineConfigProcessorsRenameFieldsField</a>

---


### ObservabilityPipelineConfigProcessorsRenameFieldsList <a name="ObservabilityPipelineConfigProcessorsRenameFieldsList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList;

new ObservabilityPipelineConfigProcessorsRenameFieldsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.get"></a>

```java
public ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFields">ObservabilityPipelineConfigProcessorsRenameFields</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFields">ObservabilityPipelineConfigProcessorsRenameFields</a>>

---


### ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference <a name="ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference;

new ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.putField">putField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.resetField">resetField</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putField` <a name="putField" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.putField"></a>

```java
public void putField(IResolvable OR java.util.List<ObservabilityPipelineConfigProcessorsRenameFieldsField> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.putField.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsField">ObservabilityPipelineConfigProcessorsRenameFieldsField</a>>

---

##### `resetField` <a name="resetField" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.resetField"></a>

```java
public void resetField()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.field">field</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList">ObservabilityPipelineConfigProcessorsRenameFieldsFieldList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.fieldInput">fieldInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsField">ObservabilityPipelineConfigProcessorsRenameFieldsField</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.includeInput">includeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.inputsInput">inputsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.include">include</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.inputs">inputs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFields">ObservabilityPipelineConfigProcessorsRenameFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.field"></a>

```java
public ObservabilityPipelineConfigProcessorsRenameFieldsFieldList getField();
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList">ObservabilityPipelineConfigProcessorsRenameFieldsFieldList</a>

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.fieldInput"></a>

```java
public java.lang.Object getFieldInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsField">ObservabilityPipelineConfigProcessorsRenameFieldsField</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `includeInput`<sup>Optional</sup> <a name="includeInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.includeInput"></a>

```java
public java.lang.String getIncludeInput();
```

- *Type:* java.lang.String

---

##### `inputsInput`<sup>Optional</sup> <a name="inputsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.inputsInput"></a>

```java
public java.util.List<java.lang.String> getInputsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.include"></a>

```java
public java.lang.String getInclude();
```

- *Type:* java.lang.String

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.inputs"></a>

```java
public java.util.List<java.lang.String> getInputs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFields">ObservabilityPipelineConfigProcessorsRenameFields</a>

---


### ObservabilityPipelineConfigSourcesDatadogAgentList <a name="ObservabilityPipelineConfigSourcesDatadogAgentList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigSourcesDatadogAgentList;

new ObservabilityPipelineConfigSourcesDatadogAgentList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.get"></a>

```java
public ObservabilityPipelineConfigSourcesDatadogAgentOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgent">ObservabilityPipelineConfigSourcesDatadogAgent</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgent">ObservabilityPipelineConfigSourcesDatadogAgent</a>>

---


### ObservabilityPipelineConfigSourcesDatadogAgentOutputReference <a name="ObservabilityPipelineConfigSourcesDatadogAgentOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference;

new ObservabilityPipelineConfigSourcesDatadogAgentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.putTls">putTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.resetTls">resetTls</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTls` <a name="putTls" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.putTls"></a>

```java
public void putTls(IResolvable OR java.util.List<ObservabilityPipelineConfigSourcesDatadogAgentTls> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.putTls.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTls">ObservabilityPipelineConfigSourcesDatadogAgentTls</a>>

---

##### `resetTls` <a name="resetTls" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.resetTls"></a>

```java
public void resetTls()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.property.tls">tls</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList">ObservabilityPipelineConfigSourcesDatadogAgentTlsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.property.tlsInput">tlsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTls">ObservabilityPipelineConfigSourcesDatadogAgentTls</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgent">ObservabilityPipelineConfigSourcesDatadogAgent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.property.tls"></a>

```java
public ObservabilityPipelineConfigSourcesDatadogAgentTlsList getTls();
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList">ObservabilityPipelineConfigSourcesDatadogAgentTlsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `tlsInput`<sup>Optional</sup> <a name="tlsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.property.tlsInput"></a>

```java
public java.lang.Object getTlsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTls">ObservabilityPipelineConfigSourcesDatadogAgentTls</a>>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgent">ObservabilityPipelineConfigSourcesDatadogAgent</a>

---


### ObservabilityPipelineConfigSourcesDatadogAgentTlsList <a name="ObservabilityPipelineConfigSourcesDatadogAgentTlsList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList;

new ObservabilityPipelineConfigSourcesDatadogAgentTlsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.get"></a>

```java
public ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTls">ObservabilityPipelineConfigSourcesDatadogAgentTls</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTls">ObservabilityPipelineConfigSourcesDatadogAgentTls</a>>

---


### ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference <a name="ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference;

new ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.resetCaFile">resetCaFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.resetKeyFile">resetKeyFile</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCaFile` <a name="resetCaFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.resetCaFile"></a>

```java
public void resetCaFile()
```

##### `resetKeyFile` <a name="resetKeyFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.resetKeyFile"></a>

```java
public void resetKeyFile()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.caFileInput">caFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.crtFileInput">crtFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.keyFileInput">keyFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.caFile">caFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.crtFile">crtFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.keyFile">keyFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTls">ObservabilityPipelineConfigSourcesDatadogAgentTls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `caFileInput`<sup>Optional</sup> <a name="caFileInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.caFileInput"></a>

```java
public java.lang.String getCaFileInput();
```

- *Type:* java.lang.String

---

##### `crtFileInput`<sup>Optional</sup> <a name="crtFileInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.crtFileInput"></a>

```java
public java.lang.String getCrtFileInput();
```

- *Type:* java.lang.String

---

##### `keyFileInput`<sup>Optional</sup> <a name="keyFileInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.keyFileInput"></a>

```java
public java.lang.String getKeyFileInput();
```

- *Type:* java.lang.String

---

##### `caFile`<sup>Required</sup> <a name="caFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.caFile"></a>

```java
public java.lang.String getCaFile();
```

- *Type:* java.lang.String

---

##### `crtFile`<sup>Required</sup> <a name="crtFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.crtFile"></a>

```java
public java.lang.String getCrtFile();
```

- *Type:* java.lang.String

---

##### `keyFile`<sup>Required</sup> <a name="keyFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.keyFile"></a>

```java
public java.lang.String getKeyFile();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTls">ObservabilityPipelineConfigSourcesDatadogAgentTls</a>

---


### ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList <a name="ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList;

new ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.get"></a>

```java
public ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption">ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption">ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption</a>>

---


### ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference <a name="ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference;

new ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption">ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption">ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption</a>

---


### ObservabilityPipelineConfigSourcesKafkaList <a name="ObservabilityPipelineConfigSourcesKafkaList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigSourcesKafkaList;

new ObservabilityPipelineConfigSourcesKafkaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.get"></a>

```java
public ObservabilityPipelineConfigSourcesKafkaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka">ObservabilityPipelineConfigSourcesKafka</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka">ObservabilityPipelineConfigSourcesKafka</a>>

---


### ObservabilityPipelineConfigSourcesKafkaOutputReference <a name="ObservabilityPipelineConfigSourcesKafkaOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference;

new ObservabilityPipelineConfigSourcesKafkaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.putLibrdkafkaOption">putLibrdkafkaOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.putSasl">putSasl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.putTls">putTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.resetLibrdkafkaOption">resetLibrdkafkaOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.resetTls">resetTls</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLibrdkafkaOption` <a name="putLibrdkafkaOption" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.putLibrdkafkaOption"></a>

```java
public void putLibrdkafkaOption(IResolvable OR java.util.List<ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.putLibrdkafkaOption.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption">ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption</a>>

---

##### `putSasl` <a name="putSasl" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.putSasl"></a>

```java
public void putSasl(ObservabilityPipelineConfigSourcesKafkaSasl value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.putSasl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSasl">ObservabilityPipelineConfigSourcesKafkaSasl</a>

---

##### `putTls` <a name="putTls" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.putTls"></a>

```java
public void putTls(IResolvable OR java.util.List<ObservabilityPipelineConfigSourcesKafkaTls> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.putTls.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTls">ObservabilityPipelineConfigSourcesKafkaTls</a>>

---

##### `resetLibrdkafkaOption` <a name="resetLibrdkafkaOption" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.resetLibrdkafkaOption"></a>

```java
public void resetLibrdkafkaOption()
```

##### `resetTls` <a name="resetTls" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.resetTls"></a>

```java
public void resetTls()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.librdkafkaOption">librdkafkaOption</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList">ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.sasl">sasl</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference">ObservabilityPipelineConfigSourcesKafkaSaslOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.tls">tls</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList">ObservabilityPipelineConfigSourcesKafkaTlsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.librdkafkaOptionInput">librdkafkaOptionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption">ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.saslInput">saslInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSasl">ObservabilityPipelineConfigSourcesKafkaSasl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.tlsInput">tlsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTls">ObservabilityPipelineConfigSourcesKafkaTls</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.topicsInput">topicsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.groupId">groupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.topics">topics</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka">ObservabilityPipelineConfigSourcesKafka</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `librdkafkaOption`<sup>Required</sup> <a name="librdkafkaOption" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.librdkafkaOption"></a>

```java
public ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList getLibrdkafkaOption();
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList">ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList</a>

---

##### `sasl`<sup>Required</sup> <a name="sasl" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.sasl"></a>

```java
public ObservabilityPipelineConfigSourcesKafkaSaslOutputReference getSasl();
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference">ObservabilityPipelineConfigSourcesKafkaSaslOutputReference</a>

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.tls"></a>

```java
public ObservabilityPipelineConfigSourcesKafkaTlsList getTls();
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList">ObservabilityPipelineConfigSourcesKafkaTlsList</a>

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.groupIdInput"></a>

```java
public java.lang.String getGroupIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `librdkafkaOptionInput`<sup>Optional</sup> <a name="librdkafkaOptionInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.librdkafkaOptionInput"></a>

```java
public java.lang.Object getLibrdkafkaOptionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption">ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption</a>>

---

##### `saslInput`<sup>Optional</sup> <a name="saslInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.saslInput"></a>

```java
public java.lang.Object getSaslInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSasl">ObservabilityPipelineConfigSourcesKafkaSasl</a>

---

##### `tlsInput`<sup>Optional</sup> <a name="tlsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.tlsInput"></a>

```java
public java.lang.Object getTlsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTls">ObservabilityPipelineConfigSourcesKafkaTls</a>>

---

##### `topicsInput`<sup>Optional</sup> <a name="topicsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.topicsInput"></a>

```java
public java.util.List<java.lang.String> getTopicsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `topics`<sup>Required</sup> <a name="topics" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.topics"></a>

```java
public java.util.List<java.lang.String> getTopics();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka">ObservabilityPipelineConfigSourcesKafka</a>

---


### ObservabilityPipelineConfigSourcesKafkaSaslOutputReference <a name="ObservabilityPipelineConfigSourcesKafkaSaslOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference;

new ObservabilityPipelineConfigSourcesKafkaSaslOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.property.mechanismInput">mechanismInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.property.mechanism">mechanism</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSasl">ObservabilityPipelineConfigSourcesKafkaSasl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mechanismInput`<sup>Optional</sup> <a name="mechanismInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.property.mechanismInput"></a>

```java
public java.lang.String getMechanismInput();
```

- *Type:* java.lang.String

---

##### `mechanism`<sup>Required</sup> <a name="mechanism" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.property.mechanism"></a>

```java
public java.lang.String getMechanism();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSasl">ObservabilityPipelineConfigSourcesKafkaSasl</a>

---


### ObservabilityPipelineConfigSourcesKafkaTlsList <a name="ObservabilityPipelineConfigSourcesKafkaTlsList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigSourcesKafkaTlsList;

new ObservabilityPipelineConfigSourcesKafkaTlsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.get"></a>

```java
public ObservabilityPipelineConfigSourcesKafkaTlsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTls">ObservabilityPipelineConfigSourcesKafkaTls</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTls">ObservabilityPipelineConfigSourcesKafkaTls</a>>

---


### ObservabilityPipelineConfigSourcesKafkaTlsOutputReference <a name="ObservabilityPipelineConfigSourcesKafkaTlsOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference;

new ObservabilityPipelineConfigSourcesKafkaTlsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.resetCaFile">resetCaFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.resetKeyFile">resetKeyFile</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCaFile` <a name="resetCaFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.resetCaFile"></a>

```java
public void resetCaFile()
```

##### `resetKeyFile` <a name="resetKeyFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.resetKeyFile"></a>

```java
public void resetKeyFile()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.caFileInput">caFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.crtFileInput">crtFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.keyFileInput">keyFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.caFile">caFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.crtFile">crtFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.keyFile">keyFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTls">ObservabilityPipelineConfigSourcesKafkaTls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `caFileInput`<sup>Optional</sup> <a name="caFileInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.caFileInput"></a>

```java
public java.lang.String getCaFileInput();
```

- *Type:* java.lang.String

---

##### `crtFileInput`<sup>Optional</sup> <a name="crtFileInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.crtFileInput"></a>

```java
public java.lang.String getCrtFileInput();
```

- *Type:* java.lang.String

---

##### `keyFileInput`<sup>Optional</sup> <a name="keyFileInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.keyFileInput"></a>

```java
public java.lang.String getKeyFileInput();
```

- *Type:* java.lang.String

---

##### `caFile`<sup>Required</sup> <a name="caFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.caFile"></a>

```java
public java.lang.String getCaFile();
```

- *Type:* java.lang.String

---

##### `crtFile`<sup>Required</sup> <a name="crtFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.crtFile"></a>

```java
public java.lang.String getCrtFile();
```

- *Type:* java.lang.String

---

##### `keyFile`<sup>Required</sup> <a name="keyFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.keyFile"></a>

```java
public java.lang.String getKeyFile();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTls">ObservabilityPipelineConfigSourcesKafkaTls</a>

---


### ObservabilityPipelineConfigSourcesOutputReference <a name="ObservabilityPipelineConfigSourcesOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.observability_pipeline.ObservabilityPipelineConfigSourcesOutputReference;

new ObservabilityPipelineConfigSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.putDatadogAgent">putDatadogAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.putKafka">putKafka</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.resetDatadogAgent">resetDatadogAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.resetKafka">resetKafka</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatadogAgent` <a name="putDatadogAgent" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.putDatadogAgent"></a>

```java
public void putDatadogAgent(IResolvable OR java.util.List<ObservabilityPipelineConfigSourcesDatadogAgent> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.putDatadogAgent.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgent">ObservabilityPipelineConfigSourcesDatadogAgent</a>>

---

##### `putKafka` <a name="putKafka" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.putKafka"></a>

```java
public void putKafka(IResolvable OR java.util.List<ObservabilityPipelineConfigSourcesKafka> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.putKafka.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka">ObservabilityPipelineConfigSourcesKafka</a>>

---

##### `resetDatadogAgent` <a name="resetDatadogAgent" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.resetDatadogAgent"></a>

```java
public void resetDatadogAgent()
```

##### `resetKafka` <a name="resetKafka" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.resetKafka"></a>

```java
public void resetKafka()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.property.datadogAgent">datadogAgent</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList">ObservabilityPipelineConfigSourcesDatadogAgentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.property.kafka">kafka</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList">ObservabilityPipelineConfigSourcesKafkaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.property.datadogAgentInput">datadogAgentInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgent">ObservabilityPipelineConfigSourcesDatadogAgent</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.property.kafkaInput">kafkaInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka">ObservabilityPipelineConfigSourcesKafka</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSources">ObservabilityPipelineConfigSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datadogAgent`<sup>Required</sup> <a name="datadogAgent" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.property.datadogAgent"></a>

```java
public ObservabilityPipelineConfigSourcesDatadogAgentList getDatadogAgent();
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList">ObservabilityPipelineConfigSourcesDatadogAgentList</a>

---

##### `kafka`<sup>Required</sup> <a name="kafka" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.property.kafka"></a>

```java
public ObservabilityPipelineConfigSourcesKafkaList getKafka();
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList">ObservabilityPipelineConfigSourcesKafkaList</a>

---

##### `datadogAgentInput`<sup>Optional</sup> <a name="datadogAgentInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.property.datadogAgentInput"></a>

```java
public java.lang.Object getDatadogAgentInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgent">ObservabilityPipelineConfigSourcesDatadogAgent</a>>

---

##### `kafkaInput`<sup>Optional</sup> <a name="kafkaInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.property.kafkaInput"></a>

```java
public java.lang.Object getKafkaInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka">ObservabilityPipelineConfigSourcesKafka</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSources">ObservabilityPipelineConfigSources</a>

---



