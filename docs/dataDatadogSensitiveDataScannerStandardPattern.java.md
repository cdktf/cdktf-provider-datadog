# `dataDatadogSensitiveDataScannerStandardPattern` Submodule <a name="`dataDatadogSensitiveDataScannerStandardPattern` Submodule" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogSensitiveDataScannerStandardPattern <a name="DataDatadogSensitiveDataScannerStandardPattern" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/data-sources/sensitive_data_scanner_standard_pattern datadog_sensitive_data_scanner_standard_pattern}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_sensitive_data_scanner_standard_pattern.DataDatadogSensitiveDataScannerStandardPattern;

DataDatadogSensitiveDataScannerStandardPattern.Builder.create(Construct scope, java.lang.String id)
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
    .filter(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.filter">filter</a></code> | <code>java.lang.String</code> | Filter all the Datadog standard patterns by name. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/data-sources/sensitive_data_scanner_standard_pattern#id DataDatadogSensitiveDataScannerStandardPattern#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.filter"></a>

- *Type:* java.lang.String

Filter all the Datadog standard patterns by name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/data-sources/sensitive_data_scanner_standard_pattern#filter DataDatadogSensitiveDataScannerStandardPattern#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/data-sources/sensitive_data_scanner_standard_pattern#id DataDatadogSensitiveDataScannerStandardPattern#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogSensitiveDataScannerStandardPattern resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_sensitive_data_scanner_standard_pattern.DataDatadogSensitiveDataScannerStandardPattern;

DataDatadogSensitiveDataScannerStandardPattern.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_sensitive_data_scanner_standard_pattern.DataDatadogSensitiveDataScannerStandardPattern;

DataDatadogSensitiveDataScannerStandardPattern.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_sensitive_data_scanner_standard_pattern.DataDatadogSensitiveDataScannerStandardPattern;

DataDatadogSensitiveDataScannerStandardPattern.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_sensitive_data_scanner_standard_pattern.DataDatadogSensitiveDataScannerStandardPattern;

DataDatadogSensitiveDataScannerStandardPattern.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatadogSensitiveDataScannerStandardPattern.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDatadogSensitiveDataScannerStandardPattern resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatadogSensitiveDataScannerStandardPattern to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatadogSensitiveDataScannerStandardPattern that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/data-sources/sensitive_data_scanner_standard_pattern#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogSensitiveDataScannerStandardPattern to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.includedKeywords">includedKeywords</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.pattern">pattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `includedKeywords`<sup>Required</sup> <a name="includedKeywords" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.includedKeywords"></a>

```java
public java.util.List<java.lang.String> getIncludedKeywords();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogSensitiveDataScannerStandardPatternConfig <a name="DataDatadogSensitiveDataScannerStandardPatternConfig" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_sensitive_data_scanner_standard_pattern.DataDatadogSensitiveDataScannerStandardPatternConfig;

DataDatadogSensitiveDataScannerStandardPatternConfig.builder()
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
    .filter(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.filter">filter</a></code> | <code>java.lang.String</code> | Filter all the Datadog standard patterns by name. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/data-sources/sensitive_data_scanner_standard_pattern#id DataDatadogSensitiveDataScannerStandardPattern#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

Filter all the Datadog standard patterns by name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/data-sources/sensitive_data_scanner_standard_pattern#filter DataDatadogSensitiveDataScannerStandardPattern#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/data-sources/sensitive_data_scanner_standard_pattern#id DataDatadogSensitiveDataScannerStandardPattern#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



