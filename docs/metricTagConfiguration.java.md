# `metricTagConfiguration` Submodule <a name="`metricTagConfiguration` Submodule" id="@cdktf/provider-datadog.metricTagConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MetricTagConfiguration <a name="MetricTagConfiguration" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/metric_tag_configuration datadog_metric_tag_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.metric_tag_configuration.MetricTagConfiguration;

MetricTagConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .metricName(java.lang.String)
    .metricType(java.lang.String)
    .tags(java.util.List<java.lang.String>)
//  .aggregations(IResolvable|java.util.List<MetricTagConfigurationAggregations>)
//  .excludeTagsMode(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .includePercentiles(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.metricName">metricName</a></code> | <code>java.lang.String</code> | The metric name for this resource. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.metricType">metricType</a></code> | <code>java.lang.String</code> | The metric's type. This field can't be updated after creation. Valid values are `gauge`, `count`, `rate`, `distribution`. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | A list of tag keys that will be queryable for your metric. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.aggregations">aggregations</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations">MetricTagConfigurationAggregations</a>></code> | aggregations block. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.excludeTagsMode">excludeTagsMode</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Toggle to include/exclude tags as queryable for your metric. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/metric_tag_configuration#id MetricTagConfiguration#id}. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.includePercentiles">includePercentiles</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Toggle to include/exclude percentiles for a distribution metric. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.metricName"></a>

- *Type:* java.lang.String

The metric name for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/metric_tag_configuration#metric_name MetricTagConfiguration#metric_name}

---

##### `metricType`<sup>Required</sup> <a name="metricType" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.metricType"></a>

- *Type:* java.lang.String

The metric's type. This field can't be updated after creation. Valid values are `gauge`, `count`, `rate`, `distribution`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/metric_tag_configuration#metric_type MetricTagConfiguration#metric_type}

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

A list of tag keys that will be queryable for your metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/metric_tag_configuration#tags MetricTagConfiguration#tags}

---

##### `aggregations`<sup>Optional</sup> <a name="aggregations" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.aggregations"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations">MetricTagConfigurationAggregations</a>>

aggregations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/metric_tag_configuration#aggregations MetricTagConfiguration#aggregations}

---

##### `excludeTagsMode`<sup>Optional</sup> <a name="excludeTagsMode" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.excludeTagsMode"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Toggle to include/exclude tags as queryable for your metric.

Can only be applied to metrics that have one or more tags configured. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/metric_tag_configuration#exclude_tags_mode MetricTagConfiguration#exclude_tags_mode}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/metric_tag_configuration#id MetricTagConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includePercentiles`<sup>Optional</sup> <a name="includePercentiles" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.includePercentiles"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Toggle to include/exclude percentiles for a distribution metric.

Defaults to false. Can only be applied to metrics that have a `metric_type` of distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/metric_tag_configuration#include_percentiles MetricTagConfiguration#include_percentiles}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.putAggregations">putAggregations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.resetAggregations">resetAggregations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.resetExcludeTagsMode">resetExcludeTagsMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.resetIncludePercentiles">resetIncludePercentiles</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAggregations` <a name="putAggregations" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.putAggregations"></a>

```java
public void putAggregations(IResolvable|java.util.List<MetricTagConfigurationAggregations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.putAggregations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations">MetricTagConfigurationAggregations</a>>

---

##### `resetAggregations` <a name="resetAggregations" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.resetAggregations"></a>

```java
public void resetAggregations()
```

##### `resetExcludeTagsMode` <a name="resetExcludeTagsMode" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.resetExcludeTagsMode"></a>

```java
public void resetExcludeTagsMode()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.resetId"></a>

```java
public void resetId()
```

##### `resetIncludePercentiles` <a name="resetIncludePercentiles" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.resetIncludePercentiles"></a>

```java
public void resetIncludePercentiles()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MetricTagConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.datadog.metric_tag_configuration.MetricTagConfiguration;

MetricTagConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.datadog.metric_tag_configuration.MetricTagConfiguration;

MetricTagConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.datadog.metric_tag_configuration.MetricTagConfiguration;

MetricTagConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.datadog.metric_tag_configuration.MetricTagConfiguration;

MetricTagConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MetricTagConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MetricTagConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MetricTagConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MetricTagConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/metric_tag_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MetricTagConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.aggregations">aggregations</a></code> | <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList">MetricTagConfigurationAggregationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.aggregationsInput">aggregationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations">MetricTagConfigurationAggregations</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.excludeTagsModeInput">excludeTagsModeInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.includePercentilesInput">includePercentilesInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.metricNameInput">metricNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.metricTypeInput">metricTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.excludeTagsMode">excludeTagsMode</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.includePercentiles">includePercentiles</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.metricType">metricType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aggregations`<sup>Required</sup> <a name="aggregations" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.aggregations"></a>

```java
public MetricTagConfigurationAggregationsList getAggregations();
```

- *Type:* <a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList">MetricTagConfigurationAggregationsList</a>

---

##### `aggregationsInput`<sup>Optional</sup> <a name="aggregationsInput" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.aggregationsInput"></a>

```java
public IResolvable|java.util.List<MetricTagConfigurationAggregations> getAggregationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations">MetricTagConfigurationAggregations</a>>

---

##### `excludeTagsModeInput`<sup>Optional</sup> <a name="excludeTagsModeInput" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.excludeTagsModeInput"></a>

```java
public java.lang.Boolean|IResolvable getExcludeTagsModeInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `includePercentilesInput`<sup>Optional</sup> <a name="includePercentilesInput" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.includePercentilesInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludePercentilesInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.metricNameInput"></a>

```java
public java.lang.String getMetricNameInput();
```

- *Type:* java.lang.String

---

##### `metricTypeInput`<sup>Optional</sup> <a name="metricTypeInput" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.metricTypeInput"></a>

```java
public java.lang.String getMetricTypeInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludeTagsMode`<sup>Required</sup> <a name="excludeTagsMode" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.excludeTagsMode"></a>

```java
public java.lang.Boolean|IResolvable getExcludeTagsMode();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `includePercentiles`<sup>Required</sup> <a name="includePercentiles" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.includePercentiles"></a>

```java
public java.lang.Boolean|IResolvable getIncludePercentiles();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `metricType`<sup>Required</sup> <a name="metricType" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.metricType"></a>

```java
public java.lang.String getMetricType();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MetricTagConfigurationAggregations <a name="MetricTagConfigurationAggregations" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.metric_tag_configuration.MetricTagConfigurationAggregations;

MetricTagConfigurationAggregations.builder()
    .space(java.lang.String)
    .time(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations.property.space">space</a></code> | <code>java.lang.String</code> | A space aggregation for use in query. Valid values are `avg`, `max`, `min`, `sum`. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations.property.time">time</a></code> | <code>java.lang.String</code> | A time aggregation for use in query. Valid values are `avg`, `count`, `max`, `min`, `sum`. |

---

##### `space`<sup>Required</sup> <a name="space" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations.property.space"></a>

```java
public java.lang.String getSpace();
```

- *Type:* java.lang.String

A space aggregation for use in query. Valid values are `avg`, `max`, `min`, `sum`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/metric_tag_configuration#space MetricTagConfiguration#space}

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations.property.time"></a>

```java
public java.lang.String getTime();
```

- *Type:* java.lang.String

A time aggregation for use in query. Valid values are `avg`, `count`, `max`, `min`, `sum`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/metric_tag_configuration#time MetricTagConfiguration#time}

---

### MetricTagConfigurationConfig <a name="MetricTagConfigurationConfig" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.metric_tag_configuration.MetricTagConfigurationConfig;

MetricTagConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .metricName(java.lang.String)
    .metricType(java.lang.String)
    .tags(java.util.List<java.lang.String>)
//  .aggregations(IResolvable|java.util.List<MetricTagConfigurationAggregations>)
//  .excludeTagsMode(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .includePercentiles(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.metricName">metricName</a></code> | <code>java.lang.String</code> | The metric name for this resource. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.metricType">metricType</a></code> | <code>java.lang.String</code> | The metric's type. This field can't be updated after creation. Valid values are `gauge`, `count`, `rate`, `distribution`. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | A list of tag keys that will be queryable for your metric. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.aggregations">aggregations</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations">MetricTagConfigurationAggregations</a>></code> | aggregations block. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.excludeTagsMode">excludeTagsMode</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Toggle to include/exclude tags as queryable for your metric. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/metric_tag_configuration#id MetricTagConfiguration#id}. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.includePercentiles">includePercentiles</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Toggle to include/exclude percentiles for a distribution metric. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

The metric name for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/metric_tag_configuration#metric_name MetricTagConfiguration#metric_name}

---

##### `metricType`<sup>Required</sup> <a name="metricType" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.metricType"></a>

```java
public java.lang.String getMetricType();
```

- *Type:* java.lang.String

The metric's type. This field can't be updated after creation. Valid values are `gauge`, `count`, `rate`, `distribution`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/metric_tag_configuration#metric_type MetricTagConfiguration#metric_type}

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

A list of tag keys that will be queryable for your metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/metric_tag_configuration#tags MetricTagConfiguration#tags}

---

##### `aggregations`<sup>Optional</sup> <a name="aggregations" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.aggregations"></a>

```java
public IResolvable|java.util.List<MetricTagConfigurationAggregations> getAggregations();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations">MetricTagConfigurationAggregations</a>>

aggregations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/metric_tag_configuration#aggregations MetricTagConfiguration#aggregations}

---

##### `excludeTagsMode`<sup>Optional</sup> <a name="excludeTagsMode" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.excludeTagsMode"></a>

```java
public java.lang.Boolean|IResolvable getExcludeTagsMode();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Toggle to include/exclude tags as queryable for your metric.

Can only be applied to metrics that have one or more tags configured. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/metric_tag_configuration#exclude_tags_mode MetricTagConfiguration#exclude_tags_mode}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/metric_tag_configuration#id MetricTagConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includePercentiles`<sup>Optional</sup> <a name="includePercentiles" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.includePercentiles"></a>

```java
public java.lang.Boolean|IResolvable getIncludePercentiles();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Toggle to include/exclude percentiles for a distribution metric.

Defaults to false. Can only be applied to metrics that have a `metric_type` of distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/metric_tag_configuration#include_percentiles MetricTagConfiguration#include_percentiles}

---

## Classes <a name="Classes" id="Classes"></a>

### MetricTagConfigurationAggregationsList <a name="MetricTagConfigurationAggregationsList" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.metric_tag_configuration.MetricTagConfigurationAggregationsList;

new MetricTagConfigurationAggregationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.get"></a>

```java
public MetricTagConfigurationAggregationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations">MetricTagConfigurationAggregations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MetricTagConfigurationAggregations> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations">MetricTagConfigurationAggregations</a>>

---


### MetricTagConfigurationAggregationsOutputReference <a name="MetricTagConfigurationAggregationsOutputReference" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.metric_tag_configuration.MetricTagConfigurationAggregationsOutputReference;

new MetricTagConfigurationAggregationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.spaceInput">spaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.timeInput">timeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.space">space</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.time">time</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations">MetricTagConfigurationAggregations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `spaceInput`<sup>Optional</sup> <a name="spaceInput" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.spaceInput"></a>

```java
public java.lang.String getSpaceInput();
```

- *Type:* java.lang.String

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.timeInput"></a>

```java
public java.lang.String getTimeInput();
```

- *Type:* java.lang.String

---

##### `space`<sup>Required</sup> <a name="space" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.space"></a>

```java
public java.lang.String getSpace();
```

- *Type:* java.lang.String

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.time"></a>

```java
public java.lang.String getTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.internalValue"></a>

```java
public IResolvable|MetricTagConfigurationAggregations getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations">MetricTagConfigurationAggregations</a>

---



