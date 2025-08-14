# `csmThreatsAgentRule` Submodule <a name="`csmThreatsAgentRule` Submodule" id="@cdktf/provider-datadog.csmThreatsAgentRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CsmThreatsAgentRule <a name="CsmThreatsAgentRule" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/csm_threats_agent_rule datadog_csm_threats_agent_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new CsmThreatsAgentRule(Construct Scope, string Id, CsmThreatsAgentRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig">CsmThreatsAgentRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig">CsmThreatsAgentRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.putActions">PutActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetActions">ResetActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetPolicyId">ResetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetProductTags">ResetProductTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutActions` <a name="PutActions" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.putActions"></a>

```csharp
private void PutActions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.putActions.parameter.value"></a>

- *Type:* object

---

##### `ResetActions` <a name="ResetActions" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetActions"></a>

```csharp
private void ResetActions()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetPolicyId` <a name="ResetPolicyId" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetPolicyId"></a>

```csharp
private void ResetPolicyId()
```

##### `ResetProductTags` <a name="ResetProductTags" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetProductTags"></a>

```csharp
private void ResetProductTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CsmThreatsAgentRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

CsmThreatsAgentRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

CsmThreatsAgentRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

CsmThreatsAgentRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

CsmThreatsAgentRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CsmThreatsAgentRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CsmThreatsAgentRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CsmThreatsAgentRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/csm_threats_agent_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CsmThreatsAgentRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.actions">Actions</a></code> | <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList">CsmThreatsAgentRuleActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.actionsInput">ActionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.policyIdInput">PolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.productTagsInput">ProductTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.productTags">ProductTags</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.actions"></a>

```csharp
public CsmThreatsAgentRuleActionsList Actions { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList">CsmThreatsAgentRuleActionsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.actionsInput"></a>

```csharp
public object ActionsInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.policyIdInput"></a>

```csharp
public string PolicyIdInput { get; }
```

- *Type:* string

---

##### `ProductTagsInput`<sup>Optional</sup> <a name="ProductTagsInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.productTagsInput"></a>

```csharp
public string[] ProductTagsInput { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

##### `ProductTags`<sup>Required</sup> <a name="ProductTags" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.productTags"></a>

```csharp
public string[] ProductTags { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CsmThreatsAgentRuleActions <a name="CsmThreatsAgentRuleActions" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new CsmThreatsAgentRuleActions {
    CsmThreatsAgentRuleActionsHash Hash = null,
    CsmThreatsAgentRuleActionsSet Set = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActions.property.hash">Hash</a></code> | <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHash">CsmThreatsAgentRuleActionsHash</a></code> | hash block. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActions.property.set">Set</a></code> | <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet">CsmThreatsAgentRuleActionsSet</a></code> | set block. |

---

##### `Hash`<sup>Optional</sup> <a name="Hash" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActions.property.hash"></a>

```csharp
public CsmThreatsAgentRuleActionsHash Hash { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHash">CsmThreatsAgentRuleActionsHash</a>

hash block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/csm_threats_agent_rule#hash CsmThreatsAgentRule#hash}

---

##### `Set`<sup>Optional</sup> <a name="Set" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActions.property.set"></a>

```csharp
public CsmThreatsAgentRuleActionsSet Set { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet">CsmThreatsAgentRuleActionsSet</a>

set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/csm_threats_agent_rule#set CsmThreatsAgentRule#set}

---

### CsmThreatsAgentRuleActionsHash <a name="CsmThreatsAgentRuleActionsHash" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHash"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHash.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new CsmThreatsAgentRuleActionsHash {

};
```


### CsmThreatsAgentRuleActionsSet <a name="CsmThreatsAgentRuleActionsSet" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new CsmThreatsAgentRuleActionsSet {
    string Name,
    object Append = null,
    string Field = null,
    string Scope = null,
    double Size = null,
    double Ttl = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.name">Name</a></code> | <code>string</code> | The name of the set action. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.append">Append</a></code> | <code>object</code> | Whether to append to the set. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.field">Field</a></code> | <code>string</code> | The field to get the value from. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.scope">Scope</a></code> | <code>string</code> | The scope of the set action (process, container, cgroup, or empty). |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.size">Size</a></code> | <code>double</code> | The maximum size of the set. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.ttl">Ttl</a></code> | <code>double</code> | The time to live for the set in nanoseconds. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.value">Value</a></code> | <code>string</code> | The value to set. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the set action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/csm_threats_agent_rule#name CsmThreatsAgentRule#name}

---

##### `Append`<sup>Optional</sup> <a name="Append" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.append"></a>

```csharp
public object Append { get; set; }
```

- *Type:* object

Whether to append to the set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/csm_threats_agent_rule#append CsmThreatsAgentRule#append}

---

##### `Field`<sup>Optional</sup> <a name="Field" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.field"></a>

```csharp
public string Field { get; set; }
```

- *Type:* string

The field to get the value from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/csm_threats_agent_rule#field CsmThreatsAgentRule#field}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

The scope of the set action (process, container, cgroup, or empty).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/csm_threats_agent_rule#scope CsmThreatsAgentRule#scope}

---

##### `Size`<sup>Optional</sup> <a name="Size" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.size"></a>

```csharp
public double Size { get; set; }
```

- *Type:* double

The maximum size of the set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/csm_threats_agent_rule#size CsmThreatsAgentRule#size}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.ttl"></a>

```csharp
public double Ttl { get; set; }
```

- *Type:* double

The time to live for the set in nanoseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/csm_threats_agent_rule#ttl CsmThreatsAgentRule#ttl}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value to set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/csm_threats_agent_rule#value CsmThreatsAgentRule#value}

---

### CsmThreatsAgentRuleConfig <a name="CsmThreatsAgentRuleConfig" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new CsmThreatsAgentRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Expression,
    string Name,
    object Actions = null,
    string Description = null,
    object Enabled = null,
    string PolicyId = null,
    string[] ProductTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.expression">Expression</a></code> | <code>string</code> | The SECL expression of the Agent rule. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.name">Name</a></code> | <code>string</code> | The name of the Agent rule. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.actions">Actions</a></code> | <code>object</code> | actions block. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.description">Description</a></code> | <code>string</code> | A description for the Agent rule. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.enabled">Enabled</a></code> | <code>object</code> | Indicates whether the Agent rule is enabled. Must not be used without policy_id. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.policyId">PolicyId</a></code> | <code>string</code> | The ID of the agent policy in which the rule is saved. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.productTags">ProductTags</a></code> | <code>string[]</code> | The list of product tags associated with the rule. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

The SECL expression of the Agent rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/csm_threats_agent_rule#expression CsmThreatsAgentRule#expression}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the Agent rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/csm_threats_agent_rule#name CsmThreatsAgentRule#name}

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.actions"></a>

```csharp
public object Actions { get; set; }
```

- *Type:* object

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/csm_threats_agent_rule#actions CsmThreatsAgentRule#actions}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description for the Agent rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/csm_threats_agent_rule#description CsmThreatsAgentRule#description}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Indicates whether the Agent rule is enabled. Must not be used without policy_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/csm_threats_agent_rule#enabled CsmThreatsAgentRule#enabled}

---

##### `PolicyId`<sup>Optional</sup> <a name="PolicyId" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.policyId"></a>

```csharp
public string PolicyId { get; set; }
```

- *Type:* string

The ID of the agent policy in which the rule is saved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/csm_threats_agent_rule#policy_id CsmThreatsAgentRule#policy_id}

---

##### `ProductTags`<sup>Optional</sup> <a name="ProductTags" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.productTags"></a>

```csharp
public string[] ProductTags { get; set; }
```

- *Type:* string[]

The list of product tags associated with the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/csm_threats_agent_rule#product_tags CsmThreatsAgentRule#product_tags}

---

## Classes <a name="Classes" id="Classes"></a>

### CsmThreatsAgentRuleActionsHashOutputReference <a name="CsmThreatsAgentRuleActionsHashOutputReference" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new CsmThreatsAgentRuleActionsHashOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CsmThreatsAgentRuleActionsList <a name="CsmThreatsAgentRuleActionsList" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new CsmThreatsAgentRuleActionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.get"></a>

```csharp
private CsmThreatsAgentRuleActionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CsmThreatsAgentRuleActionsOutputReference <a name="CsmThreatsAgentRuleActionsOutputReference" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new CsmThreatsAgentRuleActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.putHash">PutHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.putSet">PutSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.resetSet">ResetSet</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHash` <a name="PutHash" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.putHash"></a>

```csharp
private void PutHash(CsmThreatsAgentRuleActionsHash Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.putHash.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHash">CsmThreatsAgentRuleActionsHash</a>

---

##### `PutSet` <a name="PutSet" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.putSet"></a>

```csharp
private void PutSet(CsmThreatsAgentRuleActionsSet Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.putSet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet">CsmThreatsAgentRuleActionsSet</a>

---

##### `ResetSet` <a name="ResetSet" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.resetSet"></a>

```csharp
private void ResetSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.hash">Hash</a></code> | <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference">CsmThreatsAgentRuleActionsHashOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.set">Set</a></code> | <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference">CsmThreatsAgentRuleActionsSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.hashInput">HashInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.setInput">SetInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Hash`<sup>Required</sup> <a name="Hash" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.hash"></a>

```csharp
public CsmThreatsAgentRuleActionsHashOutputReference Hash { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference">CsmThreatsAgentRuleActionsHashOutputReference</a>

---

##### `Set`<sup>Required</sup> <a name="Set" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.set"></a>

```csharp
public CsmThreatsAgentRuleActionsSetOutputReference Set { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference">CsmThreatsAgentRuleActionsSetOutputReference</a>

---

##### `HashInput`<sup>Optional</sup> <a name="HashInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.hashInput"></a>

```csharp
public object HashInput { get; }
```

- *Type:* object

---

##### `SetInput`<sup>Optional</sup> <a name="SetInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.setInput"></a>

```csharp
public object SetInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CsmThreatsAgentRuleActionsSetOutputReference <a name="CsmThreatsAgentRuleActionsSetOutputReference" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new CsmThreatsAgentRuleActionsSetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetAppend">ResetAppend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetField">ResetField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetSize">ResetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetTtl">ResetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAppend` <a name="ResetAppend" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetAppend"></a>

```csharp
private void ResetAppend()
```

##### `ResetField` <a name="ResetField" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetField"></a>

```csharp
private void ResetField()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetScope"></a>

```csharp
private void ResetScope()
```

##### `ResetSize` <a name="ResetSize" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetSize"></a>

```csharp
private void ResetSize()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetTtl"></a>

```csharp
private void ResetTtl()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.appendInput">AppendInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.fieldInput">FieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.sizeInput">SizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.ttlInput">TtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.append">Append</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.field">Field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.ttl">Ttl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppendInput`<sup>Optional</sup> <a name="AppendInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.appendInput"></a>

```csharp
public object AppendInput { get; }
```

- *Type:* object

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.fieldInput"></a>

```csharp
public string FieldInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.sizeInput"></a>

```csharp
public double SizeInput { get; }
```

- *Type:* double

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.ttlInput"></a>

```csharp
public double TtlInput { get; }
```

- *Type:* double

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Append`<sup>Required</sup> <a name="Append" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.append"></a>

```csharp
public object Append { get; }
```

- *Type:* object

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.field"></a>

```csharp
public string Field { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.ttl"></a>

```csharp
public double Ttl { get; }
```

- *Type:* double

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



