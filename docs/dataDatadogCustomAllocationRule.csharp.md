# `dataDatadogCustomAllocationRule` Submodule <a name="`dataDatadogCustomAllocationRule` Submodule" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogCustomAllocationRule <a name="DataDatadogCustomAllocationRule" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/data-sources/custom_allocation_rule datadog_custom_allocation_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogCustomAllocationRule(Construct Scope, string Id, DataDatadogCustomAllocationRuleConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig">DataDatadogCustomAllocationRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig">DataDatadogCustomAllocationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.putCostsToAllocate">PutCostsToAllocate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.putStrategy">PutStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.resetCostsToAllocate">ResetCostsToAllocate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.resetRuleId">ResetRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.resetStrategy">ResetStrategy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutCostsToAllocate` <a name="PutCostsToAllocate" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.putCostsToAllocate"></a>

```csharp
private void PutCostsToAllocate(IResolvable|DataDatadogCustomAllocationRuleCostsToAllocate[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.putCostsToAllocate.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocate">DataDatadogCustomAllocationRuleCostsToAllocate</a>[]

---

##### `PutStrategy` <a name="PutStrategy" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.putStrategy"></a>

```csharp
private void PutStrategy(DataDatadogCustomAllocationRuleStrategy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.putStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy">DataDatadogCustomAllocationRuleStrategy</a>

---

##### `ResetCostsToAllocate` <a name="ResetCostsToAllocate" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.resetCostsToAllocate"></a>

```csharp
private void ResetCostsToAllocate()
```

##### `ResetRuleId` <a name="ResetRuleId" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.resetRuleId"></a>

```csharp
private void ResetRuleId()
```

##### `ResetStrategy` <a name="ResetStrategy" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.resetStrategy"></a>

```csharp
private void ResetStrategy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogCustomAllocationRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogCustomAllocationRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogCustomAllocationRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogCustomAllocationRule.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogCustomAllocationRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatadogCustomAllocationRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogCustomAllocationRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogCustomAllocationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/data-sources/custom_allocation_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogCustomAllocationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.costsToAllocate">CostsToAllocate</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList">DataDatadogCustomAllocationRuleCostsToAllocateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.lastModifiedUserUuid">LastModifiedUserUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.orderId">OrderId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.providernames">Providernames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.rejected">Rejected</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.ruleName">RuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.strategy">Strategy</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference">DataDatadogCustomAllocationRuleStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.updated">Updated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.costsToAllocateInput">CostsToAllocateInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocate">DataDatadogCustomAllocationRuleCostsToAllocate</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.ruleIdInput">RuleIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.strategyInput">StrategyInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy">DataDatadogCustomAllocationRuleStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.ruleId">RuleId</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CostsToAllocate`<sup>Required</sup> <a name="CostsToAllocate" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.costsToAllocate"></a>

```csharp
public DataDatadogCustomAllocationRuleCostsToAllocateList CostsToAllocate { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList">DataDatadogCustomAllocationRuleCostsToAllocateList</a>

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastModifiedUserUuid`<sup>Required</sup> <a name="LastModifiedUserUuid" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.lastModifiedUserUuid"></a>

```csharp
public string LastModifiedUserUuid { get; }
```

- *Type:* string

---

##### `OrderId`<sup>Required</sup> <a name="OrderId" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.orderId"></a>

```csharp
public double OrderId { get; }
```

- *Type:* double

---

##### `Providernames`<sup>Required</sup> <a name="Providernames" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.providernames"></a>

```csharp
public string[] Providernames { get; }
```

- *Type:* string[]

---

##### `Rejected`<sup>Required</sup> <a name="Rejected" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.rejected"></a>

```csharp
public IResolvable Rejected { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.ruleName"></a>

```csharp
public string RuleName { get; }
```

- *Type:* string

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.strategy"></a>

```csharp
public DataDatadogCustomAllocationRuleStrategyOutputReference Strategy { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference">DataDatadogCustomAllocationRuleStrategyOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Updated`<sup>Required</sup> <a name="Updated" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.updated"></a>

```csharp
public string Updated { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `CostsToAllocateInput`<sup>Optional</sup> <a name="CostsToAllocateInput" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.costsToAllocateInput"></a>

```csharp
public IResolvable|DataDatadogCustomAllocationRuleCostsToAllocate[] CostsToAllocateInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocate">DataDatadogCustomAllocationRuleCostsToAllocate</a>[]

---

##### `RuleIdInput`<sup>Optional</sup> <a name="RuleIdInput" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.ruleIdInput"></a>

```csharp
public double RuleIdInput { get; }
```

- *Type:* double

---

##### `StrategyInput`<sup>Optional</sup> <a name="StrategyInput" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.strategyInput"></a>

```csharp
public IResolvable|DataDatadogCustomAllocationRuleStrategy StrategyInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy">DataDatadogCustomAllocationRuleStrategy</a>

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.ruleId"></a>

```csharp
public double RuleId { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogCustomAllocationRuleConfig <a name="DataDatadogCustomAllocationRuleConfig" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogCustomAllocationRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|DataDatadogCustomAllocationRuleCostsToAllocate[] CostsToAllocate = null,
    double RuleId = null,
    DataDatadogCustomAllocationRuleStrategy Strategy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.costsToAllocate">CostsToAllocate</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocate">DataDatadogCustomAllocationRuleCostsToAllocate</a>[]</code> | costs_to_allocate block. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.ruleId">RuleId</a></code> | <code>double</code> | The ID of the custom allocation rule to retrieve. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.strategy">Strategy</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy">DataDatadogCustomAllocationRuleStrategy</a></code> | strategy block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `CostsToAllocate`<sup>Optional</sup> <a name="CostsToAllocate" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.costsToAllocate"></a>

```csharp
public IResolvable|DataDatadogCustomAllocationRuleCostsToAllocate[] CostsToAllocate { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocate">DataDatadogCustomAllocationRuleCostsToAllocate</a>[]

costs_to_allocate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/data-sources/custom_allocation_rule#costs_to_allocate DataDatadogCustomAllocationRule#costs_to_allocate}

---

##### `RuleId`<sup>Optional</sup> <a name="RuleId" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.ruleId"></a>

```csharp
public double RuleId { get; set; }
```

- *Type:* double

The ID of the custom allocation rule to retrieve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/data-sources/custom_allocation_rule#rule_id DataDatadogCustomAllocationRule#rule_id}

---

##### `Strategy`<sup>Optional</sup> <a name="Strategy" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.strategy"></a>

```csharp
public DataDatadogCustomAllocationRuleStrategy Strategy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy">DataDatadogCustomAllocationRuleStrategy</a>

strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/data-sources/custom_allocation_rule#strategy DataDatadogCustomAllocationRule#strategy}

---

### DataDatadogCustomAllocationRuleCostsToAllocate <a name="DataDatadogCustomAllocationRuleCostsToAllocate" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogCustomAllocationRuleCostsToAllocate {

};
```


### DataDatadogCustomAllocationRuleStrategy <a name="DataDatadogCustomAllocationRuleStrategy" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogCustomAllocationRuleStrategy {
    IResolvable|DataDatadogCustomAllocationRuleStrategyAllocatedBy[] AllocatedBy = null,
    IResolvable|DataDatadogCustomAllocationRuleStrategyAllocatedByFilters[] AllocatedByFilters = null,
    IResolvable|DataDatadogCustomAllocationRuleStrategyBasedOnCosts[] BasedOnCosts = null,
    DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries BasedOnTimeseries = null,
    IResolvable|DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters[] EvaluateGroupedByFilters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy.property.allocatedBy">AllocatedBy</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedBy">DataDatadogCustomAllocationRuleStrategyAllocatedBy</a>[]</code> | allocated_by block. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy.property.allocatedByFilters">AllocatedByFilters</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFilters">DataDatadogCustomAllocationRuleStrategyAllocatedByFilters</a>[]</code> | allocated_by_filters block. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy.property.basedOnCosts">BasedOnCosts</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCosts">DataDatadogCustomAllocationRuleStrategyBasedOnCosts</a>[]</code> | based_on_costs block. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy.property.basedOnTimeseries">BasedOnTimeseries</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries">DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries</a></code> | based_on_timeseries block. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy.property.evaluateGroupedByFilters">EvaluateGroupedByFilters</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters">DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters</a>[]</code> | evaluate_grouped_by_filters block. |

---

##### `AllocatedBy`<sup>Optional</sup> <a name="AllocatedBy" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy.property.allocatedBy"></a>

```csharp
public IResolvable|DataDatadogCustomAllocationRuleStrategyAllocatedBy[] AllocatedBy { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedBy">DataDatadogCustomAllocationRuleStrategyAllocatedBy</a>[]

allocated_by block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/data-sources/custom_allocation_rule#allocated_by DataDatadogCustomAllocationRule#allocated_by}

---

##### `AllocatedByFilters`<sup>Optional</sup> <a name="AllocatedByFilters" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy.property.allocatedByFilters"></a>

```csharp
public IResolvable|DataDatadogCustomAllocationRuleStrategyAllocatedByFilters[] AllocatedByFilters { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFilters">DataDatadogCustomAllocationRuleStrategyAllocatedByFilters</a>[]

allocated_by_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/data-sources/custom_allocation_rule#allocated_by_filters DataDatadogCustomAllocationRule#allocated_by_filters}

---

##### `BasedOnCosts`<sup>Optional</sup> <a name="BasedOnCosts" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy.property.basedOnCosts"></a>

```csharp
public IResolvable|DataDatadogCustomAllocationRuleStrategyBasedOnCosts[] BasedOnCosts { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCosts">DataDatadogCustomAllocationRuleStrategyBasedOnCosts</a>[]

based_on_costs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/data-sources/custom_allocation_rule#based_on_costs DataDatadogCustomAllocationRule#based_on_costs}

---

##### `BasedOnTimeseries`<sup>Optional</sup> <a name="BasedOnTimeseries" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy.property.basedOnTimeseries"></a>

```csharp
public DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries BasedOnTimeseries { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries">DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries</a>

based_on_timeseries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/data-sources/custom_allocation_rule#based_on_timeseries DataDatadogCustomAllocationRule#based_on_timeseries}

---

##### `EvaluateGroupedByFilters`<sup>Optional</sup> <a name="EvaluateGroupedByFilters" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy.property.evaluateGroupedByFilters"></a>

```csharp
public IResolvable|DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters[] EvaluateGroupedByFilters { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters">DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters</a>[]

evaluate_grouped_by_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/data-sources/custom_allocation_rule#evaluate_grouped_by_filters DataDatadogCustomAllocationRule#evaluate_grouped_by_filters}

---

### DataDatadogCustomAllocationRuleStrategyAllocatedBy <a name="DataDatadogCustomAllocationRuleStrategyAllocatedBy" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogCustomAllocationRuleStrategyAllocatedBy {
    IResolvable|DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags[] AllocatedTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedBy.property.allocatedTags">AllocatedTags</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags">DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags</a>[]</code> | allocated_tags block. |

---

##### `AllocatedTags`<sup>Optional</sup> <a name="AllocatedTags" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedBy.property.allocatedTags"></a>

```csharp
public IResolvable|DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags[] AllocatedTags { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags">DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags</a>[]

allocated_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/data-sources/custom_allocation_rule#allocated_tags DataDatadogCustomAllocationRule#allocated_tags}

---

### DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags <a name="DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags {

};
```


### DataDatadogCustomAllocationRuleStrategyAllocatedByFilters <a name="DataDatadogCustomAllocationRuleStrategyAllocatedByFilters" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFilters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogCustomAllocationRuleStrategyAllocatedByFilters {

};
```


### DataDatadogCustomAllocationRuleStrategyBasedOnCosts <a name="DataDatadogCustomAllocationRuleStrategyBasedOnCosts" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCosts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCosts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogCustomAllocationRuleStrategyBasedOnCosts {

};
```


### DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries <a name="DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries {

};
```


### DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters <a name="DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogCustomAllocationRuleCostsToAllocateList <a name="DataDatadogCustomAllocationRuleCostsToAllocateList" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogCustomAllocationRuleCostsToAllocateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.get"></a>

```csharp
private DataDatadogCustomAllocationRuleCostsToAllocateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocate">DataDatadogCustomAllocationRuleCostsToAllocate</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogCustomAllocationRuleCostsToAllocate[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocate">DataDatadogCustomAllocationRuleCostsToAllocate</a>[]

---


### DataDatadogCustomAllocationRuleCostsToAllocateOutputReference <a name="DataDatadogCustomAllocationRuleCostsToAllocateOutputReference" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogCustomAllocationRuleCostsToAllocateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.tag">Tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocate">DataDatadogCustomAllocationRuleCostsToAllocate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.tag"></a>

```csharp
public string Tag { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogCustomAllocationRuleCostsToAllocate InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocate">DataDatadogCustomAllocationRuleCostsToAllocate</a>

---


### DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList <a name="DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.get"></a>

```csharp
private DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags">DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags">DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags</a>[]

---


### DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference <a name="DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags">DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags">DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags</a>

---


### DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList <a name="DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.get"></a>

```csharp
private DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFilters">DataDatadogCustomAllocationRuleStrategyAllocatedByFilters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogCustomAllocationRuleStrategyAllocatedByFilters[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFilters">DataDatadogCustomAllocationRuleStrategyAllocatedByFilters</a>[]

---


### DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference <a name="DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.tag">Tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFilters">DataDatadogCustomAllocationRuleStrategyAllocatedByFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.tag"></a>

```csharp
public string Tag { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogCustomAllocationRuleStrategyAllocatedByFilters InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFilters">DataDatadogCustomAllocationRuleStrategyAllocatedByFilters</a>

---


### DataDatadogCustomAllocationRuleStrategyAllocatedByList <a name="DataDatadogCustomAllocationRuleStrategyAllocatedByList" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogCustomAllocationRuleStrategyAllocatedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.get"></a>

```csharp
private DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedBy">DataDatadogCustomAllocationRuleStrategyAllocatedBy</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogCustomAllocationRuleStrategyAllocatedBy[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedBy">DataDatadogCustomAllocationRuleStrategyAllocatedBy</a>[]

---


### DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference <a name="DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.putAllocatedTags">PutAllocatedTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.resetAllocatedTags">ResetAllocatedTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllocatedTags` <a name="PutAllocatedTags" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.putAllocatedTags"></a>

```csharp
private void PutAllocatedTags(IResolvable|DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.putAllocatedTags.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags">DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags</a>[]

---

##### `ResetAllocatedTags` <a name="ResetAllocatedTags" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.resetAllocatedTags"></a>

```csharp
private void ResetAllocatedTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.allocatedTags">AllocatedTags</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList">DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.percentage">Percentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.allocatedTagsInput">AllocatedTagsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags">DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedBy">DataDatadogCustomAllocationRuleStrategyAllocatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllocatedTags`<sup>Required</sup> <a name="AllocatedTags" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.allocatedTags"></a>

```csharp
public DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList AllocatedTags { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList">DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList</a>

---

##### `Percentage`<sup>Required</sup> <a name="Percentage" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.percentage"></a>

```csharp
public double Percentage { get; }
```

- *Type:* double

---

##### `AllocatedTagsInput`<sup>Optional</sup> <a name="AllocatedTagsInput" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.allocatedTagsInput"></a>

```csharp
public IResolvable|DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags[] AllocatedTagsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags">DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogCustomAllocationRuleStrategyAllocatedBy InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedBy">DataDatadogCustomAllocationRuleStrategyAllocatedBy</a>

---


### DataDatadogCustomAllocationRuleStrategyBasedOnCostsList <a name="DataDatadogCustomAllocationRuleStrategyBasedOnCostsList" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogCustomAllocationRuleStrategyBasedOnCostsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.get"></a>

```csharp
private DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCosts">DataDatadogCustomAllocationRuleStrategyBasedOnCosts</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogCustomAllocationRuleStrategyBasedOnCosts[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCosts">DataDatadogCustomAllocationRuleStrategyBasedOnCosts</a>[]

---


### DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference <a name="DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.tag">Tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCosts">DataDatadogCustomAllocationRuleStrategyBasedOnCosts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.tag"></a>

```csharp
public string Tag { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogCustomAllocationRuleStrategyBasedOnCosts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCosts">DataDatadogCustomAllocationRuleStrategyBasedOnCosts</a>

---


### DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference <a name="DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries">DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries">DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries</a>

---


### DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList <a name="DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.get"></a>

```csharp
private DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters">DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters">DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters</a>[]

---


### DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference <a name="DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.tag">Tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters">DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.tag"></a>

```csharp
public string Tag { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters">DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters</a>

---


### DataDatadogCustomAllocationRuleStrategyOutputReference <a name="DataDatadogCustomAllocationRuleStrategyOutputReference" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogCustomAllocationRuleStrategyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putAllocatedBy">PutAllocatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putAllocatedByFilters">PutAllocatedByFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putBasedOnCosts">PutBasedOnCosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putBasedOnTimeseries">PutBasedOnTimeseries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putEvaluateGroupedByFilters">PutEvaluateGroupedByFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.resetAllocatedBy">ResetAllocatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.resetAllocatedByFilters">ResetAllocatedByFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.resetBasedOnCosts">ResetBasedOnCosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.resetEvaluateGroupedByFilters">ResetEvaluateGroupedByFilters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllocatedBy` <a name="PutAllocatedBy" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putAllocatedBy"></a>

```csharp
private void PutAllocatedBy(IResolvable|DataDatadogCustomAllocationRuleStrategyAllocatedBy[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putAllocatedBy.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedBy">DataDatadogCustomAllocationRuleStrategyAllocatedBy</a>[]

---

##### `PutAllocatedByFilters` <a name="PutAllocatedByFilters" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putAllocatedByFilters"></a>

```csharp
private void PutAllocatedByFilters(IResolvable|DataDatadogCustomAllocationRuleStrategyAllocatedByFilters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putAllocatedByFilters.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFilters">DataDatadogCustomAllocationRuleStrategyAllocatedByFilters</a>[]

---

##### `PutBasedOnCosts` <a name="PutBasedOnCosts" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putBasedOnCosts"></a>

```csharp
private void PutBasedOnCosts(IResolvable|DataDatadogCustomAllocationRuleStrategyBasedOnCosts[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putBasedOnCosts.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCosts">DataDatadogCustomAllocationRuleStrategyBasedOnCosts</a>[]

---

##### `PutBasedOnTimeseries` <a name="PutBasedOnTimeseries" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putBasedOnTimeseries"></a>

```csharp
private void PutBasedOnTimeseries(DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putBasedOnTimeseries.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries">DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries</a>

---

##### `PutEvaluateGroupedByFilters` <a name="PutEvaluateGroupedByFilters" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putEvaluateGroupedByFilters"></a>

```csharp
private void PutEvaluateGroupedByFilters(IResolvable|DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putEvaluateGroupedByFilters.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters">DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters</a>[]

---

##### `ResetAllocatedBy` <a name="ResetAllocatedBy" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.resetAllocatedBy"></a>

```csharp
private void ResetAllocatedBy()
```

##### `ResetAllocatedByFilters` <a name="ResetAllocatedByFilters" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.resetAllocatedByFilters"></a>

```csharp
private void ResetAllocatedByFilters()
```

##### `ResetBasedOnCosts` <a name="ResetBasedOnCosts" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.resetBasedOnCosts"></a>

```csharp
private void ResetBasedOnCosts()
```

##### `ResetEvaluateGroupedByFilters` <a name="ResetEvaluateGroupedByFilters" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.resetEvaluateGroupedByFilters"></a>

```csharp
private void ResetEvaluateGroupedByFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.allocatedBy">AllocatedBy</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList">DataDatadogCustomAllocationRuleStrategyAllocatedByList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.allocatedByFilters">AllocatedByFilters</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList">DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.allocatedByTagKeys">AllocatedByTagKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.basedOnCosts">BasedOnCosts</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList">DataDatadogCustomAllocationRuleStrategyBasedOnCostsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.basedOnTimeseries">BasedOnTimeseries</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference">DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByFilters">EvaluateGroupedByFilters</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList">DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByTagKeys">EvaluateGroupedByTagKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.granularity">Granularity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.allocatedByFiltersInput">AllocatedByFiltersInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFilters">DataDatadogCustomAllocationRuleStrategyAllocatedByFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.allocatedByInput">AllocatedByInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedBy">DataDatadogCustomAllocationRuleStrategyAllocatedBy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.basedOnCostsInput">BasedOnCostsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCosts">DataDatadogCustomAllocationRuleStrategyBasedOnCosts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.basedOnTimeseriesInput">BasedOnTimeseriesInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries">DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByFiltersInput">EvaluateGroupedByFiltersInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters">DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy">DataDatadogCustomAllocationRuleStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllocatedBy`<sup>Required</sup> <a name="AllocatedBy" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.allocatedBy"></a>

```csharp
public DataDatadogCustomAllocationRuleStrategyAllocatedByList AllocatedBy { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList">DataDatadogCustomAllocationRuleStrategyAllocatedByList</a>

---

##### `AllocatedByFilters`<sup>Required</sup> <a name="AllocatedByFilters" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.allocatedByFilters"></a>

```csharp
public DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList AllocatedByFilters { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList">DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList</a>

---

##### `AllocatedByTagKeys`<sup>Required</sup> <a name="AllocatedByTagKeys" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.allocatedByTagKeys"></a>

```csharp
public string[] AllocatedByTagKeys { get; }
```

- *Type:* string[]

---

##### `BasedOnCosts`<sup>Required</sup> <a name="BasedOnCosts" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.basedOnCosts"></a>

```csharp
public DataDatadogCustomAllocationRuleStrategyBasedOnCostsList BasedOnCosts { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList">DataDatadogCustomAllocationRuleStrategyBasedOnCostsList</a>

---

##### `BasedOnTimeseries`<sup>Required</sup> <a name="BasedOnTimeseries" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.basedOnTimeseries"></a>

```csharp
public DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference BasedOnTimeseries { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference">DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference</a>

---

##### `EvaluateGroupedByFilters`<sup>Required</sup> <a name="EvaluateGroupedByFilters" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByFilters"></a>

```csharp
public DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList EvaluateGroupedByFilters { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList">DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList</a>

---

##### `EvaluateGroupedByTagKeys`<sup>Required</sup> <a name="EvaluateGroupedByTagKeys" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByTagKeys"></a>

```csharp
public string[] EvaluateGroupedByTagKeys { get; }
```

- *Type:* string[]

---

##### `Granularity`<sup>Required</sup> <a name="Granularity" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.granularity"></a>

```csharp
public string Granularity { get; }
```

- *Type:* string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `AllocatedByFiltersInput`<sup>Optional</sup> <a name="AllocatedByFiltersInput" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.allocatedByFiltersInput"></a>

```csharp
public IResolvable|DataDatadogCustomAllocationRuleStrategyAllocatedByFilters[] AllocatedByFiltersInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFilters">DataDatadogCustomAllocationRuleStrategyAllocatedByFilters</a>[]

---

##### `AllocatedByInput`<sup>Optional</sup> <a name="AllocatedByInput" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.allocatedByInput"></a>

```csharp
public IResolvable|DataDatadogCustomAllocationRuleStrategyAllocatedBy[] AllocatedByInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedBy">DataDatadogCustomAllocationRuleStrategyAllocatedBy</a>[]

---

##### `BasedOnCostsInput`<sup>Optional</sup> <a name="BasedOnCostsInput" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.basedOnCostsInput"></a>

```csharp
public IResolvable|DataDatadogCustomAllocationRuleStrategyBasedOnCosts[] BasedOnCostsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCosts">DataDatadogCustomAllocationRuleStrategyBasedOnCosts</a>[]

---

##### `BasedOnTimeseriesInput`<sup>Optional</sup> <a name="BasedOnTimeseriesInput" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.basedOnTimeseriesInput"></a>

```csharp
public IResolvable|DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries BasedOnTimeseriesInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries">DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries</a>

---

##### `EvaluateGroupedByFiltersInput`<sup>Optional</sup> <a name="EvaluateGroupedByFiltersInput" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByFiltersInput"></a>

```csharp
public IResolvable|DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters[] EvaluateGroupedByFiltersInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters">DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogCustomAllocationRuleStrategy InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy">DataDatadogCustomAllocationRuleStrategy</a>

---



