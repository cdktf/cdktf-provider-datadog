# `securityMonitoringSuppression` Submodule <a name="`securityMonitoringSuppression` Submodule" id="@cdktf/provider-datadog.securityMonitoringSuppression"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityMonitoringSuppression <a name="SecurityMonitoringSuppression" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/security_monitoring_suppression datadog_security_monitoring_suppression}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SecurityMonitoringSuppression(Construct Scope, string Id, SecurityMonitoringSuppressionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig">SecurityMonitoringSuppressionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig">SecurityMonitoringSuppressionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.resetDataExclusionQuery">ResetDataExclusionQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.resetExpirationDate">ResetExpirationDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.resetSuppressionQuery">ResetSuppressionQuery</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDataExclusionQuery` <a name="ResetDataExclusionQuery" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.resetDataExclusionQuery"></a>

```csharp
private void ResetDataExclusionQuery()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExpirationDate` <a name="ResetExpirationDate" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.resetExpirationDate"></a>

```csharp
private void ResetExpirationDate()
```

##### `ResetSuppressionQuery` <a name="ResetSuppressionQuery" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.resetSuppressionQuery"></a>

```csharp
private void ResetSuppressionQuery()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SecurityMonitoringSuppression resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

SecurityMonitoringSuppression.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

SecurityMonitoringSuppression.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

SecurityMonitoringSuppression.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

SecurityMonitoringSuppression.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SecurityMonitoringSuppression resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityMonitoringSuppression to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityMonitoringSuppression that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/security_monitoring_suppression#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SecurityMonitoringSuppression to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.dataExclusionQueryInput">DataExclusionQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.expirationDateInput">ExpirationDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.ruleQueryInput">RuleQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.suppressionQueryInput">SuppressionQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.dataExclusionQuery">DataExclusionQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.expirationDate">ExpirationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.ruleQuery">RuleQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.suppressionQuery">SuppressionQuery</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `DataExclusionQueryInput`<sup>Optional</sup> <a name="DataExclusionQueryInput" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.dataExclusionQueryInput"></a>

```csharp
public string DataExclusionQueryInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `ExpirationDateInput`<sup>Optional</sup> <a name="ExpirationDateInput" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.expirationDateInput"></a>

```csharp
public string ExpirationDateInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RuleQueryInput`<sup>Optional</sup> <a name="RuleQueryInput" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.ruleQueryInput"></a>

```csharp
public string RuleQueryInput { get; }
```

- *Type:* string

---

##### `SuppressionQueryInput`<sup>Optional</sup> <a name="SuppressionQueryInput" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.suppressionQueryInput"></a>

```csharp
public string SuppressionQueryInput { get; }
```

- *Type:* string

---

##### `DataExclusionQuery`<sup>Required</sup> <a name="DataExclusionQuery" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.dataExclusionQuery"></a>

```csharp
public string DataExclusionQuery { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `ExpirationDate`<sup>Required</sup> <a name="ExpirationDate" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.expirationDate"></a>

```csharp
public string ExpirationDate { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RuleQuery`<sup>Required</sup> <a name="RuleQuery" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.ruleQuery"></a>

```csharp
public string RuleQuery { get; }
```

- *Type:* string

---

##### `SuppressionQuery`<sup>Required</sup> <a name="SuppressionQuery" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.suppressionQuery"></a>

```csharp
public string SuppressionQuery { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityMonitoringSuppressionConfig <a name="SecurityMonitoringSuppressionConfig" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SecurityMonitoringSuppressionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Enabled,
    string Name,
    string RuleQuery,
    string DataExclusionQuery = null,
    string Description = null,
    string ExpirationDate = null,
    string SuppressionQuery = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.enabled">Enabled</a></code> | <code>object</code> | Whether the suppression rule is enabled. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.name">Name</a></code> | <code>string</code> | The name of the suppression rule. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.ruleQuery">RuleQuery</a></code> | <code>string</code> | The rule query of the suppression rule, with the same syntax as the search bar for detection rules. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.dataExclusionQuery">DataExclusionQuery</a></code> | <code>string</code> | An exclusion query on the input data of the security rules, which could be logs, Agent events, or other types of data based on the security rule. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.description">Description</a></code> | <code>string</code> | A description for the suppression rule. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.expirationDate">ExpirationDate</a></code> | <code>string</code> | A RFC3339 timestamp giving an expiration date for the suppression rule. After this date, it won't suppress signals anymore. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.suppressionQuery">SuppressionQuery</a></code> | <code>string</code> | The suppression query of the suppression rule. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether the suppression rule is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/security_monitoring_suppression#enabled SecurityMonitoringSuppression#enabled}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the suppression rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/security_monitoring_suppression#name SecurityMonitoringSuppression#name}

---

##### `RuleQuery`<sup>Required</sup> <a name="RuleQuery" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.ruleQuery"></a>

```csharp
public string RuleQuery { get; set; }
```

- *Type:* string

The rule query of the suppression rule, with the same syntax as the search bar for detection rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/security_monitoring_suppression#rule_query SecurityMonitoringSuppression#rule_query}

---

##### `DataExclusionQuery`<sup>Optional</sup> <a name="DataExclusionQuery" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.dataExclusionQuery"></a>

```csharp
public string DataExclusionQuery { get; set; }
```

- *Type:* string

An exclusion query on the input data of the security rules, which could be logs, Agent events, or other types of data based on the security rule.

Events matching this query are ignored by any detection rules referenced in the suppression rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/security_monitoring_suppression#data_exclusion_query SecurityMonitoringSuppression#data_exclusion_query}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description for the suppression rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/security_monitoring_suppression#description SecurityMonitoringSuppression#description}

---

##### `ExpirationDate`<sup>Optional</sup> <a name="ExpirationDate" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.expirationDate"></a>

```csharp
public string ExpirationDate { get; set; }
```

- *Type:* string

A RFC3339 timestamp giving an expiration date for the suppression rule. After this date, it won't suppress signals anymore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/security_monitoring_suppression#expiration_date SecurityMonitoringSuppression#expiration_date}

---

##### `SuppressionQuery`<sup>Optional</sup> <a name="SuppressionQuery" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.suppressionQuery"></a>

```csharp
public string SuppressionQuery { get; set; }
```

- *Type:* string

The suppression query of the suppression rule.

If a signal matches this query, it is suppressed and is not triggered. It uses the same syntax as the queries to search signals in the Signals Explorer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/security_monitoring_suppression#suppression_query SecurityMonitoringSuppression#suppression_query}

---



