# `complianceCustomFramework` Submodule <a name="`complianceCustomFramework` Submodule" id="@cdktf/provider-datadog.complianceCustomFramework"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComplianceCustomFramework <a name="ComplianceCustomFramework" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/compliance_custom_framework datadog_compliance_custom_framework}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ComplianceCustomFramework(Construct Scope, string Id, ComplianceCustomFrameworkConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig">ComplianceCustomFrameworkConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig">ComplianceCustomFrameworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.putRequirements">PutRequirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.resetIconUrl">ResetIconUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.resetRequirements">ResetRequirements</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRequirements` <a name="PutRequirements" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.putRequirements"></a>

```csharp
private void PutRequirements(IResolvable|ComplianceCustomFrameworkRequirements[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.putRequirements.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements">ComplianceCustomFrameworkRequirements</a>[]

---

##### `ResetIconUrl` <a name="ResetIconUrl" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.resetIconUrl"></a>

```csharp
private void ResetIconUrl()
```

##### `ResetRequirements` <a name="ResetRequirements" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.resetRequirements"></a>

```csharp
private void ResetRequirements()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComplianceCustomFramework resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

ComplianceCustomFramework.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

ComplianceCustomFramework.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

ComplianceCustomFramework.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

ComplianceCustomFramework.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ComplianceCustomFramework resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComplianceCustomFramework to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComplianceCustomFramework that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/compliance_custom_framework#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ComplianceCustomFramework to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.requirements">Requirements</a></code> | <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList">ComplianceCustomFrameworkRequirementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.handleInput">HandleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.iconUrlInput">IconUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.requirementsInput">RequirementsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements">ComplianceCustomFrameworkRequirements</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.handle">Handle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.iconUrl">IconUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.version">Version</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Requirements`<sup>Required</sup> <a name="Requirements" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.requirements"></a>

```csharp
public ComplianceCustomFrameworkRequirementsList Requirements { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList">ComplianceCustomFrameworkRequirementsList</a>

---

##### `HandleInput`<sup>Optional</sup> <a name="HandleInput" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.handleInput"></a>

```csharp
public string HandleInput { get; }
```

- *Type:* string

---

##### `IconUrlInput`<sup>Optional</sup> <a name="IconUrlInput" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.iconUrlInput"></a>

```csharp
public string IconUrlInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RequirementsInput`<sup>Optional</sup> <a name="RequirementsInput" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.requirementsInput"></a>

```csharp
public IResolvable|ComplianceCustomFrameworkRequirements[] RequirementsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements">ComplianceCustomFrameworkRequirements</a>[]

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Handle`<sup>Required</sup> <a name="Handle" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.handle"></a>

```csharp
public string Handle { get; }
```

- *Type:* string

---

##### `IconUrl`<sup>Required</sup> <a name="IconUrl" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.iconUrl"></a>

```csharp
public string IconUrl { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComplianceCustomFrameworkConfig <a name="ComplianceCustomFrameworkConfig" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ComplianceCustomFrameworkConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Handle,
    string Name,
    string Version,
    string IconUrl = null,
    IResolvable|ComplianceCustomFrameworkRequirements[] Requirements = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.handle">Handle</a></code> | <code>string</code> | The framework handle. String length must be at least 1. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.name">Name</a></code> | <code>string</code> | The framework name. String length must be at least 1. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.version">Version</a></code> | <code>string</code> | The framework version. String length must be at least 1. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.iconUrl">IconUrl</a></code> | <code>string</code> | The URL of the icon representing the framework. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.requirements">Requirements</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements">ComplianceCustomFrameworkRequirements</a>[]</code> | requirements block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Handle`<sup>Required</sup> <a name="Handle" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.handle"></a>

```csharp
public string Handle { get; set; }
```

- *Type:* string

The framework handle. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/compliance_custom_framework#handle ComplianceCustomFramework#handle}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The framework name. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/compliance_custom_framework#name ComplianceCustomFramework#name}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

The framework version. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/compliance_custom_framework#version ComplianceCustomFramework#version}

---

##### `IconUrl`<sup>Optional</sup> <a name="IconUrl" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.iconUrl"></a>

```csharp
public string IconUrl { get; set; }
```

- *Type:* string

The URL of the icon representing the framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/compliance_custom_framework#icon_url ComplianceCustomFramework#icon_url}

---

##### `Requirements`<sup>Optional</sup> <a name="Requirements" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.requirements"></a>

```csharp
public IResolvable|ComplianceCustomFrameworkRequirements[] Requirements { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements">ComplianceCustomFrameworkRequirements</a>[]

requirements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/compliance_custom_framework#requirements ComplianceCustomFramework#requirements}

---

### ComplianceCustomFrameworkRequirements <a name="ComplianceCustomFrameworkRequirements" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ComplianceCustomFrameworkRequirements {
    string Name,
    IResolvable|ComplianceCustomFrameworkRequirementsControls[] Controls = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements.property.name">Name</a></code> | <code>string</code> | The name of the requirement. String length must be at least 1. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements.property.controls">Controls</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls">ComplianceCustomFrameworkRequirementsControls</a>[]</code> | controls block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the requirement. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/compliance_custom_framework#name ComplianceCustomFramework#name}

---

##### `Controls`<sup>Optional</sup> <a name="Controls" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements.property.controls"></a>

```csharp
public IResolvable|ComplianceCustomFrameworkRequirementsControls[] Controls { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls">ComplianceCustomFrameworkRequirementsControls</a>[]

controls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/compliance_custom_framework#controls ComplianceCustomFramework#controls}

---

### ComplianceCustomFrameworkRequirementsControls <a name="ComplianceCustomFrameworkRequirementsControls" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ComplianceCustomFrameworkRequirementsControls {
    string Name,
    string[] RulesId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls.property.name">Name</a></code> | <code>string</code> | The name of the control. String length must be at least 1. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls.property.rulesId">RulesId</a></code> | <code>string[]</code> | The set of rules IDs for the control. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the control. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/compliance_custom_framework#name ComplianceCustomFramework#name}

---

##### `RulesId`<sup>Required</sup> <a name="RulesId" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls.property.rulesId"></a>

```csharp
public string[] RulesId { get; set; }
```

- *Type:* string[]

The set of rules IDs for the control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/compliance_custom_framework#rules_id ComplianceCustomFramework#rules_id}

---

## Classes <a name="Classes" id="Classes"></a>

### ComplianceCustomFrameworkRequirementsControlsList <a name="ComplianceCustomFrameworkRequirementsControlsList" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ComplianceCustomFrameworkRequirementsControlsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.get"></a>

```csharp
private ComplianceCustomFrameworkRequirementsControlsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls">ComplianceCustomFrameworkRequirementsControls</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.property.internalValue"></a>

```csharp
public IResolvable|ComplianceCustomFrameworkRequirementsControls[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls">ComplianceCustomFrameworkRequirementsControls</a>[]

---


### ComplianceCustomFrameworkRequirementsControlsOutputReference <a name="ComplianceCustomFrameworkRequirementsControlsOutputReference" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ComplianceCustomFrameworkRequirementsControlsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.rulesIdInput">RulesIdInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.rulesId">RulesId</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls">ComplianceCustomFrameworkRequirementsControls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RulesIdInput`<sup>Optional</sup> <a name="RulesIdInput" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.rulesIdInput"></a>

```csharp
public string[] RulesIdInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RulesId`<sup>Required</sup> <a name="RulesId" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.rulesId"></a>

```csharp
public string[] RulesId { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComplianceCustomFrameworkRequirementsControls InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls">ComplianceCustomFrameworkRequirementsControls</a>

---


### ComplianceCustomFrameworkRequirementsList <a name="ComplianceCustomFrameworkRequirementsList" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ComplianceCustomFrameworkRequirementsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.get"></a>

```csharp
private ComplianceCustomFrameworkRequirementsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements">ComplianceCustomFrameworkRequirements</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.property.internalValue"></a>

```csharp
public IResolvable|ComplianceCustomFrameworkRequirements[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements">ComplianceCustomFrameworkRequirements</a>[]

---


### ComplianceCustomFrameworkRequirementsOutputReference <a name="ComplianceCustomFrameworkRequirementsOutputReference" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ComplianceCustomFrameworkRequirementsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.putControls">PutControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.resetControls">ResetControls</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutControls` <a name="PutControls" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.putControls"></a>

```csharp
private void PutControls(IResolvable|ComplianceCustomFrameworkRequirementsControls[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.putControls.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls">ComplianceCustomFrameworkRequirementsControls</a>[]

---

##### `ResetControls` <a name="ResetControls" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.resetControls"></a>

```csharp
private void ResetControls()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.controls">Controls</a></code> | <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList">ComplianceCustomFrameworkRequirementsControlsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.controlsInput">ControlsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls">ComplianceCustomFrameworkRequirementsControls</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements">ComplianceCustomFrameworkRequirements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Controls`<sup>Required</sup> <a name="Controls" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.controls"></a>

```csharp
public ComplianceCustomFrameworkRequirementsControlsList Controls { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList">ComplianceCustomFrameworkRequirementsControlsList</a>

---

##### `ControlsInput`<sup>Optional</sup> <a name="ControlsInput" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.controlsInput"></a>

```csharp
public IResolvable|ComplianceCustomFrameworkRequirementsControls[] ControlsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls">ComplianceCustomFrameworkRequirementsControls</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComplianceCustomFrameworkRequirements InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements">ComplianceCustomFrameworkRequirements</a>

---



