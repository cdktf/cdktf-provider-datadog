# `dataDatadogTagPipelineRuleset` Submodule <a name="`dataDatadogTagPipelineRuleset` Submodule" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogTagPipelineRuleset <a name="DataDatadogTagPipelineRuleset" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/data-sources/tag_pipeline_ruleset datadog_tag_pipeline_ruleset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogTagPipelineRuleset(Construct Scope, string Id, DataDatadogTagPipelineRulesetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetConfig">DataDatadogTagPipelineRulesetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetConfig">DataDatadogTagPipelineRulesetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.resetRules">ResetRules</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutRules` <a name="PutRules" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.putRules"></a>

```csharp
private void PutRules(IResolvable|DataDatadogTagPipelineRulesetRules[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.putRules.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRules">DataDatadogTagPipelineRulesetRules</a>[]

---

##### `ResetRules` <a name="ResetRules" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.resetRules"></a>

```csharp
private void ResetRules()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogTagPipelineRuleset resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogTagPipelineRuleset.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogTagPipelineRuleset.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogTagPipelineRuleset.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogTagPipelineRuleset.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatadogTagPipelineRuleset resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogTagPipelineRuleset to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogTagPipelineRuleset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/data-sources/tag_pipeline_ruleset#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogTagPipelineRuleset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.position">Position</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList">DataDatadogTagPipelineRulesetRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.rulesInput">RulesInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRules">DataDatadogTagPipelineRulesetRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.position"></a>

```csharp
public double Position { get; }
```

- *Type:* double

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.rules"></a>

```csharp
public DataDatadogTagPipelineRulesetRulesList Rules { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList">DataDatadogTagPipelineRulesetRulesList</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.rulesInput"></a>

```csharp
public IResolvable|DataDatadogTagPipelineRulesetRules[] RulesInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRules">DataDatadogTagPipelineRulesetRules</a>[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogTagPipelineRulesetConfig <a name="DataDatadogTagPipelineRulesetConfig" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogTagPipelineRulesetConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id,
    IResolvable|DataDatadogTagPipelineRulesetRules[] Rules = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetConfig.property.id">Id</a></code> | <code>string</code> | The ID of the ruleset. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetConfig.property.rules">Rules</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRules">DataDatadogTagPipelineRulesetRules</a>[]</code> | rules block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The ID of the ruleset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/data-sources/tag_pipeline_ruleset#id DataDatadogTagPipelineRuleset#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetConfig.property.rules"></a>

```csharp
public IResolvable|DataDatadogTagPipelineRulesetRules[] Rules { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRules">DataDatadogTagPipelineRulesetRules</a>[]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/data-sources/tag_pipeline_ruleset#rules DataDatadogTagPipelineRuleset#rules}

---

### DataDatadogTagPipelineRulesetRules <a name="DataDatadogTagPipelineRulesetRules" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogTagPipelineRulesetRules {
    DataDatadogTagPipelineRulesetRulesReferenceTable ReferenceTable = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRules.property.referenceTable">ReferenceTable</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTable">DataDatadogTagPipelineRulesetRulesReferenceTable</a></code> | reference_table block. |

---

##### `ReferenceTable`<sup>Optional</sup> <a name="ReferenceTable" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRules.property.referenceTable"></a>

```csharp
public DataDatadogTagPipelineRulesetRulesReferenceTable ReferenceTable { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTable">DataDatadogTagPipelineRulesetRulesReferenceTable</a>

reference_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/data-sources/tag_pipeline_ruleset#reference_table DataDatadogTagPipelineRuleset#reference_table}

---

### DataDatadogTagPipelineRulesetRulesMapping <a name="DataDatadogTagPipelineRulesetRulesMapping" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMapping.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogTagPipelineRulesetRulesMapping {

};
```


### DataDatadogTagPipelineRulesetRulesQuery <a name="DataDatadogTagPipelineRulesetRulesQuery" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQuery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogTagPipelineRulesetRulesQuery {

};
```


### DataDatadogTagPipelineRulesetRulesQueryAddition <a name="DataDatadogTagPipelineRulesetRulesQueryAddition" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAddition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAddition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogTagPipelineRulesetRulesQueryAddition {

};
```


### DataDatadogTagPipelineRulesetRulesReferenceTable <a name="DataDatadogTagPipelineRulesetRulesReferenceTable" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogTagPipelineRulesetRulesReferenceTable {
    IResolvable|DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs[] FieldPairs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTable.property.fieldPairs">FieldPairs</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs">DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs</a>[]</code> | field_pairs block. |

---

##### `FieldPairs`<sup>Optional</sup> <a name="FieldPairs" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTable.property.fieldPairs"></a>

```csharp
public IResolvable|DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs[] FieldPairs { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs">DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs</a>[]

field_pairs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/data-sources/tag_pipeline_ruleset#field_pairs DataDatadogTagPipelineRuleset#field_pairs}

---

### DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs <a name="DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogTagPipelineRulesetRulesList <a name="DataDatadogTagPipelineRulesetRulesList" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogTagPipelineRulesetRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.get"></a>

```csharp
private DataDatadogTagPipelineRulesetRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRules">DataDatadogTagPipelineRulesetRules</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogTagPipelineRulesetRules[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRules">DataDatadogTagPipelineRulesetRules</a>[]

---


### DataDatadogTagPipelineRulesetRulesMappingOutputReference <a name="DataDatadogTagPipelineRulesetRulesMappingOutputReference" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogTagPipelineRulesetRulesMappingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.property.destinationKey">DestinationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.property.ifNotExists">IfNotExists</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.property.sourceKeys">SourceKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMapping">DataDatadogTagPipelineRulesetRulesMapping</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationKey`<sup>Required</sup> <a name="DestinationKey" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.property.destinationKey"></a>

```csharp
public string DestinationKey { get; }
```

- *Type:* string

---

##### `IfNotExists`<sup>Required</sup> <a name="IfNotExists" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.property.ifNotExists"></a>

```csharp
public IResolvable IfNotExists { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SourceKeys`<sup>Required</sup> <a name="SourceKeys" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.property.sourceKeys"></a>

```csharp
public string[] SourceKeys { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogTagPipelineRulesetRulesMapping InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMapping">DataDatadogTagPipelineRulesetRulesMapping</a>

---


### DataDatadogTagPipelineRulesetRulesOutputReference <a name="DataDatadogTagPipelineRulesetRulesOutputReference" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogTagPipelineRulesetRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.putReferenceTable">PutReferenceTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.resetReferenceTable">ResetReferenceTable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutReferenceTable` <a name="PutReferenceTable" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.putReferenceTable"></a>

```csharp
private void PutReferenceTable(DataDatadogTagPipelineRulesetRulesReferenceTable Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.putReferenceTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTable">DataDatadogTagPipelineRulesetRulesReferenceTable</a>

---

##### `ResetReferenceTable` <a name="ResetReferenceTable" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.resetReferenceTable"></a>

```csharp
private void ResetReferenceTable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.property.mapping">Mapping</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference">DataDatadogTagPipelineRulesetRulesMappingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.property.metadata">Metadata</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.property.query">Query</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference">DataDatadogTagPipelineRulesetRulesQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.property.referenceTable">ReferenceTable</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference">DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.property.referenceTableInput">ReferenceTableInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTable">DataDatadogTagPipelineRulesetRulesReferenceTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRules">DataDatadogTagPipelineRulesetRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Mapping`<sup>Required</sup> <a name="Mapping" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.property.mapping"></a>

```csharp
public DataDatadogTagPipelineRulesetRulesMappingOutputReference Mapping { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference">DataDatadogTagPipelineRulesetRulesMappingOutputReference</a>

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.property.metadata"></a>

```csharp
public StringMap Metadata { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.property.query"></a>

```csharp
public DataDatadogTagPipelineRulesetRulesQueryOutputReference Query { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference">DataDatadogTagPipelineRulesetRulesQueryOutputReference</a>

---

##### `ReferenceTable`<sup>Required</sup> <a name="ReferenceTable" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.property.referenceTable"></a>

```csharp
public DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference ReferenceTable { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference">DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference</a>

---

##### `ReferenceTableInput`<sup>Optional</sup> <a name="ReferenceTableInput" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.property.referenceTableInput"></a>

```csharp
public IResolvable|DataDatadogTagPipelineRulesetRulesReferenceTable ReferenceTableInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTable">DataDatadogTagPipelineRulesetRulesReferenceTable</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogTagPipelineRulesetRules InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRules">DataDatadogTagPipelineRulesetRules</a>

---


### DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference <a name="DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAddition">DataDatadogTagPipelineRulesetRulesQueryAddition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogTagPipelineRulesetRulesQueryAddition InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAddition">DataDatadogTagPipelineRulesetRulesQueryAddition</a>

---


### DataDatadogTagPipelineRulesetRulesQueryOutputReference <a name="DataDatadogTagPipelineRulesetRulesQueryOutputReference" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogTagPipelineRulesetRulesQueryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.property.addition">Addition</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference">DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.property.caseInsensitivity">CaseInsensitivity</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.property.ifNotExists">IfNotExists</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQuery">DataDatadogTagPipelineRulesetRulesQuery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Addition`<sup>Required</sup> <a name="Addition" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.property.addition"></a>

```csharp
public DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference Addition { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference">DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference</a>

---

##### `CaseInsensitivity`<sup>Required</sup> <a name="CaseInsensitivity" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.property.caseInsensitivity"></a>

```csharp
public IResolvable CaseInsensitivity { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IfNotExists`<sup>Required</sup> <a name="IfNotExists" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.property.ifNotExists"></a>

```csharp
public IResolvable IfNotExists { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogTagPipelineRulesetRulesQuery InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQuery">DataDatadogTagPipelineRulesetRulesQuery</a>

---


### DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList <a name="DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.get"></a>

```csharp
private DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs">DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs">DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs</a>[]

---


### DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference <a name="DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.inputColumn">InputColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.outputKey">OutputKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs">DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InputColumn`<sup>Required</sup> <a name="InputColumn" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.inputColumn"></a>

```csharp
public string InputColumn { get; }
```

- *Type:* string

---

##### `OutputKey`<sup>Required</sup> <a name="OutputKey" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.outputKey"></a>

```csharp
public string OutputKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs">DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs</a>

---


### DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference <a name="DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.putFieldPairs">PutFieldPairs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.resetFieldPairs">ResetFieldPairs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFieldPairs` <a name="PutFieldPairs" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.putFieldPairs"></a>

```csharp
private void PutFieldPairs(IResolvable|DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.putFieldPairs.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs">DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs</a>[]

---

##### `ResetFieldPairs` <a name="ResetFieldPairs" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.resetFieldPairs"></a>

```csharp
private void ResetFieldPairs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.property.caseInsensitivity">CaseInsensitivity</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.property.fieldPairs">FieldPairs</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList">DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.property.ifNotExists">IfNotExists</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.property.sourceKeys">SourceKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.property.fieldPairsInput">FieldPairsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs">DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTable">DataDatadogTagPipelineRulesetRulesReferenceTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CaseInsensitivity`<sup>Required</sup> <a name="CaseInsensitivity" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.property.caseInsensitivity"></a>

```csharp
public IResolvable CaseInsensitivity { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `FieldPairs`<sup>Required</sup> <a name="FieldPairs" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.property.fieldPairs"></a>

```csharp
public DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList FieldPairs { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList">DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList</a>

---

##### `IfNotExists`<sup>Required</sup> <a name="IfNotExists" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.property.ifNotExists"></a>

```csharp
public IResolvable IfNotExists { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SourceKeys`<sup>Required</sup> <a name="SourceKeys" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.property.sourceKeys"></a>

```csharp
public string[] SourceKeys { get; }
```

- *Type:* string[]

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `FieldPairsInput`<sup>Optional</sup> <a name="FieldPairsInput" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.property.fieldPairsInput"></a>

```csharp
public IResolvable|DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs[] FieldPairsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs">DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogTagPipelineRulesetRulesReferenceTable InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTable">DataDatadogTagPipelineRulesetRulesReferenceTable</a>

---



