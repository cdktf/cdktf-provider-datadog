# `syntheticsGlobalVariable` Submodule <a name="`syntheticsGlobalVariable` Submodule" id="@cdktf/provider-datadog.syntheticsGlobalVariable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsGlobalVariable <a name="SyntheticsGlobalVariable" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/synthetics_global_variable datadog_synthetics_global_variable}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsGlobalVariable(Construct Scope, string Id, SyntheticsGlobalVariableConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig">SyntheticsGlobalVariableConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig">SyntheticsGlobalVariableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.putOptions">PutOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.putParseTestOptions">PutParseTestOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetIsFido">ResetIsFido</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetIsTotp">ResetIsTotp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetParseTestId">ResetParseTestId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetParseTestOptions">ResetParseTestOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetRestrictedRoles">ResetRestrictedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetSecure">ResetSecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOptions` <a name="PutOptions" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.putOptions"></a>

```csharp
private void PutOptions(IResolvable|SyntheticsGlobalVariableOptions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.putOptions.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptions">SyntheticsGlobalVariableOptions</a>[]

---

##### `PutParseTestOptions` <a name="PutParseTestOptions" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.putParseTestOptions"></a>

```csharp
private void PutParseTestOptions(IResolvable|SyntheticsGlobalVariableParseTestOptions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.putParseTestOptions.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions">SyntheticsGlobalVariableParseTestOptions</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetIsFido` <a name="ResetIsFido" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetIsFido"></a>

```csharp
private void ResetIsFido()
```

##### `ResetIsTotp` <a name="ResetIsTotp" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetIsTotp"></a>

```csharp
private void ResetIsTotp()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetOptions"></a>

```csharp
private void ResetOptions()
```

##### `ResetParseTestId` <a name="ResetParseTestId" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetParseTestId"></a>

```csharp
private void ResetParseTestId()
```

##### `ResetParseTestOptions` <a name="ResetParseTestOptions" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetParseTestOptions"></a>

```csharp
private void ResetParseTestOptions()
```

##### `ResetRestrictedRoles` <a name="ResetRestrictedRoles" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetRestrictedRoles"></a>

```csharp
private void ResetRestrictedRoles()
```

##### `ResetSecure` <a name="ResetSecure" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetSecure"></a>

```csharp
private void ResetSecure()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetValue"></a>

```csharp
private void ResetValue()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SyntheticsGlobalVariable resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

SyntheticsGlobalVariable.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

SyntheticsGlobalVariable.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

SyntheticsGlobalVariable.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

SyntheticsGlobalVariable.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SyntheticsGlobalVariable resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SyntheticsGlobalVariable to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SyntheticsGlobalVariable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/synthetics_global_variable#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SyntheticsGlobalVariable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.options">Options</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList">SyntheticsGlobalVariableOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.parseTestOptions">ParseTestOptions</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList">SyntheticsGlobalVariableParseTestOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.isFidoInput">IsFidoInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.isTotpInput">IsTotpInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.optionsInput">OptionsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptions">SyntheticsGlobalVariableOptions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.parseTestIdInput">ParseTestIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.parseTestOptionsInput">ParseTestOptionsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions">SyntheticsGlobalVariableParseTestOptions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.restrictedRolesInput">RestrictedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.secureInput">SecureInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.isFido">IsFido</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.isTotp">IsTotp</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.parseTestId">ParseTestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.restrictedRoles">RestrictedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.secure">Secure</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.value">Value</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.options"></a>

```csharp
public SyntheticsGlobalVariableOptionsList Options { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList">SyntheticsGlobalVariableOptionsList</a>

---

##### `ParseTestOptions`<sup>Required</sup> <a name="ParseTestOptions" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.parseTestOptions"></a>

```csharp
public SyntheticsGlobalVariableParseTestOptionsList ParseTestOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList">SyntheticsGlobalVariableParseTestOptionsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IsFidoInput`<sup>Optional</sup> <a name="IsFidoInput" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.isFidoInput"></a>

```csharp
public bool|IResolvable IsFidoInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `IsTotpInput`<sup>Optional</sup> <a name="IsTotpInput" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.isTotpInput"></a>

```csharp
public bool|IResolvable IsTotpInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.optionsInput"></a>

```csharp
public IResolvable|SyntheticsGlobalVariableOptions[] OptionsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptions">SyntheticsGlobalVariableOptions</a>[]

---

##### `ParseTestIdInput`<sup>Optional</sup> <a name="ParseTestIdInput" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.parseTestIdInput"></a>

```csharp
public string ParseTestIdInput { get; }
```

- *Type:* string

---

##### `ParseTestOptionsInput`<sup>Optional</sup> <a name="ParseTestOptionsInput" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.parseTestOptionsInput"></a>

```csharp
public IResolvable|SyntheticsGlobalVariableParseTestOptions[] ParseTestOptionsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions">SyntheticsGlobalVariableParseTestOptions</a>[]

---

##### `RestrictedRolesInput`<sup>Optional</sup> <a name="RestrictedRolesInput" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.restrictedRolesInput"></a>

```csharp
public string[] RestrictedRolesInput { get; }
```

- *Type:* string[]

---

##### `SecureInput`<sup>Optional</sup> <a name="SecureInput" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.secureInput"></a>

```csharp
public bool|IResolvable SecureInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `IsFido`<sup>Required</sup> <a name="IsFido" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.isFido"></a>

```csharp
public bool|IResolvable IsFido { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `IsTotp`<sup>Required</sup> <a name="IsTotp" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.isTotp"></a>

```csharp
public bool|IResolvable IsTotp { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParseTestId`<sup>Required</sup> <a name="ParseTestId" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.parseTestId"></a>

```csharp
public string ParseTestId { get; }
```

- *Type:* string

---

##### `RestrictedRoles`<sup>Required</sup> <a name="RestrictedRoles" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.restrictedRoles"></a>

```csharp
public string[] RestrictedRoles { get; }
```

- *Type:* string[]

---

##### `Secure`<sup>Required</sup> <a name="Secure" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.secure"></a>

```csharp
public bool|IResolvable Secure { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsGlobalVariableConfig <a name="SyntheticsGlobalVariableConfig" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsGlobalVariableConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Description = null,
    bool|IResolvable IsFido = null,
    bool|IResolvable IsTotp = null,
    IResolvable|SyntheticsGlobalVariableOptions[] Options = null,
    string ParseTestId = null,
    IResolvable|SyntheticsGlobalVariableParseTestOptions[] ParseTestOptions = null,
    string[] RestrictedRoles = null,
    bool|IResolvable Secure = null,
    string[] Tags = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.name">Name</a></code> | <code>string</code> | Synthetics global variable name. Must be all uppercase with underscores. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.description">Description</a></code> | <code>string</code> | Description of the global variable. Defaults to `""`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.isFido">IsFido</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | If set to true, the global variable is a FIDO variable. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.isTotp">IsTotp</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | If set to true, the global variable is a TOTP variable. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.options">Options</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptions">SyntheticsGlobalVariableOptions</a>[]</code> | options block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.parseTestId">ParseTestId</a></code> | <code>string</code> | Id of the Synthetics test to use for a variable from test. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.parseTestOptions">ParseTestOptions</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions">SyntheticsGlobalVariableParseTestOptions</a>[]</code> | parse_test_options block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.restrictedRoles">RestrictedRoles</a></code> | <code>string[]</code> | A list of role identifiers to associate with the Synthetics global variable. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.secure">Secure</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | If set to true, the value of the global variable is hidden. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.tags">Tags</a></code> | <code>string[]</code> | A list of tags to associate with your synthetics global variable. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.value">Value</a></code> | <code>string</code> | The value of the global variable. Required unless `is_fido` is set to `true`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Synthetics global variable name. Must be all uppercase with underscores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/synthetics_global_variable#name SyntheticsGlobalVariable#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the global variable. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/synthetics_global_variable#description SyntheticsGlobalVariable#description}

---

##### `IsFido`<sup>Optional</sup> <a name="IsFido" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.isFido"></a>

```csharp
public bool|IResolvable IsFido { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

If set to true, the global variable is a FIDO variable. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/synthetics_global_variable#is_fido SyntheticsGlobalVariable#is_fido}

---

##### `IsTotp`<sup>Optional</sup> <a name="IsTotp" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.isTotp"></a>

```csharp
public bool|IResolvable IsTotp { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

If set to true, the global variable is a TOTP variable. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/synthetics_global_variable#is_totp SyntheticsGlobalVariable#is_totp}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.options"></a>

```csharp
public IResolvable|SyntheticsGlobalVariableOptions[] Options { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptions">SyntheticsGlobalVariableOptions</a>[]

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/synthetics_global_variable#options SyntheticsGlobalVariable#options}

---

##### `ParseTestId`<sup>Optional</sup> <a name="ParseTestId" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.parseTestId"></a>

```csharp
public string ParseTestId { get; set; }
```

- *Type:* string

Id of the Synthetics test to use for a variable from test.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/synthetics_global_variable#parse_test_id SyntheticsGlobalVariable#parse_test_id}

---

##### `ParseTestOptions`<sup>Optional</sup> <a name="ParseTestOptions" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.parseTestOptions"></a>

```csharp
public IResolvable|SyntheticsGlobalVariableParseTestOptions[] ParseTestOptions { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions">SyntheticsGlobalVariableParseTestOptions</a>[]

parse_test_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/synthetics_global_variable#parse_test_options SyntheticsGlobalVariable#parse_test_options}

---

##### `RestrictedRoles`<sup>Optional</sup> <a name="RestrictedRoles" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.restrictedRoles"></a>

```csharp
public string[] RestrictedRoles { get; set; }
```

- *Type:* string[]

A list of role identifiers to associate with the Synthetics global variable.

**Deprecated.** This field is no longer supported by the Datadog API. Please use `datadog_restriction_policy` instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/synthetics_global_variable#restricted_roles SyntheticsGlobalVariable#restricted_roles}

---

##### `Secure`<sup>Optional</sup> <a name="Secure" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.secure"></a>

```csharp
public bool|IResolvable Secure { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

If set to true, the value of the global variable is hidden.

This setting is automatically set to `true` if `is_totp` or `is_fido` is set to `true`. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/synthetics_global_variable#secure SyntheticsGlobalVariable#secure}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

A list of tags to associate with your synthetics global variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/synthetics_global_variable#tags SyntheticsGlobalVariable#tags}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the global variable. Required unless `is_fido` is set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/synthetics_global_variable#value SyntheticsGlobalVariable#value}

---

### SyntheticsGlobalVariableOptions <a name="SyntheticsGlobalVariableOptions" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsGlobalVariableOptions {
    IResolvable|SyntheticsGlobalVariableOptionsTotpParameters[] TotpParameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptions.property.totpParameters">TotpParameters</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParameters">SyntheticsGlobalVariableOptionsTotpParameters</a>[]</code> | totp_parameters block. |

---

##### `TotpParameters`<sup>Optional</sup> <a name="TotpParameters" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptions.property.totpParameters"></a>

```csharp
public IResolvable|SyntheticsGlobalVariableOptionsTotpParameters[] TotpParameters { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParameters">SyntheticsGlobalVariableOptionsTotpParameters</a>[]

totp_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/synthetics_global_variable#totp_parameters SyntheticsGlobalVariable#totp_parameters}

---

### SyntheticsGlobalVariableOptionsTotpParameters <a name="SyntheticsGlobalVariableOptionsTotpParameters" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsGlobalVariableOptionsTotpParameters {
    double Digits,
    double RefreshInterval
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParameters.property.digits">Digits</a></code> | <code>double</code> | Number of digits for the OTP. Value must be between 4 and 10. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParameters.property.refreshInterval">RefreshInterval</a></code> | <code>double</code> | Interval for which to refresh the token (in seconds). Value must be between 0 and 999. |

---

##### `Digits`<sup>Required</sup> <a name="Digits" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParameters.property.digits"></a>

```csharp
public double Digits { get; set; }
```

- *Type:* double

Number of digits for the OTP. Value must be between 4 and 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/synthetics_global_variable#digits SyntheticsGlobalVariable#digits}

---

##### `RefreshInterval`<sup>Required</sup> <a name="RefreshInterval" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParameters.property.refreshInterval"></a>

```csharp
public double RefreshInterval { get; set; }
```

- *Type:* double

Interval for which to refresh the token (in seconds). Value must be between 0 and 999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/synthetics_global_variable#refresh_interval SyntheticsGlobalVariable#refresh_interval}

---

### SyntheticsGlobalVariableParseTestOptions <a name="SyntheticsGlobalVariableParseTestOptions" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsGlobalVariableParseTestOptions {
    string Type,
    string Field = null,
    string LocalVariableName = null,
    IResolvable|SyntheticsGlobalVariableParseTestOptionsParser[] Parser = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions.property.type">Type</a></code> | <code>string</code> | Defines the source to use to extract the value. Valid values are `http_body`, `http_header`, `http_status_code`, `local_variable`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions.property.field">Field</a></code> | <code>string</code> | Required when type = `http_header`. Defines the header to use to extract the value. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions.property.localVariableName">LocalVariableName</a></code> | <code>string</code> | When type is `local_variable`, name of the local variable to use to extract the value. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions.property.parser">Parser</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParser">SyntheticsGlobalVariableParseTestOptionsParser</a>[]</code> | parser block. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Defines the source to use to extract the value. Valid values are `http_body`, `http_header`, `http_status_code`, `local_variable`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/synthetics_global_variable#type SyntheticsGlobalVariable#type}

---

##### `Field`<sup>Optional</sup> <a name="Field" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions.property.field"></a>

```csharp
public string Field { get; set; }
```

- *Type:* string

Required when type = `http_header`. Defines the header to use to extract the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/synthetics_global_variable#field SyntheticsGlobalVariable#field}

---

##### `LocalVariableName`<sup>Optional</sup> <a name="LocalVariableName" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions.property.localVariableName"></a>

```csharp
public string LocalVariableName { get; set; }
```

- *Type:* string

When type is `local_variable`, name of the local variable to use to extract the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/synthetics_global_variable#local_variable_name SyntheticsGlobalVariable#local_variable_name}

---

##### `Parser`<sup>Optional</sup> <a name="Parser" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions.property.parser"></a>

```csharp
public IResolvable|SyntheticsGlobalVariableParseTestOptionsParser[] Parser { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParser">SyntheticsGlobalVariableParseTestOptionsParser</a>[]

parser block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/synthetics_global_variable#parser SyntheticsGlobalVariable#parser}

---

### SyntheticsGlobalVariableParseTestOptionsParser <a name="SyntheticsGlobalVariableParseTestOptionsParser" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParser.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsGlobalVariableParseTestOptionsParser {
    string Type,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParser.property.type">Type</a></code> | <code>string</code> | Type of parser to extract the value. Valid values are `raw`, `json_path`, `regex`, `x_path`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParser.property.value">Value</a></code> | <code>string</code> | Value for the parser to use, required for type `json_path` or `regex`. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParser.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type of parser to extract the value. Valid values are `raw`, `json_path`, `regex`, `x_path`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/synthetics_global_variable#type SyntheticsGlobalVariable#type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParser.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Value for the parser to use, required for type `json_path` or `regex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/synthetics_global_variable#value SyntheticsGlobalVariable#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SyntheticsGlobalVariableOptionsList <a name="SyntheticsGlobalVariableOptionsList" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsGlobalVariableOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.get"></a>

```csharp
private SyntheticsGlobalVariableOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptions">SyntheticsGlobalVariableOptions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.property.internalValue"></a>

```csharp
public IResolvable|SyntheticsGlobalVariableOptions[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptions">SyntheticsGlobalVariableOptions</a>[]

---


### SyntheticsGlobalVariableOptionsOutputReference <a name="SyntheticsGlobalVariableOptionsOutputReference" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsGlobalVariableOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.putTotpParameters">PutTotpParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.resetTotpParameters">ResetTotpParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTotpParameters` <a name="PutTotpParameters" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.putTotpParameters"></a>

```csharp
private void PutTotpParameters(IResolvable|SyntheticsGlobalVariableOptionsTotpParameters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.putTotpParameters.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParameters">SyntheticsGlobalVariableOptionsTotpParameters</a>[]

---

##### `ResetTotpParameters` <a name="ResetTotpParameters" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.resetTotpParameters"></a>

```csharp
private void ResetTotpParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.property.totpParameters">TotpParameters</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList">SyntheticsGlobalVariableOptionsTotpParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.property.totpParametersInput">TotpParametersInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParameters">SyntheticsGlobalVariableOptionsTotpParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptions">SyntheticsGlobalVariableOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TotpParameters`<sup>Required</sup> <a name="TotpParameters" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.property.totpParameters"></a>

```csharp
public SyntheticsGlobalVariableOptionsTotpParametersList TotpParameters { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList">SyntheticsGlobalVariableOptionsTotpParametersList</a>

---

##### `TotpParametersInput`<sup>Optional</sup> <a name="TotpParametersInput" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.property.totpParametersInput"></a>

```csharp
public IResolvable|SyntheticsGlobalVariableOptionsTotpParameters[] TotpParametersInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParameters">SyntheticsGlobalVariableOptionsTotpParameters</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SyntheticsGlobalVariableOptions InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptions">SyntheticsGlobalVariableOptions</a>

---


### SyntheticsGlobalVariableOptionsTotpParametersList <a name="SyntheticsGlobalVariableOptionsTotpParametersList" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsGlobalVariableOptionsTotpParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.get"></a>

```csharp
private SyntheticsGlobalVariableOptionsTotpParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParameters">SyntheticsGlobalVariableOptionsTotpParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.property.internalValue"></a>

```csharp
public IResolvable|SyntheticsGlobalVariableOptionsTotpParameters[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParameters">SyntheticsGlobalVariableOptionsTotpParameters</a>[]

---


### SyntheticsGlobalVariableOptionsTotpParametersOutputReference <a name="SyntheticsGlobalVariableOptionsTotpParametersOutputReference" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsGlobalVariableOptionsTotpParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.property.digitsInput">DigitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.property.refreshIntervalInput">RefreshIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.property.digits">Digits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.property.refreshInterval">RefreshInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParameters">SyntheticsGlobalVariableOptionsTotpParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DigitsInput`<sup>Optional</sup> <a name="DigitsInput" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.property.digitsInput"></a>

```csharp
public double DigitsInput { get; }
```

- *Type:* double

---

##### `RefreshIntervalInput`<sup>Optional</sup> <a name="RefreshIntervalInput" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.property.refreshIntervalInput"></a>

```csharp
public double RefreshIntervalInput { get; }
```

- *Type:* double

---

##### `Digits`<sup>Required</sup> <a name="Digits" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.property.digits"></a>

```csharp
public double Digits { get; }
```

- *Type:* double

---

##### `RefreshInterval`<sup>Required</sup> <a name="RefreshInterval" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.property.refreshInterval"></a>

```csharp
public double RefreshInterval { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SyntheticsGlobalVariableOptionsTotpParameters InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParameters">SyntheticsGlobalVariableOptionsTotpParameters</a>

---


### SyntheticsGlobalVariableParseTestOptionsList <a name="SyntheticsGlobalVariableParseTestOptionsList" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsGlobalVariableParseTestOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.get"></a>

```csharp
private SyntheticsGlobalVariableParseTestOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions">SyntheticsGlobalVariableParseTestOptions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.property.internalValue"></a>

```csharp
public IResolvable|SyntheticsGlobalVariableParseTestOptions[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions">SyntheticsGlobalVariableParseTestOptions</a>[]

---


### SyntheticsGlobalVariableParseTestOptionsOutputReference <a name="SyntheticsGlobalVariableParseTestOptionsOutputReference" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsGlobalVariableParseTestOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.putParser">PutParser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.resetField">ResetField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.resetLocalVariableName">ResetLocalVariableName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.resetParser">ResetParser</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParser` <a name="PutParser" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.putParser"></a>

```csharp
private void PutParser(IResolvable|SyntheticsGlobalVariableParseTestOptionsParser[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.putParser.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParser">SyntheticsGlobalVariableParseTestOptionsParser</a>[]

---

##### `ResetField` <a name="ResetField" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.resetField"></a>

```csharp
private void ResetField()
```

##### `ResetLocalVariableName` <a name="ResetLocalVariableName" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.resetLocalVariableName"></a>

```csharp
private void ResetLocalVariableName()
```

##### `ResetParser` <a name="ResetParser" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.resetParser"></a>

```csharp
private void ResetParser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.parser">Parser</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList">SyntheticsGlobalVariableParseTestOptionsParserList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.fieldInput">FieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.localVariableNameInput">LocalVariableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.parserInput">ParserInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParser">SyntheticsGlobalVariableParseTestOptionsParser</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.field">Field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.localVariableName">LocalVariableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions">SyntheticsGlobalVariableParseTestOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Parser`<sup>Required</sup> <a name="Parser" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.parser"></a>

```csharp
public SyntheticsGlobalVariableParseTestOptionsParserList Parser { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList">SyntheticsGlobalVariableParseTestOptionsParserList</a>

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.fieldInput"></a>

```csharp
public string FieldInput { get; }
```

- *Type:* string

---

##### `LocalVariableNameInput`<sup>Optional</sup> <a name="LocalVariableNameInput" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.localVariableNameInput"></a>

```csharp
public string LocalVariableNameInput { get; }
```

- *Type:* string

---

##### `ParserInput`<sup>Optional</sup> <a name="ParserInput" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.parserInput"></a>

```csharp
public IResolvable|SyntheticsGlobalVariableParseTestOptionsParser[] ParserInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParser">SyntheticsGlobalVariableParseTestOptionsParser</a>[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.field"></a>

```csharp
public string Field { get; }
```

- *Type:* string

---

##### `LocalVariableName`<sup>Required</sup> <a name="LocalVariableName" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.localVariableName"></a>

```csharp
public string LocalVariableName { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SyntheticsGlobalVariableParseTestOptions InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions">SyntheticsGlobalVariableParseTestOptions</a>

---


### SyntheticsGlobalVariableParseTestOptionsParserList <a name="SyntheticsGlobalVariableParseTestOptionsParserList" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsGlobalVariableParseTestOptionsParserList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.get"></a>

```csharp
private SyntheticsGlobalVariableParseTestOptionsParserOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParser">SyntheticsGlobalVariableParseTestOptionsParser</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.property.internalValue"></a>

```csharp
public IResolvable|SyntheticsGlobalVariableParseTestOptionsParser[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParser">SyntheticsGlobalVariableParseTestOptionsParser</a>[]

---


### SyntheticsGlobalVariableParseTestOptionsParserOutputReference <a name="SyntheticsGlobalVariableParseTestOptionsParserOutputReference" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsGlobalVariableParseTestOptionsParserOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParser">SyntheticsGlobalVariableParseTestOptionsParser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SyntheticsGlobalVariableParseTestOptionsParser InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParser">SyntheticsGlobalVariableParseTestOptionsParser</a>

---



