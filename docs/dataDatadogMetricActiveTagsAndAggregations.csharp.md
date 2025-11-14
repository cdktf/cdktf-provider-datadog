# `dataDatadogMetricActiveTagsAndAggregations` Submodule <a name="`dataDatadogMetricActiveTagsAndAggregations` Submodule" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogMetricActiveTagsAndAggregations <a name="DataDatadogMetricActiveTagsAndAggregations" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/data-sources/metric_active_tags_and_aggregations datadog_metric_active_tags_and_aggregations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogMetricActiveTagsAndAggregations(Construct Scope, string Id, DataDatadogMetricActiveTagsAndAggregationsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig">DataDatadogMetricActiveTagsAndAggregationsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig">DataDatadogMetricActiveTagsAndAggregationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.resetWindow">ResetWindow</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetWindow` <a name="ResetWindow" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.resetWindow"></a>

```csharp
private void ResetWindow()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogMetricActiveTagsAndAggregations resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogMetricActiveTagsAndAggregations.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogMetricActiveTagsAndAggregations.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogMetricActiveTagsAndAggregations.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogMetricActiveTagsAndAggregations.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatadogMetricActiveTagsAndAggregations resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogMetricActiveTagsAndAggregations to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogMetricActiveTagsAndAggregations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/data-sources/metric_active_tags_and_aggregations#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogMetricActiveTagsAndAggregations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.activeAggregations">ActiveAggregations</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList">DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.activeTags">ActiveTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.metricInput">MetricInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.windowInput">WindowInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.metric">Metric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.window">Window</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ActiveAggregations`<sup>Required</sup> <a name="ActiveAggregations" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.activeAggregations"></a>

```csharp
public DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList ActiveAggregations { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList">DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList</a>

---

##### `ActiveTags`<sup>Required</sup> <a name="ActiveTags" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.activeTags"></a>

```csharp
public string[] ActiveTags { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.metricInput"></a>

```csharp
public string MetricInput { get; }
```

- *Type:* string

---

##### `WindowInput`<sup>Optional</sup> <a name="WindowInput" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.windowInput"></a>

```csharp
public double WindowInput { get; }
```

- *Type:* double

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.metric"></a>

```csharp
public string Metric { get; }
```

- *Type:* string

---

##### `Window`<sup>Required</sup> <a name="Window" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.window"></a>

```csharp
public double Window { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogMetricActiveTagsAndAggregationsActiveAggregations <a name="DataDatadogMetricActiveTagsAndAggregationsActiveAggregations" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogMetricActiveTagsAndAggregationsActiveAggregations {

};
```


### DataDatadogMetricActiveTagsAndAggregationsConfig <a name="DataDatadogMetricActiveTagsAndAggregationsConfig" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogMetricActiveTagsAndAggregationsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Metric,
    double Window = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.metric">Metric</a></code> | <code>string</code> | The metric for which to fetch tags. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.window">Window</a></code> | <code>double</code> | The number of seconds to look back from now. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.metric"></a>

```csharp
public string Metric { get; set; }
```

- *Type:* string

The metric for which to fetch tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/data-sources/metric_active_tags_and_aggregations#metric DataDatadogMetricActiveTagsAndAggregations#metric}

---

##### `Window`<sup>Optional</sup> <a name="Window" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.window"></a>

```csharp
public double Window { get; set; }
```

- *Type:* double

The number of seconds to look back from now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/data-sources/metric_active_tags_and_aggregations#window DataDatadogMetricActiveTagsAndAggregations#window}

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList <a name="DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.get"></a>

```csharp
private DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference <a name="DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.property.space">Space</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.property.time">Time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregations">DataDatadogMetricActiveTagsAndAggregationsActiveAggregations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Space`<sup>Required</sup> <a name="Space" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.property.space"></a>

```csharp
public string Space { get; }
```

- *Type:* string

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.property.time"></a>

```csharp
public string Time { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.property.internalValue"></a>

```csharp
public DataDatadogMetricActiveTagsAndAggregationsActiveAggregations InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregations">DataDatadogMetricActiveTagsAndAggregationsActiveAggregations</a>

---



