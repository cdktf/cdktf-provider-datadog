# `incidentNotificationRule` Submodule <a name="`incidentNotificationRule` Submodule" id="@cdktf/provider-datadog.incidentNotificationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IncidentNotificationRule <a name="IncidentNotificationRule" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/incident_notification_rule datadog_incident_notification_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new IncidentNotificationRule(Construct Scope, string Id, IncidentNotificationRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig">IncidentNotificationRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig">IncidentNotificationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetConditions">ResetConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetNotificationTemplate">ResetNotificationTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetRenotifyOn">ResetRenotifyOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetVisibility">ResetVisibility</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConditions` <a name="PutConditions" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.putConditions"></a>

```csharp
private void PutConditions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.putConditions.parameter.value"></a>

- *Type:* object

---

##### `ResetConditions` <a name="ResetConditions" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetConditions"></a>

```csharp
private void ResetConditions()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetNotificationTemplate` <a name="ResetNotificationTemplate" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetNotificationTemplate"></a>

```csharp
private void ResetNotificationTemplate()
```

##### `ResetRenotifyOn` <a name="ResetRenotifyOn" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetRenotifyOn"></a>

```csharp
private void ResetRenotifyOn()
```

##### `ResetVisibility` <a name="ResetVisibility" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetVisibility"></a>

```csharp
private void ResetVisibility()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IncidentNotificationRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

IncidentNotificationRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

IncidentNotificationRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

IncidentNotificationRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

IncidentNotificationRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IncidentNotificationRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IncidentNotificationRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IncidentNotificationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/incident_notification_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IncidentNotificationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList">IncidentNotificationRuleConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.modified">Modified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.conditionsInput">ConditionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.handlesInput">HandlesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.incidentTypeInput">IncidentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.notificationTemplateInput">NotificationTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.renotifyOnInput">RenotifyOnInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.triggerInput">TriggerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.visibilityInput">VisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.handles">Handles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.incidentType">IncidentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.notificationTemplate">NotificationTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.renotifyOn">RenotifyOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.trigger">Trigger</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.visibility">Visibility</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.conditions"></a>

```csharp
public IncidentNotificationRuleConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList">IncidentNotificationRuleConditionsList</a>

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Modified`<sup>Required</sup> <a name="Modified" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.modified"></a>

```csharp
public string Modified { get; }
```

- *Type:* string

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.conditionsInput"></a>

```csharp
public object ConditionsInput { get; }
```

- *Type:* object

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `HandlesInput`<sup>Optional</sup> <a name="HandlesInput" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.handlesInput"></a>

```csharp
public string[] HandlesInput { get; }
```

- *Type:* string[]

---

##### `IncidentTypeInput`<sup>Optional</sup> <a name="IncidentTypeInput" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.incidentTypeInput"></a>

```csharp
public string IncidentTypeInput { get; }
```

- *Type:* string

---

##### `NotificationTemplateInput`<sup>Optional</sup> <a name="NotificationTemplateInput" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.notificationTemplateInput"></a>

```csharp
public string NotificationTemplateInput { get; }
```

- *Type:* string

---

##### `RenotifyOnInput`<sup>Optional</sup> <a name="RenotifyOnInput" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.renotifyOnInput"></a>

```csharp
public string[] RenotifyOnInput { get; }
```

- *Type:* string[]

---

##### `TriggerInput`<sup>Optional</sup> <a name="TriggerInput" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.triggerInput"></a>

```csharp
public string TriggerInput { get; }
```

- *Type:* string

---

##### `VisibilityInput`<sup>Optional</sup> <a name="VisibilityInput" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.visibilityInput"></a>

```csharp
public string VisibilityInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Handles`<sup>Required</sup> <a name="Handles" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.handles"></a>

```csharp
public string[] Handles { get; }
```

- *Type:* string[]

---

##### `IncidentType`<sup>Required</sup> <a name="IncidentType" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.incidentType"></a>

```csharp
public string IncidentType { get; }
```

- *Type:* string

---

##### `NotificationTemplate`<sup>Required</sup> <a name="NotificationTemplate" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.notificationTemplate"></a>

```csharp
public string NotificationTemplate { get; }
```

- *Type:* string

---

##### `RenotifyOn`<sup>Required</sup> <a name="RenotifyOn" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.renotifyOn"></a>

```csharp
public string[] RenotifyOn { get; }
```

- *Type:* string[]

---

##### `Trigger`<sup>Required</sup> <a name="Trigger" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.trigger"></a>

```csharp
public string Trigger { get; }
```

- *Type:* string

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.visibility"></a>

```csharp
public string Visibility { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IncidentNotificationRuleConditions <a name="IncidentNotificationRuleConditions" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new IncidentNotificationRuleConditions {
    string Field,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions.property.field">Field</a></code> | <code>string</code> | The incident field to evaluate. Common values include: state, severity, services, teams. Custom fields are also supported. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions.property.values">Values</a></code> | <code>string[]</code> | The value(s) to compare against. Multiple values are ORed together. |

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions.property.field"></a>

```csharp
public string Field { get; set; }
```

- *Type:* string

The incident field to evaluate. Common values include: state, severity, services, teams. Custom fields are also supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/incident_notification_rule#field IncidentNotificationRule#field}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

The value(s) to compare against. Multiple values are ORed together.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/incident_notification_rule#values IncidentNotificationRule#values}

---

### IncidentNotificationRuleConfig <a name="IncidentNotificationRuleConfig" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new IncidentNotificationRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] Handles,
    string IncidentType,
    string Trigger,
    object Conditions = null,
    object Enabled = null,
    string NotificationTemplate = null,
    string[] RenotifyOn = null,
    string Visibility = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.handles">Handles</a></code> | <code>string[]</code> | The notification handles (targets) for this rule. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.incidentType">IncidentType</a></code> | <code>string</code> | The ID of the incident type this notification rule is associated with. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.trigger">Trigger</a></code> | <code>string</code> | The trigger event for this notification rule. Valid values are: incident_created_trigger, incident_saved_trigger. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.conditions">Conditions</a></code> | <code>object</code> | conditions block. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.enabled">Enabled</a></code> | <code>object</code> | Whether the notification rule is enabled. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.notificationTemplate">NotificationTemplate</a></code> | <code>string</code> | The ID of the notification template to use for this rule. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.renotifyOn">RenotifyOn</a></code> | <code>string[]</code> | List of incident fields that trigger re-notification when changed. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.visibility">Visibility</a></code> | <code>string</code> | The visibility of the notification rule. Valid values are: all, organization, private. Defaults to organization. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Handles`<sup>Required</sup> <a name="Handles" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.handles"></a>

```csharp
public string[] Handles { get; set; }
```

- *Type:* string[]

The notification handles (targets) for this rule.

Examples:

---

##### `IncidentType`<sup>Required</sup> <a name="IncidentType" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.incidentType"></a>

```csharp
public string IncidentType { get; set; }
```

- *Type:* string

The ID of the incident type this notification rule is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/incident_notification_rule#incident_type IncidentNotificationRule#incident_type}

---

##### `Trigger`<sup>Required</sup> <a name="Trigger" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.trigger"></a>

```csharp
public string Trigger { get; set; }
```

- *Type:* string

The trigger event for this notification rule. Valid values are: incident_created_trigger, incident_saved_trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/incident_notification_rule#trigger IncidentNotificationRule#trigger}

---

##### `Conditions`<sup>Optional</sup> <a name="Conditions" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.conditions"></a>

```csharp
public object Conditions { get; set; }
```

- *Type:* object

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/incident_notification_rule#conditions IncidentNotificationRule#conditions}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether the notification rule is enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/incident_notification_rule#enabled IncidentNotificationRule#enabled}

---

##### `NotificationTemplate`<sup>Optional</sup> <a name="NotificationTemplate" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.notificationTemplate"></a>

```csharp
public string NotificationTemplate { get; set; }
```

- *Type:* string

The ID of the notification template to use for this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/incident_notification_rule#notification_template IncidentNotificationRule#notification_template}

---

##### `RenotifyOn`<sup>Optional</sup> <a name="RenotifyOn" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.renotifyOn"></a>

```csharp
public string[] RenotifyOn { get; set; }
```

- *Type:* string[]

List of incident fields that trigger re-notification when changed.

Valid values are: status, severity, customer_impact, title, description, detected, root_cause, services, state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/incident_notification_rule#renotify_on IncidentNotificationRule#renotify_on}

---

##### `Visibility`<sup>Optional</sup> <a name="Visibility" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.visibility"></a>

```csharp
public string Visibility { get; set; }
```

- *Type:* string

The visibility of the notification rule. Valid values are: all, organization, private. Defaults to organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/incident_notification_rule#visibility IncidentNotificationRule#visibility}

---

## Classes <a name="Classes" id="Classes"></a>

### IncidentNotificationRuleConditionsList <a name="IncidentNotificationRuleConditionsList" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new IncidentNotificationRuleConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.get"></a>

```csharp
private IncidentNotificationRuleConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IncidentNotificationRuleConditionsOutputReference <a name="IncidentNotificationRuleConditionsOutputReference" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new IncidentNotificationRuleConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.fieldInput">FieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.field">Field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.fieldInput"></a>

```csharp
public string FieldInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.field"></a>

```csharp
public string Field { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



