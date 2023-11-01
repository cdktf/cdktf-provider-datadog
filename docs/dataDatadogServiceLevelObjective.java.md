# `data_datadog_service_level_objective`

Refer to the Terraform Registory for docs: [`data_datadog_service_level_objective`](https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/data-sources/service_level_objective).

# `dataDatadogServiceLevelObjective` Submodule <a name="`dataDatadogServiceLevelObjective` Submodule" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogServiceLevelObjective <a name="DataDatadogServiceLevelObjective" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/data-sources/service_level_objective datadog_service_level_objective}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_service_level_objective.DataDatadogServiceLevelObjective;

DataDatadogServiceLevelObjective.Builder.create(Construct scope, java.lang.String id)
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
//  .id(java.lang.String)
//  .metricsQuery(java.lang.String)
//  .nameQuery(java.lang.String)
//  .tagsQuery(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | A SLO ID to limit the search. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.metricsQuery">metricsQuery</a></code> | <code>java.lang.String</code> | Filter results based on SLO numerator and denominator. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.nameQuery">nameQuery</a></code> | <code>java.lang.String</code> | Filter results based on SLO names. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.tagsQuery">tagsQuery</a></code> | <code>java.lang.String</code> | Filter results based on a single SLO tag. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.id"></a>

- *Type:* java.lang.String

A SLO ID to limit the search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/data-sources/service_level_objective#id DataDatadogServiceLevelObjective#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metricsQuery`<sup>Optional</sup> <a name="metricsQuery" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.metricsQuery"></a>

- *Type:* java.lang.String

Filter results based on SLO numerator and denominator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/data-sources/service_level_objective#metrics_query DataDatadogServiceLevelObjective#metrics_query}

---

##### `nameQuery`<sup>Optional</sup> <a name="nameQuery" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.nameQuery"></a>

- *Type:* java.lang.String

Filter results based on SLO names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/data-sources/service_level_objective#name_query DataDatadogServiceLevelObjective#name_query}

---

##### `tagsQuery`<sup>Optional</sup> <a name="tagsQuery" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.tagsQuery"></a>

- *Type:* java.lang.String

Filter results based on a single SLO tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/data-sources/service_level_objective#tags_query DataDatadogServiceLevelObjective#tags_query}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.resetMetricsQuery">resetMetricsQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.resetNameQuery">resetNameQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.resetTagsQuery">resetTagsQuery</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.resetId"></a>

```java
public void resetId()
```

##### `resetMetricsQuery` <a name="resetMetricsQuery" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.resetMetricsQuery"></a>

```java
public void resetMetricsQuery()
```

##### `resetNameQuery` <a name="resetNameQuery" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.resetNameQuery"></a>

```java
public void resetNameQuery()
```

##### `resetTagsQuery` <a name="resetTagsQuery" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.resetTagsQuery"></a>

```java
public void resetTagsQuery()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogServiceLevelObjective resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_service_level_objective.DataDatadogServiceLevelObjective;

DataDatadogServiceLevelObjective.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_service_level_objective.DataDatadogServiceLevelObjective;

DataDatadogServiceLevelObjective.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_service_level_objective.DataDatadogServiceLevelObjective;

DataDatadogServiceLevelObjective.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_service_level_objective.DataDatadogServiceLevelObjective;

DataDatadogServiceLevelObjective.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatadogServiceLevelObjective.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDatadogServiceLevelObjective resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatadogServiceLevelObjective to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatadogServiceLevelObjective that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/data-sources/service_level_objective#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogServiceLevelObjective to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.query">query</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList">DataDatadogServiceLevelObjectiveQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.targetThreshold">targetThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.timeframe">timeframe</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.warningThreshold">warningThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.metricsQueryInput">metricsQueryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.nameQueryInput">nameQueryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.tagsQueryInput">tagsQueryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.metricsQuery">metricsQuery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.nameQuery">nameQuery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.tagsQuery">tagsQuery</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.query"></a>

```java
public DataDatadogServiceLevelObjectiveQueryList getQuery();
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList">DataDatadogServiceLevelObjectiveQueryList</a>

---

##### `targetThreshold`<sup>Required</sup> <a name="targetThreshold" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.targetThreshold"></a>

```java
public java.lang.Number getTargetThreshold();
```

- *Type:* java.lang.Number

---

##### `timeframe`<sup>Required</sup> <a name="timeframe" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.timeframe"></a>

```java
public java.lang.String getTimeframe();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `warningThreshold`<sup>Required</sup> <a name="warningThreshold" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.warningThreshold"></a>

```java
public java.lang.Number getWarningThreshold();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metricsQueryInput`<sup>Optional</sup> <a name="metricsQueryInput" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.metricsQueryInput"></a>

```java
public java.lang.String getMetricsQueryInput();
```

- *Type:* java.lang.String

---

##### `nameQueryInput`<sup>Optional</sup> <a name="nameQueryInput" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.nameQueryInput"></a>

```java
public java.lang.String getNameQueryInput();
```

- *Type:* java.lang.String

---

##### `tagsQueryInput`<sup>Optional</sup> <a name="tagsQueryInput" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.tagsQueryInput"></a>

```java
public java.lang.String getTagsQueryInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metricsQuery`<sup>Required</sup> <a name="metricsQuery" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.metricsQuery"></a>

```java
public java.lang.String getMetricsQuery();
```

- *Type:* java.lang.String

---

##### `nameQuery`<sup>Required</sup> <a name="nameQuery" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.nameQuery"></a>

```java
public java.lang.String getNameQuery();
```

- *Type:* java.lang.String

---

##### `tagsQuery`<sup>Required</sup> <a name="tagsQuery" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.tagsQuery"></a>

```java
public java.lang.String getTagsQuery();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogServiceLevelObjectiveConfig <a name="DataDatadogServiceLevelObjectiveConfig" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_service_level_objective.DataDatadogServiceLevelObjectiveConfig;

DataDatadogServiceLevelObjectiveConfig.builder()
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
//  .id(java.lang.String)
//  .metricsQuery(java.lang.String)
//  .nameQuery(java.lang.String)
//  .tagsQuery(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.id">id</a></code> | <code>java.lang.String</code> | A SLO ID to limit the search. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.metricsQuery">metricsQuery</a></code> | <code>java.lang.String</code> | Filter results based on SLO numerator and denominator. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.nameQuery">nameQuery</a></code> | <code>java.lang.String</code> | Filter results based on SLO names. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.tagsQuery">tagsQuery</a></code> | <code>java.lang.String</code> | Filter results based on a single SLO tag. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

A SLO ID to limit the search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/data-sources/service_level_objective#id DataDatadogServiceLevelObjective#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metricsQuery`<sup>Optional</sup> <a name="metricsQuery" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.metricsQuery"></a>

```java
public java.lang.String getMetricsQuery();
```

- *Type:* java.lang.String

Filter results based on SLO numerator and denominator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/data-sources/service_level_objective#metrics_query DataDatadogServiceLevelObjective#metrics_query}

---

##### `nameQuery`<sup>Optional</sup> <a name="nameQuery" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.nameQuery"></a>

```java
public java.lang.String getNameQuery();
```

- *Type:* java.lang.String

Filter results based on SLO names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/data-sources/service_level_objective#name_query DataDatadogServiceLevelObjective#name_query}

---

##### `tagsQuery`<sup>Optional</sup> <a name="tagsQuery" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.tagsQuery"></a>

```java
public java.lang.String getTagsQuery();
```

- *Type:* java.lang.String

Filter results based on a single SLO tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/data-sources/service_level_objective#tags_query DataDatadogServiceLevelObjective#tags_query}

---

### DataDatadogServiceLevelObjectiveQuery <a name="DataDatadogServiceLevelObjectiveQuery" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQuery.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_service_level_objective.DataDatadogServiceLevelObjectiveQuery;

DataDatadogServiceLevelObjectiveQuery.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogServiceLevelObjectiveQueryList <a name="DataDatadogServiceLevelObjectiveQueryList" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_service_level_objective.DataDatadogServiceLevelObjectiveQueryList;

new DataDatadogServiceLevelObjectiveQueryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.get"></a>

```java
public DataDatadogServiceLevelObjectiveQueryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataDatadogServiceLevelObjectiveQueryOutputReference <a name="DataDatadogServiceLevelObjectiveQueryOutputReference" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_service_level_objective.DataDatadogServiceLevelObjectiveQueryOutputReference;

new DataDatadogServiceLevelObjectiveQueryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.property.denominator">denominator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.property.numerator">numerator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQuery">DataDatadogServiceLevelObjectiveQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `denominator`<sup>Required</sup> <a name="denominator" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.property.denominator"></a>

```java
public java.lang.String getDenominator();
```

- *Type:* java.lang.String

---

##### `numerator`<sup>Required</sup> <a name="numerator" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.property.numerator"></a>

```java
public java.lang.String getNumerator();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.property.internalValue"></a>

```java
public DataDatadogServiceLevelObjectiveQuery getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQuery">DataDatadogServiceLevelObjectiveQuery</a>

---



