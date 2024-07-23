# `dataDatadogSecurityMonitoringFilters` Submodule <a name="`dataDatadogSecurityMonitoringFilters` Submodule" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogSecurityMonitoringFilters <a name="DataDatadogSecurityMonitoringFilters" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/data-sources/security_monitoring_filters datadog_security_monitoring_filters}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogSecurityMonitoringFilters(Construct Scope, string Id, DataDatadogSecurityMonitoringFiltersConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig">DataDatadogSecurityMonitoringFiltersConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig">DataDatadogSecurityMonitoringFiltersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogSecurityMonitoringFilters resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogSecurityMonitoringFilters.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogSecurityMonitoringFilters.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogSecurityMonitoringFilters.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogSecurityMonitoringFilters.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatadogSecurityMonitoringFilters resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogSecurityMonitoringFilters to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogSecurityMonitoringFilters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/data-sources/security_monitoring_filters#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogSecurityMonitoringFilters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.filters">Filters</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList">DataDatadogSecurityMonitoringFiltersFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.filtersIds">FiltersIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.filters"></a>

```csharp
public DataDatadogSecurityMonitoringFiltersFiltersList Filters { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList">DataDatadogSecurityMonitoringFiltersFiltersList</a>

---

##### `FiltersIds`<sup>Required</sup> <a name="FiltersIds" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.filtersIds"></a>

```csharp
public string[] FiltersIds { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogSecurityMonitoringFiltersConfig <a name="DataDatadogSecurityMonitoringFiltersConfig" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogSecurityMonitoringFiltersConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/data-sources/security_monitoring_filters#id DataDatadogSecurityMonitoringFilters#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/data-sources/security_monitoring_filters#id DataDatadogSecurityMonitoringFilters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataDatadogSecurityMonitoringFiltersFilters <a name="DataDatadogSecurityMonitoringFiltersFilters" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFilters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogSecurityMonitoringFiltersFilters {

};
```


### DataDatadogSecurityMonitoringFiltersFiltersExclusionFilter <a name="DataDatadogSecurityMonitoringFiltersFiltersExclusionFilter" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogSecurityMonitoringFiltersFiltersExclusionFilter {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList <a name="DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.get"></a>

```csharp
private DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference <a name="DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilter">DataDatadogSecurityMonitoringFiltersFiltersExclusionFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.property.internalValue"></a>

```csharp
public DataDatadogSecurityMonitoringFiltersFiltersExclusionFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilter">DataDatadogSecurityMonitoringFiltersFiltersExclusionFilter</a>

---


### DataDatadogSecurityMonitoringFiltersFiltersList <a name="DataDatadogSecurityMonitoringFiltersFiltersList" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogSecurityMonitoringFiltersFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.get"></a>

```csharp
private DataDatadogSecurityMonitoringFiltersFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDatadogSecurityMonitoringFiltersFiltersOutputReference <a name="DataDatadogSecurityMonitoringFiltersFiltersOutputReference" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogSecurityMonitoringFiltersFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.exclusionFilter">ExclusionFilter</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList">DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.filteredDataType">FilteredDataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFilters">DataDatadogSecurityMonitoringFiltersFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExclusionFilter`<sup>Required</sup> <a name="ExclusionFilter" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.exclusionFilter"></a>

```csharp
public DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList ExclusionFilter { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList">DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList</a>

---

##### `FilteredDataType`<sup>Required</sup> <a name="FilteredDataType" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.filteredDataType"></a>

```csharp
public string FilteredDataType { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.internalValue"></a>

```csharp
public DataDatadogSecurityMonitoringFiltersFilters InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFilters">DataDatadogSecurityMonitoringFiltersFilters</a>

---



