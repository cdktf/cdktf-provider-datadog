# `dataDatadogSoftwareCatalog` Submodule <a name="`dataDatadogSoftwareCatalog` Submodule" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogSoftwareCatalog <a name="DataDatadogSoftwareCatalog" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/data-sources/software_catalog datadog_software_catalog}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogSoftwareCatalog(Construct Scope, string Id, DataDatadogSoftwareCatalogConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig">DataDatadogSoftwareCatalogConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig">DataDatadogSoftwareCatalogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterExcludeSnapshot">ResetFilterExcludeSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterId">ResetFilterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterKind">ResetFilterKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterName">ResetFilterName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterOwner">ResetFilterOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterRef">ResetFilterRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterRelationType">ResetFilterRelationType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetFilterExcludeSnapshot` <a name="ResetFilterExcludeSnapshot" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterExcludeSnapshot"></a>

```csharp
private void ResetFilterExcludeSnapshot()
```

##### `ResetFilterId` <a name="ResetFilterId" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterId"></a>

```csharp
private void ResetFilterId()
```

##### `ResetFilterKind` <a name="ResetFilterKind" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterKind"></a>

```csharp
private void ResetFilterKind()
```

##### `ResetFilterName` <a name="ResetFilterName" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterName"></a>

```csharp
private void ResetFilterName()
```

##### `ResetFilterOwner` <a name="ResetFilterOwner" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterOwner"></a>

```csharp
private void ResetFilterOwner()
```

##### `ResetFilterRef` <a name="ResetFilterRef" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterRef"></a>

```csharp
private void ResetFilterRef()
```

##### `ResetFilterRelationType` <a name="ResetFilterRelationType" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterRelationType"></a>

```csharp
private void ResetFilterRelationType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogSoftwareCatalog resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogSoftwareCatalog.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogSoftwareCatalog.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogSoftwareCatalog.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogSoftwareCatalog.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatadogSoftwareCatalog resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogSoftwareCatalog to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogSoftwareCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/data-sources/software_catalog#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogSoftwareCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.entities">Entities</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList">DataDatadogSoftwareCatalogEntitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterExcludeSnapshotInput">FilterExcludeSnapshotInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterIdInput">FilterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterKindInput">FilterKindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterNameInput">FilterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterOwnerInput">FilterOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterRefInput">FilterRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterRelationTypeInput">FilterRelationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterExcludeSnapshot">FilterExcludeSnapshot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterId">FilterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterKind">FilterKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterName">FilterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterOwner">FilterOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterRef">FilterRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterRelationType">FilterRelationType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Entities`<sup>Required</sup> <a name="Entities" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.entities"></a>

```csharp
public DataDatadogSoftwareCatalogEntitiesList Entities { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList">DataDatadogSoftwareCatalogEntitiesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `FilterExcludeSnapshotInput`<sup>Optional</sup> <a name="FilterExcludeSnapshotInput" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterExcludeSnapshotInput"></a>

```csharp
public string FilterExcludeSnapshotInput { get; }
```

- *Type:* string

---

##### `FilterIdInput`<sup>Optional</sup> <a name="FilterIdInput" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterIdInput"></a>

```csharp
public string FilterIdInput { get; }
```

- *Type:* string

---

##### `FilterKindInput`<sup>Optional</sup> <a name="FilterKindInput" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterKindInput"></a>

```csharp
public string FilterKindInput { get; }
```

- *Type:* string

---

##### `FilterNameInput`<sup>Optional</sup> <a name="FilterNameInput" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterNameInput"></a>

```csharp
public string FilterNameInput { get; }
```

- *Type:* string

---

##### `FilterOwnerInput`<sup>Optional</sup> <a name="FilterOwnerInput" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterOwnerInput"></a>

```csharp
public string FilterOwnerInput { get; }
```

- *Type:* string

---

##### `FilterRefInput`<sup>Optional</sup> <a name="FilterRefInput" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterRefInput"></a>

```csharp
public string FilterRefInput { get; }
```

- *Type:* string

---

##### `FilterRelationTypeInput`<sup>Optional</sup> <a name="FilterRelationTypeInput" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterRelationTypeInput"></a>

```csharp
public string FilterRelationTypeInput { get; }
```

- *Type:* string

---

##### `FilterExcludeSnapshot`<sup>Required</sup> <a name="FilterExcludeSnapshot" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterExcludeSnapshot"></a>

```csharp
public string FilterExcludeSnapshot { get; }
```

- *Type:* string

---

##### `FilterId`<sup>Required</sup> <a name="FilterId" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterId"></a>

```csharp
public string FilterId { get; }
```

- *Type:* string

---

##### `FilterKind`<sup>Required</sup> <a name="FilterKind" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterKind"></a>

```csharp
public string FilterKind { get; }
```

- *Type:* string

---

##### `FilterName`<sup>Required</sup> <a name="FilterName" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterName"></a>

```csharp
public string FilterName { get; }
```

- *Type:* string

---

##### `FilterOwner`<sup>Required</sup> <a name="FilterOwner" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterOwner"></a>

```csharp
public string FilterOwner { get; }
```

- *Type:* string

---

##### `FilterRef`<sup>Required</sup> <a name="FilterRef" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterRef"></a>

```csharp
public string FilterRef { get; }
```

- *Type:* string

---

##### `FilterRelationType`<sup>Required</sup> <a name="FilterRelationType" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterRelationType"></a>

```csharp
public string FilterRelationType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogSoftwareCatalogConfig <a name="DataDatadogSoftwareCatalogConfig" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogSoftwareCatalogConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string FilterExcludeSnapshot = null,
    string FilterId = null,
    string FilterKind = null,
    string FilterName = null,
    string FilterOwner = null,
    string FilterRef = null,
    string FilterRelationType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterExcludeSnapshot">FilterExcludeSnapshot</a></code> | <code>string</code> | Filter entities by excluding snapshotted entities. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterId">FilterId</a></code> | <code>string</code> | Filter entities by UUID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterKind">FilterKind</a></code> | <code>string</code> | Filter entities by kind. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterName">FilterName</a></code> | <code>string</code> | Filter entities by name. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterOwner">FilterOwner</a></code> | <code>string</code> | Filter entities by owner. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterRef">FilterRef</a></code> | <code>string</code> | Filter entities by reference. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterRelationType">FilterRelationType</a></code> | <code>string</code> | Filter entities by relation type. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `FilterExcludeSnapshot`<sup>Optional</sup> <a name="FilterExcludeSnapshot" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterExcludeSnapshot"></a>

```csharp
public string FilterExcludeSnapshot { get; set; }
```

- *Type:* string

Filter entities by excluding snapshotted entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/data-sources/software_catalog#filter_exclude_snapshot DataDatadogSoftwareCatalog#filter_exclude_snapshot}

---

##### `FilterId`<sup>Optional</sup> <a name="FilterId" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterId"></a>

```csharp
public string FilterId { get; set; }
```

- *Type:* string

Filter entities by UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/data-sources/software_catalog#filter_id DataDatadogSoftwareCatalog#filter_id}

---

##### `FilterKind`<sup>Optional</sup> <a name="FilterKind" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterKind"></a>

```csharp
public string FilterKind { get; set; }
```

- *Type:* string

Filter entities by kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/data-sources/software_catalog#filter_kind DataDatadogSoftwareCatalog#filter_kind}

---

##### `FilterName`<sup>Optional</sup> <a name="FilterName" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterName"></a>

```csharp
public string FilterName { get; set; }
```

- *Type:* string

Filter entities by name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/data-sources/software_catalog#filter_name DataDatadogSoftwareCatalog#filter_name}

---

##### `FilterOwner`<sup>Optional</sup> <a name="FilterOwner" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterOwner"></a>

```csharp
public string FilterOwner { get; set; }
```

- *Type:* string

Filter entities by owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/data-sources/software_catalog#filter_owner DataDatadogSoftwareCatalog#filter_owner}

---

##### `FilterRef`<sup>Optional</sup> <a name="FilterRef" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterRef"></a>

```csharp
public string FilterRef { get; set; }
```

- *Type:* string

Filter entities by reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/data-sources/software_catalog#filter_ref DataDatadogSoftwareCatalog#filter_ref}

---

##### `FilterRelationType`<sup>Optional</sup> <a name="FilterRelationType" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterRelationType"></a>

```csharp
public string FilterRelationType { get; set; }
```

- *Type:* string

Filter entities by relation type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/data-sources/software_catalog#filter_relation_type DataDatadogSoftwareCatalog#filter_relation_type}

---

### DataDatadogSoftwareCatalogEntities <a name="DataDatadogSoftwareCatalogEntities" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntities.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogSoftwareCatalogEntities {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogSoftwareCatalogEntitiesList <a name="DataDatadogSoftwareCatalogEntitiesList" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogSoftwareCatalogEntitiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.get"></a>

```csharp
private DataDatadogSoftwareCatalogEntitiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDatadogSoftwareCatalogEntitiesOutputReference <a name="DataDatadogSoftwareCatalogEntitiesOutputReference" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogSoftwareCatalogEntitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntities">DataDatadogSoftwareCatalogEntities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.internalValue"></a>

```csharp
public DataDatadogSoftwareCatalogEntities InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntities">DataDatadogSoftwareCatalogEntities</a>

---



