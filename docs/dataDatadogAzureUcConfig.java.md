# `dataDatadogAzureUcConfig` Submodule <a name="`dataDatadogAzureUcConfig` Submodule" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogAzureUcConfig <a name="DataDatadogAzureUcConfig" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/data-sources/azure_uc_config datadog_azure_uc_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_azure_uc_config.DataDatadogAzureUcConfig;

DataDatadogAzureUcConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .cloudAccountId(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.cloudAccountId">cloudAccountId</a></code> | <code>java.lang.Number</code> | The Datadog cloud account ID for the Azure Usage Cost configuration you want to retrieve information about. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cloudAccountId`<sup>Required</sup> <a name="cloudAccountId" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.cloudAccountId"></a>

- *Type:* java.lang.Number

The Datadog cloud account ID for the Azure Usage Cost configuration you want to retrieve information about.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/data-sources/azure_uc_config#cloud_account_id DataDatadogAzureUcConfig#cloud_account_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogAzureUcConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_azure_uc_config.DataDatadogAzureUcConfig;

DataDatadogAzureUcConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_azure_uc_config.DataDatadogAzureUcConfig;

DataDatadogAzureUcConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_azure_uc_config.DataDatadogAzureUcConfig;

DataDatadogAzureUcConfig.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_azure_uc_config.DataDatadogAzureUcConfig;

DataDatadogAzureUcConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatadogAzureUcConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDatadogAzureUcConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatadogAzureUcConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatadogAzureUcConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/data-sources/azure_uc_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogAzureUcConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.actualBillConfig">actualBillConfig</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference">DataDatadogAzureUcConfigActualBillConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.amortizedBillConfig">amortizedBillConfig</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference">DataDatadogAzureUcConfigAmortizedBillConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.errorMessages">errorMessages</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.statusUpdatedAt">statusUpdatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.cloudAccountIdInput">cloudAccountIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.cloudAccountId">cloudAccountId</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `actualBillConfig`<sup>Required</sup> <a name="actualBillConfig" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.actualBillConfig"></a>

```java
public DataDatadogAzureUcConfigActualBillConfigOutputReference getActualBillConfig();
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference">DataDatadogAzureUcConfigActualBillConfigOutputReference</a>

---

##### `amortizedBillConfig`<sup>Required</sup> <a name="amortizedBillConfig" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.amortizedBillConfig"></a>

```java
public DataDatadogAzureUcConfigAmortizedBillConfigOutputReference getAmortizedBillConfig();
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference">DataDatadogAzureUcConfigAmortizedBillConfigOutputReference</a>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `errorMessages`<sup>Required</sup> <a name="errorMessages" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.errorMessages"></a>

```java
public java.util.List<java.lang.String> getErrorMessages();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusUpdatedAt`<sup>Required</sup> <a name="statusUpdatedAt" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.statusUpdatedAt"></a>

```java
public java.lang.String getStatusUpdatedAt();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `cloudAccountIdInput`<sup>Optional</sup> <a name="cloudAccountIdInput" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.cloudAccountIdInput"></a>

```java
public java.lang.Number getCloudAccountIdInput();
```

- *Type:* java.lang.Number

---

##### `cloudAccountId`<sup>Required</sup> <a name="cloudAccountId" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.cloudAccountId"></a>

```java
public java.lang.Number getCloudAccountId();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogAzureUcConfigActualBillConfig <a name="DataDatadogAzureUcConfigActualBillConfig" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_azure_uc_config.DataDatadogAzureUcConfigActualBillConfig;

DataDatadogAzureUcConfigActualBillConfig.builder()
    .build();
```


### DataDatadogAzureUcConfigAmortizedBillConfig <a name="DataDatadogAzureUcConfigAmortizedBillConfig" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_azure_uc_config.DataDatadogAzureUcConfigAmortizedBillConfig;

DataDatadogAzureUcConfigAmortizedBillConfig.builder()
    .build();
```


### DataDatadogAzureUcConfigConfig <a name="DataDatadogAzureUcConfigConfig" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_azure_uc_config.DataDatadogAzureUcConfigConfig;

DataDatadogAzureUcConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .cloudAccountId(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.cloudAccountId">cloudAccountId</a></code> | <code>java.lang.Number</code> | The Datadog cloud account ID for the Azure Usage Cost configuration you want to retrieve information about. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cloudAccountId`<sup>Required</sup> <a name="cloudAccountId" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.cloudAccountId"></a>

```java
public java.lang.Number getCloudAccountId();
```

- *Type:* java.lang.Number

The Datadog cloud account ID for the Azure Usage Cost configuration you want to retrieve information about.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/data-sources/azure_uc_config#cloud_account_id DataDatadogAzureUcConfig#cloud_account_id}

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatadogAzureUcConfigActualBillConfigOutputReference <a name="DataDatadogAzureUcConfigActualBillConfigOutputReference" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_azure_uc_config.DataDatadogAzureUcConfigActualBillConfigOutputReference;

new DataDatadogAzureUcConfigActualBillConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.exportName">exportName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.exportPath">exportPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.storageAccount">storageAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.storageContainer">storageContainer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfig">DataDatadogAzureUcConfigActualBillConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exportName`<sup>Required</sup> <a name="exportName" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.exportName"></a>

```java
public java.lang.String getExportName();
```

- *Type:* java.lang.String

---

##### `exportPath`<sup>Required</sup> <a name="exportPath" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.exportPath"></a>

```java
public java.lang.String getExportPath();
```

- *Type:* java.lang.String

---

##### `storageAccount`<sup>Required</sup> <a name="storageAccount" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.storageAccount"></a>

```java
public java.lang.String getStorageAccount();
```

- *Type:* java.lang.String

---

##### `storageContainer`<sup>Required</sup> <a name="storageContainer" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.storageContainer"></a>

```java
public java.lang.String getStorageContainer();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatadogAzureUcConfigActualBillConfig getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfig">DataDatadogAzureUcConfigActualBillConfig</a>

---


### DataDatadogAzureUcConfigAmortizedBillConfigOutputReference <a name="DataDatadogAzureUcConfigAmortizedBillConfigOutputReference" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_azure_uc_config.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference;

new DataDatadogAzureUcConfigAmortizedBillConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.exportName">exportName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.exportPath">exportPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.storageAccount">storageAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.storageContainer">storageContainer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfig">DataDatadogAzureUcConfigAmortizedBillConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exportName`<sup>Required</sup> <a name="exportName" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.exportName"></a>

```java
public java.lang.String getExportName();
```

- *Type:* java.lang.String

---

##### `exportPath`<sup>Required</sup> <a name="exportPath" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.exportPath"></a>

```java
public java.lang.String getExportPath();
```

- *Type:* java.lang.String

---

##### `storageAccount`<sup>Required</sup> <a name="storageAccount" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.storageAccount"></a>

```java
public java.lang.String getStorageAccount();
```

- *Type:* java.lang.String

---

##### `storageContainer`<sup>Required</sup> <a name="storageContainer" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.storageContainer"></a>

```java
public java.lang.String getStorageContainer();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatadogAzureUcConfigAmortizedBillConfig getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfig">DataDatadogAzureUcConfigAmortizedBillConfig</a>

---



