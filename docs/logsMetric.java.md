# `logsMetric` Submodule <a name="`logsMetric` Submodule" id="@cdktf/provider-datadog.logsMetric"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogsMetric <a name="LogsMetric" id="@cdktf/provider-datadog.logsMetric.LogsMetric"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/logs_metric datadog_logs_metric}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.logs_metric.LogsMetric;

LogsMetric.Builder.create(Construct scope, java.lang.String id)
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
    .compute(LogsMetricCompute)
    .filter(LogsMetricFilter)
    .name(java.lang.String)
//  .groupBy(IResolvable)
//  .groupBy(java.util.List<LogsMetricGroupBy>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.compute">compute</a></code> | <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricCompute">LogsMetricCompute</a></code> | compute block. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilter">LogsMetricFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the log-based metric. This field can't be updated after creation. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.groupBy">groupBy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupBy">LogsMetricGroupBy</a>></code> | group_by block. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/logs_metric#id LogsMetric#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compute`<sup>Required</sup> <a name="compute" id="@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.compute"></a>

- *Type:* <a href="#@cdktf/provider-datadog.logsMetric.LogsMetricCompute">LogsMetricCompute</a>

compute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/logs_metric#compute LogsMetric#compute}

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilter">LogsMetricFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/logs_metric#filter LogsMetric#filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the log-based metric. This field can't be updated after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/logs_metric#name LogsMetric#name}

---

##### `groupBy`<sup>Optional</sup> <a name="groupBy" id="@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.groupBy"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupBy">LogsMetricGroupBy</a>>

group_by block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/logs_metric#group_by LogsMetric#group_by}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/logs_metric#id LogsMetric#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.putCompute">putCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.putGroupBy">putGroupBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.resetGroupBy">resetGroupBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.logsMetric.LogsMetric.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.logsMetric.LogsMetric.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.logsMetric.LogsMetric.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.logsMetric.LogsMetric.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.logsMetric.LogsMetric.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.logsMetric.LogsMetric.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.logsMetric.LogsMetric.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.logsMetric.LogsMetric.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.logsMetric.LogsMetric.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.logsMetric.LogsMetric.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.logsMetric.LogsMetric.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetric.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetric.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetric.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetric.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetric.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetric.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetric.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetric.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetric.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetric.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetric.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetric.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetric.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetric.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetric.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetric.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetric.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetric.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.logsMetric.LogsMetric.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.logsMetric.LogsMetric.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.logsMetric.LogsMetric.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetric.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetric.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.logsMetric.LogsMetric.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.logsMetric.LogsMetric.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.logsMetric.LogsMetric.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putCompute` <a name="putCompute" id="@cdktf/provider-datadog.logsMetric.LogsMetric.putCompute"></a>

```java
public void putCompute(LogsMetricCompute value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.logsMetric.LogsMetric.putCompute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.logsMetric.LogsMetricCompute">LogsMetricCompute</a>

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-datadog.logsMetric.LogsMetric.putFilter"></a>

```java
public void putFilter(LogsMetricFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.logsMetric.LogsMetric.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilter">LogsMetricFilter</a>

---

##### `putGroupBy` <a name="putGroupBy" id="@cdktf/provider-datadog.logsMetric.LogsMetric.putGroupBy"></a>

```java
public void putGroupBy(IResolvable OR java.util.List<LogsMetricGroupBy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.logsMetric.LogsMetric.putGroupBy.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupBy">LogsMetricGroupBy</a>>

---

##### `resetGroupBy` <a name="resetGroupBy" id="@cdktf/provider-datadog.logsMetric.LogsMetric.resetGroupBy"></a>

```java
public void resetGroupBy()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-datadog.logsMetric.LogsMetric.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LogsMetric resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.logsMetric.LogsMetric.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.datadog.logs_metric.LogsMetric;

LogsMetric.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.logsMetric.LogsMetric.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.logsMetric.LogsMetric.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.datadog.logs_metric.LogsMetric;

LogsMetric.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.logsMetric.LogsMetric.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.logsMetric.LogsMetric.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.datadog.logs_metric.LogsMetric;

LogsMetric.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.logsMetric.LogsMetric.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.logsMetric.LogsMetric.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.datadog.logs_metric.LogsMetric;

LogsMetric.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LogsMetric.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a LogsMetric resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.logsMetric.LogsMetric.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.logsMetric.LogsMetric.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LogsMetric to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.logsMetric.LogsMetric.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LogsMetric that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/logs_metric#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.logsMetric.LogsMetric.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the LogsMetric to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.compute">compute</a></code> | <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference">LogsMetricComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference">LogsMetricFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.groupBy">groupBy</a></code> | <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList">LogsMetricGroupByList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.computeInput">computeInput</a></code> | <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricCompute">LogsMetricCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.filterInput">filterInput</a></code> | <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilter">LogsMetricFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.groupByInput">groupByInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupBy">LogsMetricGroupBy</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compute`<sup>Required</sup> <a name="compute" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.compute"></a>

```java
public LogsMetricComputeOutputReference getCompute();
```

- *Type:* <a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference">LogsMetricComputeOutputReference</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.filter"></a>

```java
public LogsMetricFilterOutputReference getFilter();
```

- *Type:* <a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference">LogsMetricFilterOutputReference</a>

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.groupBy"></a>

```java
public LogsMetricGroupByList getGroupBy();
```

- *Type:* <a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList">LogsMetricGroupByList</a>

---

##### `computeInput`<sup>Optional</sup> <a name="computeInput" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.computeInput"></a>

```java
public LogsMetricCompute getComputeInput();
```

- *Type:* <a href="#@cdktf/provider-datadog.logsMetric.LogsMetricCompute">LogsMetricCompute</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.filterInput"></a>

```java
public LogsMetricFilter getFilterInput();
```

- *Type:* <a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilter">LogsMetricFilter</a>

---

##### `groupByInput`<sup>Optional</sup> <a name="groupByInput" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.groupByInput"></a>

```java
public java.lang.Object getGroupByInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupBy">LogsMetricGroupBy</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LogsMetricCompute <a name="LogsMetricCompute" id="@cdktf/provider-datadog.logsMetric.LogsMetricCompute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsMetric.LogsMetricCompute.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.logs_metric.LogsMetricCompute;

LogsMetricCompute.builder()
    .aggregationType(java.lang.String)
//  .includePercentiles(java.lang.Boolean)
//  .includePercentiles(IResolvable)
//  .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricCompute.property.aggregationType">aggregationType</a></code> | <code>java.lang.String</code> | The type of aggregation to use. This field can't be updated after creation. Valid values are `count`, `distribution`. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricCompute.property.includePercentiles">includePercentiles</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Toggle to include/exclude percentiles for a distribution metric. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricCompute.property.path">path</a></code> | <code>java.lang.String</code> | The path to the value the log-based metric will aggregate on (only used if the aggregation type is a "distribution"). |

---

##### `aggregationType`<sup>Required</sup> <a name="aggregationType" id="@cdktf/provider-datadog.logsMetric.LogsMetricCompute.property.aggregationType"></a>

```java
public java.lang.String getAggregationType();
```

- *Type:* java.lang.String

The type of aggregation to use. This field can't be updated after creation. Valid values are `count`, `distribution`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/logs_metric#aggregation_type LogsMetric#aggregation_type}

---

##### `includePercentiles`<sup>Optional</sup> <a name="includePercentiles" id="@cdktf/provider-datadog.logsMetric.LogsMetricCompute.property.includePercentiles"></a>

```java
public java.lang.Object getIncludePercentiles();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Toggle to include/exclude percentiles for a distribution metric.

Defaults to false. Can only be applied to metrics that have an `aggregation_type` of distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/logs_metric#include_percentiles LogsMetric#include_percentiles}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-datadog.logsMetric.LogsMetricCompute.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The path to the value the log-based metric will aggregate on (only used if the aggregation type is a "distribution").

This field can't be updated after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/logs_metric#path LogsMetric#path}

---

### LogsMetricConfig <a name="LogsMetricConfig" id="@cdktf/provider-datadog.logsMetric.LogsMetricConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsMetric.LogsMetricConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.logs_metric.LogsMetricConfig;

LogsMetricConfig.builder()
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
    .compute(LogsMetricCompute)
    .filter(LogsMetricFilter)
    .name(java.lang.String)
//  .groupBy(IResolvable)
//  .groupBy(java.util.List<LogsMetricGroupBy>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.compute">compute</a></code> | <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricCompute">LogsMetricCompute</a></code> | compute block. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilter">LogsMetricFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the log-based metric. This field can't be updated after creation. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.groupBy">groupBy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupBy">LogsMetricGroupBy</a>></code> | group_by block. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/logs_metric#id LogsMetric#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compute`<sup>Required</sup> <a name="compute" id="@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.compute"></a>

```java
public LogsMetricCompute getCompute();
```

- *Type:* <a href="#@cdktf/provider-datadog.logsMetric.LogsMetricCompute">LogsMetricCompute</a>

compute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/logs_metric#compute LogsMetric#compute}

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.filter"></a>

```java
public LogsMetricFilter getFilter();
```

- *Type:* <a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilter">LogsMetricFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/logs_metric#filter LogsMetric#filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the log-based metric. This field can't be updated after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/logs_metric#name LogsMetric#name}

---

##### `groupBy`<sup>Optional</sup> <a name="groupBy" id="@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.groupBy"></a>

```java
public java.lang.Object getGroupBy();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupBy">LogsMetricGroupBy</a>>

group_by block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/logs_metric#group_by LogsMetric#group_by}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/logs_metric#id LogsMetric#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### LogsMetricFilter <a name="LogsMetricFilter" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.logs_metric.LogsMetricFilter;

LogsMetricFilter.builder()
    .query(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilter.property.query">query</a></code> | <code>java.lang.String</code> | The search query - following the log search syntax. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilter.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

The search query - following the log search syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/logs_metric#query LogsMetric#query}

---

### LogsMetricGroupBy <a name="LogsMetricGroupBy" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupBy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupBy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.logs_metric.LogsMetricGroupBy;

LogsMetricGroupBy.builder()
    .path(java.lang.String)
    .tagName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupBy.property.path">path</a></code> | <code>java.lang.String</code> | The path to the value the log-based metric will be aggregated over. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupBy.property.tagName">tagName</a></code> | <code>java.lang.String</code> | Name of the tag that gets created. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupBy.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The path to the value the log-based metric will be aggregated over.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/logs_metric#path LogsMetric#path}

---

##### `tagName`<sup>Required</sup> <a name="tagName" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupBy.property.tagName"></a>

```java
public java.lang.String getTagName();
```

- *Type:* java.lang.String

Name of the tag that gets created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/logs_metric#tag_name LogsMetric#tag_name}

---

## Classes <a name="Classes" id="Classes"></a>

### LogsMetricComputeOutputReference <a name="LogsMetricComputeOutputReference" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.logs_metric.LogsMetricComputeOutputReference;

new LogsMetricComputeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.resetIncludePercentiles">resetIncludePercentiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludePercentiles` <a name="resetIncludePercentiles" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.resetIncludePercentiles"></a>

```java
public void resetIncludePercentiles()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.resetPath"></a>

```java
public void resetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.property.aggregationTypeInput">aggregationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.property.includePercentilesInput">includePercentilesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.property.aggregationType">aggregationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.property.includePercentiles">includePercentiles</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricCompute">LogsMetricCompute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aggregationTypeInput`<sup>Optional</sup> <a name="aggregationTypeInput" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.property.aggregationTypeInput"></a>

```java
public java.lang.String getAggregationTypeInput();
```

- *Type:* java.lang.String

---

##### `includePercentilesInput`<sup>Optional</sup> <a name="includePercentilesInput" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.property.includePercentilesInput"></a>

```java
public java.lang.Object getIncludePercentilesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `aggregationType`<sup>Required</sup> <a name="aggregationType" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.property.aggregationType"></a>

```java
public java.lang.String getAggregationType();
```

- *Type:* java.lang.String

---

##### `includePercentiles`<sup>Required</sup> <a name="includePercentiles" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.property.includePercentiles"></a>

```java
public java.lang.Object getIncludePercentiles();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.property.internalValue"></a>

```java
public LogsMetricCompute getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-datadog.logsMetric.LogsMetricCompute">LogsMetricCompute</a>

---


### LogsMetricFilterOutputReference <a name="LogsMetricFilterOutputReference" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.logs_metric.LogsMetricFilterOutputReference;

new LogsMetricFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilter">LogsMetricFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.property.internalValue"></a>

```java
public LogsMetricFilter getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilter">LogsMetricFilter</a>

---


### LogsMetricGroupByList <a name="LogsMetricGroupByList" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.logs_metric.LogsMetricGroupByList;

new LogsMetricGroupByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.get"></a>

```java
public LogsMetricGroupByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupBy">LogsMetricGroupBy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupBy">LogsMetricGroupBy</a>>

---


### LogsMetricGroupByOutputReference <a name="LogsMetricGroupByOutputReference" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.logs_metric.LogsMetricGroupByOutputReference;

new LogsMetricGroupByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.property.tagNameInput">tagNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.property.tagName">tagName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupBy">LogsMetricGroupBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `tagNameInput`<sup>Optional</sup> <a name="tagNameInput" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.property.tagNameInput"></a>

```java
public java.lang.String getTagNameInput();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `tagName`<sup>Required</sup> <a name="tagName" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.property.tagName"></a>

```java
public java.lang.String getTagName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupBy">LogsMetricGroupBy</a>

---



