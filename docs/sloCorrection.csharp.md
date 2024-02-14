# `sloCorrection` Submodule <a name="`sloCorrection` Submodule" id="@cdktf/provider-datadog.sloCorrection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SloCorrection <a name="SloCorrection" id="@cdktf/provider-datadog.sloCorrection.SloCorrection"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/slo_correction datadog_slo_correction}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SloCorrection(Construct Scope, string Id, SloCorrectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig">SloCorrectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig">SloCorrectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.resetDuration">ResetDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.resetEnd">ResetEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.resetRrule">ResetRrule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.resetTimezone">ResetTimezone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDuration` <a name="ResetDuration" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.resetDuration"></a>

```csharp
private void ResetDuration()
```

##### `ResetEnd` <a name="ResetEnd" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.resetEnd"></a>

```csharp
private void ResetEnd()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRrule` <a name="ResetRrule" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.resetRrule"></a>

```csharp
private void ResetRrule()
```

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.resetTimezone"></a>

```csharp
private void ResetTimezone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SloCorrection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

SloCorrection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

SloCorrection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

SloCorrection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

SloCorrection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SloCorrection resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SloCorrection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SloCorrection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/slo_correction#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SloCorrection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.categoryInput">CategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.durationInput">DurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.endInput">EndInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.rruleInput">RruleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.sloIdInput">SloIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.startInput">StartInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.timezoneInput">TimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.duration">Duration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.end">End</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.rrule">Rrule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.sloId">SloId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.start">Start</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.categoryInput"></a>

```csharp
public string CategoryInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.durationInput"></a>

```csharp
public double DurationInput { get; }
```

- *Type:* double

---

##### `EndInput`<sup>Optional</sup> <a name="EndInput" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.endInput"></a>

```csharp
public double EndInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RruleInput`<sup>Optional</sup> <a name="RruleInput" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.rruleInput"></a>

```csharp
public string RruleInput { get; }
```

- *Type:* string

---

##### `SloIdInput`<sup>Optional</sup> <a name="SloIdInput" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.sloIdInput"></a>

```csharp
public string SloIdInput { get; }
```

- *Type:* string

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.startInput"></a>

```csharp
public double StartInput { get; }
```

- *Type:* double

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.timezoneInput"></a>

```csharp
public string TimezoneInput { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.duration"></a>

```csharp
public double Duration { get; }
```

- *Type:* double

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.end"></a>

```csharp
public double End { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Rrule`<sup>Required</sup> <a name="Rrule" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.rrule"></a>

```csharp
public string Rrule { get; }
```

- *Type:* string

---

##### `SloId`<sup>Required</sup> <a name="SloId" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.sloId"></a>

```csharp
public string SloId { get; }
```

- *Type:* string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.start"></a>

```csharp
public double Start { get; }
```

- *Type:* double

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SloCorrectionConfig <a name="SloCorrectionConfig" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SloCorrectionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Category,
    string SloId,
    double Start,
    string Description = null,
    double Duration = null,
    double End = null,
    string Id = null,
    string Rrule = null,
    string Timezone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.category">Category</a></code> | <code>string</code> | Category the SLO correction belongs to. Valid values are `Scheduled Maintenance`, `Outside Business Hours`, `Deployment`, `Other`. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.sloId">SloId</a></code> | <code>string</code> | ID of the SLO that this correction will be applied to. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.start">Start</a></code> | <code>double</code> | Starting time of the correction in epoch seconds. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.description">Description</a></code> | <code>string</code> | Description of the correction being made. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.duration">Duration</a></code> | <code>double</code> | Length of time in seconds for a specified `rrule` recurring SLO correction (required if specifying `rrule`). |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.end">End</a></code> | <code>double</code> | Ending time of the correction in epoch seconds. Required for one time corrections, but optional if `rrule` is specified. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/slo_correction#id SloCorrection#id}. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.rrule">Rrule</a></code> | <code>string</code> | Recurrence rules as defined in the iCalendar RFC 5545. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.timezone">Timezone</a></code> | <code>string</code> | The timezone to display in the UI for the correction times (defaults to "UTC"). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.category"></a>

```csharp
public string Category { get; set; }
```

- *Type:* string

Category the SLO correction belongs to. Valid values are `Scheduled Maintenance`, `Outside Business Hours`, `Deployment`, `Other`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/slo_correction#category SloCorrection#category}

---

##### `SloId`<sup>Required</sup> <a name="SloId" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.sloId"></a>

```csharp
public string SloId { get; set; }
```

- *Type:* string

ID of the SLO that this correction will be applied to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/slo_correction#slo_id SloCorrection#slo_id}

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.start"></a>

```csharp
public double Start { get; set; }
```

- *Type:* double

Starting time of the correction in epoch seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/slo_correction#start SloCorrection#start}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the correction being made.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/slo_correction#description SloCorrection#description}

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.duration"></a>

```csharp
public double Duration { get; set; }
```

- *Type:* double

Length of time in seconds for a specified `rrule` recurring SLO correction (required if specifying `rrule`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/slo_correction#duration SloCorrection#duration}

---

##### `End`<sup>Optional</sup> <a name="End" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.end"></a>

```csharp
public double End { get; set; }
```

- *Type:* double

Ending time of the correction in epoch seconds. Required for one time corrections, but optional if `rrule` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/slo_correction#end SloCorrection#end}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/slo_correction#id SloCorrection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Rrule`<sup>Optional</sup> <a name="Rrule" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.rrule"></a>

```csharp
public string Rrule { get; set; }
```

- *Type:* string

Recurrence rules as defined in the iCalendar RFC 5545.

Supported rules for SLO corrections are `FREQ`, `INTERVAL`, `COUNT` and `UNTIL`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/slo_correction#rrule SloCorrection#rrule}

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.timezone"></a>

```csharp
public string Timezone { get; set; }
```

- *Type:* string

The timezone to display in the UI for the correction times (defaults to "UTC").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.1/docs/resources/slo_correction#timezone SloCorrection#timezone}

---



