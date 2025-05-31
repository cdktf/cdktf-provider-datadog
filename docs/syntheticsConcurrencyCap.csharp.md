# `syntheticsConcurrencyCap` Submodule <a name="`syntheticsConcurrencyCap` Submodule" id="@cdktf/provider-datadog.syntheticsConcurrencyCap"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsConcurrencyCap <a name="SyntheticsConcurrencyCap" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/synthetics_concurrency_cap datadog_synthetics_concurrency_cap}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsConcurrencyCap(Construct Scope, string Id, SyntheticsConcurrencyCapConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig">SyntheticsConcurrencyCapConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig">SyntheticsConcurrencyCapConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SyntheticsConcurrencyCap resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

SyntheticsConcurrencyCap.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

SyntheticsConcurrencyCap.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

SyntheticsConcurrencyCap.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

SyntheticsConcurrencyCap.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SyntheticsConcurrencyCap resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SyntheticsConcurrencyCap to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SyntheticsConcurrencyCap that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/synthetics_concurrency_cap#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SyntheticsConcurrencyCap to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.onDemandConcurrencyCapInput">OnDemandConcurrencyCapInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.onDemandConcurrencyCap">OnDemandConcurrencyCap</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OnDemandConcurrencyCapInput`<sup>Optional</sup> <a name="OnDemandConcurrencyCapInput" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.onDemandConcurrencyCapInput"></a>

```csharp
public double OnDemandConcurrencyCapInput { get; }
```

- *Type:* double

---

##### `OnDemandConcurrencyCap`<sup>Required</sup> <a name="OnDemandConcurrencyCap" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.onDemandConcurrencyCap"></a>

```csharp
public double OnDemandConcurrencyCap { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsConcurrencyCapConfig <a name="SyntheticsConcurrencyCapConfig" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsConcurrencyCapConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double OnDemandConcurrencyCap
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.onDemandConcurrencyCap">OnDemandConcurrencyCap</a></code> | <code>double</code> | Value of the on-demand concurrency cap, customizing the number of Synthetic tests run in parallel. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `OnDemandConcurrencyCap`<sup>Required</sup> <a name="OnDemandConcurrencyCap" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.onDemandConcurrencyCap"></a>

```csharp
public double OnDemandConcurrencyCap { get; set; }
```

- *Type:* double

Value of the on-demand concurrency cap, customizing the number of Synthetic tests run in parallel.

Value must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/synthetics_concurrency_cap#on_demand_concurrency_cap SyntheticsConcurrencyCap#on_demand_concurrency_cap}

---



