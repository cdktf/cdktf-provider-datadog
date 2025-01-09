# `dataDatadogMonitors` Submodule <a name="`dataDatadogMonitors` Submodule" id="@cdktf/provider-datadog.dataDatadogMonitors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogMonitors <a name="DataDatadogMonitors" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/data-sources/monitors datadog_monitors}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_monitors.DataDatadogMonitors;

DataDatadogMonitors.Builder.create(Construct scope, java.lang.String id)
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
//  .monitorTagsFilter(java.util.List<java.lang.String>)
//  .nameFilter(java.lang.String)
//  .tagsFilter(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/data-sources/monitors#id DataDatadogMonitors#id}. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.monitorTagsFilter">monitorTagsFilter</a></code> | <code>java.util.List<java.lang.String></code> | A list of monitor tags to limit the search. This filters on the tags set on the monitor itself. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.nameFilter">nameFilter</a></code> | <code>java.lang.String</code> | A monitor name to limit the search. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.tagsFilter">tagsFilter</a></code> | <code>java.util.List<java.lang.String></code> | A list of tags to limit the search. This filters on the monitor scope. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/data-sources/monitors#id DataDatadogMonitors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `monitorTagsFilter`<sup>Optional</sup> <a name="monitorTagsFilter" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.monitorTagsFilter"></a>

- *Type:* java.util.List<java.lang.String>

A list of monitor tags to limit the search. This filters on the tags set on the monitor itself.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/data-sources/monitors#monitor_tags_filter DataDatadogMonitors#monitor_tags_filter}

---

##### `nameFilter`<sup>Optional</sup> <a name="nameFilter" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.nameFilter"></a>

- *Type:* java.lang.String

A monitor name to limit the search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/data-sources/monitors#name_filter DataDatadogMonitors#name_filter}

---

##### `tagsFilter`<sup>Optional</sup> <a name="tagsFilter" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.tagsFilter"></a>

- *Type:* java.util.List<java.lang.String>

A list of tags to limit the search. This filters on the monitor scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/data-sources/monitors#tags_filter DataDatadogMonitors#tags_filter}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.resetMonitorTagsFilter">resetMonitorTagsFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.resetNameFilter">resetNameFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.resetTagsFilter">resetTagsFilter</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.resetId"></a>

```java
public void resetId()
```

##### `resetMonitorTagsFilter` <a name="resetMonitorTagsFilter" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.resetMonitorTagsFilter"></a>

```java
public void resetMonitorTagsFilter()
```

##### `resetNameFilter` <a name="resetNameFilter" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.resetNameFilter"></a>

```java
public void resetNameFilter()
```

##### `resetTagsFilter` <a name="resetTagsFilter" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.resetTagsFilter"></a>

```java
public void resetTagsFilter()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogMonitors resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_monitors.DataDatadogMonitors;

DataDatadogMonitors.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_monitors.DataDatadogMonitors;

DataDatadogMonitors.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_monitors.DataDatadogMonitors;

DataDatadogMonitors.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_monitors.DataDatadogMonitors;

DataDatadogMonitors.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatadogMonitors.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDatadogMonitors resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatadogMonitors to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatadogMonitors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/data-sources/monitors#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogMonitors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.monitors">monitors</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList">DataDatadogMonitorsMonitorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.monitorTagsFilterInput">monitorTagsFilterInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.nameFilterInput">nameFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.tagsFilterInput">tagsFilterInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.monitorTagsFilter">monitorTagsFilter</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.nameFilter">nameFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.tagsFilter">tagsFilter</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `monitors`<sup>Required</sup> <a name="monitors" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.monitors"></a>

```java
public DataDatadogMonitorsMonitorsList getMonitors();
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList">DataDatadogMonitorsMonitorsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `monitorTagsFilterInput`<sup>Optional</sup> <a name="monitorTagsFilterInput" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.monitorTagsFilterInput"></a>

```java
public java.util.List<java.lang.String> getMonitorTagsFilterInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameFilterInput`<sup>Optional</sup> <a name="nameFilterInput" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.nameFilterInput"></a>

```java
public java.lang.String getNameFilterInput();
```

- *Type:* java.lang.String

---

##### `tagsFilterInput`<sup>Optional</sup> <a name="tagsFilterInput" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.tagsFilterInput"></a>

```java
public java.util.List<java.lang.String> getTagsFilterInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `monitorTagsFilter`<sup>Required</sup> <a name="monitorTagsFilter" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.monitorTagsFilter"></a>

```java
public java.util.List<java.lang.String> getMonitorTagsFilter();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameFilter`<sup>Required</sup> <a name="nameFilter" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.nameFilter"></a>

```java
public java.lang.String getNameFilter();
```

- *Type:* java.lang.String

---

##### `tagsFilter`<sup>Required</sup> <a name="tagsFilter" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.tagsFilter"></a>

```java
public java.util.List<java.lang.String> getTagsFilter();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogMonitorsConfig <a name="DataDatadogMonitorsConfig" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_monitors.DataDatadogMonitorsConfig;

DataDatadogMonitorsConfig.builder()
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
//  .monitorTagsFilter(java.util.List<java.lang.String>)
//  .nameFilter(java.lang.String)
//  .tagsFilter(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/data-sources/monitors#id DataDatadogMonitors#id}. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig.property.monitorTagsFilter">monitorTagsFilter</a></code> | <code>java.util.List<java.lang.String></code> | A list of monitor tags to limit the search. This filters on the tags set on the monitor itself. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig.property.nameFilter">nameFilter</a></code> | <code>java.lang.String</code> | A monitor name to limit the search. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig.property.tagsFilter">tagsFilter</a></code> | <code>java.util.List<java.lang.String></code> | A list of tags to limit the search. This filters on the monitor scope. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/data-sources/monitors#id DataDatadogMonitors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `monitorTagsFilter`<sup>Optional</sup> <a name="monitorTagsFilter" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig.property.monitorTagsFilter"></a>

```java
public java.util.List<java.lang.String> getMonitorTagsFilter();
```

- *Type:* java.util.List<java.lang.String>

A list of monitor tags to limit the search. This filters on the tags set on the monitor itself.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/data-sources/monitors#monitor_tags_filter DataDatadogMonitors#monitor_tags_filter}

---

##### `nameFilter`<sup>Optional</sup> <a name="nameFilter" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig.property.nameFilter"></a>

```java
public java.lang.String getNameFilter();
```

- *Type:* java.lang.String

A monitor name to limit the search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/data-sources/monitors#name_filter DataDatadogMonitors#name_filter}

---

##### `tagsFilter`<sup>Optional</sup> <a name="tagsFilter" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig.property.tagsFilter"></a>

```java
public java.util.List<java.lang.String> getTagsFilter();
```

- *Type:* java.util.List<java.lang.String>

A list of tags to limit the search. This filters on the monitor scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/data-sources/monitors#tags_filter DataDatadogMonitors#tags_filter}

---

### DataDatadogMonitorsMonitors <a name="DataDatadogMonitorsMonitors" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_monitors.DataDatadogMonitorsMonitors;

DataDatadogMonitorsMonitors.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogMonitorsMonitorsList <a name="DataDatadogMonitorsMonitorsList" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_monitors.DataDatadogMonitorsMonitorsList;

new DataDatadogMonitorsMonitorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.get"></a>

```java
public DataDatadogMonitorsMonitorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataDatadogMonitorsMonitorsOutputReference <a name="DataDatadogMonitorsMonitorsOutputReference" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_monitors.DataDatadogMonitorsMonitorsOutputReference;

new DataDatadogMonitorsMonitorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.property.id">id</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitors">DataDatadogMonitorsMonitors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.property.internalValue"></a>

```java
public DataDatadogMonitorsMonitors getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitors">DataDatadogMonitorsMonitors</a>

---



