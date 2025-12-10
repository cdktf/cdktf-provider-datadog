# `dataDatadogReferenceTableRows` Submodule <a name="`dataDatadogReferenceTableRows` Submodule" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogReferenceTableRows <a name="DataDatadogReferenceTableRows" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/reference_table_rows datadog_reference_table_rows}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_reference_table_rows.DataDatadogReferenceTableRows;

DataDatadogReferenceTableRows.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .rowIds(java.util.List<java.lang.String>)
    .tableId(java.lang.String)
//  .rows(IResolvable|java.util.List<DataDatadogReferenceTableRowsRows>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.rowIds">rowIds</a></code> | <code>java.util.List<java.lang.String></code> | List of primary key values (row IDs) to retrieve. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.tableId">tableId</a></code> | <code>java.lang.String</code> | The UUID of the reference table to query rows from. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.rows">rows</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRows">DataDatadogReferenceTableRowsRows</a>></code> | rows block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `rowIds`<sup>Required</sup> <a name="rowIds" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.rowIds"></a>

- *Type:* java.util.List<java.lang.String>

List of primary key values (row IDs) to retrieve.

These are the values of the table's primary key field(s). Maximum 250 IDs per request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/reference_table_rows#row_ids DataDatadogReferenceTableRows#row_ids}

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.tableId"></a>

- *Type:* java.lang.String

The UUID of the reference table to query rows from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/reference_table_rows#table_id DataDatadogReferenceTableRows#table_id}

---

##### `rows`<sup>Optional</sup> <a name="rows" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.rows"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRows">DataDatadogReferenceTableRowsRows</a>>

rows block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/reference_table_rows#rows DataDatadogReferenceTableRows#rows}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.putRows">putRows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.resetRows">resetRows</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putRows` <a name="putRows" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.putRows"></a>

```java
public void putRows(IResolvable|java.util.List<DataDatadogReferenceTableRowsRows> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.putRows.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRows">DataDatadogReferenceTableRowsRows</a>>

---

##### `resetRows` <a name="resetRows" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.resetRows"></a>

```java
public void resetRows()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogReferenceTableRows resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_reference_table_rows.DataDatadogReferenceTableRows;

DataDatadogReferenceTableRows.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_reference_table_rows.DataDatadogReferenceTableRows;

DataDatadogReferenceTableRows.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_reference_table_rows.DataDatadogReferenceTableRows;

DataDatadogReferenceTableRows.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_reference_table_rows.DataDatadogReferenceTableRows;

DataDatadogReferenceTableRows.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatadogReferenceTableRows.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDatadogReferenceTableRows resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatadogReferenceTableRows to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatadogReferenceTableRows that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/reference_table_rows#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogReferenceTableRows to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.rows">rows</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList">DataDatadogReferenceTableRowsRowsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.rowIdsInput">rowIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.rowsInput">rowsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRows">DataDatadogReferenceTableRowsRows</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.tableIdInput">tableIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.rowIds">rowIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.tableId">tableId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.rows"></a>

```java
public DataDatadogReferenceTableRowsRowsList getRows();
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList">DataDatadogReferenceTableRowsRowsList</a>

---

##### `rowIdsInput`<sup>Optional</sup> <a name="rowIdsInput" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.rowIdsInput"></a>

```java
public java.util.List<java.lang.String> getRowIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `rowsInput`<sup>Optional</sup> <a name="rowsInput" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.rowsInput"></a>

```java
public IResolvable|java.util.List<DataDatadogReferenceTableRowsRows> getRowsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRows">DataDatadogReferenceTableRowsRows</a>>

---

##### `tableIdInput`<sup>Optional</sup> <a name="tableIdInput" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.tableIdInput"></a>

```java
public java.lang.String getTableIdInput();
```

- *Type:* java.lang.String

---

##### `rowIds`<sup>Required</sup> <a name="rowIds" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.rowIds"></a>

```java
public java.util.List<java.lang.String> getRowIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.tableId"></a>

```java
public java.lang.String getTableId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogReferenceTableRowsConfig <a name="DataDatadogReferenceTableRowsConfig" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_reference_table_rows.DataDatadogReferenceTableRowsConfig;

DataDatadogReferenceTableRowsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .rowIds(java.util.List<java.lang.String>)
    .tableId(java.lang.String)
//  .rows(IResolvable|java.util.List<DataDatadogReferenceTableRowsRows>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.rowIds">rowIds</a></code> | <code>java.util.List<java.lang.String></code> | List of primary key values (row IDs) to retrieve. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.tableId">tableId</a></code> | <code>java.lang.String</code> | The UUID of the reference table to query rows from. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.rows">rows</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRows">DataDatadogReferenceTableRowsRows</a>></code> | rows block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `rowIds`<sup>Required</sup> <a name="rowIds" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.rowIds"></a>

```java
public java.util.List<java.lang.String> getRowIds();
```

- *Type:* java.util.List<java.lang.String>

List of primary key values (row IDs) to retrieve.

These are the values of the table's primary key field(s). Maximum 250 IDs per request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/reference_table_rows#row_ids DataDatadogReferenceTableRows#row_ids}

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.tableId"></a>

```java
public java.lang.String getTableId();
```

- *Type:* java.lang.String

The UUID of the reference table to query rows from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/reference_table_rows#table_id DataDatadogReferenceTableRows#table_id}

---

##### `rows`<sup>Optional</sup> <a name="rows" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.rows"></a>

```java
public IResolvable|java.util.List<DataDatadogReferenceTableRowsRows> getRows();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRows">DataDatadogReferenceTableRowsRows</a>>

rows block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/reference_table_rows#rows DataDatadogReferenceTableRows#rows}

---

### DataDatadogReferenceTableRowsRows <a name="DataDatadogReferenceTableRowsRows" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRows"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRows.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_reference_table_rows.DataDatadogReferenceTableRowsRows;

DataDatadogReferenceTableRowsRows.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogReferenceTableRowsRowsList <a name="DataDatadogReferenceTableRowsRowsList" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_reference_table_rows.DataDatadogReferenceTableRowsRowsList;

new DataDatadogReferenceTableRowsRowsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.get"></a>

```java
public DataDatadogReferenceTableRowsRowsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRows">DataDatadogReferenceTableRowsRows</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatadogReferenceTableRowsRows> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRows">DataDatadogReferenceTableRowsRows</a>>

---


### DataDatadogReferenceTableRowsRowsOutputReference <a name="DataDatadogReferenceTableRowsRowsOutputReference" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_reference_table_rows.DataDatadogReferenceTableRowsRowsOutputReference;

new DataDatadogReferenceTableRowsRowsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.property.values">values</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRows">DataDatadogReferenceTableRowsRows</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.property.values"></a>

```java
public StringMap getValues();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatadogReferenceTableRowsRows getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRows">DataDatadogReferenceTableRowsRows</a>

---



