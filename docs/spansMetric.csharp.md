# `spansMetric` Submodule <a name="`spansMetric` Submodule" id="@cdktf/provider-datadog.spansMetric"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpansMetric <a name="SpansMetric" id="@cdktf/provider-datadog.spansMetric.SpansMetric"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/spans_metric datadog_spans_metric}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.spansMetric.SpansMetric.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SpansMetric(Construct Scope, string Id, SpansMetricConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricConfig">SpansMetricConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.spansMetric.SpansMetric.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.spansMetric.SpansMetric.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-datadog.spansMetric.SpansMetric.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.spansMetric.SpansMetricConfig">SpansMetricConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.putCompute">PutCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.putGroupBy">PutGroupBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.resetCompute">ResetCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.resetGroupBy">ResetGroupBy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.spansMetric.SpansMetric.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.spansMetric.SpansMetric.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.spansMetric.SpansMetric.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.spansMetric.SpansMetric.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.spansMetric.SpansMetric.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-datadog.spansMetric.SpansMetric.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.spansMetric.SpansMetric.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.spansMetric.SpansMetric.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.spansMetric.SpansMetric.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.spansMetric.SpansMetric.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.spansMetric.SpansMetric.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.spansMetric.SpansMetric.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetric.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetric.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetric.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetric.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetric.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetric.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetric.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetric.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetric.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetric.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetric.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetric.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetric.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetric.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetric.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetric.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetric.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetric.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.spansMetric.SpansMetric.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.spansMetric.SpansMetric.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.spansMetric.SpansMetric.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.spansMetric.SpansMetric.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetric.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetric.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.spansMetric.SpansMetric.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.spansMetric.SpansMetric.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.spansMetric.SpansMetric.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.spansMetric.SpansMetric.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-datadog.spansMetric.SpansMetric.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.spansMetric.SpansMetric.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.spansMetric.SpansMetric.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCompute` <a name="PutCompute" id="@cdktf/provider-datadog.spansMetric.SpansMetric.putCompute"></a>

```csharp
private void PutCompute(SpansMetricCompute Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.spansMetric.SpansMetric.putCompute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.spansMetric.SpansMetricCompute">SpansMetricCompute</a>

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-datadog.spansMetric.SpansMetric.putFilter"></a>

```csharp
private void PutFilter(SpansMetricFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.spansMetric.SpansMetric.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilter">SpansMetricFilter</a>

---

##### `PutGroupBy` <a name="PutGroupBy" id="@cdktf/provider-datadog.spansMetric.SpansMetric.putGroupBy"></a>

```csharp
private void PutGroupBy(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.spansMetric.SpansMetric.putGroupBy.parameter.value"></a>

- *Type:* object

---

##### `ResetCompute` <a name="ResetCompute" id="@cdktf/provider-datadog.spansMetric.SpansMetric.resetCompute"></a>

```csharp
private void ResetCompute()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-datadog.spansMetric.SpansMetric.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetGroupBy` <a name="ResetGroupBy" id="@cdktf/provider-datadog.spansMetric.SpansMetric.resetGroupBy"></a>

```csharp
private void ResetGroupBy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SpansMetric resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.spansMetric.SpansMetric.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

SpansMetric.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.spansMetric.SpansMetric.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.spansMetric.SpansMetric.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

SpansMetric.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.spansMetric.SpansMetric.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.spansMetric.SpansMetric.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

SpansMetric.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.spansMetric.SpansMetric.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.spansMetric.SpansMetric.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

SpansMetric.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SpansMetric resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.spansMetric.SpansMetric.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-datadog.spansMetric.SpansMetric.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SpansMetric to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-datadog.spansMetric.SpansMetric.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SpansMetric that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/spans_metric#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.spansMetric.SpansMetric.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SpansMetric to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.compute">Compute</a></code> | <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference">SpansMetricComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference">SpansMetricFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.groupBy">GroupBy</a></code> | <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList">SpansMetricGroupByList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.computeInput">ComputeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.groupByInput">GroupByInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Compute`<sup>Required</sup> <a name="Compute" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.compute"></a>

```csharp
public SpansMetricComputeOutputReference Compute { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference">SpansMetricComputeOutputReference</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.filter"></a>

```csharp
public SpansMetricFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference">SpansMetricFilterOutputReference</a>

---

##### `GroupBy`<sup>Required</sup> <a name="GroupBy" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.groupBy"></a>

```csharp
public SpansMetricGroupByList GroupBy { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList">SpansMetricGroupByList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ComputeInput`<sup>Optional</sup> <a name="ComputeInput" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.computeInput"></a>

```csharp
public object ComputeInput { get; }
```

- *Type:* object

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `GroupByInput`<sup>Optional</sup> <a name="GroupByInput" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.groupByInput"></a>

```csharp
public object GroupByInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SpansMetricCompute <a name="SpansMetricCompute" id="@cdktf/provider-datadog.spansMetric.SpansMetricCompute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.spansMetric.SpansMetricCompute.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SpansMetricCompute {
    string AggregationType,
    object IncludePercentiles = null,
    string Path = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricCompute.property.aggregationType">AggregationType</a></code> | <code>string</code> | The type of aggregation to use. This field can't be updated after creation. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricCompute.property.includePercentiles">IncludePercentiles</a></code> | <code>object</code> | Toggle to include or exclude percentile aggregations for distribution metrics. Only present when the `aggregation_type` is `distribution`. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricCompute.property.path">Path</a></code> | <code>string</code> | The path to the value the span-based metric will aggregate on (only used if the aggregation type is a "distribution"). |

---

##### `AggregationType`<sup>Required</sup> <a name="AggregationType" id="@cdktf/provider-datadog.spansMetric.SpansMetricCompute.property.aggregationType"></a>

```csharp
public string AggregationType { get; set; }
```

- *Type:* string

The type of aggregation to use. This field can't be updated after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/spans_metric#aggregation_type SpansMetric#aggregation_type}

---

##### `IncludePercentiles`<sup>Optional</sup> <a name="IncludePercentiles" id="@cdktf/provider-datadog.spansMetric.SpansMetricCompute.property.includePercentiles"></a>

```csharp
public object IncludePercentiles { get; set; }
```

- *Type:* object

Toggle to include or exclude percentile aggregations for distribution metrics. Only present when the `aggregation_type` is `distribution`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/spans_metric#include_percentiles SpansMetric#include_percentiles}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-datadog.spansMetric.SpansMetricCompute.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The path to the value the span-based metric will aggregate on (only used if the aggregation type is a "distribution").

This field can't be updated after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/spans_metric#path SpansMetric#path}

---

### SpansMetricConfig <a name="SpansMetricConfig" id="@cdktf/provider-datadog.spansMetric.SpansMetricConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.spansMetric.SpansMetricConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SpansMetricConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    SpansMetricCompute Compute = null,
    SpansMetricFilter Filter = null,
    object GroupBy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricConfig.property.name">Name</a></code> | <code>string</code> | The name of the span-based metric. This field can't be updated after creation. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricConfig.property.compute">Compute</a></code> | <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricCompute">SpansMetricCompute</a></code> | compute block. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilter">SpansMetricFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricConfig.property.groupBy">GroupBy</a></code> | <code>object</code> | group_by block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.spansMetric.SpansMetricConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.spansMetric.SpansMetricConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.spansMetric.SpansMetricConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.spansMetric.SpansMetricConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.spansMetric.SpansMetricConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.spansMetric.SpansMetricConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.spansMetric.SpansMetricConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.spansMetric.SpansMetricConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the span-based metric. This field can't be updated after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/spans_metric#name SpansMetric#name}

---

##### `Compute`<sup>Optional</sup> <a name="Compute" id="@cdktf/provider-datadog.spansMetric.SpansMetricConfig.property.compute"></a>

```csharp
public SpansMetricCompute Compute { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.spansMetric.SpansMetricCompute">SpansMetricCompute</a>

compute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/spans_metric#compute SpansMetric#compute}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-datadog.spansMetric.SpansMetricConfig.property.filter"></a>

```csharp
public SpansMetricFilter Filter { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilter">SpansMetricFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/spans_metric#filter SpansMetric#filter}

---

##### `GroupBy`<sup>Optional</sup> <a name="GroupBy" id="@cdktf/provider-datadog.spansMetric.SpansMetricConfig.property.groupBy"></a>

```csharp
public object GroupBy { get; set; }
```

- *Type:* object

group_by block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/spans_metric#group_by SpansMetric#group_by}

---

### SpansMetricFilter <a name="SpansMetricFilter" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SpansMetricFilter {
    string Query = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilter.property.query">Query</a></code> | <code>string</code> | The search query - following the span search syntax. Defaults to `"*"`. |

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilter.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

The search query - following the span search syntax. Defaults to `"*"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/spans_metric#query SpansMetric#query}

---

### SpansMetricGroupBy <a name="SpansMetricGroupBy" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupBy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SpansMetricGroupBy {
    string Path,
    string TagName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupBy.property.path">Path</a></code> | <code>string</code> | The path to the value the span-based metric will be aggregated over. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupBy.property.tagName">TagName</a></code> | <code>string</code> | Eventual name of the tag that gets created. By default, the path attribute is used as the tag name. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupBy.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The path to the value the span-based metric will be aggregated over.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/spans_metric#path SpansMetric#path}

---

##### `TagName`<sup>Optional</sup> <a name="TagName" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupBy.property.tagName"></a>

```csharp
public string TagName { get; set; }
```

- *Type:* string

Eventual name of the tag that gets created. By default, the path attribute is used as the tag name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/spans_metric#tag_name SpansMetric#tag_name}

---

## Classes <a name="Classes" id="Classes"></a>

### SpansMetricComputeOutputReference <a name="SpansMetricComputeOutputReference" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SpansMetricComputeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.resetIncludePercentiles">ResetIncludePercentiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludePercentiles` <a name="ResetIncludePercentiles" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.resetIncludePercentiles"></a>

```csharp
private void ResetIncludePercentiles()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.property.aggregationTypeInput">AggregationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.property.includePercentilesInput">IncludePercentilesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.property.aggregationType">AggregationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.property.includePercentiles">IncludePercentiles</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AggregationTypeInput`<sup>Optional</sup> <a name="AggregationTypeInput" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.property.aggregationTypeInput"></a>

```csharp
public string AggregationTypeInput { get; }
```

- *Type:* string

---

##### `IncludePercentilesInput`<sup>Optional</sup> <a name="IncludePercentilesInput" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.property.includePercentilesInput"></a>

```csharp
public object IncludePercentilesInput { get; }
```

- *Type:* object

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `AggregationType`<sup>Required</sup> <a name="AggregationType" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.property.aggregationType"></a>

```csharp
public string AggregationType { get; }
```

- *Type:* string

---

##### `IncludePercentiles`<sup>Required</sup> <a name="IncludePercentiles" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.property.includePercentiles"></a>

```csharp
public object IncludePercentiles { get; }
```

- *Type:* object

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SpansMetricFilterOutputReference <a name="SpansMetricFilterOutputReference" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SpansMetricFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.resetQuery">ResetQuery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetQuery` <a name="ResetQuery" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.resetQuery"></a>

```csharp
private void ResetQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SpansMetricGroupByList <a name="SpansMetricGroupByList" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SpansMetricGroupByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.get"></a>

```csharp
private SpansMetricGroupByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SpansMetricGroupByOutputReference <a name="SpansMetricGroupByOutputReference" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SpansMetricGroupByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.resetTagName">ResetTagName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTagName` <a name="ResetTagName" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.resetTagName"></a>

```csharp
private void ResetTagName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.property.tagNameInput">TagNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.property.tagName">TagName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `TagNameInput`<sup>Optional</sup> <a name="TagNameInput" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.property.tagNameInput"></a>

```csharp
public string TagNameInput { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `TagName`<sup>Required</sup> <a name="TagName" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.property.tagName"></a>

```csharp
public string TagName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



