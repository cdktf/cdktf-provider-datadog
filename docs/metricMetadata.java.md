# `metricMetadata` Submodule <a name="`metricMetadata` Submodule" id="@cdktf/provider-datadog.metricMetadata"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MetricMetadata <a name="MetricMetadata" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/resources/metric_metadata datadog_metric_metadata}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.metric_metadata.MetricMetadata;

MetricMetadata.Builder.create(Construct scope, java.lang.String id)
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
    .metric(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .perUnit(java.lang.String)
//  .shortName(java.lang.String)
//  .statsdInterval(java.lang.Number)
//  .type(java.lang.String)
//  .unit(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.metric">metric</a></code> | <code>java.lang.String</code> | The name of the metric. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the metric. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/resources/metric_metadata#id MetricMetadata#id}. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.perUnit">perUnit</a></code> | <code>java.lang.String</code> | Per unit of the metric such as `second` in `bytes per second`. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.shortName">shortName</a></code> | <code>java.lang.String</code> | A short name of the metric. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.statsdInterval">statsdInterval</a></code> | <code>java.lang.Number</code> | If applicable, statsd flush interval in seconds for the metric. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Metric type such as `count`, `gauge`, or `rate`. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.unit">unit</a></code> | <code>java.lang.String</code> | Primary unit of the metric such as `byte` or `operation`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.metric"></a>

- *Type:* java.lang.String

The name of the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/resources/metric_metadata#metric MetricMetadata#metric}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/resources/metric_metadata#description MetricMetadata#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/resources/metric_metadata#id MetricMetadata#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `perUnit`<sup>Optional</sup> <a name="perUnit" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.perUnit"></a>

- *Type:* java.lang.String

Per unit of the metric such as `second` in `bytes per second`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/resources/metric_metadata#per_unit MetricMetadata#per_unit}

---

##### `shortName`<sup>Optional</sup> <a name="shortName" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.shortName"></a>

- *Type:* java.lang.String

A short name of the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/resources/metric_metadata#short_name MetricMetadata#short_name}

---

##### `statsdInterval`<sup>Optional</sup> <a name="statsdInterval" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.statsdInterval"></a>

- *Type:* java.lang.Number

If applicable, statsd flush interval in seconds for the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/resources/metric_metadata#statsd_interval MetricMetadata#statsd_interval}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Metric type such as `count`, `gauge`, or `rate`.

Updating a metric of type `distribution` is not supported. If you would like to see the `distribution` type returned, contact [Datadog support](https://docs.datadoghq.com/help/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/resources/metric_metadata#type MetricMetadata#type}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.unit"></a>

- *Type:* java.lang.String

Primary unit of the metric such as `byte` or `operation`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/resources/metric_metadata#unit MetricMetadata#unit}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetPerUnit">resetPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetShortName">resetShortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetStatsdInterval">resetStatsdInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetId"></a>

```java
public void resetId()
```

##### `resetPerUnit` <a name="resetPerUnit" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetPerUnit"></a>

```java
public void resetPerUnit()
```

##### `resetShortName` <a name="resetShortName" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetShortName"></a>

```java
public void resetShortName()
```

##### `resetStatsdInterval` <a name="resetStatsdInterval" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetStatsdInterval"></a>

```java
public void resetStatsdInterval()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetType"></a>

```java
public void resetType()
```

##### `resetUnit` <a name="resetUnit" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetUnit"></a>

```java
public void resetUnit()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MetricMetadata resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.datadog.metric_metadata.MetricMetadata;

MetricMetadata.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.datadog.metric_metadata.MetricMetadata;

MetricMetadata.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.datadog.metric_metadata.MetricMetadata;

MetricMetadata.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.datadog.metric_metadata.MetricMetadata;

MetricMetadata.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MetricMetadata.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MetricMetadata resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MetricMetadata to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MetricMetadata that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/resources/metric_metadata#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MetricMetadata to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.metricInput">metricInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.perUnitInput">perUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.shortNameInput">shortNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.statsdIntervalInput">statsdIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.metric">metric</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.perUnit">perUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.shortName">shortName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.statsdInterval">statsdInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.metricInput"></a>

```java
public java.lang.String getMetricInput();
```

- *Type:* java.lang.String

---

##### `perUnitInput`<sup>Optional</sup> <a name="perUnitInput" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.perUnitInput"></a>

```java
public java.lang.String getPerUnitInput();
```

- *Type:* java.lang.String

---

##### `shortNameInput`<sup>Optional</sup> <a name="shortNameInput" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.shortNameInput"></a>

```java
public java.lang.String getShortNameInput();
```

- *Type:* java.lang.String

---

##### `statsdIntervalInput`<sup>Optional</sup> <a name="statsdIntervalInput" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.statsdIntervalInput"></a>

```java
public java.lang.Number getStatsdIntervalInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.metric"></a>

```java
public java.lang.String getMetric();
```

- *Type:* java.lang.String

---

##### `perUnit`<sup>Required</sup> <a name="perUnit" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.perUnit"></a>

```java
public java.lang.String getPerUnit();
```

- *Type:* java.lang.String

---

##### `shortName`<sup>Required</sup> <a name="shortName" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.shortName"></a>

```java
public java.lang.String getShortName();
```

- *Type:* java.lang.String

---

##### `statsdInterval`<sup>Required</sup> <a name="statsdInterval" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.statsdInterval"></a>

```java
public java.lang.Number getStatsdInterval();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MetricMetadataConfig <a name="MetricMetadataConfig" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.metric_metadata.MetricMetadataConfig;

MetricMetadataConfig.builder()
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
    .metric(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .perUnit(java.lang.String)
//  .shortName(java.lang.String)
//  .statsdInterval(java.lang.Number)
//  .type(java.lang.String)
//  .unit(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.metric">metric</a></code> | <code>java.lang.String</code> | The name of the metric. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of the metric. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/resources/metric_metadata#id MetricMetadata#id}. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.perUnit">perUnit</a></code> | <code>java.lang.String</code> | Per unit of the metric such as `second` in `bytes per second`. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.shortName">shortName</a></code> | <code>java.lang.String</code> | A short name of the metric. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.statsdInterval">statsdInterval</a></code> | <code>java.lang.Number</code> | If applicable, statsd flush interval in seconds for the metric. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.type">type</a></code> | <code>java.lang.String</code> | Metric type such as `count`, `gauge`, or `rate`. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.unit">unit</a></code> | <code>java.lang.String</code> | Primary unit of the metric such as `byte` or `operation`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.metric"></a>

```java
public java.lang.String getMetric();
```

- *Type:* java.lang.String

The name of the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/resources/metric_metadata#metric MetricMetadata#metric}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/resources/metric_metadata#description MetricMetadata#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/resources/metric_metadata#id MetricMetadata#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `perUnit`<sup>Optional</sup> <a name="perUnit" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.perUnit"></a>

```java
public java.lang.String getPerUnit();
```

- *Type:* java.lang.String

Per unit of the metric such as `second` in `bytes per second`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/resources/metric_metadata#per_unit MetricMetadata#per_unit}

---

##### `shortName`<sup>Optional</sup> <a name="shortName" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.shortName"></a>

```java
public java.lang.String getShortName();
```

- *Type:* java.lang.String

A short name of the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/resources/metric_metadata#short_name MetricMetadata#short_name}

---

##### `statsdInterval`<sup>Optional</sup> <a name="statsdInterval" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.statsdInterval"></a>

```java
public java.lang.Number getStatsdInterval();
```

- *Type:* java.lang.Number

If applicable, statsd flush interval in seconds for the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/resources/metric_metadata#statsd_interval MetricMetadata#statsd_interval}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Metric type such as `count`, `gauge`, or `rate`.

Updating a metric of type `distribution` is not supported. If you would like to see the `distribution` type returned, contact [Datadog support](https://docs.datadoghq.com/help/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/resources/metric_metadata#type MetricMetadata#type}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

Primary unit of the metric such as `byte` or `operation`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/resources/metric_metadata#unit MetricMetadata#unit}

---



