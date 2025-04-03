# `rumMetric` Submodule <a name="`rumMetric` Submodule" id="@cdktf/provider-datadog.rumMetric"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RumMetric <a name="RumMetric" id="@cdktf/provider-datadog.rumMetric.RumMetric"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/rum_metric datadog_rum_metric}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.rumMetric.RumMetric.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.rum_metric.RumMetric;

RumMetric.Builder.create(Construct scope, java.lang.String id)
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
    .eventType(java.lang.String)
    .name(java.lang.String)
//  .compute(RumMetricCompute)
//  .filter(RumMetricFilter)
//  .groupBy(IResolvable)
//  .groupBy(java.util.List<RumMetricGroupBy>)
//  .uniqueness(RumMetricUniqueness)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.Initializer.parameter.eventType">eventType</a></code> | <code>java.lang.String</code> | The type of RUM events to filter on. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the RUM-based metric. This field can't be updated after creation. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.Initializer.parameter.compute">compute</a></code> | <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricCompute">RumMetricCompute</a></code> | compute block. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilter">RumMetricFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.Initializer.parameter.groupBy">groupBy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupBy">RumMetricGroupBy</a>></code> | group_by block. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.Initializer.parameter.uniqueness">uniqueness</a></code> | <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniqueness">RumMetricUniqueness</a></code> | uniqueness block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.rumMetric.RumMetric.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.rumMetric.RumMetric.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.rumMetric.RumMetric.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.rumMetric.RumMetric.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.rumMetric.RumMetric.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.rumMetric.RumMetric.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.rumMetric.RumMetric.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.rumMetric.RumMetric.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.rumMetric.RumMetric.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktf/provider-datadog.rumMetric.RumMetric.Initializer.parameter.eventType"></a>

- *Type:* java.lang.String

The type of RUM events to filter on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/rum_metric#event_type RumMetric#event_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.rumMetric.RumMetric.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the RUM-based metric. This field can't be updated after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/rum_metric#name RumMetric#name}

---

##### `compute`<sup>Optional</sup> <a name="compute" id="@cdktf/provider-datadog.rumMetric.RumMetric.Initializer.parameter.compute"></a>

- *Type:* <a href="#@cdktf/provider-datadog.rumMetric.RumMetricCompute">RumMetricCompute</a>

compute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/rum_metric#compute RumMetric#compute}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-datadog.rumMetric.RumMetric.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilter">RumMetricFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/rum_metric#filter RumMetric#filter}

---

##### `groupBy`<sup>Optional</sup> <a name="groupBy" id="@cdktf/provider-datadog.rumMetric.RumMetric.Initializer.parameter.groupBy"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupBy">RumMetricGroupBy</a>>

group_by block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/rum_metric#group_by RumMetric#group_by}

---

##### `uniqueness`<sup>Optional</sup> <a name="uniqueness" id="@cdktf/provider-datadog.rumMetric.RumMetric.Initializer.parameter.uniqueness"></a>

- *Type:* <a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniqueness">RumMetricUniqueness</a>

uniqueness block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/rum_metric#uniqueness RumMetric#uniqueness}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.putCompute">putCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.putGroupBy">putGroupBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.putUniqueness">putUniqueness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.resetCompute">resetCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.resetGroupBy">resetGroupBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.resetUniqueness">resetUniqueness</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.rumMetric.RumMetric.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.rumMetric.RumMetric.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.rumMetric.RumMetric.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.rumMetric.RumMetric.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.rumMetric.RumMetric.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.rumMetric.RumMetric.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.rumMetric.RumMetric.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.rumMetric.RumMetric.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.rumMetric.RumMetric.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.rumMetric.RumMetric.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.rumMetric.RumMetric.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.rumMetric.RumMetric.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetric.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetric.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetric.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetric.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetric.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetric.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetric.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetric.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetric.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetric.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetric.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetric.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetric.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetric.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetric.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetric.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetric.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetric.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.rumMetric.RumMetric.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.rumMetric.RumMetric.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.rumMetric.RumMetric.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.rumMetric.RumMetric.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetric.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetric.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.rumMetric.RumMetric.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.rumMetric.RumMetric.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.rumMetric.RumMetric.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.rumMetric.RumMetric.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.rumMetric.RumMetric.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.rumMetric.RumMetric.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.rumMetric.RumMetric.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCompute` <a name="putCompute" id="@cdktf/provider-datadog.rumMetric.RumMetric.putCompute"></a>

```java
public void putCompute(RumMetricCompute value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.rumMetric.RumMetric.putCompute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.rumMetric.RumMetricCompute">RumMetricCompute</a>

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-datadog.rumMetric.RumMetric.putFilter"></a>

```java
public void putFilter(RumMetricFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.rumMetric.RumMetric.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilter">RumMetricFilter</a>

---

##### `putGroupBy` <a name="putGroupBy" id="@cdktf/provider-datadog.rumMetric.RumMetric.putGroupBy"></a>

```java
public void putGroupBy(IResolvable OR java.util.List<RumMetricGroupBy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.rumMetric.RumMetric.putGroupBy.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupBy">RumMetricGroupBy</a>>

---

##### `putUniqueness` <a name="putUniqueness" id="@cdktf/provider-datadog.rumMetric.RumMetric.putUniqueness"></a>

```java
public void putUniqueness(RumMetricUniqueness value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.rumMetric.RumMetric.putUniqueness.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniqueness">RumMetricUniqueness</a>

---

##### `resetCompute` <a name="resetCompute" id="@cdktf/provider-datadog.rumMetric.RumMetric.resetCompute"></a>

```java
public void resetCompute()
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-datadog.rumMetric.RumMetric.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetGroupBy` <a name="resetGroupBy" id="@cdktf/provider-datadog.rumMetric.RumMetric.resetGroupBy"></a>

```java
public void resetGroupBy()
```

##### `resetUniqueness` <a name="resetUniqueness" id="@cdktf/provider-datadog.rumMetric.RumMetric.resetUniqueness"></a>

```java
public void resetUniqueness()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RumMetric resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.rumMetric.RumMetric.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.datadog.rum_metric.RumMetric;

RumMetric.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.rumMetric.RumMetric.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.rumMetric.RumMetric.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.datadog.rum_metric.RumMetric;

RumMetric.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.rumMetric.RumMetric.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.rumMetric.RumMetric.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.datadog.rum_metric.RumMetric;

RumMetric.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.rumMetric.RumMetric.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.rumMetric.RumMetric.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.datadog.rum_metric.RumMetric;

RumMetric.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RumMetric.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a RumMetric resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.rumMetric.RumMetric.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.rumMetric.RumMetric.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RumMetric to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.rumMetric.RumMetric.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RumMetric that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/rum_metric#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.rumMetric.RumMetric.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the RumMetric to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.compute">compute</a></code> | <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference">RumMetricComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference">RumMetricFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.groupBy">groupBy</a></code> | <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByList">RumMetricGroupByList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.uniqueness">uniqueness</a></code> | <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference">RumMetricUniquenessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.computeInput">computeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.rumMetric.RumMetricCompute">RumMetricCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.eventTypeInput">eventTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilter">RumMetricFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.groupByInput">groupByInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupBy">RumMetricGroupBy</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.uniquenessInput">uniquenessInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniqueness">RumMetricUniqueness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.eventType">eventType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compute`<sup>Required</sup> <a name="compute" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.compute"></a>

```java
public RumMetricComputeOutputReference getCompute();
```

- *Type:* <a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference">RumMetricComputeOutputReference</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.filter"></a>

```java
public RumMetricFilterOutputReference getFilter();
```

- *Type:* <a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference">RumMetricFilterOutputReference</a>

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.groupBy"></a>

```java
public RumMetricGroupByList getGroupBy();
```

- *Type:* <a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByList">RumMetricGroupByList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `uniqueness`<sup>Required</sup> <a name="uniqueness" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.uniqueness"></a>

```java
public RumMetricUniquenessOutputReference getUniqueness();
```

- *Type:* <a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference">RumMetricUniquenessOutputReference</a>

---

##### `computeInput`<sup>Optional</sup> <a name="computeInput" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.computeInput"></a>

```java
public java.lang.Object getComputeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.rumMetric.RumMetricCompute">RumMetricCompute</a>

---

##### `eventTypeInput`<sup>Optional</sup> <a name="eventTypeInput" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.eventTypeInput"></a>

```java
public java.lang.String getEventTypeInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilter">RumMetricFilter</a>

---

##### `groupByInput`<sup>Optional</sup> <a name="groupByInput" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.groupByInput"></a>

```java
public java.lang.Object getGroupByInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupBy">RumMetricGroupBy</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `uniquenessInput`<sup>Optional</sup> <a name="uniquenessInput" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.uniquenessInput"></a>

```java
public java.lang.Object getUniquenessInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniqueness">RumMetricUniqueness</a>

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.eventType"></a>

```java
public java.lang.String getEventType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RumMetricCompute <a name="RumMetricCompute" id="@cdktf/provider-datadog.rumMetric.RumMetricCompute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.rumMetric.RumMetricCompute.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.rum_metric.RumMetricCompute;

RumMetricCompute.builder()
    .aggregationType(java.lang.String)
//  .includePercentiles(java.lang.Boolean)
//  .includePercentiles(IResolvable)
//  .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricCompute.property.aggregationType">aggregationType</a></code> | <code>java.lang.String</code> | The type of aggregation to use. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricCompute.property.includePercentiles">includePercentiles</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Toggle to include or exclude percentile aggregations for distribution metrics. Only present when `aggregation_type` is `distribution`. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricCompute.property.path">path</a></code> | <code>java.lang.String</code> | The path to the value the RUM-based metric will aggregate on. Only present when `aggregation_type` is `distribution`. |

---

##### `aggregationType`<sup>Required</sup> <a name="aggregationType" id="@cdktf/provider-datadog.rumMetric.RumMetricCompute.property.aggregationType"></a>

```java
public java.lang.String getAggregationType();
```

- *Type:* java.lang.String

The type of aggregation to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/rum_metric#aggregation_type RumMetric#aggregation_type}

---

##### `includePercentiles`<sup>Optional</sup> <a name="includePercentiles" id="@cdktf/provider-datadog.rumMetric.RumMetricCompute.property.includePercentiles"></a>

```java
public java.lang.Object getIncludePercentiles();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Toggle to include or exclude percentile aggregations for distribution metrics. Only present when `aggregation_type` is `distribution`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/rum_metric#include_percentiles RumMetric#include_percentiles}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-datadog.rumMetric.RumMetricCompute.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The path to the value the RUM-based metric will aggregate on. Only present when `aggregation_type` is `distribution`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/rum_metric#path RumMetric#path}

---

### RumMetricConfig <a name="RumMetricConfig" id="@cdktf/provider-datadog.rumMetric.RumMetricConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.rumMetric.RumMetricConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.rum_metric.RumMetricConfig;

RumMetricConfig.builder()
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
    .eventType(java.lang.String)
    .name(java.lang.String)
//  .compute(RumMetricCompute)
//  .filter(RumMetricFilter)
//  .groupBy(IResolvable)
//  .groupBy(java.util.List<RumMetricGroupBy>)
//  .uniqueness(RumMetricUniqueness)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.eventType">eventType</a></code> | <code>java.lang.String</code> | The type of RUM events to filter on. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the RUM-based metric. This field can't be updated after creation. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.compute">compute</a></code> | <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricCompute">RumMetricCompute</a></code> | compute block. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilter">RumMetricFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.groupBy">groupBy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupBy">RumMetricGroupBy</a>></code> | group_by block. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.uniqueness">uniqueness</a></code> | <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniqueness">RumMetricUniqueness</a></code> | uniqueness block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.eventType"></a>

```java
public java.lang.String getEventType();
```

- *Type:* java.lang.String

The type of RUM events to filter on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/rum_metric#event_type RumMetric#event_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the RUM-based metric. This field can't be updated after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/rum_metric#name RumMetric#name}

---

##### `compute`<sup>Optional</sup> <a name="compute" id="@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.compute"></a>

```java
public RumMetricCompute getCompute();
```

- *Type:* <a href="#@cdktf/provider-datadog.rumMetric.RumMetricCompute">RumMetricCompute</a>

compute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/rum_metric#compute RumMetric#compute}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.filter"></a>

```java
public RumMetricFilter getFilter();
```

- *Type:* <a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilter">RumMetricFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/rum_metric#filter RumMetric#filter}

---

##### `groupBy`<sup>Optional</sup> <a name="groupBy" id="@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.groupBy"></a>

```java
public java.lang.Object getGroupBy();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupBy">RumMetricGroupBy</a>>

group_by block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/rum_metric#group_by RumMetric#group_by}

---

##### `uniqueness`<sup>Optional</sup> <a name="uniqueness" id="@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.uniqueness"></a>

```java
public RumMetricUniqueness getUniqueness();
```

- *Type:* <a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniqueness">RumMetricUniqueness</a>

uniqueness block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/rum_metric#uniqueness RumMetric#uniqueness}

---

### RumMetricFilter <a name="RumMetricFilter" id="@cdktf/provider-datadog.rumMetric.RumMetricFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.rumMetric.RumMetricFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.rum_metric.RumMetricFilter;

RumMetricFilter.builder()
//  .query(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilter.property.query">query</a></code> | <code>java.lang.String</code> | The search query. Follows RUM search syntax. |

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-datadog.rumMetric.RumMetricFilter.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

The search query. Follows RUM search syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/rum_metric#query RumMetric#query}

---

### RumMetricGroupBy <a name="RumMetricGroupBy" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupBy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupBy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.rum_metric.RumMetricGroupBy;

RumMetricGroupBy.builder()
//  .path(java.lang.String)
//  .tagName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupBy.property.path">path</a></code> | <code>java.lang.String</code> | The path to the value the RUM-based metric will be aggregated over. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupBy.property.tagName">tagName</a></code> | <code>java.lang.String</code> | Name of the tag that gets created. By default, `path` is used as the tag name. |

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupBy.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The path to the value the RUM-based metric will be aggregated over.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/rum_metric#path RumMetric#path}

---

##### `tagName`<sup>Optional</sup> <a name="tagName" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupBy.property.tagName"></a>

```java
public java.lang.String getTagName();
```

- *Type:* java.lang.String

Name of the tag that gets created. By default, `path` is used as the tag name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/rum_metric#tag_name RumMetric#tag_name}

---

### RumMetricUniqueness <a name="RumMetricUniqueness" id="@cdktf/provider-datadog.rumMetric.RumMetricUniqueness"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.rumMetric.RumMetricUniqueness.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.rum_metric.RumMetricUniqueness;

RumMetricUniqueness.builder()
//  .when(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniqueness.property.when">when</a></code> | <code>java.lang.String</code> | When to count updatable events. `match` when the event is first seen, or `end` when the event is complete. |

---

##### `when`<sup>Optional</sup> <a name="when" id="@cdktf/provider-datadog.rumMetric.RumMetricUniqueness.property.when"></a>

```java
public java.lang.String getWhen();
```

- *Type:* java.lang.String

When to count updatable events. `match` when the event is first seen, or `end` when the event is complete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/rum_metric#when RumMetric#when}

---

## Classes <a name="Classes" id="Classes"></a>

### RumMetricComputeOutputReference <a name="RumMetricComputeOutputReference" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.rum_metric.RumMetricComputeOutputReference;

new RumMetricComputeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.resetIncludePercentiles">resetIncludePercentiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludePercentiles` <a name="resetIncludePercentiles" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.resetIncludePercentiles"></a>

```java
public void resetIncludePercentiles()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.resetPath"></a>

```java
public void resetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.property.aggregationTypeInput">aggregationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.property.includePercentilesInput">includePercentilesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.property.aggregationType">aggregationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.property.includePercentiles">includePercentiles</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.rumMetric.RumMetricCompute">RumMetricCompute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aggregationTypeInput`<sup>Optional</sup> <a name="aggregationTypeInput" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.property.aggregationTypeInput"></a>

```java
public java.lang.String getAggregationTypeInput();
```

- *Type:* java.lang.String

---

##### `includePercentilesInput`<sup>Optional</sup> <a name="includePercentilesInput" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.property.includePercentilesInput"></a>

```java
public java.lang.Object getIncludePercentilesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `aggregationType`<sup>Required</sup> <a name="aggregationType" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.property.aggregationType"></a>

```java
public java.lang.String getAggregationType();
```

- *Type:* java.lang.String

---

##### `includePercentiles`<sup>Required</sup> <a name="includePercentiles" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.property.includePercentiles"></a>

```java
public java.lang.Object getIncludePercentiles();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.rumMetric.RumMetricCompute">RumMetricCompute</a>

---


### RumMetricFilterOutputReference <a name="RumMetricFilterOutputReference" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.rum_metric.RumMetricFilterOutputReference;

new RumMetricFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.resetQuery">resetQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQuery` <a name="resetQuery" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.resetQuery"></a>

```java
public void resetQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilter">RumMetricFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilter">RumMetricFilter</a>

---


### RumMetricGroupByList <a name="RumMetricGroupByList" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.rum_metric.RumMetricGroupByList;

new RumMetricGroupByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.get"></a>

```java
public RumMetricGroupByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupBy">RumMetricGroupBy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupBy">RumMetricGroupBy</a>>

---


### RumMetricGroupByOutputReference <a name="RumMetricGroupByOutputReference" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.rum_metric.RumMetricGroupByOutputReference;

new RumMetricGroupByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.resetTagName">resetTagName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetTagName` <a name="resetTagName" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.resetTagName"></a>

```java
public void resetTagName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.property.tagNameInput">tagNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.property.tagName">tagName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupBy">RumMetricGroupBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `tagNameInput`<sup>Optional</sup> <a name="tagNameInput" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.property.tagNameInput"></a>

```java
public java.lang.String getTagNameInput();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `tagName`<sup>Required</sup> <a name="tagName" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.property.tagName"></a>

```java
public java.lang.String getTagName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupBy">RumMetricGroupBy</a>

---


### RumMetricUniquenessOutputReference <a name="RumMetricUniquenessOutputReference" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.rum_metric.RumMetricUniquenessOutputReference;

new RumMetricUniquenessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.resetWhen">resetWhen</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWhen` <a name="resetWhen" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.resetWhen"></a>

```java
public void resetWhen()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.property.whenInput">whenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.property.when">when</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniqueness">RumMetricUniqueness</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `whenInput`<sup>Optional</sup> <a name="whenInput" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.property.whenInput"></a>

```java
public java.lang.String getWhenInput();
```

- *Type:* java.lang.String

---

##### `when`<sup>Required</sup> <a name="when" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.property.when"></a>

```java
public java.lang.String getWhen();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniqueness">RumMetricUniqueness</a>

---



