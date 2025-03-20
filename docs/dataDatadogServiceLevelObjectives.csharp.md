# `dataDatadogServiceLevelObjectives` Submodule <a name="`dataDatadogServiceLevelObjectives` Submodule" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogServiceLevelObjectives <a name="DataDatadogServiceLevelObjectives" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.58.0/docs/data-sources/service_level_objectives datadog_service_level_objectives}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogServiceLevelObjectives(Construct Scope, string Id, DataDatadogServiceLevelObjectivesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig">DataDatadogServiceLevelObjectivesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig">DataDatadogServiceLevelObjectivesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetErrorOnEmptyResult">ResetErrorOnEmptyResult</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetIds">ResetIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetMetricsQuery">ResetMetricsQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetNameQuery">ResetNameQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetQuery">ResetQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetTagsQuery">ResetTagsQuery</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetErrorOnEmptyResult` <a name="ResetErrorOnEmptyResult" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetErrorOnEmptyResult"></a>

```csharp
private void ResetErrorOnEmptyResult()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIds` <a name="ResetIds" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetIds"></a>

```csharp
private void ResetIds()
```

##### `ResetMetricsQuery` <a name="ResetMetricsQuery" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetMetricsQuery"></a>

```csharp
private void ResetMetricsQuery()
```

##### `ResetNameQuery` <a name="ResetNameQuery" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetNameQuery"></a>

```csharp
private void ResetNameQuery()
```

##### `ResetQuery` <a name="ResetQuery" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetQuery"></a>

```csharp
private void ResetQuery()
```

##### `ResetTagsQuery` <a name="ResetTagsQuery" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetTagsQuery"></a>

```csharp
private void ResetTagsQuery()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogServiceLevelObjectives resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogServiceLevelObjectives.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogServiceLevelObjectives.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogServiceLevelObjectives.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogServiceLevelObjectives.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatadogServiceLevelObjectives resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogServiceLevelObjectives to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogServiceLevelObjectives that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.58.0/docs/data-sources/service_level_objectives#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogServiceLevelObjectives to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.slos">Slos</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList">DataDatadogServiceLevelObjectivesSlosList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.errorOnEmptyResultInput">ErrorOnEmptyResultInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.idsInput">IdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.metricsQueryInput">MetricsQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.nameQueryInput">NameQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.tagsQueryInput">TagsQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.errorOnEmptyResult">ErrorOnEmptyResult</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.ids">Ids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.metricsQuery">MetricsQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.nameQuery">NameQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.tagsQuery">TagsQuery</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Slos`<sup>Required</sup> <a name="Slos" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.slos"></a>

```csharp
public DataDatadogServiceLevelObjectivesSlosList Slos { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList">DataDatadogServiceLevelObjectivesSlosList</a>

---

##### `ErrorOnEmptyResultInput`<sup>Optional</sup> <a name="ErrorOnEmptyResultInput" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.errorOnEmptyResultInput"></a>

```csharp
public object ErrorOnEmptyResultInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IdsInput`<sup>Optional</sup> <a name="IdsInput" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.idsInput"></a>

```csharp
public string[] IdsInput { get; }
```

- *Type:* string[]

---

##### `MetricsQueryInput`<sup>Optional</sup> <a name="MetricsQueryInput" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.metricsQueryInput"></a>

```csharp
public string MetricsQueryInput { get; }
```

- *Type:* string

---

##### `NameQueryInput`<sup>Optional</sup> <a name="NameQueryInput" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.nameQueryInput"></a>

```csharp
public string NameQueryInput { get; }
```

- *Type:* string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `TagsQueryInput`<sup>Optional</sup> <a name="TagsQueryInput" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.tagsQueryInput"></a>

```csharp
public string TagsQueryInput { get; }
```

- *Type:* string

---

##### `ErrorOnEmptyResult`<sup>Required</sup> <a name="ErrorOnEmptyResult" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.errorOnEmptyResult"></a>

```csharp
public object ErrorOnEmptyResult { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.ids"></a>

```csharp
public string[] Ids { get; }
```

- *Type:* string[]

---

##### `MetricsQuery`<sup>Required</sup> <a name="MetricsQuery" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.metricsQuery"></a>

```csharp
public string MetricsQuery { get; }
```

- *Type:* string

---

##### `NameQuery`<sup>Required</sup> <a name="NameQuery" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.nameQuery"></a>

```csharp
public string NameQuery { get; }
```

- *Type:* string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `TagsQuery`<sup>Required</sup> <a name="TagsQuery" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.tagsQuery"></a>

```csharp
public string TagsQuery { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogServiceLevelObjectivesConfig <a name="DataDatadogServiceLevelObjectivesConfig" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogServiceLevelObjectivesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object ErrorOnEmptyResult = null,
    string Id = null,
    string[] Ids = null,
    string MetricsQuery = null,
    string NameQuery = null,
    string Query = null,
    string TagsQuery = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.errorOnEmptyResult">ErrorOnEmptyResult</a></code> | <code>object</code> | Throw an error if no results are found. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.58.0/docs/data-sources/service_level_objectives#id DataDatadogServiceLevelObjectives#id}. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.ids">Ids</a></code> | <code>string[]</code> | An array of SLO IDs to limit the search. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.metricsQuery">MetricsQuery</a></code> | <code>string</code> | Filter results based on SLO numerator and denominator. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.nameQuery">NameQuery</a></code> | <code>string</code> | Filter results based on SLO names. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.query">Query</a></code> | <code>string</code> | The query string to filter results based on SLO names. Some examples of queries include service:<service-name> and <slo-name>. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.tagsQuery">TagsQuery</a></code> | <code>string</code> | Filter results based on a single SLO tag. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ErrorOnEmptyResult`<sup>Optional</sup> <a name="ErrorOnEmptyResult" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.errorOnEmptyResult"></a>

```csharp
public object ErrorOnEmptyResult { get; set; }
```

- *Type:* object

Throw an error if no results are found. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.58.0/docs/data-sources/service_level_objectives#error_on_empty_result DataDatadogServiceLevelObjectives#error_on_empty_result}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.58.0/docs/data-sources/service_level_objectives#id DataDatadogServiceLevelObjectives#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ids`<sup>Optional</sup> <a name="Ids" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.ids"></a>

```csharp
public string[] Ids { get; set; }
```

- *Type:* string[]

An array of SLO IDs to limit the search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.58.0/docs/data-sources/service_level_objectives#ids DataDatadogServiceLevelObjectives#ids}

---

##### `MetricsQuery`<sup>Optional</sup> <a name="MetricsQuery" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.metricsQuery"></a>

```csharp
public string MetricsQuery { get; set; }
```

- *Type:* string

Filter results based on SLO numerator and denominator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.58.0/docs/data-sources/service_level_objectives#metrics_query DataDatadogServiceLevelObjectives#metrics_query}

---

##### `NameQuery`<sup>Optional</sup> <a name="NameQuery" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.nameQuery"></a>

```csharp
public string NameQuery { get; set; }
```

- *Type:* string

Filter results based on SLO names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.58.0/docs/data-sources/service_level_objectives#name_query DataDatadogServiceLevelObjectives#name_query}

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

The query string to filter results based on SLO names. Some examples of queries include service:<service-name> and <slo-name>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.58.0/docs/data-sources/service_level_objectives#query DataDatadogServiceLevelObjectives#query}

---

##### `TagsQuery`<sup>Optional</sup> <a name="TagsQuery" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.tagsQuery"></a>

```csharp
public string TagsQuery { get; set; }
```

- *Type:* string

Filter results based on a single SLO tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.58.0/docs/data-sources/service_level_objectives#tags_query DataDatadogServiceLevelObjectives#tags_query}

---

### DataDatadogServiceLevelObjectivesSlos <a name="DataDatadogServiceLevelObjectivesSlos" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlos"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlos.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogServiceLevelObjectivesSlos {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogServiceLevelObjectivesSlosList <a name="DataDatadogServiceLevelObjectivesSlosList" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogServiceLevelObjectivesSlosList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.get"></a>

```csharp
private DataDatadogServiceLevelObjectivesSlosOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDatadogServiceLevelObjectivesSlosOutputReference <a name="DataDatadogServiceLevelObjectivesSlosOutputReference" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogServiceLevelObjectivesSlosOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlos">DataDatadogServiceLevelObjectivesSlos</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.internalValue"></a>

```csharp
public DataDatadogServiceLevelObjectivesSlos InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlos">DataDatadogServiceLevelObjectivesSlos</a>

---



