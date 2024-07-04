# `dataDatadogSensitiveDataScannerGroupOrder` Submodule <a name="`dataDatadogSensitiveDataScannerGroupOrder` Submodule" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogSensitiveDataScannerGroupOrder <a name="DataDatadogSensitiveDataScannerGroupOrder" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.40.0/docs/data-sources/sensitive_data_scanner_group_order datadog_sensitive_data_scanner_group_order}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogSensitiveDataScannerGroupOrder(Construct Scope, string Id, DataDatadogSensitiveDataScannerGroupOrderConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig">DataDatadogSensitiveDataScannerGroupOrderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig">DataDatadogSensitiveDataScannerGroupOrderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogSensitiveDataScannerGroupOrder resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogSensitiveDataScannerGroupOrder.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogSensitiveDataScannerGroupOrder.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogSensitiveDataScannerGroupOrder.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogSensitiveDataScannerGroupOrder.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatadogSensitiveDataScannerGroupOrder resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogSensitiveDataScannerGroupOrder to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogSensitiveDataScannerGroupOrder that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.40.0/docs/data-sources/sensitive_data_scanner_group_order#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogSensitiveDataScannerGroupOrder to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.groupIds">GroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `GroupIds`<sup>Required</sup> <a name="GroupIds" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.groupIds"></a>

```csharp
public string[] GroupIds { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogSensitiveDataScannerGroupOrderConfig <a name="DataDatadogSensitiveDataScannerGroupOrderConfig" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogSensitiveDataScannerGroupOrderConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---



