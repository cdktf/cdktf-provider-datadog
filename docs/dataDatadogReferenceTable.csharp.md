# `dataDatadogReferenceTable` Submodule <a name="`dataDatadogReferenceTable` Submodule" id="@cdktf/provider-datadog.dataDatadogReferenceTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogReferenceTable <a name="DataDatadogReferenceTable" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/reference_table datadog_reference_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogReferenceTable(Construct Scope, string Id, DataDatadogReferenceTableConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig">DataDatadogReferenceTableConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig">DataDatadogReferenceTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.putSchema">PutSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.resetSchema">ResetSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.resetTableName">ResetTableName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutSchema` <a name="PutSchema" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.putSchema"></a>

```csharp
private void PutSchema(DataDatadogReferenceTableSchema Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchema">DataDatadogReferenceTableSchema</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.resetSchema"></a>

```csharp
private void ResetSchema()
```

##### `ResetTableName` <a name="ResetTableName" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.resetTableName"></a>

```csharp
private void ResetTableName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogReferenceTable resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogReferenceTable.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogReferenceTable.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogReferenceTable.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogReferenceTable.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatadogReferenceTable resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogReferenceTable to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogReferenceTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/reference_table#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogReferenceTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.fileMetadata">FileMetadata</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference">DataDatadogReferenceTableFileMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.lastUpdatedBy">LastUpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.rowCount">RowCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.schema">Schema</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference">DataDatadogReferenceTableSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.schemaInput">SchemaInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchema">DataDatadogReferenceTableSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FileMetadata`<sup>Required</sup> <a name="FileMetadata" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.fileMetadata"></a>

```csharp
public DataDatadogReferenceTableFileMetadataOutputReference FileMetadata { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference">DataDatadogReferenceTableFileMetadataOutputReference</a>

---

##### `LastUpdatedBy`<sup>Required</sup> <a name="LastUpdatedBy" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.lastUpdatedBy"></a>

```csharp
public string LastUpdatedBy { get; }
```

- *Type:* string

---

##### `RowCount`<sup>Required</sup> <a name="RowCount" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.rowCount"></a>

```csharp
public double RowCount { get; }
```

- *Type:* double

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.schema"></a>

```csharp
public DataDatadogReferenceTableSchemaOutputReference Schema { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference">DataDatadogReferenceTableSchemaOutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.schemaInput"></a>

```csharp
public IResolvable|DataDatadogReferenceTableSchema SchemaInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchema">DataDatadogReferenceTableSchema</a>

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogReferenceTableConfig <a name="DataDatadogReferenceTableConfig" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogReferenceTableConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id = null,
    DataDatadogReferenceTableSchema Schema = null,
    string TableName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.id">Id</a></code> | <code>string</code> | The UUID of the reference table. Either id or table_name must be specified, but not both. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.schema">Schema</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchema">DataDatadogReferenceTableSchema</a></code> | schema block. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.tableName">TableName</a></code> | <code>string</code> | The name of the reference table. Either id or table_name must be specified, but not both. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The UUID of the reference table. Either id or table_name must be specified, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/reference_table#id DataDatadogReferenceTable#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.schema"></a>

```csharp
public DataDatadogReferenceTableSchema Schema { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchema">DataDatadogReferenceTableSchema</a>

schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/reference_table#schema DataDatadogReferenceTable#schema}

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

The name of the reference table. Either id or table_name must be specified, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/reference_table#table_name DataDatadogReferenceTable#table_name}

---

### DataDatadogReferenceTableFileMetadata <a name="DataDatadogReferenceTableFileMetadata" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogReferenceTableFileMetadata {

};
```


### DataDatadogReferenceTableFileMetadataAccessDetails <a name="DataDatadogReferenceTableFileMetadataAccessDetails" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogReferenceTableFileMetadataAccessDetails {

};
```


### DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetail <a name="DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetail" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetail.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetail {

};
```


### DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetail <a name="DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetail" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetail.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetail {

};
```


### DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetail <a name="DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetail" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetail.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetail {

};
```


### DataDatadogReferenceTableSchema <a name="DataDatadogReferenceTableSchema" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchema.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogReferenceTableSchema {
    IResolvable|DataDatadogReferenceTableSchemaFields[] Fields = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchema.property.fields">Fields</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFields">DataDatadogReferenceTableSchemaFields</a>[]</code> | fields block. |

---

##### `Fields`<sup>Optional</sup> <a name="Fields" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchema.property.fields"></a>

```csharp
public IResolvable|DataDatadogReferenceTableSchemaFields[] Fields { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFields">DataDatadogReferenceTableSchemaFields</a>[]

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/reference_table#fields DataDatadogReferenceTable#fields}

---

### DataDatadogReferenceTableSchemaFields <a name="DataDatadogReferenceTableSchemaFields" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFields.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogReferenceTableSchemaFields {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference <a name="DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.awsBucketName">AwsBucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.filePath">FilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetail">DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetail</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; }
```

- *Type:* string

---

##### `AwsBucketName`<sup>Required</sup> <a name="AwsBucketName" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.awsBucketName"></a>

```csharp
public string AwsBucketName { get; }
```

- *Type:* string

---

##### `FilePath`<sup>Required</sup> <a name="FilePath" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.filePath"></a>

```csharp
public string FilePath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetail InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetail">DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetail</a>

---


### DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference <a name="DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureClientId">AzureClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureContainerName">AzureContainerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureStorageAccountName">AzureStorageAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureTenantId">AzureTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.filePath">FilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetail">DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetail</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AzureClientId`<sup>Required</sup> <a name="AzureClientId" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureClientId"></a>

```csharp
public string AzureClientId { get; }
```

- *Type:* string

---

##### `AzureContainerName`<sup>Required</sup> <a name="AzureContainerName" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureContainerName"></a>

```csharp
public string AzureContainerName { get; }
```

- *Type:* string

---

##### `AzureStorageAccountName`<sup>Required</sup> <a name="AzureStorageAccountName" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureStorageAccountName"></a>

```csharp
public string AzureStorageAccountName { get; }
```

- *Type:* string

---

##### `AzureTenantId`<sup>Required</sup> <a name="AzureTenantId" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureTenantId"></a>

```csharp
public string AzureTenantId { get; }
```

- *Type:* string

---

##### `FilePath`<sup>Required</sup> <a name="FilePath" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.filePath"></a>

```csharp
public string FilePath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetail InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetail">DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetail</a>

---


### DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference <a name="DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.filePath">FilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpBucketName">GcpBucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpProjectId">GcpProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpServiceAccountEmail">GcpServiceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetail">DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetail</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilePath`<sup>Required</sup> <a name="FilePath" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.filePath"></a>

```csharp
public string FilePath { get; }
```

- *Type:* string

---

##### `GcpBucketName`<sup>Required</sup> <a name="GcpBucketName" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpBucketName"></a>

```csharp
public string GcpBucketName { get; }
```

- *Type:* string

---

##### `GcpProjectId`<sup>Required</sup> <a name="GcpProjectId" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpProjectId"></a>

```csharp
public string GcpProjectId { get; }
```

- *Type:* string

---

##### `GcpServiceAccountEmail`<sup>Required</sup> <a name="GcpServiceAccountEmail" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpServiceAccountEmail"></a>

```csharp
public string GcpServiceAccountEmail { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetail InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetail">DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetail</a>

---


### DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference <a name="DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.awsDetail">AwsDetail</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference">DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.azureDetail">AzureDetail</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference">DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.gcpDetail">GcpDetail</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference">DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetails">DataDatadogReferenceTableFileMetadataAccessDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsDetail`<sup>Required</sup> <a name="AwsDetail" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.awsDetail"></a>

```csharp
public DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference AwsDetail { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference">DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference</a>

---

##### `AzureDetail`<sup>Required</sup> <a name="AzureDetail" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.azureDetail"></a>

```csharp
public DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference AzureDetail { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference">DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference</a>

---

##### `GcpDetail`<sup>Required</sup> <a name="GcpDetail" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.gcpDetail"></a>

```csharp
public DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference GcpDetail { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference">DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogReferenceTableFileMetadataAccessDetails InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetails">DataDatadogReferenceTableFileMetadataAccessDetails</a>

---


### DataDatadogReferenceTableFileMetadataOutputReference <a name="DataDatadogReferenceTableFileMetadataOutputReference" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogReferenceTableFileMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.accessDetails">AccessDetails</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference">DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.errorRowCount">ErrorRowCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.errorType">ErrorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.syncEnabled">SyncEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadata">DataDatadogReferenceTableFileMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessDetails`<sup>Required</sup> <a name="AccessDetails" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.accessDetails"></a>

```csharp
public DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference AccessDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference">DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference</a>

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.errorMessage"></a>

```csharp
public string ErrorMessage { get; }
```

- *Type:* string

---

##### `ErrorRowCount`<sup>Required</sup> <a name="ErrorRowCount" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.errorRowCount"></a>

```csharp
public double ErrorRowCount { get; }
```

- *Type:* double

---

##### `ErrorType`<sup>Required</sup> <a name="ErrorType" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.errorType"></a>

```csharp
public string ErrorType { get; }
```

- *Type:* string

---

##### `SyncEnabled`<sup>Required</sup> <a name="SyncEnabled" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.syncEnabled"></a>

```csharp
public IResolvable SyncEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogReferenceTableFileMetadata InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadata">DataDatadogReferenceTableFileMetadata</a>

---


### DataDatadogReferenceTableSchemaFieldsList <a name="DataDatadogReferenceTableSchemaFieldsList" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogReferenceTableSchemaFieldsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.get"></a>

```csharp
private DataDatadogReferenceTableSchemaFieldsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFields">DataDatadogReferenceTableSchemaFields</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogReferenceTableSchemaFields[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFields">DataDatadogReferenceTableSchemaFields</a>[]

---


### DataDatadogReferenceTableSchemaFieldsOutputReference <a name="DataDatadogReferenceTableSchemaFieldsOutputReference" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogReferenceTableSchemaFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFields">DataDatadogReferenceTableSchemaFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogReferenceTableSchemaFields InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFields">DataDatadogReferenceTableSchemaFields</a>

---


### DataDatadogReferenceTableSchemaOutputReference <a name="DataDatadogReferenceTableSchemaOutputReference" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogReferenceTableSchemaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.putFields">PutFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.resetFields">ResetFields</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFields` <a name="PutFields" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.putFields"></a>

```csharp
private void PutFields(IResolvable|DataDatadogReferenceTableSchemaFields[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.putFields.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFields">DataDatadogReferenceTableSchemaFields</a>[]

---

##### `ResetFields` <a name="ResetFields" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.resetFields"></a>

```csharp
private void ResetFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.fields">Fields</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList">DataDatadogReferenceTableSchemaFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.primaryKeys">PrimaryKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.fieldsInput">FieldsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFields">DataDatadogReferenceTableSchemaFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchema">DataDatadogReferenceTableSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.fields"></a>

```csharp
public DataDatadogReferenceTableSchemaFieldsList Fields { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList">DataDatadogReferenceTableSchemaFieldsList</a>

---

##### `PrimaryKeys`<sup>Required</sup> <a name="PrimaryKeys" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.primaryKeys"></a>

```csharp
public string[] PrimaryKeys { get; }
```

- *Type:* string[]

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.fieldsInput"></a>

```csharp
public IResolvable|DataDatadogReferenceTableSchemaFields[] FieldsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFields">DataDatadogReferenceTableSchemaFields</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogReferenceTableSchema InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchema">DataDatadogReferenceTableSchema</a>

---



