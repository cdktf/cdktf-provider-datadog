# `dataDatadogRumRetentionFilters` Submodule <a name="`dataDatadogRumRetentionFilters` Submodule" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogRumRetentionFilters <a name="DataDatadogRumRetentionFilters" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/data-sources/rum_retention_filters datadog_rum_retention_filters}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_rum_retention_filters.DataDatadogRumRetentionFilters;

DataDatadogRumRetentionFilters.Builder.create(Construct scope, java.lang.String id)
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
    .applicationId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | RUM application ID. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

RUM application ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/data-sources/rum_retention_filters#application_id DataDatadogRumRetentionFilters#application_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogRumRetentionFilters resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_rum_retention_filters.DataDatadogRumRetentionFilters;

DataDatadogRumRetentionFilters.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_rum_retention_filters.DataDatadogRumRetentionFilters;

DataDatadogRumRetentionFilters.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_rum_retention_filters.DataDatadogRumRetentionFilters;

DataDatadogRumRetentionFilters.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_rum_retention_filters.DataDatadogRumRetentionFilters;

DataDatadogRumRetentionFilters.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatadogRumRetentionFilters.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDatadogRumRetentionFilters resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatadogRumRetentionFilters to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatadogRumRetentionFilters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/data-sources/rum_retention_filters#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogRumRetentionFilters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.property.retentionFilters">retentionFilters</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersList">DataDatadogRumRetentionFiltersRetentionFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `retentionFilters`<sup>Required</sup> <a name="retentionFilters" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.property.retentionFilters"></a>

```java
public DataDatadogRumRetentionFiltersRetentionFiltersList getRetentionFilters();
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersList">DataDatadogRumRetentionFiltersRetentionFiltersList</a>

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFilters.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogRumRetentionFiltersConfig <a name="DataDatadogRumRetentionFiltersConfig" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_rum_retention_filters.DataDatadogRumRetentionFiltersConfig;

DataDatadogRumRetentionFiltersConfig.builder()
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
    .applicationId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | RUM application ID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

RUM application ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/data-sources/rum_retention_filters#application_id DataDatadogRumRetentionFilters#application_id}

---

### DataDatadogRumRetentionFiltersRetentionFilters <a name="DataDatadogRumRetentionFiltersRetentionFilters" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFilters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_rum_retention_filters.DataDatadogRumRetentionFiltersRetentionFilters;

DataDatadogRumRetentionFiltersRetentionFilters.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogRumRetentionFiltersRetentionFiltersList <a name="DataDatadogRumRetentionFiltersRetentionFiltersList" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_rum_retention_filters.DataDatadogRumRetentionFiltersRetentionFiltersList;

new DataDatadogRumRetentionFiltersRetentionFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersList.get"></a>

```java
public DataDatadogRumRetentionFiltersRetentionFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataDatadogRumRetentionFiltersRetentionFiltersOutputReference <a name="DataDatadogRumRetentionFiltersRetentionFiltersOutputReference" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_rum_retention_filters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference;

new DataDatadogRumRetentionFiltersRetentionFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.property.eventType">eventType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.property.sampleRate">sampleRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFilters">DataDatadogRumRetentionFiltersRetentionFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.property.eventType"></a>

```java
public java.lang.String getEventType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `sampleRate`<sup>Required</sup> <a name="sampleRate" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.property.sampleRate"></a>

```java
public java.lang.Number getSampleRate();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFiltersOutputReference.property.internalValue"></a>

```java
public DataDatadogRumRetentionFiltersRetentionFilters getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogRumRetentionFilters.DataDatadogRumRetentionFiltersRetentionFilters">DataDatadogRumRetentionFiltersRetentionFilters</a>

---



