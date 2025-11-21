# `costBudget` Submodule <a name="`costBudget` Submodule" id="@cdktf/provider-datadog.costBudget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CostBudget <a name="CostBudget" id="@cdktf/provider-datadog.costBudget.CostBudget"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/cost_budget datadog_cost_budget}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.costBudget.CostBudget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new CostBudget(Construct Scope, string Id, CostBudgetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetConfig">CostBudgetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.costBudget.CostBudget.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.costBudget.CostBudget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-datadog.costBudget.CostBudget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.costBudget.CostBudgetConfig">CostBudgetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.putEntries">PutEntries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.resetEntries">ResetEntries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.costBudget.CostBudget.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.costBudget.CostBudget.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.costBudget.CostBudget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.costBudget.CostBudget.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.costBudget.CostBudget.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-datadog.costBudget.CostBudget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.costBudget.CostBudget.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.costBudget.CostBudget.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.costBudget.CostBudget.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.costBudget.CostBudget.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.costBudget.CostBudget.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.costBudget.CostBudget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.costBudget.CostBudget.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.costBudget.CostBudget.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.costBudget.CostBudget.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.costBudget.CostBudget.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.costBudget.CostBudget.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.costBudget.CostBudget.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.costBudget.CostBudget.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.costBudget.CostBudget.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.costBudget.CostBudget.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.costBudget.CostBudget.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.costBudget.CostBudget.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.costBudget.CostBudget.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.costBudget.CostBudget.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.costBudget.CostBudget.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.costBudget.CostBudget.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.costBudget.CostBudget.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.costBudget.CostBudget.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.costBudget.CostBudget.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-datadog.costBudget.CostBudget.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.costBudget.CostBudget.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.costBudget.CostBudget.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEntries` <a name="PutEntries" id="@cdktf/provider-datadog.costBudget.CostBudget.putEntries"></a>

```csharp
private void PutEntries(IResolvable|CostBudgetEntries[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.costBudget.CostBudget.putEntries.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntries">CostBudgetEntries</a>[]

---

##### `ResetEntries` <a name="ResetEntries" id="@cdktf/provider-datadog.costBudget.CostBudget.resetEntries"></a>

```csharp
private void ResetEntries()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-datadog.costBudget.CostBudget.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CostBudget resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.costBudget.CostBudget.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

CostBudget.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.costBudget.CostBudget.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.costBudget.CostBudget.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

CostBudget.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.costBudget.CostBudget.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.costBudget.CostBudget.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

CostBudget.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.costBudget.CostBudget.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.costBudget.CostBudget.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

CostBudget.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CostBudget resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.costBudget.CostBudget.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-datadog.costBudget.CostBudget.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CostBudget to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-datadog.costBudget.CostBudget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CostBudget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/cost_budget#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.costBudget.CostBudget.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CostBudget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.entries">Entries</a></code> | <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesList">CostBudgetEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.totalAmount">TotalAmount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.endMonthInput">EndMonthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.entriesInput">EntriesInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntries">CostBudgetEntries</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.metricsQueryInput">MetricsQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.startMonthInput">StartMonthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.endMonth">EndMonth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.metricsQuery">MetricsQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.startMonth">StartMonth</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.costBudget.CostBudget.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.costBudget.CostBudget.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.costBudget.CostBudget.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.costBudget.CostBudget.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.costBudget.CostBudget.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.costBudget.CostBudget.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.costBudget.CostBudget.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.costBudget.CostBudget.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.costBudget.CostBudget.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.costBudget.CostBudget.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.costBudget.CostBudget.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.costBudget.CostBudget.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.costBudget.CostBudget.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.costBudget.CostBudget.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Entries`<sup>Required</sup> <a name="Entries" id="@cdktf/provider-datadog.costBudget.CostBudget.property.entries"></a>

```csharp
public CostBudgetEntriesList Entries { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesList">CostBudgetEntriesList</a>

---

##### `TotalAmount`<sup>Required</sup> <a name="TotalAmount" id="@cdktf/provider-datadog.costBudget.CostBudget.property.totalAmount"></a>

```csharp
public double TotalAmount { get; }
```

- *Type:* double

---

##### `EndMonthInput`<sup>Optional</sup> <a name="EndMonthInput" id="@cdktf/provider-datadog.costBudget.CostBudget.property.endMonthInput"></a>

```csharp
public double EndMonthInput { get; }
```

- *Type:* double

---

##### `EntriesInput`<sup>Optional</sup> <a name="EntriesInput" id="@cdktf/provider-datadog.costBudget.CostBudget.property.entriesInput"></a>

```csharp
public IResolvable|CostBudgetEntries[] EntriesInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntries">CostBudgetEntries</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.costBudget.CostBudget.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetricsQueryInput`<sup>Optional</sup> <a name="MetricsQueryInput" id="@cdktf/provider-datadog.costBudget.CostBudget.property.metricsQueryInput"></a>

```csharp
public string MetricsQueryInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.costBudget.CostBudget.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StartMonthInput`<sup>Optional</sup> <a name="StartMonthInput" id="@cdktf/provider-datadog.costBudget.CostBudget.property.startMonthInput"></a>

```csharp
public double StartMonthInput { get; }
```

- *Type:* double

---

##### `EndMonth`<sup>Required</sup> <a name="EndMonth" id="@cdktf/provider-datadog.costBudget.CostBudget.property.endMonth"></a>

```csharp
public double EndMonth { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.costBudget.CostBudget.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MetricsQuery`<sup>Required</sup> <a name="MetricsQuery" id="@cdktf/provider-datadog.costBudget.CostBudget.property.metricsQuery"></a>

```csharp
public string MetricsQuery { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.costBudget.CostBudget.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StartMonth`<sup>Required</sup> <a name="StartMonth" id="@cdktf/provider-datadog.costBudget.CostBudget.property.startMonth"></a>

```csharp
public double StartMonth { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.costBudget.CostBudget.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CostBudgetConfig <a name="CostBudgetConfig" id="@cdktf/provider-datadog.costBudget.CostBudgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.costBudget.CostBudgetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new CostBudgetConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double EndMonth,
    string MetricsQuery,
    string Name,
    double StartMonth,
    IResolvable|CostBudgetEntries[] Entries = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.endMonth">EndMonth</a></code> | <code>double</code> | The month when the budget ends (YYYYMM). |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.metricsQuery">MetricsQuery</a></code> | <code>string</code> | The cost query used to track against the budget. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.name">Name</a></code> | <code>string</code> | The name of the budget. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.startMonth">StartMonth</a></code> | <code>double</code> | The month when the budget starts (YYYYMM). |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.entries">Entries</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntries">CostBudgetEntries</a>[]</code> | entries block. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.id">Id</a></code> | <code>string</code> | The ID of the budget. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `EndMonth`<sup>Required</sup> <a name="EndMonth" id="@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.endMonth"></a>

```csharp
public double EndMonth { get; set; }
```

- *Type:* double

The month when the budget ends (YYYYMM).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/cost_budget#end_month CostBudget#end_month}

---

##### `MetricsQuery`<sup>Required</sup> <a name="MetricsQuery" id="@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.metricsQuery"></a>

```csharp
public string MetricsQuery { get; set; }
```

- *Type:* string

The cost query used to track against the budget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/cost_budget#metrics_query CostBudget#metrics_query}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the budget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/cost_budget#name CostBudget#name}

---

##### `StartMonth`<sup>Required</sup> <a name="StartMonth" id="@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.startMonth"></a>

```csharp
public double StartMonth { get; set; }
```

- *Type:* double

The month when the budget starts (YYYYMM).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/cost_budget#start_month CostBudget#start_month}

---

##### `Entries`<sup>Optional</sup> <a name="Entries" id="@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.entries"></a>

```csharp
public IResolvable|CostBudgetEntries[] Entries { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntries">CostBudgetEntries</a>[]

entries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/cost_budget#entries CostBudget#entries}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The ID of the budget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/cost_budget#id CostBudget#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### CostBudgetEntries <a name="CostBudgetEntries" id="@cdktf/provider-datadog.costBudget.CostBudgetEntries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.costBudget.CostBudgetEntries.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new CostBudgetEntries {
    double Amount,
    double Month,
    IResolvable|CostBudgetEntriesTagFilters[] TagFilters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntries.property.amount">Amount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/cost_budget#amount CostBudget#amount}. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntries.property.month">Month</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/cost_budget#month CostBudget#month}. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntries.property.tagFilters">TagFilters</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFilters">CostBudgetEntriesTagFilters</a>[]</code> | tag_filters block. |

---

##### `Amount`<sup>Required</sup> <a name="Amount" id="@cdktf/provider-datadog.costBudget.CostBudgetEntries.property.amount"></a>

```csharp
public double Amount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/cost_budget#amount CostBudget#amount}.

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktf/provider-datadog.costBudget.CostBudgetEntries.property.month"></a>

```csharp
public double Month { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/cost_budget#month CostBudget#month}.

---

##### `TagFilters`<sup>Optional</sup> <a name="TagFilters" id="@cdktf/provider-datadog.costBudget.CostBudgetEntries.property.tagFilters"></a>

```csharp
public IResolvable|CostBudgetEntriesTagFilters[] TagFilters { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFilters">CostBudgetEntriesTagFilters</a>[]

tag_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/cost_budget#tag_filters CostBudget#tag_filters}

---

### CostBudgetEntriesTagFilters <a name="CostBudgetEntriesTagFilters" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFilters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new CostBudgetEntriesTagFilters {
    string TagKey,
    string TagValue
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFilters.property.tagKey">TagKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/cost_budget#tag_key CostBudget#tag_key}. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFilters.property.tagValue">TagValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/cost_budget#tag_value CostBudget#tag_value}. |

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFilters.property.tagKey"></a>

```csharp
public string TagKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/cost_budget#tag_key CostBudget#tag_key}.

---

##### `TagValue`<sup>Required</sup> <a name="TagValue" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFilters.property.tagValue"></a>

```csharp
public string TagValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/cost_budget#tag_value CostBudget#tag_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CostBudgetEntriesList <a name="CostBudgetEntriesList" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new CostBudgetEntriesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.get"></a>

```csharp
private CostBudgetEntriesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntries">CostBudgetEntries</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.property.internalValue"></a>

```csharp
public IResolvable|CostBudgetEntries[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntries">CostBudgetEntries</a>[]

---


### CostBudgetEntriesOutputReference <a name="CostBudgetEntriesOutputReference" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new CostBudgetEntriesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.putTagFilters">PutTagFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.resetTagFilters">ResetTagFilters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTagFilters` <a name="PutTagFilters" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.putTagFilters"></a>

```csharp
private void PutTagFilters(IResolvable|CostBudgetEntriesTagFilters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.putTagFilters.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFilters">CostBudgetEntriesTagFilters</a>[]

---

##### `ResetTagFilters` <a name="ResetTagFilters" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.resetTagFilters"></a>

```csharp
private void ResetTagFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.tagFilters">TagFilters</a></code> | <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList">CostBudgetEntriesTagFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.amountInput">AmountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.monthInput">MonthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.tagFiltersInput">TagFiltersInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFilters">CostBudgetEntriesTagFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.amount">Amount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.month">Month</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntries">CostBudgetEntries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TagFilters`<sup>Required</sup> <a name="TagFilters" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.tagFilters"></a>

```csharp
public CostBudgetEntriesTagFiltersList TagFilters { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList">CostBudgetEntriesTagFiltersList</a>

---

##### `AmountInput`<sup>Optional</sup> <a name="AmountInput" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.amountInput"></a>

```csharp
public double AmountInput { get; }
```

- *Type:* double

---

##### `MonthInput`<sup>Optional</sup> <a name="MonthInput" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.monthInput"></a>

```csharp
public double MonthInput { get; }
```

- *Type:* double

---

##### `TagFiltersInput`<sup>Optional</sup> <a name="TagFiltersInput" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.tagFiltersInput"></a>

```csharp
public IResolvable|CostBudgetEntriesTagFilters[] TagFiltersInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFilters">CostBudgetEntriesTagFilters</a>[]

---

##### `Amount`<sup>Required</sup> <a name="Amount" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.amount"></a>

```csharp
public double Amount { get; }
```

- *Type:* double

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.month"></a>

```csharp
public double Month { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CostBudgetEntries InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntries">CostBudgetEntries</a>

---


### CostBudgetEntriesTagFiltersList <a name="CostBudgetEntriesTagFiltersList" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new CostBudgetEntriesTagFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.get"></a>

```csharp
private CostBudgetEntriesTagFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFilters">CostBudgetEntriesTagFilters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.property.internalValue"></a>

```csharp
public IResolvable|CostBudgetEntriesTagFilters[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFilters">CostBudgetEntriesTagFilters</a>[]

---


### CostBudgetEntriesTagFiltersOutputReference <a name="CostBudgetEntriesTagFiltersOutputReference" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new CostBudgetEntriesTagFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.tagKeyInput">TagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.tagValueInput">TagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.tagKey">TagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.tagValue">TagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFilters">CostBudgetEntriesTagFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TagKeyInput`<sup>Optional</sup> <a name="TagKeyInput" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.tagKeyInput"></a>

```csharp
public string TagKeyInput { get; }
```

- *Type:* string

---

##### `TagValueInput`<sup>Optional</sup> <a name="TagValueInput" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.tagValueInput"></a>

```csharp
public string TagValueInput { get; }
```

- *Type:* string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.tagKey"></a>

```csharp
public string TagKey { get; }
```

- *Type:* string

---

##### `TagValue`<sup>Required</sup> <a name="TagValue" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.tagValue"></a>

```csharp
public string TagValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CostBudgetEntriesTagFilters InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFilters">CostBudgetEntriesTagFilters</a>

---



