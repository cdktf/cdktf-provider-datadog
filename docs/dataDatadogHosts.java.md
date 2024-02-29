# `dataDatadogHosts` Submodule <a name="`dataDatadogHosts` Submodule" id="@cdktf/provider-datadog.dataDatadogHosts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogHosts <a name="DataDatadogHosts" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/data-sources/hosts datadog_hosts}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_hosts.DataDatadogHosts;

DataDatadogHosts.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(java.lang.String)
//  .from(java.lang.Number)
//  .includeMutedHostsData(java.lang.Boolean)
//  .includeMutedHostsData(IResolvable)
//  .sortDir(java.lang.String)
//  .sortField(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.filter">filter</a></code> | <code>java.lang.String</code> | String to filter search results. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.from">from</a></code> | <code>java.lang.Number</code> | Number of seconds since UNIX epoch from which you want to search your hosts. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.includeMutedHostsData">includeMutedHostsData</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Include information on the muted status of hosts and when the mute expires. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.sortDir">sortDir</a></code> | <code>java.lang.String</code> | Direction of sort. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.sortField">sortField</a></code> | <code>java.lang.String</code> | Sort hosts by this field. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.filter"></a>

- *Type:* java.lang.String

String to filter search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/data-sources/hosts#filter DataDatadogHosts#filter}

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.from"></a>

- *Type:* java.lang.Number

Number of seconds since UNIX epoch from which you want to search your hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/data-sources/hosts#from DataDatadogHosts#from}

---

##### `includeMutedHostsData`<sup>Optional</sup> <a name="includeMutedHostsData" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.includeMutedHostsData"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Include information on the muted status of hosts and when the mute expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/data-sources/hosts#include_muted_hosts_data DataDatadogHosts#include_muted_hosts_data}

---

##### `sortDir`<sup>Optional</sup> <a name="sortDir" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.sortDir"></a>

- *Type:* java.lang.String

Direction of sort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/data-sources/hosts#sort_dir DataDatadogHosts#sort_dir}

---

##### `sortField`<sup>Optional</sup> <a name="sortField" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.sortField"></a>

- *Type:* java.lang.String

Sort hosts by this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/data-sources/hosts#sort_field DataDatadogHosts#sort_field}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.resetFrom">resetFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.resetIncludeMutedHostsData">resetIncludeMutedHostsData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.resetSortDir">resetSortDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.resetSortField">resetSortField</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetFrom` <a name="resetFrom" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.resetFrom"></a>

```java
public void resetFrom()
```

##### `resetIncludeMutedHostsData` <a name="resetIncludeMutedHostsData" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.resetIncludeMutedHostsData"></a>

```java
public void resetIncludeMutedHostsData()
```

##### `resetSortDir` <a name="resetSortDir" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.resetSortDir"></a>

```java
public void resetSortDir()
```

##### `resetSortField` <a name="resetSortField" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.resetSortField"></a>

```java
public void resetSortField()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogHosts resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_hosts.DataDatadogHosts;

DataDatadogHosts.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_hosts.DataDatadogHosts;

DataDatadogHosts.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_hosts.DataDatadogHosts;

DataDatadogHosts.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_hosts.DataDatadogHosts;

DataDatadogHosts.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatadogHosts.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDatadogHosts resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatadogHosts to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatadogHosts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/data-sources/hosts#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogHosts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.hostList">hostList</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList">DataDatadogHostsHostListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.totalMatching">totalMatching</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.totalReturned">totalReturned</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.fromInput">fromInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.includeMutedHostsDataInput">includeMutedHostsDataInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.sortDirInput">sortDirInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.sortFieldInput">sortFieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.from">from</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.includeMutedHostsData">includeMutedHostsData</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.sortDir">sortDir</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.sortField">sortField</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `hostList`<sup>Required</sup> <a name="hostList" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.hostList"></a>

```java
public DataDatadogHostsHostListStructList getHostList();
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList">DataDatadogHostsHostListStructList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `totalMatching`<sup>Required</sup> <a name="totalMatching" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.totalMatching"></a>

```java
public java.lang.Number getTotalMatching();
```

- *Type:* java.lang.Number

---

##### `totalReturned`<sup>Required</sup> <a name="totalReturned" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.totalReturned"></a>

```java
public java.lang.Number getTotalReturned();
```

- *Type:* java.lang.Number

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.fromInput"></a>

```java
public java.lang.Number getFromInput();
```

- *Type:* java.lang.Number

---

##### `includeMutedHostsDataInput`<sup>Optional</sup> <a name="includeMutedHostsDataInput" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.includeMutedHostsDataInput"></a>

```java
public java.lang.Object getIncludeMutedHostsDataInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sortDirInput`<sup>Optional</sup> <a name="sortDirInput" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.sortDirInput"></a>

```java
public java.lang.String getSortDirInput();
```

- *Type:* java.lang.String

---

##### `sortFieldInput`<sup>Optional</sup> <a name="sortFieldInput" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.sortFieldInput"></a>

```java
public java.lang.String getSortFieldInput();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.from"></a>

```java
public java.lang.Number getFrom();
```

- *Type:* java.lang.Number

---

##### `includeMutedHostsData`<sup>Required</sup> <a name="includeMutedHostsData" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.includeMutedHostsData"></a>

```java
public java.lang.Object getIncludeMutedHostsData();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sortDir`<sup>Required</sup> <a name="sortDir" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.sortDir"></a>

```java
public java.lang.String getSortDir();
```

- *Type:* java.lang.String

---

##### `sortField`<sup>Required</sup> <a name="sortField" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.sortField"></a>

```java
public java.lang.String getSortField();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogHostsConfig <a name="DataDatadogHostsConfig" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_hosts.DataDatadogHostsConfig;

DataDatadogHostsConfig.builder()
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
//  .filter(java.lang.String)
//  .from(java.lang.Number)
//  .includeMutedHostsData(java.lang.Boolean)
//  .includeMutedHostsData(IResolvable)
//  .sortDir(java.lang.String)
//  .sortField(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.filter">filter</a></code> | <code>java.lang.String</code> | String to filter search results. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.from">from</a></code> | <code>java.lang.Number</code> | Number of seconds since UNIX epoch from which you want to search your hosts. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.includeMutedHostsData">includeMutedHostsData</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Include information on the muted status of hosts and when the mute expires. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.sortDir">sortDir</a></code> | <code>java.lang.String</code> | Direction of sort. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.sortField">sortField</a></code> | <code>java.lang.String</code> | Sort hosts by this field. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

String to filter search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/data-sources/hosts#filter DataDatadogHosts#filter}

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.from"></a>

```java
public java.lang.Number getFrom();
```

- *Type:* java.lang.Number

Number of seconds since UNIX epoch from which you want to search your hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/data-sources/hosts#from DataDatadogHosts#from}

---

##### `includeMutedHostsData`<sup>Optional</sup> <a name="includeMutedHostsData" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.includeMutedHostsData"></a>

```java
public java.lang.Object getIncludeMutedHostsData();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Include information on the muted status of hosts and when the mute expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/data-sources/hosts#include_muted_hosts_data DataDatadogHosts#include_muted_hosts_data}

---

##### `sortDir`<sup>Optional</sup> <a name="sortDir" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.sortDir"></a>

```java
public java.lang.String getSortDir();
```

- *Type:* java.lang.String

Direction of sort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/data-sources/hosts#sort_dir DataDatadogHosts#sort_dir}

---

##### `sortField`<sup>Optional</sup> <a name="sortField" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.sortField"></a>

```java
public java.lang.String getSortField();
```

- *Type:* java.lang.String

Sort hosts by this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/data-sources/hosts#sort_field DataDatadogHosts#sort_field}

---

### DataDatadogHostsHostListMeta <a name="DataDatadogHostsHostListMeta" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMeta"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMeta.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_hosts.DataDatadogHostsHostListMeta;

DataDatadogHostsHostListMeta.builder()
    .build();
```


### DataDatadogHostsHostListMetrics <a name="DataDatadogHostsHostListMetrics" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetrics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_hosts.DataDatadogHostsHostListMetrics;

DataDatadogHostsHostListMetrics.builder()
    .build();
```


### DataDatadogHostsHostListStruct <a name="DataDatadogHostsHostListStruct" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStruct.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_hosts.DataDatadogHostsHostListStruct;

DataDatadogHostsHostListStruct.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogHostsHostListMetaOutputReference <a name="DataDatadogHostsHostListMetaOutputReference" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_hosts.DataDatadogHostsHostListMetaOutputReference;

new DataDatadogHostsHostListMetaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.agentVersion">agentVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.cpuCores">cpuCores</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.gohai">gohai</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.machine">machine</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.platform">platform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.processor">processor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.pythonVersion">pythonVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.socketFqdn">socketFqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.socketHostname">socketHostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMeta">DataDatadogHostsHostListMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `agentVersion`<sup>Required</sup> <a name="agentVersion" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.agentVersion"></a>

```java
public java.lang.String getAgentVersion();
```

- *Type:* java.lang.String

---

##### `cpuCores`<sup>Required</sup> <a name="cpuCores" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.cpuCores"></a>

```java
public java.lang.Number getCpuCores();
```

- *Type:* java.lang.Number

---

##### `gohai`<sup>Required</sup> <a name="gohai" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.gohai"></a>

```java
public java.lang.String getGohai();
```

- *Type:* java.lang.String

---

##### `machine`<sup>Required</sup> <a name="machine" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.machine"></a>

```java
public java.lang.String getMachine();
```

- *Type:* java.lang.String

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.platform"></a>

```java
public java.lang.String getPlatform();
```

- *Type:* java.lang.String

---

##### `processor`<sup>Required</sup> <a name="processor" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.processor"></a>

```java
public java.lang.String getProcessor();
```

- *Type:* java.lang.String

---

##### `pythonVersion`<sup>Required</sup> <a name="pythonVersion" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.pythonVersion"></a>

```java
public java.lang.String getPythonVersion();
```

- *Type:* java.lang.String

---

##### `socketFqdn`<sup>Required</sup> <a name="socketFqdn" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.socketFqdn"></a>

```java
public java.lang.String getSocketFqdn();
```

- *Type:* java.lang.String

---

##### `socketHostname`<sup>Required</sup> <a name="socketHostname" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.socketHostname"></a>

```java
public java.lang.String getSocketHostname();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.internalValue"></a>

```java
public DataDatadogHostsHostListMeta getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMeta">DataDatadogHostsHostListMeta</a>

---


### DataDatadogHostsHostListMetricsOutputReference <a name="DataDatadogHostsHostListMetricsOutputReference" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_hosts.DataDatadogHostsHostListMetricsOutputReference;

new DataDatadogHostsHostListMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.property.cpu">cpu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.property.iowait">iowait</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.property.load">load</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetrics">DataDatadogHostsHostListMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.property.cpu"></a>

```java
public java.lang.Number getCpu();
```

- *Type:* java.lang.Number

---

##### `iowait`<sup>Required</sup> <a name="iowait" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.property.iowait"></a>

```java
public java.lang.Number getIowait();
```

- *Type:* java.lang.Number

---

##### `load`<sup>Required</sup> <a name="load" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.property.load"></a>

```java
public java.lang.Number getLoad();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.property.internalValue"></a>

```java
public DataDatadogHostsHostListMetrics getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetrics">DataDatadogHostsHostListMetrics</a>

---


### DataDatadogHostsHostListStructList <a name="DataDatadogHostsHostListStructList" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_hosts.DataDatadogHostsHostListStructList;

new DataDatadogHostsHostListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList.get"></a>

```java
public DataDatadogHostsHostListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataDatadogHostsHostListStructOutputReference <a name="DataDatadogHostsHostListStructOutputReference" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_hosts.DataDatadogHostsHostListStructOutputReference;

new DataDatadogHostsHostListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.aliases">aliases</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.apps">apps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.awsName">awsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.hostName">hostName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.id">id</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.isMuted">isMuted</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.lastReportedTime">lastReportedTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.meta">meta</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference">DataDatadogHostsHostListMetaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.metrics">metrics</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference">DataDatadogHostsHostListMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.muteTimeout">muteTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.sources">sources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.up">up</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStruct">DataDatadogHostsHostListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aliases`<sup>Required</sup> <a name="aliases" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.aliases"></a>

```java
public java.util.List<java.lang.String> getAliases();
```

- *Type:* java.util.List<java.lang.String>

---

##### `apps`<sup>Required</sup> <a name="apps" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.apps"></a>

```java
public java.util.List<java.lang.String> getApps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `awsName`<sup>Required</sup> <a name="awsName" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.awsName"></a>

```java
public java.lang.String getAwsName();
```

- *Type:* java.lang.String

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

---

##### `isMuted`<sup>Required</sup> <a name="isMuted" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.isMuted"></a>

```java
public IResolvable getIsMuted();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lastReportedTime`<sup>Required</sup> <a name="lastReportedTime" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.lastReportedTime"></a>

```java
public java.lang.Number getLastReportedTime();
```

- *Type:* java.lang.Number

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.meta"></a>

```java
public DataDatadogHostsHostListMetaOutputReference getMeta();
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference">DataDatadogHostsHostListMetaOutputReference</a>

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.metrics"></a>

```java
public DataDatadogHostsHostListMetricsOutputReference getMetrics();
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference">DataDatadogHostsHostListMetricsOutputReference</a>

---

##### `muteTimeout`<sup>Required</sup> <a name="muteTimeout" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.muteTimeout"></a>

```java
public java.lang.Number getMuteTimeout();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.sources"></a>

```java
public java.util.List<java.lang.String> getSources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `up`<sup>Required</sup> <a name="up" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.up"></a>

```java
public IResolvable getUp();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.internalValue"></a>

```java
public DataDatadogHostsHostListStruct getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStruct">DataDatadogHostsHostListStruct</a>

---



