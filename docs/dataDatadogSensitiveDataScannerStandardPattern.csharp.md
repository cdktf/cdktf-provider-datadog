# `dataDatadogSensitiveDataScannerStandardPattern` Submodule <a name="`dataDatadogSensitiveDataScannerStandardPattern` Submodule" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogSensitiveDataScannerStandardPattern <a name="DataDatadogSensitiveDataScannerStandardPattern" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.43.1/docs/data-sources/sensitive_data_scanner_standard_pattern datadog_sensitive_data_scanner_standard_pattern}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogSensitiveDataScannerStandardPattern(Construct Scope, string Id, DataDatadogSensitiveDataScannerStandardPatternConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig">DataDatadogSensitiveDataScannerStandardPatternConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig">DataDatadogSensitiveDataScannerStandardPatternConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogSensitiveDataScannerStandardPattern resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogSensitiveDataScannerStandardPattern.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogSensitiveDataScannerStandardPattern.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogSensitiveDataScannerStandardPattern.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogSensitiveDataScannerStandardPattern.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatadogSensitiveDataScannerStandardPattern resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogSensitiveDataScannerStandardPattern to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogSensitiveDataScannerStandardPattern that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.43.1/docs/data-sources/sensitive_data_scanner_standard_pattern#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogSensitiveDataScannerStandardPattern to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.includedKeywords">IncludedKeywords</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `IncludedKeywords`<sup>Required</sup> <a name="IncludedKeywords" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.includedKeywords"></a>

```csharp
public string[] IncludedKeywords { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogSensitiveDataScannerStandardPatternConfig <a name="DataDatadogSensitiveDataScannerStandardPatternConfig" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogSensitiveDataScannerStandardPatternConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Filter,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.filter">Filter</a></code> | <code>string</code> | Filter all the Datadog standard patterns by name. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.1/docs/data-sources/sensitive_data_scanner_standard_pattern#id DataDatadogSensitiveDataScannerStandardPattern#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

Filter all the Datadog standard patterns by name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.1/docs/data-sources/sensitive_data_scanner_standard_pattern#filter DataDatadogSensitiveDataScannerStandardPattern#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.1/docs/data-sources/sensitive_data_scanner_standard_pattern#id DataDatadogSensitiveDataScannerStandardPattern#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



