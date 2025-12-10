# `tagPipelineRuleset` Submodule <a name="`tagPipelineRuleset` Submodule" id="@cdktf/provider-datadog.tagPipelineRuleset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TagPipelineRuleset <a name="TagPipelineRuleset" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset datadog_tag_pipeline_ruleset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new TagPipelineRuleset(Construct Scope, string Id, TagPipelineRulesetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig">TagPipelineRulesetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig">TagPipelineRulesetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.resetRules">ResetRules</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRules` <a name="PutRules" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.putRules"></a>

```csharp
private void PutRules(IResolvable|TagPipelineRulesetRules[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.putRules.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules">TagPipelineRulesetRules</a>[]

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetRules` <a name="ResetRules" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.resetRules"></a>

```csharp
private void ResetRules()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a TagPipelineRuleset resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

TagPipelineRuleset.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

TagPipelineRuleset.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

TagPipelineRuleset.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

TagPipelineRuleset.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a TagPipelineRuleset resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TagPipelineRuleset to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TagPipelineRuleset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the TagPipelineRuleset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.position">Position</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList">TagPipelineRulesetRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.enabledInput">EnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.rulesInput">RulesInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules">TagPipelineRulesetRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.position"></a>

```csharp
public double Position { get; }
```

- *Type:* double

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.rules"></a>

```csharp
public TagPipelineRulesetRulesList Rules { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList">TagPipelineRulesetRulesList</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.rulesInput"></a>

```csharp
public IResolvable|TagPipelineRulesetRules[] RulesInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules">TagPipelineRulesetRules</a>[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TagPipelineRulesetConfig <a name="TagPipelineRulesetConfig" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new TagPipelineRulesetConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    bool|IResolvable Enabled = null,
    IResolvable|TagPipelineRulesetRules[] Rules = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.name">Name</a></code> | <code>string</code> | The name of the ruleset. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Whether the ruleset is enabled. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.rules">Rules</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules">TagPipelineRulesetRules</a>[]</code> | rules block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the ruleset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#name TagPipelineRuleset#name}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Whether the ruleset is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#enabled TagPipelineRuleset#enabled}

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.rules"></a>

```csharp
public IResolvable|TagPipelineRulesetRules[] Rules { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules">TagPipelineRulesetRules</a>[]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#rules TagPipelineRuleset#rules}

---

### TagPipelineRulesetRules <a name="TagPipelineRulesetRules" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new TagPipelineRulesetRules {
    bool|IResolvable Enabled,
    string Name,
    TagPipelineRulesetRulesMapping Mapping = null,
    TagPipelineRulesetRulesQuery Query = null,
    TagPipelineRulesetRulesReferenceTable ReferenceTable = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Whether the rule is enabled. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules.property.name">Name</a></code> | <code>string</code> | The name of the rule. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules.property.mapping">Mapping</a></code> | <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping">TagPipelineRulesetRulesMapping</a></code> | mapping block. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules.property.query">Query</a></code> | <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery">TagPipelineRulesetRulesQuery</a></code> | query block. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules.property.referenceTable">ReferenceTable</a></code> | <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable">TagPipelineRulesetRulesReferenceTable</a></code> | reference_table block. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Whether the rule is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#enabled TagPipelineRuleset#enabled}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#name TagPipelineRuleset#name}

---

##### `Mapping`<sup>Optional</sup> <a name="Mapping" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules.property.mapping"></a>

```csharp
public TagPipelineRulesetRulesMapping Mapping { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping">TagPipelineRulesetRulesMapping</a>

mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#mapping TagPipelineRuleset#mapping}

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules.property.query"></a>

```csharp
public TagPipelineRulesetRulesQuery Query { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery">TagPipelineRulesetRulesQuery</a>

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#query TagPipelineRuleset#query}

---

##### `ReferenceTable`<sup>Optional</sup> <a name="ReferenceTable" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules.property.referenceTable"></a>

```csharp
public TagPipelineRulesetRulesReferenceTable ReferenceTable { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable">TagPipelineRulesetRulesReferenceTable</a>

reference_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#reference_table TagPipelineRuleset#reference_table}

---

### TagPipelineRulesetRulesMapping <a name="TagPipelineRulesetRulesMapping" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new TagPipelineRulesetRulesMapping {
    string DestinationKey = null,
    bool|IResolvable IfNotExists = null,
    string[] SourceKeys = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping.property.destinationKey">DestinationKey</a></code> | <code>string</code> | The destination key for the mapping. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping.property.ifNotExists">IfNotExists</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Whether to apply the mapping only if the destination key doesn't exist. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping.property.sourceKeys">SourceKeys</a></code> | <code>string[]</code> | The source keys for the mapping. |

---

##### `DestinationKey`<sup>Optional</sup> <a name="DestinationKey" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping.property.destinationKey"></a>

```csharp
public string DestinationKey { get; set; }
```

- *Type:* string

The destination key for the mapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#destination_key TagPipelineRuleset#destination_key}

---

##### `IfNotExists`<sup>Optional</sup> <a name="IfNotExists" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping.property.ifNotExists"></a>

```csharp
public bool|IResolvable IfNotExists { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Whether to apply the mapping only if the destination key doesn't exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#if_not_exists TagPipelineRuleset#if_not_exists}

---

##### `SourceKeys`<sup>Optional</sup> <a name="SourceKeys" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping.property.sourceKeys"></a>

```csharp
public string[] SourceKeys { get; set; }
```

- *Type:* string[]

The source keys for the mapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#source_keys TagPipelineRuleset#source_keys}

---

### TagPipelineRulesetRulesQuery <a name="TagPipelineRulesetRulesQuery" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new TagPipelineRulesetRulesQuery {
    TagPipelineRulesetRulesQueryAddition Addition = null,
    bool|IResolvable CaseInsensitivity = null,
    bool|IResolvable IfNotExists = null,
    string Query = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery.property.addition">Addition</a></code> | <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition">TagPipelineRulesetRulesQueryAddition</a></code> | addition block. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery.property.caseInsensitivity">CaseInsensitivity</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Whether the query matching is case insensitive. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery.property.ifNotExists">IfNotExists</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Whether to apply the query only if the key doesn't exist. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery.property.query">Query</a></code> | <code>string</code> | The query string. |

---

##### `Addition`<sup>Optional</sup> <a name="Addition" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery.property.addition"></a>

```csharp
public TagPipelineRulesetRulesQueryAddition Addition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition">TagPipelineRulesetRulesQueryAddition</a>

addition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#addition TagPipelineRuleset#addition}

---

##### `CaseInsensitivity`<sup>Optional</sup> <a name="CaseInsensitivity" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery.property.caseInsensitivity"></a>

```csharp
public bool|IResolvable CaseInsensitivity { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Whether the query matching is case insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#case_insensitivity TagPipelineRuleset#case_insensitivity}

---

##### `IfNotExists`<sup>Optional</sup> <a name="IfNotExists" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery.property.ifNotExists"></a>

```csharp
public bool|IResolvable IfNotExists { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Whether to apply the query only if the key doesn't exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#if_not_exists TagPipelineRuleset#if_not_exists}

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

The query string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#query TagPipelineRuleset#query}

---

### TagPipelineRulesetRulesQueryAddition <a name="TagPipelineRulesetRulesQueryAddition" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new TagPipelineRulesetRulesQueryAddition {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition.property.key">Key</a></code> | <code>string</code> | The key to add. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition.property.value">Value</a></code> | <code>string</code> | The value to add. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key to add.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#key TagPipelineRuleset#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value to add.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#value TagPipelineRuleset#value}

---

### TagPipelineRulesetRulesReferenceTable <a name="TagPipelineRulesetRulesReferenceTable" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new TagPipelineRulesetRulesReferenceTable {
    bool|IResolvable CaseInsensitivity = null,
    IResolvable|TagPipelineRulesetRulesReferenceTableFieldPairs[] FieldPairs = null,
    bool|IResolvable IfNotExists = null,
    string[] SourceKeys = null,
    string TableName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable.property.caseInsensitivity">CaseInsensitivity</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Whether the reference table lookup is case insensitive. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable.property.fieldPairs">FieldPairs</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs">TagPipelineRulesetRulesReferenceTableFieldPairs</a>[]</code> | field_pairs block. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable.property.ifNotExists">IfNotExists</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Whether to apply the reference table only if the key doesn't exist. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable.property.sourceKeys">SourceKeys</a></code> | <code>string[]</code> | The source keys for the reference table lookup. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable.property.tableName">TableName</a></code> | <code>string</code> | The name of the reference table. |

---

##### `CaseInsensitivity`<sup>Optional</sup> <a name="CaseInsensitivity" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable.property.caseInsensitivity"></a>

```csharp
public bool|IResolvable CaseInsensitivity { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Whether the reference table lookup is case insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#case_insensitivity TagPipelineRuleset#case_insensitivity}

---

##### `FieldPairs`<sup>Optional</sup> <a name="FieldPairs" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable.property.fieldPairs"></a>

```csharp
public IResolvable|TagPipelineRulesetRulesReferenceTableFieldPairs[] FieldPairs { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs">TagPipelineRulesetRulesReferenceTableFieldPairs</a>[]

field_pairs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#field_pairs TagPipelineRuleset#field_pairs}

---

##### `IfNotExists`<sup>Optional</sup> <a name="IfNotExists" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable.property.ifNotExists"></a>

```csharp
public bool|IResolvable IfNotExists { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Whether to apply the reference table only if the key doesn't exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#if_not_exists TagPipelineRuleset#if_not_exists}

---

##### `SourceKeys`<sup>Optional</sup> <a name="SourceKeys" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable.property.sourceKeys"></a>

```csharp
public string[] SourceKeys { get; set; }
```

- *Type:* string[]

The source keys for the reference table lookup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#source_keys TagPipelineRuleset#source_keys}

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

The name of the reference table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#table_name TagPipelineRuleset#table_name}

---

### TagPipelineRulesetRulesReferenceTableFieldPairs <a name="TagPipelineRulesetRulesReferenceTableFieldPairs" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new TagPipelineRulesetRulesReferenceTableFieldPairs {
    string InputColumn = null,
    string OutputKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs.property.inputColumn">InputColumn</a></code> | <code>string</code> | The input column name. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs.property.outputKey">OutputKey</a></code> | <code>string</code> | The output key name. |

---

##### `InputColumn`<sup>Optional</sup> <a name="InputColumn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs.property.inputColumn"></a>

```csharp
public string InputColumn { get; set; }
```

- *Type:* string

The input column name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#input_column TagPipelineRuleset#input_column}

---

##### `OutputKey`<sup>Optional</sup> <a name="OutputKey" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs.property.outputKey"></a>

```csharp
public string OutputKey { get; set; }
```

- *Type:* string

The output key name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/tag_pipeline_ruleset#output_key TagPipelineRuleset#output_key}

---

## Classes <a name="Classes" id="Classes"></a>

### TagPipelineRulesetRulesList <a name="TagPipelineRulesetRulesList" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new TagPipelineRulesetRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.get"></a>

```csharp
private TagPipelineRulesetRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules">TagPipelineRulesetRules</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.property.internalValue"></a>

```csharp
public IResolvable|TagPipelineRulesetRules[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules">TagPipelineRulesetRules</a>[]

---


### TagPipelineRulesetRulesMappingOutputReference <a name="TagPipelineRulesetRulesMappingOutputReference" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new TagPipelineRulesetRulesMappingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.resetDestinationKey">ResetDestinationKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.resetIfNotExists">ResetIfNotExists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.resetSourceKeys">ResetSourceKeys</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationKey` <a name="ResetDestinationKey" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.resetDestinationKey"></a>

```csharp
private void ResetDestinationKey()
```

##### `ResetIfNotExists` <a name="ResetIfNotExists" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.resetIfNotExists"></a>

```csharp
private void ResetIfNotExists()
```

##### `ResetSourceKeys` <a name="ResetSourceKeys" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.resetSourceKeys"></a>

```csharp
private void ResetSourceKeys()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.destinationKeyInput">DestinationKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.ifNotExistsInput">IfNotExistsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.sourceKeysInput">SourceKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.destinationKey">DestinationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.ifNotExists">IfNotExists</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.sourceKeys">SourceKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping">TagPipelineRulesetRulesMapping</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationKeyInput`<sup>Optional</sup> <a name="DestinationKeyInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.destinationKeyInput"></a>

```csharp
public string DestinationKeyInput { get; }
```

- *Type:* string

---

##### `IfNotExistsInput`<sup>Optional</sup> <a name="IfNotExistsInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.ifNotExistsInput"></a>

```csharp
public bool|IResolvable IfNotExistsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `SourceKeysInput`<sup>Optional</sup> <a name="SourceKeysInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.sourceKeysInput"></a>

```csharp
public string[] SourceKeysInput { get; }
```

- *Type:* string[]

---

##### `DestinationKey`<sup>Required</sup> <a name="DestinationKey" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.destinationKey"></a>

```csharp
public string DestinationKey { get; }
```

- *Type:* string

---

##### `IfNotExists`<sup>Required</sup> <a name="IfNotExists" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.ifNotExists"></a>

```csharp
public bool|IResolvable IfNotExists { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `SourceKeys`<sup>Required</sup> <a name="SourceKeys" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.sourceKeys"></a>

```csharp
public string[] SourceKeys { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TagPipelineRulesetRulesMapping InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping">TagPipelineRulesetRulesMapping</a>

---


### TagPipelineRulesetRulesOutputReference <a name="TagPipelineRulesetRulesOutputReference" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new TagPipelineRulesetRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.putMapping">PutMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.putQuery">PutQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.putReferenceTable">PutReferenceTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.resetMapping">ResetMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.resetQuery">ResetQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.resetReferenceTable">ResetReferenceTable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMapping` <a name="PutMapping" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.putMapping"></a>

```csharp
private void PutMapping(TagPipelineRulesetRulesMapping Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.putMapping.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping">TagPipelineRulesetRulesMapping</a>

---

##### `PutQuery` <a name="PutQuery" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.putQuery"></a>

```csharp
private void PutQuery(TagPipelineRulesetRulesQuery Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.putQuery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery">TagPipelineRulesetRulesQuery</a>

---

##### `PutReferenceTable` <a name="PutReferenceTable" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.putReferenceTable"></a>

```csharp
private void PutReferenceTable(TagPipelineRulesetRulesReferenceTable Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.putReferenceTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable">TagPipelineRulesetRulesReferenceTable</a>

---

##### `ResetMapping` <a name="ResetMapping" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.resetMapping"></a>

```csharp
private void ResetMapping()
```

##### `ResetQuery` <a name="ResetQuery" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.resetQuery"></a>

```csharp
private void ResetQuery()
```

##### `ResetReferenceTable` <a name="ResetReferenceTable" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.resetReferenceTable"></a>

```csharp
private void ResetReferenceTable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.mapping">Mapping</a></code> | <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference">TagPipelineRulesetRulesMappingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.metadata">Metadata</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.query">Query</a></code> | <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference">TagPipelineRulesetRulesQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.referenceTable">ReferenceTable</a></code> | <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference">TagPipelineRulesetRulesReferenceTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.mappingInput">MappingInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping">TagPipelineRulesetRulesMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.queryInput">QueryInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery">TagPipelineRulesetRulesQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.referenceTableInput">ReferenceTableInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable">TagPipelineRulesetRulesReferenceTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules">TagPipelineRulesetRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Mapping`<sup>Required</sup> <a name="Mapping" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.mapping"></a>

```csharp
public TagPipelineRulesetRulesMappingOutputReference Mapping { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference">TagPipelineRulesetRulesMappingOutputReference</a>

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.metadata"></a>

```csharp
public StringMap Metadata { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.query"></a>

```csharp
public TagPipelineRulesetRulesQueryOutputReference Query { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference">TagPipelineRulesetRulesQueryOutputReference</a>

---

##### `ReferenceTable`<sup>Required</sup> <a name="ReferenceTable" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.referenceTable"></a>

```csharp
public TagPipelineRulesetRulesReferenceTableOutputReference ReferenceTable { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference">TagPipelineRulesetRulesReferenceTableOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `MappingInput`<sup>Optional</sup> <a name="MappingInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.mappingInput"></a>

```csharp
public IResolvable|TagPipelineRulesetRulesMapping MappingInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping">TagPipelineRulesetRulesMapping</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.queryInput"></a>

```csharp
public IResolvable|TagPipelineRulesetRulesQuery QueryInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery">TagPipelineRulesetRulesQuery</a>

---

##### `ReferenceTableInput`<sup>Optional</sup> <a name="ReferenceTableInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.referenceTableInput"></a>

```csharp
public IResolvable|TagPipelineRulesetRulesReferenceTable ReferenceTableInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable">TagPipelineRulesetRulesReferenceTable</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TagPipelineRulesetRules InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules">TagPipelineRulesetRules</a>

---


### TagPipelineRulesetRulesQueryAdditionOutputReference <a name="TagPipelineRulesetRulesQueryAdditionOutputReference" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new TagPipelineRulesetRulesQueryAdditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition">TagPipelineRulesetRulesQueryAddition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TagPipelineRulesetRulesQueryAddition InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition">TagPipelineRulesetRulesQueryAddition</a>

---


### TagPipelineRulesetRulesQueryOutputReference <a name="TagPipelineRulesetRulesQueryOutputReference" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new TagPipelineRulesetRulesQueryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.putAddition">PutAddition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.resetAddition">ResetAddition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.resetCaseInsensitivity">ResetCaseInsensitivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.resetIfNotExists">ResetIfNotExists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.resetQuery">ResetQuery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAddition` <a name="PutAddition" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.putAddition"></a>

```csharp
private void PutAddition(TagPipelineRulesetRulesQueryAddition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.putAddition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition">TagPipelineRulesetRulesQueryAddition</a>

---

##### `ResetAddition` <a name="ResetAddition" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.resetAddition"></a>

```csharp
private void ResetAddition()
```

##### `ResetCaseInsensitivity` <a name="ResetCaseInsensitivity" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.resetCaseInsensitivity"></a>

```csharp
private void ResetCaseInsensitivity()
```

##### `ResetIfNotExists` <a name="ResetIfNotExists" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.resetIfNotExists"></a>

```csharp
private void ResetIfNotExists()
```

##### `ResetQuery` <a name="ResetQuery" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.resetQuery"></a>

```csharp
private void ResetQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.addition">Addition</a></code> | <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference">TagPipelineRulesetRulesQueryAdditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.additionInput">AdditionInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition">TagPipelineRulesetRulesQueryAddition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.caseInsensitivityInput">CaseInsensitivityInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.ifNotExistsInput">IfNotExistsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.caseInsensitivity">CaseInsensitivity</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.ifNotExists">IfNotExists</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery">TagPipelineRulesetRulesQuery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Addition`<sup>Required</sup> <a name="Addition" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.addition"></a>

```csharp
public TagPipelineRulesetRulesQueryAdditionOutputReference Addition { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference">TagPipelineRulesetRulesQueryAdditionOutputReference</a>

---

##### `AdditionInput`<sup>Optional</sup> <a name="AdditionInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.additionInput"></a>

```csharp
public IResolvable|TagPipelineRulesetRulesQueryAddition AdditionInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition">TagPipelineRulesetRulesQueryAddition</a>

---

##### `CaseInsensitivityInput`<sup>Optional</sup> <a name="CaseInsensitivityInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.caseInsensitivityInput"></a>

```csharp
public bool|IResolvable CaseInsensitivityInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `IfNotExistsInput`<sup>Optional</sup> <a name="IfNotExistsInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.ifNotExistsInput"></a>

```csharp
public bool|IResolvable IfNotExistsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `CaseInsensitivity`<sup>Required</sup> <a name="CaseInsensitivity" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.caseInsensitivity"></a>

```csharp
public bool|IResolvable CaseInsensitivity { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `IfNotExists`<sup>Required</sup> <a name="IfNotExists" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.ifNotExists"></a>

```csharp
public bool|IResolvable IfNotExists { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TagPipelineRulesetRulesQuery InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery">TagPipelineRulesetRulesQuery</a>

---


### TagPipelineRulesetRulesReferenceTableFieldPairsList <a name="TagPipelineRulesetRulesReferenceTableFieldPairsList" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new TagPipelineRulesetRulesReferenceTableFieldPairsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.get"></a>

```csharp
private TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs">TagPipelineRulesetRulesReferenceTableFieldPairs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.property.internalValue"></a>

```csharp
public IResolvable|TagPipelineRulesetRulesReferenceTableFieldPairs[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs">TagPipelineRulesetRulesReferenceTableFieldPairs</a>[]

---


### TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference <a name="TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.resetInputColumn">ResetInputColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.resetOutputKey">ResetOutputKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInputColumn` <a name="ResetInputColumn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.resetInputColumn"></a>

```csharp
private void ResetInputColumn()
```

##### `ResetOutputKey` <a name="ResetOutputKey" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.resetOutputKey"></a>

```csharp
private void ResetOutputKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.inputColumnInput">InputColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.outputKeyInput">OutputKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.inputColumn">InputColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.outputKey">OutputKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs">TagPipelineRulesetRulesReferenceTableFieldPairs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InputColumnInput`<sup>Optional</sup> <a name="InputColumnInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.inputColumnInput"></a>

```csharp
public string InputColumnInput { get; }
```

- *Type:* string

---

##### `OutputKeyInput`<sup>Optional</sup> <a name="OutputKeyInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.outputKeyInput"></a>

```csharp
public string OutputKeyInput { get; }
```

- *Type:* string

---

##### `InputColumn`<sup>Required</sup> <a name="InputColumn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.inputColumn"></a>

```csharp
public string InputColumn { get; }
```

- *Type:* string

---

##### `OutputKey`<sup>Required</sup> <a name="OutputKey" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.outputKey"></a>

```csharp
public string OutputKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TagPipelineRulesetRulesReferenceTableFieldPairs InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs">TagPipelineRulesetRulesReferenceTableFieldPairs</a>

---


### TagPipelineRulesetRulesReferenceTableOutputReference <a name="TagPipelineRulesetRulesReferenceTableOutputReference" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new TagPipelineRulesetRulesReferenceTableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.putFieldPairs">PutFieldPairs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resetCaseInsensitivity">ResetCaseInsensitivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resetFieldPairs">ResetFieldPairs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resetIfNotExists">ResetIfNotExists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resetSourceKeys">ResetSourceKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resetTableName">ResetTableName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFieldPairs` <a name="PutFieldPairs" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.putFieldPairs"></a>

```csharp
private void PutFieldPairs(IResolvable|TagPipelineRulesetRulesReferenceTableFieldPairs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.putFieldPairs.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs">TagPipelineRulesetRulesReferenceTableFieldPairs</a>[]

---

##### `ResetCaseInsensitivity` <a name="ResetCaseInsensitivity" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resetCaseInsensitivity"></a>

```csharp
private void ResetCaseInsensitivity()
```

##### `ResetFieldPairs` <a name="ResetFieldPairs" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resetFieldPairs"></a>

```csharp
private void ResetFieldPairs()
```

##### `ResetIfNotExists` <a name="ResetIfNotExists" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resetIfNotExists"></a>

```csharp
private void ResetIfNotExists()
```

##### `ResetSourceKeys` <a name="ResetSourceKeys" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resetSourceKeys"></a>

```csharp
private void ResetSourceKeys()
```

##### `ResetTableName` <a name="ResetTableName" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resetTableName"></a>

```csharp
private void ResetTableName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.fieldPairs">FieldPairs</a></code> | <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList">TagPipelineRulesetRulesReferenceTableFieldPairsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.caseInsensitivityInput">CaseInsensitivityInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.fieldPairsInput">FieldPairsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs">TagPipelineRulesetRulesReferenceTableFieldPairs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.ifNotExistsInput">IfNotExistsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.sourceKeysInput">SourceKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.caseInsensitivity">CaseInsensitivity</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.ifNotExists">IfNotExists</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.sourceKeys">SourceKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable">TagPipelineRulesetRulesReferenceTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldPairs`<sup>Required</sup> <a name="FieldPairs" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.fieldPairs"></a>

```csharp
public TagPipelineRulesetRulesReferenceTableFieldPairsList FieldPairs { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList">TagPipelineRulesetRulesReferenceTableFieldPairsList</a>

---

##### `CaseInsensitivityInput`<sup>Optional</sup> <a name="CaseInsensitivityInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.caseInsensitivityInput"></a>

```csharp
public bool|IResolvable CaseInsensitivityInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `FieldPairsInput`<sup>Optional</sup> <a name="FieldPairsInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.fieldPairsInput"></a>

```csharp
public IResolvable|TagPipelineRulesetRulesReferenceTableFieldPairs[] FieldPairsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs">TagPipelineRulesetRulesReferenceTableFieldPairs</a>[]

---

##### `IfNotExistsInput`<sup>Optional</sup> <a name="IfNotExistsInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.ifNotExistsInput"></a>

```csharp
public bool|IResolvable IfNotExistsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `SourceKeysInput`<sup>Optional</sup> <a name="SourceKeysInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.sourceKeysInput"></a>

```csharp
public string[] SourceKeysInput { get; }
```

- *Type:* string[]

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `CaseInsensitivity`<sup>Required</sup> <a name="CaseInsensitivity" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.caseInsensitivity"></a>

```csharp
public bool|IResolvable CaseInsensitivity { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `IfNotExists`<sup>Required</sup> <a name="IfNotExists" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.ifNotExists"></a>

```csharp
public bool|IResolvable IfNotExists { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `SourceKeys`<sup>Required</sup> <a name="SourceKeys" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.sourceKeys"></a>

```csharp
public string[] SourceKeys { get; }
```

- *Type:* string[]

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TagPipelineRulesetRulesReferenceTable InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable">TagPipelineRulesetRulesReferenceTable</a>

---



