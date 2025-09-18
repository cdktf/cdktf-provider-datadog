# `securityMonitoringDefaultRule` Submodule <a name="`securityMonitoringDefaultRule` Submodule" id="@cdktf/provider-datadog.securityMonitoringDefaultRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityMonitoringDefaultRule <a name="SecurityMonitoringDefaultRule" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/security_monitoring_default_rule datadog_security_monitoring_default_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SecurityMonitoringDefaultRule(Construct Scope, string Id, SecurityMonitoringDefaultRuleConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig">SecurityMonitoringDefaultRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig">SecurityMonitoringDefaultRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.putCase">PutCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.putOptions">PutOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.putQuery">PutQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetCase">ResetCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetCustomMessage">ResetCustomMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetCustomName">ResetCustomName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetCustomTags">ResetCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetQuery">ResetQuery</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCase` <a name="PutCase" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.putCase"></a>

```csharp
private void PutCase(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.putCase.parameter.value"></a>

- *Type:* object

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.putFilter.parameter.value"></a>

- *Type:* object

---

##### `PutOptions` <a name="PutOptions" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.putOptions"></a>

```csharp
private void PutOptions(SecurityMonitoringDefaultRuleOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptions">SecurityMonitoringDefaultRuleOptions</a>

---

##### `PutQuery` <a name="PutQuery" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.putQuery"></a>

```csharp
private void PutQuery(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.putQuery.parameter.value"></a>

- *Type:* object

---

##### `ResetCase` <a name="ResetCase" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetCase"></a>

```csharp
private void ResetCase()
```

##### `ResetCustomMessage` <a name="ResetCustomMessage" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetCustomMessage"></a>

```csharp
private void ResetCustomMessage()
```

##### `ResetCustomName` <a name="ResetCustomName" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetCustomName"></a>

```csharp
private void ResetCustomName()
```

##### `ResetCustomTags` <a name="ResetCustomTags" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetCustomTags"></a>

```csharp
private void ResetCustomTags()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetOptions"></a>

```csharp
private void ResetOptions()
```

##### `ResetQuery` <a name="ResetQuery" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetQuery"></a>

```csharp
private void ResetQuery()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SecurityMonitoringDefaultRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

SecurityMonitoringDefaultRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

SecurityMonitoringDefaultRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

SecurityMonitoringDefaultRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

SecurityMonitoringDefaultRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SecurityMonitoringDefaultRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityMonitoringDefaultRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityMonitoringDefaultRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/security_monitoring_default_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SecurityMonitoringDefaultRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.case">Case</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList">SecurityMonitoringDefaultRuleCaseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList">SecurityMonitoringDefaultRuleFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.options">Options</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference">SecurityMonitoringDefaultRuleOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.query">Query</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList">SecurityMonitoringDefaultRuleQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.caseInput">CaseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.customMessageInput">CustomMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.customNameInput">CustomNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.customTagsInput">CustomTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.optionsInput">OptionsInput</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptions">SecurityMonitoringDefaultRuleOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.queryInput">QueryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.customMessage">CustomMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.customName">CustomName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.customTags">CustomTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Case`<sup>Required</sup> <a name="Case" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.case"></a>

```csharp
public SecurityMonitoringDefaultRuleCaseList Case { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList">SecurityMonitoringDefaultRuleCaseList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.filter"></a>

```csharp
public SecurityMonitoringDefaultRuleFilterList Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList">SecurityMonitoringDefaultRuleFilterList</a>

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.options"></a>

```csharp
public SecurityMonitoringDefaultRuleOptionsOutputReference Options { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference">SecurityMonitoringDefaultRuleOptionsOutputReference</a>

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.query"></a>

```csharp
public SecurityMonitoringDefaultRuleQueryList Query { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList">SecurityMonitoringDefaultRuleQueryList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `CaseInput`<sup>Optional</sup> <a name="CaseInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.caseInput"></a>

```csharp
public object CaseInput { get; }
```

- *Type:* object

---

##### `CustomMessageInput`<sup>Optional</sup> <a name="CustomMessageInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.customMessageInput"></a>

```csharp
public string CustomMessageInput { get; }
```

- *Type:* string

---

##### `CustomNameInput`<sup>Optional</sup> <a name="CustomNameInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.customNameInput"></a>

```csharp
public string CustomNameInput { get; }
```

- *Type:* string

---

##### `CustomTagsInput`<sup>Optional</sup> <a name="CustomTagsInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.customTagsInput"></a>

```csharp
public string[] CustomTagsInput { get; }
```

- *Type:* string[]

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.optionsInput"></a>

```csharp
public SecurityMonitoringDefaultRuleOptions OptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptions">SecurityMonitoringDefaultRuleOptions</a>

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.queryInput"></a>

```csharp
public object QueryInput { get; }
```

- *Type:* object

---

##### `CustomMessage`<sup>Required</sup> <a name="CustomMessage" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.customMessage"></a>

```csharp
public string CustomMessage { get; }
```

- *Type:* string

---

##### `CustomName`<sup>Required</sup> <a name="CustomName" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.customName"></a>

```csharp
public string CustomName { get; }
```

- *Type:* string

---

##### `CustomTags`<sup>Required</sup> <a name="CustomTags" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.customTags"></a>

```csharp
public string[] CustomTags { get; }
```

- *Type:* string[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityMonitoringDefaultRuleCase <a name="SecurityMonitoringDefaultRuleCase" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCase.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SecurityMonitoringDefaultRuleCase {
    string Status,
    string CustomStatus = null,
    string[] Notifications = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCase.property.status">Status</a></code> | <code>string</code> | Status of the rule case to match. Valid values are `info`, `low`, `medium`, `high`, `critical`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCase.property.customStatus">CustomStatus</a></code> | <code>string</code> | Status of the rule case to override. Valid values are `info`, `low`, `medium`, `high`, `critical`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCase.property.notifications">Notifications</a></code> | <code>string[]</code> | Notification targets for each rule case. |

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCase.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Status of the rule case to match. Valid values are `info`, `low`, `medium`, `high`, `critical`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/security_monitoring_default_rule#status SecurityMonitoringDefaultRule#status}

---

##### `CustomStatus`<sup>Optional</sup> <a name="CustomStatus" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCase.property.customStatus"></a>

```csharp
public string CustomStatus { get; set; }
```

- *Type:* string

Status of the rule case to override. Valid values are `info`, `low`, `medium`, `high`, `critical`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/security_monitoring_default_rule#custom_status SecurityMonitoringDefaultRule#custom_status}

---

##### `Notifications`<sup>Optional</sup> <a name="Notifications" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCase.property.notifications"></a>

```csharp
public string[] Notifications { get; set; }
```

- *Type:* string[]

Notification targets for each rule case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/security_monitoring_default_rule#notifications SecurityMonitoringDefaultRule#notifications}

---

### SecurityMonitoringDefaultRuleConfig <a name="SecurityMonitoringDefaultRuleConfig" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SecurityMonitoringDefaultRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Case = null,
    string CustomMessage = null,
    string CustomName = null,
    string[] CustomTags = null,
    object Enabled = null,
    object Filter = null,
    string Id = null,
    SecurityMonitoringDefaultRuleOptions Options = null,
    object Query = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.case">Case</a></code> | <code>object</code> | case block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.customMessage">CustomMessage</a></code> | <code>string</code> | Custom Message (will override default message) for generated signals. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.customName">CustomName</a></code> | <code>string</code> | The name (will override default name) of the rule. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.customTags">CustomTags</a></code> | <code>string[]</code> | Custom tags for generated signals. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.enabled">Enabled</a></code> | <code>object</code> | Enable the rule. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/security_monitoring_default_rule#id SecurityMonitoringDefaultRule#id}. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.options">Options</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptions">SecurityMonitoringDefaultRuleOptions</a></code> | options block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.query">Query</a></code> | <code>object</code> | query block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Case`<sup>Optional</sup> <a name="Case" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.case"></a>

```csharp
public object Case { get; set; }
```

- *Type:* object

case block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/security_monitoring_default_rule#case SecurityMonitoringDefaultRule#case}

---

##### `CustomMessage`<sup>Optional</sup> <a name="CustomMessage" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.customMessage"></a>

```csharp
public string CustomMessage { get; set; }
```

- *Type:* string

Custom Message (will override default message) for generated signals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/security_monitoring_default_rule#custom_message SecurityMonitoringDefaultRule#custom_message}

---

##### `CustomName`<sup>Optional</sup> <a name="CustomName" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.customName"></a>

```csharp
public string CustomName { get; set; }
```

- *Type:* string

The name (will override default name) of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/security_monitoring_default_rule#custom_name SecurityMonitoringDefaultRule#custom_name}

---

##### `CustomTags`<sup>Optional</sup> <a name="CustomTags" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.customTags"></a>

```csharp
public string[] CustomTags { get; set; }
```

- *Type:* string[]

Custom tags for generated signals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/security_monitoring_default_rule#custom_tags SecurityMonitoringDefaultRule#custom_tags}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Enable the rule. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/security_monitoring_default_rule#enabled SecurityMonitoringDefaultRule#enabled}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/security_monitoring_default_rule#filter SecurityMonitoringDefaultRule#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/security_monitoring_default_rule#id SecurityMonitoringDefaultRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.options"></a>

```csharp
public SecurityMonitoringDefaultRuleOptions Options { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptions">SecurityMonitoringDefaultRuleOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/security_monitoring_default_rule#options SecurityMonitoringDefaultRule#options}

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.query"></a>

```csharp
public object Query { get; set; }
```

- *Type:* object

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/security_monitoring_default_rule#query SecurityMonitoringDefaultRule#query}

---

### SecurityMonitoringDefaultRuleFilter <a name="SecurityMonitoringDefaultRuleFilter" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SecurityMonitoringDefaultRuleFilter {
    string Action,
    string Query
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilter.property.action">Action</a></code> | <code>string</code> | The type of filtering action. Allowed enum values: require, suppress Valid values are `require`, `suppress`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilter.property.query">Query</a></code> | <code>string</code> | Query for selecting logs to apply the filtering action. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilter.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

The type of filtering action. Allowed enum values: require, suppress Valid values are `require`, `suppress`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/security_monitoring_default_rule#action SecurityMonitoringDefaultRule#action}

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilter.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

Query for selecting logs to apply the filtering action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/security_monitoring_default_rule#query SecurityMonitoringDefaultRule#query}

---

### SecurityMonitoringDefaultRuleOptions <a name="SecurityMonitoringDefaultRuleOptions" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SecurityMonitoringDefaultRuleOptions {
    object DecreaseCriticalityBasedOnEnv = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptions.property.decreaseCriticalityBasedOnEnv">DecreaseCriticalityBasedOnEnv</a></code> | <code>object</code> | If true, signals in non-production environments have a lower severity than what is defined by the rule case, which can reduce noise. |

---

##### `DecreaseCriticalityBasedOnEnv`<sup>Optional</sup> <a name="DecreaseCriticalityBasedOnEnv" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptions.property.decreaseCriticalityBasedOnEnv"></a>

```csharp
public object DecreaseCriticalityBasedOnEnv { get; set; }
```

- *Type:* object

If true, signals in non-production environments have a lower severity than what is defined by the rule case, which can reduce noise.

The decrement is applied when the environment tag of the signal starts with `staging`, `test`, or `dev`. Only available when the rule type is `log_detection`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/security_monitoring_default_rule#decrease_criticality_based_on_env SecurityMonitoringDefaultRule#decrease_criticality_based_on_env}

---

### SecurityMonitoringDefaultRuleQuery <a name="SecurityMonitoringDefaultRuleQuery" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SecurityMonitoringDefaultRuleQuery {
    object AgentRule = null,
    string Aggregation = null,
    string CustomQueryExtension = null,
    string DataSource = null,
    string[] DistinctFields = null,
    string[] GroupByFields = null,
    object HasOptionalGroupByFields = null,
    string Metric = null,
    string[] Metrics = null,
    string Name = null,
    string Query = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery.property.agentRule">AgentRule</a></code> | <code>object</code> | agent_rule block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery.property.aggregation">Aggregation</a></code> | <code>string</code> | The aggregation type. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery.property.customQueryExtension">CustomQueryExtension</a></code> | <code>string</code> | Query extension to append to the logs query. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery.property.dataSource">DataSource</a></code> | <code>string</code> | Source of events. Valid values are `logs`, `audit`, `app_sec_spans`, `spans`, `security_runtime`, `network`, `events`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery.property.distinctFields">DistinctFields</a></code> | <code>string[]</code> | Field for which the cardinality is measured. Sent as an array. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery.property.groupByFields">GroupByFields</a></code> | <code>string[]</code> | Fields to group by. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery.property.hasOptionalGroupByFields">HasOptionalGroupByFields</a></code> | <code>object</code> | When false, events without a group-by value are ignored by the rule. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery.property.metric">Metric</a></code> | <code>string</code> | The target field to aggregate over when using the `sum`, `max`, or `geo_data` aggregations. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery.property.metrics">Metrics</a></code> | <code>string[]</code> | Group of target fields to aggregate over when using the `sum`, `max`, `geo_data`, or `new_value` aggregations. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery.property.name">Name</a></code> | <code>string</code> | Name of the query. Not compatible with `new_value` aggregations. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery.property.query">Query</a></code> | <code>string</code> | Query to run on logs. |

---

##### `AgentRule`<sup>Optional</sup> <a name="AgentRule" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery.property.agentRule"></a>

```csharp
public object AgentRule { get; set; }
```

- *Type:* object

agent_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/security_monitoring_default_rule#agent_rule SecurityMonitoringDefaultRule#agent_rule}

---

##### `Aggregation`<sup>Optional</sup> <a name="Aggregation" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery.property.aggregation"></a>

```csharp
public string Aggregation { get; set; }
```

- *Type:* string

The aggregation type.

For Signal Correlation rules, it must be event_count. Valid values are `count`, `cardinality`, `sum`, `max`, `new_value`, `geo_data`, `event_count`, `none`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/security_monitoring_default_rule#aggregation SecurityMonitoringDefaultRule#aggregation}

---

##### `CustomQueryExtension`<sup>Optional</sup> <a name="CustomQueryExtension" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery.property.customQueryExtension"></a>

```csharp
public string CustomQueryExtension { get; set; }
```

- *Type:* string

Query extension to append to the logs query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/security_monitoring_default_rule#custom_query_extension SecurityMonitoringDefaultRule#custom_query_extension}

---

##### `DataSource`<sup>Optional</sup> <a name="DataSource" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery.property.dataSource"></a>

```csharp
public string DataSource { get; set; }
```

- *Type:* string

Source of events. Valid values are `logs`, `audit`, `app_sec_spans`, `spans`, `security_runtime`, `network`, `events`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/security_monitoring_default_rule#data_source SecurityMonitoringDefaultRule#data_source}

---

##### `DistinctFields`<sup>Optional</sup> <a name="DistinctFields" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery.property.distinctFields"></a>

```csharp
public string[] DistinctFields { get; set; }
```

- *Type:* string[]

Field for which the cardinality is measured. Sent as an array.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/security_monitoring_default_rule#distinct_fields SecurityMonitoringDefaultRule#distinct_fields}

---

##### `GroupByFields`<sup>Optional</sup> <a name="GroupByFields" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery.property.groupByFields"></a>

```csharp
public string[] GroupByFields { get; set; }
```

- *Type:* string[]

Fields to group by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/security_monitoring_default_rule#group_by_fields SecurityMonitoringDefaultRule#group_by_fields}

---

##### `HasOptionalGroupByFields`<sup>Optional</sup> <a name="HasOptionalGroupByFields" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery.property.hasOptionalGroupByFields"></a>

```csharp
public object HasOptionalGroupByFields { get; set; }
```

- *Type:* object

When false, events without a group-by value are ignored by the rule.

When true, events with missing group-by fields are processed with `N/A`, replacing the missing values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/security_monitoring_default_rule#has_optional_group_by_fields SecurityMonitoringDefaultRule#has_optional_group_by_fields}

---

##### `Metric`<sup>Optional</sup> <a name="Metric" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery.property.metric"></a>

```csharp
public string Metric { get; set; }
```

- *Type:* string

The target field to aggregate over when using the `sum`, `max`, or `geo_data` aggregations.

**Deprecated.** Configure `metrics` instead. This attribute will be removed in the next major version of the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/security_monitoring_default_rule#metric SecurityMonitoringDefaultRule#metric}

---

##### `Metrics`<sup>Optional</sup> <a name="Metrics" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery.property.metrics"></a>

```csharp
public string[] Metrics { get; set; }
```

- *Type:* string[]

Group of target fields to aggregate over when using the `sum`, `max`, `geo_data`, or `new_value` aggregations.

The `sum`, `max`, and `geo_data` aggregations only accept one value in this list, whereas the `new_value` aggregation accepts up to five values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/security_monitoring_default_rule#metrics SecurityMonitoringDefaultRule#metrics}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the query. Not compatible with `new_value` aggregations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/security_monitoring_default_rule#name SecurityMonitoringDefaultRule#name}

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

Query to run on logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/security_monitoring_default_rule#query SecurityMonitoringDefaultRule#query}

---

### SecurityMonitoringDefaultRuleQueryAgentRule <a name="SecurityMonitoringDefaultRuleQueryAgentRule" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SecurityMonitoringDefaultRuleQueryAgentRule {
    string AgentRuleId,
    string Expression
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRule.property.agentRuleId">AgentRuleId</a></code> | <code>string</code> | **Deprecated**. It won't be applied anymore. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRule.property.expression">Expression</a></code> | <code>string</code> | **Deprecated**. It won't be applied anymore. |

---

##### `AgentRuleId`<sup>Required</sup> <a name="AgentRuleId" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRule.property.agentRuleId"></a>

```csharp
public string AgentRuleId { get; set; }
```

- *Type:* string

**Deprecated**. It won't be applied anymore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/security_monitoring_default_rule#agent_rule_id SecurityMonitoringDefaultRule#agent_rule_id}

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRule.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

**Deprecated**. It won't be applied anymore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/security_monitoring_default_rule#expression SecurityMonitoringDefaultRule#expression}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityMonitoringDefaultRuleCaseList <a name="SecurityMonitoringDefaultRuleCaseList" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SecurityMonitoringDefaultRuleCaseList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.get"></a>

```csharp
private SecurityMonitoringDefaultRuleCaseOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecurityMonitoringDefaultRuleCaseOutputReference <a name="SecurityMonitoringDefaultRuleCaseOutputReference" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SecurityMonitoringDefaultRuleCaseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.resetCustomStatus">ResetCustomStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.resetNotifications">ResetNotifications</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomStatus` <a name="ResetCustomStatus" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.resetCustomStatus"></a>

```csharp
private void ResetCustomStatus()
```

##### `ResetNotifications` <a name="ResetNotifications" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.resetNotifications"></a>

```csharp
private void ResetNotifications()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.customStatusInput">CustomStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.notificationsInput">NotificationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.customStatus">CustomStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.notifications">Notifications</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomStatusInput`<sup>Optional</sup> <a name="CustomStatusInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.customStatusInput"></a>

```csharp
public string CustomStatusInput { get; }
```

- *Type:* string

---

##### `NotificationsInput`<sup>Optional</sup> <a name="NotificationsInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.notificationsInput"></a>

```csharp
public string[] NotificationsInput { get; }
```

- *Type:* string[]

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `CustomStatus`<sup>Required</sup> <a name="CustomStatus" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.customStatus"></a>

```csharp
public string CustomStatus { get; }
```

- *Type:* string

---

##### `Notifications`<sup>Required</sup> <a name="Notifications" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.notifications"></a>

```csharp
public string[] Notifications { get; }
```

- *Type:* string[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecurityMonitoringDefaultRuleFilterList <a name="SecurityMonitoringDefaultRuleFilterList" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SecurityMonitoringDefaultRuleFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.get"></a>

```csharp
private SecurityMonitoringDefaultRuleFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecurityMonitoringDefaultRuleFilterOutputReference <a name="SecurityMonitoringDefaultRuleFilterOutputReference" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SecurityMonitoringDefaultRuleFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecurityMonitoringDefaultRuleOptionsOutputReference <a name="SecurityMonitoringDefaultRuleOptionsOutputReference" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SecurityMonitoringDefaultRuleOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.resetDecreaseCriticalityBasedOnEnv">ResetDecreaseCriticalityBasedOnEnv</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDecreaseCriticalityBasedOnEnv` <a name="ResetDecreaseCriticalityBasedOnEnv" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.resetDecreaseCriticalityBasedOnEnv"></a>

```csharp
private void ResetDecreaseCriticalityBasedOnEnv()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.property.decreaseCriticalityBasedOnEnvInput">DecreaseCriticalityBasedOnEnvInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.property.decreaseCriticalityBasedOnEnv">DecreaseCriticalityBasedOnEnv</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptions">SecurityMonitoringDefaultRuleOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DecreaseCriticalityBasedOnEnvInput`<sup>Optional</sup> <a name="DecreaseCriticalityBasedOnEnvInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.property.decreaseCriticalityBasedOnEnvInput"></a>

```csharp
public object DecreaseCriticalityBasedOnEnvInput { get; }
```

- *Type:* object

---

##### `DecreaseCriticalityBasedOnEnv`<sup>Required</sup> <a name="DecreaseCriticalityBasedOnEnv" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.property.decreaseCriticalityBasedOnEnv"></a>

```csharp
public object DecreaseCriticalityBasedOnEnv { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.property.internalValue"></a>

```csharp
public SecurityMonitoringDefaultRuleOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptions">SecurityMonitoringDefaultRuleOptions</a>

---


### SecurityMonitoringDefaultRuleQueryAgentRuleList <a name="SecurityMonitoringDefaultRuleQueryAgentRuleList" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SecurityMonitoringDefaultRuleQueryAgentRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.get"></a>

```csharp
private SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference <a name="SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.property.agentRuleIdInput">AgentRuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.property.agentRuleId">AgentRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgentRuleIdInput`<sup>Optional</sup> <a name="AgentRuleIdInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.property.agentRuleIdInput"></a>

```csharp
public string AgentRuleIdInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `AgentRuleId`<sup>Required</sup> <a name="AgentRuleId" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.property.agentRuleId"></a>

```csharp
public string AgentRuleId { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecurityMonitoringDefaultRuleQueryList <a name="SecurityMonitoringDefaultRuleQueryList" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SecurityMonitoringDefaultRuleQueryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.get"></a>

```csharp
private SecurityMonitoringDefaultRuleQueryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecurityMonitoringDefaultRuleQueryOutputReference <a name="SecurityMonitoringDefaultRuleQueryOutputReference" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SecurityMonitoringDefaultRuleQueryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.putAgentRule">PutAgentRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resetAgentRule">ResetAgentRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resetAggregation">ResetAggregation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resetCustomQueryExtension">ResetCustomQueryExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resetDataSource">ResetDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resetDistinctFields">ResetDistinctFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resetGroupByFields">ResetGroupByFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resetHasOptionalGroupByFields">ResetHasOptionalGroupByFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resetMetric">ResetMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resetMetrics">ResetMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resetQuery">ResetQuery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAgentRule` <a name="PutAgentRule" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.putAgentRule"></a>

```csharp
private void PutAgentRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.putAgentRule.parameter.value"></a>

- *Type:* object

---

##### `ResetAgentRule` <a name="ResetAgentRule" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resetAgentRule"></a>

```csharp
private void ResetAgentRule()
```

##### `ResetAggregation` <a name="ResetAggregation" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resetAggregation"></a>

```csharp
private void ResetAggregation()
```

##### `ResetCustomQueryExtension` <a name="ResetCustomQueryExtension" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resetCustomQueryExtension"></a>

```csharp
private void ResetCustomQueryExtension()
```

##### `ResetDataSource` <a name="ResetDataSource" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resetDataSource"></a>

```csharp
private void ResetDataSource()
```

##### `ResetDistinctFields` <a name="ResetDistinctFields" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resetDistinctFields"></a>

```csharp
private void ResetDistinctFields()
```

##### `ResetGroupByFields` <a name="ResetGroupByFields" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resetGroupByFields"></a>

```csharp
private void ResetGroupByFields()
```

##### `ResetHasOptionalGroupByFields` <a name="ResetHasOptionalGroupByFields" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resetHasOptionalGroupByFields"></a>

```csharp
private void ResetHasOptionalGroupByFields()
```

##### `ResetMetric` <a name="ResetMetric" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resetMetric"></a>

```csharp
private void ResetMetric()
```

##### `ResetMetrics` <a name="ResetMetrics" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resetMetrics"></a>

```csharp
private void ResetMetrics()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetQuery` <a name="ResetQuery" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resetQuery"></a>

```csharp
private void ResetQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.agentRule">AgentRule</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList">SecurityMonitoringDefaultRuleQueryAgentRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.agentRuleInput">AgentRuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.aggregationInput">AggregationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.customQueryExtensionInput">CustomQueryExtensionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.dataSourceInput">DataSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.distinctFieldsInput">DistinctFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.groupByFieldsInput">GroupByFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.hasOptionalGroupByFieldsInput">HasOptionalGroupByFieldsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.metricInput">MetricInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.metricsInput">MetricsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.aggregation">Aggregation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.customQueryExtension">CustomQueryExtension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.dataSource">DataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.distinctFields">DistinctFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.groupByFields">GroupByFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.hasOptionalGroupByFields">HasOptionalGroupByFields</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.metric">Metric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.metrics">Metrics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgentRule`<sup>Required</sup> <a name="AgentRule" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.agentRule"></a>

```csharp
public SecurityMonitoringDefaultRuleQueryAgentRuleList AgentRule { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList">SecurityMonitoringDefaultRuleQueryAgentRuleList</a>

---

##### `AgentRuleInput`<sup>Optional</sup> <a name="AgentRuleInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.agentRuleInput"></a>

```csharp
public object AgentRuleInput { get; }
```

- *Type:* object

---

##### `AggregationInput`<sup>Optional</sup> <a name="AggregationInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.aggregationInput"></a>

```csharp
public string AggregationInput { get; }
```

- *Type:* string

---

##### `CustomQueryExtensionInput`<sup>Optional</sup> <a name="CustomQueryExtensionInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.customQueryExtensionInput"></a>

```csharp
public string CustomQueryExtensionInput { get; }
```

- *Type:* string

---

##### `DataSourceInput`<sup>Optional</sup> <a name="DataSourceInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.dataSourceInput"></a>

```csharp
public string DataSourceInput { get; }
```

- *Type:* string

---

##### `DistinctFieldsInput`<sup>Optional</sup> <a name="DistinctFieldsInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.distinctFieldsInput"></a>

```csharp
public string[] DistinctFieldsInput { get; }
```

- *Type:* string[]

---

##### `GroupByFieldsInput`<sup>Optional</sup> <a name="GroupByFieldsInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.groupByFieldsInput"></a>

```csharp
public string[] GroupByFieldsInput { get; }
```

- *Type:* string[]

---

##### `HasOptionalGroupByFieldsInput`<sup>Optional</sup> <a name="HasOptionalGroupByFieldsInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.hasOptionalGroupByFieldsInput"></a>

```csharp
public object HasOptionalGroupByFieldsInput { get; }
```

- *Type:* object

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.metricInput"></a>

```csharp
public string MetricInput { get; }
```

- *Type:* string

---

##### `MetricsInput`<sup>Optional</sup> <a name="MetricsInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.metricsInput"></a>

```csharp
public string[] MetricsInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `Aggregation`<sup>Required</sup> <a name="Aggregation" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.aggregation"></a>

```csharp
public string Aggregation { get; }
```

- *Type:* string

---

##### `CustomQueryExtension`<sup>Required</sup> <a name="CustomQueryExtension" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.customQueryExtension"></a>

```csharp
public string CustomQueryExtension { get; }
```

- *Type:* string

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.dataSource"></a>

```csharp
public string DataSource { get; }
```

- *Type:* string

---

##### `DistinctFields`<sup>Required</sup> <a name="DistinctFields" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.distinctFields"></a>

```csharp
public string[] DistinctFields { get; }
```

- *Type:* string[]

---

##### `GroupByFields`<sup>Required</sup> <a name="GroupByFields" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.groupByFields"></a>

```csharp
public string[] GroupByFields { get; }
```

- *Type:* string[]

---

##### `HasOptionalGroupByFields`<sup>Required</sup> <a name="HasOptionalGroupByFields" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.hasOptionalGroupByFields"></a>

```csharp
public object HasOptionalGroupByFields { get; }
```

- *Type:* object

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.metric"></a>

```csharp
public string Metric { get; }
```

- *Type:* string

---

##### `Metrics`<sup>Required</sup> <a name="Metrics" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.metrics"></a>

```csharp
public string[] Metrics { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



