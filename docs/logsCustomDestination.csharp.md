# `logsCustomDestination` Submodule <a name="`logsCustomDestination` Submodule" id="@cdktf/provider-datadog.logsCustomDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogsCustomDestination <a name="LogsCustomDestination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/logs_custom_destination datadog_logs_custom_destination}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new LogsCustomDestination(Construct Scope, string Id, LogsCustomDestinationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig">LogsCustomDestinationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig">LogsCustomDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.putElasticsearchDestination">PutElasticsearchDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.putHttpDestination">PutHttpDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.putSplunkDestination">PutSplunkDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetElasticsearchDestination">ResetElasticsearchDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetForwardTags">ResetForwardTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetForwardTagsRestrictionList">ResetForwardTagsRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetForwardTagsRestrictionListType">ResetForwardTagsRestrictionListType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetHttpDestination">ResetHttpDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetQuery">ResetQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetSplunkDestination">ResetSplunkDestination</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutElasticsearchDestination` <a name="PutElasticsearchDestination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.putElasticsearchDestination"></a>

```csharp
private void PutElasticsearchDestination(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.putElasticsearchDestination.parameter.value"></a>

- *Type:* object

---

##### `PutHttpDestination` <a name="PutHttpDestination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.putHttpDestination"></a>

```csharp
private void PutHttpDestination(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.putHttpDestination.parameter.value"></a>

- *Type:* object

---

##### `PutSplunkDestination` <a name="PutSplunkDestination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.putSplunkDestination"></a>

```csharp
private void PutSplunkDestination(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.putSplunkDestination.parameter.value"></a>

- *Type:* object

---

##### `ResetElasticsearchDestination` <a name="ResetElasticsearchDestination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetElasticsearchDestination"></a>

```csharp
private void ResetElasticsearchDestination()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetForwardTags` <a name="ResetForwardTags" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetForwardTags"></a>

```csharp
private void ResetForwardTags()
```

##### `ResetForwardTagsRestrictionList` <a name="ResetForwardTagsRestrictionList" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetForwardTagsRestrictionList"></a>

```csharp
private void ResetForwardTagsRestrictionList()
```

##### `ResetForwardTagsRestrictionListType` <a name="ResetForwardTagsRestrictionListType" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetForwardTagsRestrictionListType"></a>

```csharp
private void ResetForwardTagsRestrictionListType()
```

##### `ResetHttpDestination` <a name="ResetHttpDestination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetHttpDestination"></a>

```csharp
private void ResetHttpDestination()
```

##### `ResetQuery` <a name="ResetQuery" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetQuery"></a>

```csharp
private void ResetQuery()
```

##### `ResetSplunkDestination` <a name="ResetSplunkDestination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetSplunkDestination"></a>

```csharp
private void ResetSplunkDestination()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LogsCustomDestination resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

LogsCustomDestination.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

LogsCustomDestination.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

LogsCustomDestination.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

LogsCustomDestination.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LogsCustomDestination resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LogsCustomDestination to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LogsCustomDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/logs_custom_destination#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LogsCustomDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.elasticsearchDestination">ElasticsearchDestination</a></code> | <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList">LogsCustomDestinationElasticsearchDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.httpDestination">HttpDestination</a></code> | <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList">LogsCustomDestinationHttpDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.splunkDestination">SplunkDestination</a></code> | <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList">LogsCustomDestinationSplunkDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.elasticsearchDestinationInput">ElasticsearchDestinationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTagsInput">ForwardTagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTagsRestrictionListInput">ForwardTagsRestrictionListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTagsRestrictionListTypeInput">ForwardTagsRestrictionListTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.httpDestinationInput">HttpDestinationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.splunkDestinationInput">SplunkDestinationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTags">ForwardTags</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTagsRestrictionList">ForwardTagsRestrictionList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTagsRestrictionListType">ForwardTagsRestrictionListType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.query">Query</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ElasticsearchDestination`<sup>Required</sup> <a name="ElasticsearchDestination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.elasticsearchDestination"></a>

```csharp
public LogsCustomDestinationElasticsearchDestinationList ElasticsearchDestination { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList">LogsCustomDestinationElasticsearchDestinationList</a>

---

##### `HttpDestination`<sup>Required</sup> <a name="HttpDestination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.httpDestination"></a>

```csharp
public LogsCustomDestinationHttpDestinationList HttpDestination { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList">LogsCustomDestinationHttpDestinationList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SplunkDestination`<sup>Required</sup> <a name="SplunkDestination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.splunkDestination"></a>

```csharp
public LogsCustomDestinationSplunkDestinationList SplunkDestination { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList">LogsCustomDestinationSplunkDestinationList</a>

---

##### `ElasticsearchDestinationInput`<sup>Optional</sup> <a name="ElasticsearchDestinationInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.elasticsearchDestinationInput"></a>

```csharp
public object ElasticsearchDestinationInput { get; }
```

- *Type:* object

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `ForwardTagsInput`<sup>Optional</sup> <a name="ForwardTagsInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTagsInput"></a>

```csharp
public object ForwardTagsInput { get; }
```

- *Type:* object

---

##### `ForwardTagsRestrictionListInput`<sup>Optional</sup> <a name="ForwardTagsRestrictionListInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTagsRestrictionListInput"></a>

```csharp
public string[] ForwardTagsRestrictionListInput { get; }
```

- *Type:* string[]

---

##### `ForwardTagsRestrictionListTypeInput`<sup>Optional</sup> <a name="ForwardTagsRestrictionListTypeInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTagsRestrictionListTypeInput"></a>

```csharp
public string ForwardTagsRestrictionListTypeInput { get; }
```

- *Type:* string

---

##### `HttpDestinationInput`<sup>Optional</sup> <a name="HttpDestinationInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.httpDestinationInput"></a>

```csharp
public object HttpDestinationInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `SplunkDestinationInput`<sup>Optional</sup> <a name="SplunkDestinationInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.splunkDestinationInput"></a>

```csharp
public object SplunkDestinationInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `ForwardTags`<sup>Required</sup> <a name="ForwardTags" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTags"></a>

```csharp
public object ForwardTags { get; }
```

- *Type:* object

---

##### `ForwardTagsRestrictionList`<sup>Required</sup> <a name="ForwardTagsRestrictionList" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTagsRestrictionList"></a>

```csharp
public string[] ForwardTagsRestrictionList { get; }
```

- *Type:* string[]

---

##### `ForwardTagsRestrictionListType`<sup>Required</sup> <a name="ForwardTagsRestrictionListType" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTagsRestrictionListType"></a>

```csharp
public string ForwardTagsRestrictionListType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogsCustomDestinationConfig <a name="LogsCustomDestinationConfig" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new LogsCustomDestinationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    object ElasticsearchDestination = null,
    object Enabled = null,
    object ForwardTags = null,
    string[] ForwardTagsRestrictionList = null,
    string ForwardTagsRestrictionListType = null,
    object HttpDestination = null,
    string Query = null,
    object SplunkDestination = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.name">Name</a></code> | <code>string</code> | The custom destination name. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.elasticsearchDestination">ElasticsearchDestination</a></code> | <code>object</code> | elasticsearch_destination block. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.enabled">Enabled</a></code> | <code>object</code> | Whether logs matching this custom destination should be forwarded or not. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.forwardTags">ForwardTags</a></code> | <code>object</code> | Whether tags from the forwarded logs should be forwarded or not. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.forwardTagsRestrictionList">ForwardTagsRestrictionList</a></code> | <code>string[]</code> | List of [tag keys](https://docs.datadoghq.com/getting_started/tagging/#define-tags) to be filtered. 				An empty list represents no restriction is in place and either all or no tags will be 				forwarded depending on `forward_tags_restriction_list_type` parameter. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.forwardTagsRestrictionListType">ForwardTagsRestrictionListType</a></code> | <code>string</code> | How the `forward_tags_restriction_list` parameter should be interpreted. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.httpDestination">HttpDestination</a></code> | <code>object</code> | http_destination block. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.query">Query</a></code> | <code>string</code> | The custom destination query filter. Logs matching this query are forwarded to the destination. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.splunkDestination">SplunkDestination</a></code> | <code>object</code> | splunk_destination block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The custom destination name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/logs_custom_destination#name LogsCustomDestination#name}

---

##### `ElasticsearchDestination`<sup>Optional</sup> <a name="ElasticsearchDestination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.elasticsearchDestination"></a>

```csharp
public object ElasticsearchDestination { get; set; }
```

- *Type:* object

elasticsearch_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/logs_custom_destination#elasticsearch_destination LogsCustomDestination#elasticsearch_destination}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether logs matching this custom destination should be forwarded or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/logs_custom_destination#enabled LogsCustomDestination#enabled}

---

##### `ForwardTags`<sup>Optional</sup> <a name="ForwardTags" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.forwardTags"></a>

```csharp
public object ForwardTags { get; set; }
```

- *Type:* object

Whether tags from the forwarded logs should be forwarded or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/logs_custom_destination#forward_tags LogsCustomDestination#forward_tags}

---

##### `ForwardTagsRestrictionList`<sup>Optional</sup> <a name="ForwardTagsRestrictionList" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.forwardTagsRestrictionList"></a>

```csharp
public string[] ForwardTagsRestrictionList { get; set; }
```

- *Type:* string[]

List of [tag keys](https://docs.datadoghq.com/getting_started/tagging/#define-tags) to be filtered. 				An empty list represents no restriction is in place and either all or no tags will be 				forwarded depending on `forward_tags_restriction_list_type` parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/logs_custom_destination#forward_tags_restriction_list LogsCustomDestination#forward_tags_restriction_list}

---

##### `ForwardTagsRestrictionListType`<sup>Optional</sup> <a name="ForwardTagsRestrictionListType" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.forwardTagsRestrictionListType"></a>

```csharp
public string ForwardTagsRestrictionListType { get; set; }
```

- *Type:* string

How the `forward_tags_restriction_list` parameter should be interpreted.

If `ALLOW_LIST`, then only tags whose keys on the forwarded logs match the ones on the restriction list
are forwarded.
`BLOCK_LIST` works the opposite way. It does not forward the tags matching the ones on the list. Valid values are `ALLOW_LIST`, `BLOCK_LIST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/logs_custom_destination#forward_tags_restriction_list_type LogsCustomDestination#forward_tags_restriction_list_type}

---

##### `HttpDestination`<sup>Optional</sup> <a name="HttpDestination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.httpDestination"></a>

```csharp
public object HttpDestination { get; set; }
```

- *Type:* object

http_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/logs_custom_destination#http_destination LogsCustomDestination#http_destination}

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

The custom destination query filter. Logs matching this query are forwarded to the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/logs_custom_destination#query LogsCustomDestination#query}

---

##### `SplunkDestination`<sup>Optional</sup> <a name="SplunkDestination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.splunkDestination"></a>

```csharp
public object SplunkDestination { get; set; }
```

- *Type:* object

splunk_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/logs_custom_destination#splunk_destination LogsCustomDestination#splunk_destination}

---

### LogsCustomDestinationElasticsearchDestination <a name="LogsCustomDestinationElasticsearchDestination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new LogsCustomDestinationElasticsearchDestination {
    string Endpoint,
    string IndexName,
    object BasicAuth = null,
    string IndexRotation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination.property.endpoint">Endpoint</a></code> | <code>string</code> | The destination for which logs will be forwarded to. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination.property.indexName">IndexName</a></code> | <code>string</code> | Name of the Elasticsearch index (must follow [Elasticsearch's criteria](https://www.elastic.co/guide/en/elasticsearch/reference/8.11/indices-create-index.html#indices-create-api-path-params)). |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination.property.basicAuth">BasicAuth</a></code> | <code>object</code> | basic_auth block. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination.property.indexRotation">IndexRotation</a></code> | <code>string</code> | Date pattern with US locale and UTC timezone to be appended to the index name after adding '-' 							(that is, '${index_name}-${indexPattern}'). |

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination.property.endpoint"></a>

```csharp
public string Endpoint { get; set; }
```

- *Type:* string

The destination for which logs will be forwarded to.

Must have HTTPS scheme. Forwarding back to Datadog is not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/logs_custom_destination#endpoint LogsCustomDestination#endpoint}

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination.property.indexName"></a>

```csharp
public string IndexName { get; set; }
```

- *Type:* string

Name of the Elasticsearch index (must follow [Elasticsearch's criteria](https://www.elastic.co/guide/en/elasticsearch/reference/8.11/indices-create-index.html#indices-create-api-path-params)).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/logs_custom_destination#index_name LogsCustomDestination#index_name}

---

##### `BasicAuth`<sup>Optional</sup> <a name="BasicAuth" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination.property.basicAuth"></a>

```csharp
public object BasicAuth { get; set; }
```

- *Type:* object

basic_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/logs_custom_destination#basic_auth LogsCustomDestination#basic_auth}

---

##### `IndexRotation`<sup>Optional</sup> <a name="IndexRotation" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination.property.indexRotation"></a>

```csharp
public string IndexRotation { get; set; }
```

- *Type:* string

Date pattern with US locale and UTC timezone to be appended to the index name after adding '-' 							(that is, '${index_name}-${indexPattern}').

You can customize the index rotation naming pattern by choosing one of these options:
- Hourly: 'yyyy-MM-dd-HH' (as an example, it would render: '2022-10-19-09')
- Daily: 'yyyy-MM-dd' (as an example, it would render: '2022-10-19')
- Weekly: 'yyyy-'W'ww' (as an example, it would render: '2022-W42')
- Monthly: 'yyyy-MM' (as an example, it would render: '2022-10')
If this field is missing or is blank, it means that the index name will always be the same
(that is, no rotation).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/logs_custom_destination#index_rotation LogsCustomDestination#index_rotation}

---

### LogsCustomDestinationElasticsearchDestinationBasicAuth <a name="LogsCustomDestinationElasticsearchDestinationBasicAuth" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new LogsCustomDestinationElasticsearchDestinationBasicAuth {
    string Password,
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth.property.password">Password</a></code> | <code>string</code> | The password of the authentication. This field is not returned by the API. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth.property.username">Username</a></code> | <code>string</code> | The username of the authentication. This field is not returned by the API. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The password of the authentication. This field is not returned by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/logs_custom_destination#password LogsCustomDestination#password}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The username of the authentication. This field is not returned by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/logs_custom_destination#username LogsCustomDestination#username}

---

### LogsCustomDestinationHttpDestination <a name="LogsCustomDestinationHttpDestination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new LogsCustomDestinationHttpDestination {
    string Endpoint,
    object BasicAuth = null,
    object CustomHeaderAuth = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination.property.endpoint">Endpoint</a></code> | <code>string</code> | The destination for which logs will be forwarded to. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination.property.basicAuth">BasicAuth</a></code> | <code>object</code> | basic_auth block. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination.property.customHeaderAuth">CustomHeaderAuth</a></code> | <code>object</code> | custom_header_auth block. |

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination.property.endpoint"></a>

```csharp
public string Endpoint { get; set; }
```

- *Type:* string

The destination for which logs will be forwarded to.

Must have HTTPS scheme. Forwarding back to Datadog is not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/logs_custom_destination#endpoint LogsCustomDestination#endpoint}

---

##### `BasicAuth`<sup>Optional</sup> <a name="BasicAuth" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination.property.basicAuth"></a>

```csharp
public object BasicAuth { get; set; }
```

- *Type:* object

basic_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/logs_custom_destination#basic_auth LogsCustomDestination#basic_auth}

---

##### `CustomHeaderAuth`<sup>Optional</sup> <a name="CustomHeaderAuth" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination.property.customHeaderAuth"></a>

```csharp
public object CustomHeaderAuth { get; set; }
```

- *Type:* object

custom_header_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/logs_custom_destination#custom_header_auth LogsCustomDestination#custom_header_auth}

---

### LogsCustomDestinationHttpDestinationBasicAuth <a name="LogsCustomDestinationHttpDestinationBasicAuth" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new LogsCustomDestinationHttpDestinationBasicAuth {
    string Password,
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth.property.password">Password</a></code> | <code>string</code> | The password of the authentication. This field is not returned by the API. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth.property.username">Username</a></code> | <code>string</code> | The username of the authentication. This field is not returned by the API. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The password of the authentication. This field is not returned by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/logs_custom_destination#password LogsCustomDestination#password}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The username of the authentication. This field is not returned by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/logs_custom_destination#username LogsCustomDestination#username}

---

### LogsCustomDestinationHttpDestinationCustomHeaderAuth <a name="LogsCustomDestinationHttpDestinationCustomHeaderAuth" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new LogsCustomDestinationHttpDestinationCustomHeaderAuth {
    string HeaderName,
    string HeaderValue
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth.property.headerName">HeaderName</a></code> | <code>string</code> | The header name of the authentication. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth.property.headerValue">HeaderValue</a></code> | <code>string</code> | The header value of the authentication. This field is not returned by the API. |

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth.property.headerName"></a>

```csharp
public string HeaderName { get; set; }
```

- *Type:* string

The header name of the authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/logs_custom_destination#header_name LogsCustomDestination#header_name}

---

##### `HeaderValue`<sup>Required</sup> <a name="HeaderValue" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth.property.headerValue"></a>

```csharp
public string HeaderValue { get; set; }
```

- *Type:* string

The header value of the authentication. This field is not returned by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/logs_custom_destination#header_value LogsCustomDestination#header_value}

---

### LogsCustomDestinationSplunkDestination <a name="LogsCustomDestinationSplunkDestination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new LogsCustomDestinationSplunkDestination {
    string AccessToken,
    string Endpoint
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination.property.accessToken">AccessToken</a></code> | <code>string</code> | Access token of the Splunk HTTP Event Collector. This field is not returned by the API. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination.property.endpoint">Endpoint</a></code> | <code>string</code> | The destination for which logs will be forwarded to. |

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination.property.accessToken"></a>

```csharp
public string AccessToken { get; set; }
```

- *Type:* string

Access token of the Splunk HTTP Event Collector. This field is not returned by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/logs_custom_destination#access_token LogsCustomDestination#access_token}

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination.property.endpoint"></a>

```csharp
public string Endpoint { get; set; }
```

- *Type:* string

The destination for which logs will be forwarded to.

Must have HTTPS scheme. Forwarding back to Datadog is not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/logs_custom_destination#endpoint LogsCustomDestination#endpoint}

---

## Classes <a name="Classes" id="Classes"></a>

### LogsCustomDestinationElasticsearchDestinationBasicAuthList <a name="LogsCustomDestinationElasticsearchDestinationBasicAuthList" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new LogsCustomDestinationElasticsearchDestinationBasicAuthList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.get"></a>

```csharp
private LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference <a name="LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LogsCustomDestinationElasticsearchDestinationList <a name="LogsCustomDestinationElasticsearchDestinationList" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new LogsCustomDestinationElasticsearchDestinationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.get"></a>

```csharp
private LogsCustomDestinationElasticsearchDestinationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LogsCustomDestinationElasticsearchDestinationOutputReference <a name="LogsCustomDestinationElasticsearchDestinationOutputReference" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new LogsCustomDestinationElasticsearchDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.putBasicAuth">PutBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.resetBasicAuth">ResetBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.resetIndexRotation">ResetIndexRotation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBasicAuth` <a name="PutBasicAuth" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.putBasicAuth"></a>

```csharp
private void PutBasicAuth(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.putBasicAuth.parameter.value"></a>

- *Type:* object

---

##### `ResetBasicAuth` <a name="ResetBasicAuth" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.resetBasicAuth"></a>

```csharp
private void ResetBasicAuth()
```

##### `ResetIndexRotation` <a name="ResetIndexRotation" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.resetIndexRotation"></a>

```csharp
private void ResetIndexRotation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.basicAuth">BasicAuth</a></code> | <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList">LogsCustomDestinationElasticsearchDestinationBasicAuthList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.basicAuthInput">BasicAuthInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.endpointInput">EndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.indexNameInput">IndexNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.indexRotationInput">IndexRotationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.indexName">IndexName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.indexRotation">IndexRotation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BasicAuth`<sup>Required</sup> <a name="BasicAuth" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.basicAuth"></a>

```csharp
public LogsCustomDestinationElasticsearchDestinationBasicAuthList BasicAuth { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList">LogsCustomDestinationElasticsearchDestinationBasicAuthList</a>

---

##### `BasicAuthInput`<sup>Optional</sup> <a name="BasicAuthInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.basicAuthInput"></a>

```csharp
public object BasicAuthInput { get; }
```

- *Type:* object

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.endpointInput"></a>

```csharp
public string EndpointInput { get; }
```

- *Type:* string

---

##### `IndexNameInput`<sup>Optional</sup> <a name="IndexNameInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.indexNameInput"></a>

```csharp
public string IndexNameInput { get; }
```

- *Type:* string

---

##### `IndexRotationInput`<sup>Optional</sup> <a name="IndexRotationInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.indexRotationInput"></a>

```csharp
public string IndexRotationInput { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.indexName"></a>

```csharp
public string IndexName { get; }
```

- *Type:* string

---

##### `IndexRotation`<sup>Required</sup> <a name="IndexRotation" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.indexRotation"></a>

```csharp
public string IndexRotation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LogsCustomDestinationHttpDestinationBasicAuthList <a name="LogsCustomDestinationHttpDestinationBasicAuthList" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new LogsCustomDestinationHttpDestinationBasicAuthList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.get"></a>

```csharp
private LogsCustomDestinationHttpDestinationBasicAuthOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LogsCustomDestinationHttpDestinationBasicAuthOutputReference <a name="LogsCustomDestinationHttpDestinationBasicAuthOutputReference" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new LogsCustomDestinationHttpDestinationBasicAuthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LogsCustomDestinationHttpDestinationCustomHeaderAuthList <a name="LogsCustomDestinationHttpDestinationCustomHeaderAuthList" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new LogsCustomDestinationHttpDestinationCustomHeaderAuthList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.get"></a>

```csharp
private LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference <a name="LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.headerNameInput">HeaderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.headerValueInput">HeaderValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.headerName">HeaderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.headerValue">HeaderValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HeaderNameInput`<sup>Optional</sup> <a name="HeaderNameInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.headerNameInput"></a>

```csharp
public string HeaderNameInput { get; }
```

- *Type:* string

---

##### `HeaderValueInput`<sup>Optional</sup> <a name="HeaderValueInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.headerValueInput"></a>

```csharp
public string HeaderValueInput { get; }
```

- *Type:* string

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.headerName"></a>

```csharp
public string HeaderName { get; }
```

- *Type:* string

---

##### `HeaderValue`<sup>Required</sup> <a name="HeaderValue" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.headerValue"></a>

```csharp
public string HeaderValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LogsCustomDestinationHttpDestinationList <a name="LogsCustomDestinationHttpDestinationList" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new LogsCustomDestinationHttpDestinationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.get"></a>

```csharp
private LogsCustomDestinationHttpDestinationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LogsCustomDestinationHttpDestinationOutputReference <a name="LogsCustomDestinationHttpDestinationOutputReference" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new LogsCustomDestinationHttpDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.putBasicAuth">PutBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.putCustomHeaderAuth">PutCustomHeaderAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.resetBasicAuth">ResetBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.resetCustomHeaderAuth">ResetCustomHeaderAuth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBasicAuth` <a name="PutBasicAuth" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.putBasicAuth"></a>

```csharp
private void PutBasicAuth(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.putBasicAuth.parameter.value"></a>

- *Type:* object

---

##### `PutCustomHeaderAuth` <a name="PutCustomHeaderAuth" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.putCustomHeaderAuth"></a>

```csharp
private void PutCustomHeaderAuth(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.putCustomHeaderAuth.parameter.value"></a>

- *Type:* object

---

##### `ResetBasicAuth` <a name="ResetBasicAuth" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.resetBasicAuth"></a>

```csharp
private void ResetBasicAuth()
```

##### `ResetCustomHeaderAuth` <a name="ResetCustomHeaderAuth" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.resetCustomHeaderAuth"></a>

```csharp
private void ResetCustomHeaderAuth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.basicAuth">BasicAuth</a></code> | <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList">LogsCustomDestinationHttpDestinationBasicAuthList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.customHeaderAuth">CustomHeaderAuth</a></code> | <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList">LogsCustomDestinationHttpDestinationCustomHeaderAuthList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.basicAuthInput">BasicAuthInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.customHeaderAuthInput">CustomHeaderAuthInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.endpointInput">EndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BasicAuth`<sup>Required</sup> <a name="BasicAuth" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.basicAuth"></a>

```csharp
public LogsCustomDestinationHttpDestinationBasicAuthList BasicAuth { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList">LogsCustomDestinationHttpDestinationBasicAuthList</a>

---

##### `CustomHeaderAuth`<sup>Required</sup> <a name="CustomHeaderAuth" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.customHeaderAuth"></a>

```csharp
public LogsCustomDestinationHttpDestinationCustomHeaderAuthList CustomHeaderAuth { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList">LogsCustomDestinationHttpDestinationCustomHeaderAuthList</a>

---

##### `BasicAuthInput`<sup>Optional</sup> <a name="BasicAuthInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.basicAuthInput"></a>

```csharp
public object BasicAuthInput { get; }
```

- *Type:* object

---

##### `CustomHeaderAuthInput`<sup>Optional</sup> <a name="CustomHeaderAuthInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.customHeaderAuthInput"></a>

```csharp
public object CustomHeaderAuthInput { get; }
```

- *Type:* object

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.endpointInput"></a>

```csharp
public string EndpointInput { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LogsCustomDestinationSplunkDestinationList <a name="LogsCustomDestinationSplunkDestinationList" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new LogsCustomDestinationSplunkDestinationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.get"></a>

```csharp
private LogsCustomDestinationSplunkDestinationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LogsCustomDestinationSplunkDestinationOutputReference <a name="LogsCustomDestinationSplunkDestinationOutputReference" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new LogsCustomDestinationSplunkDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.accessTokenInput">AccessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.endpointInput">EndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.accessToken">AccessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessTokenInput`<sup>Optional</sup> <a name="AccessTokenInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.accessTokenInput"></a>

```csharp
public string AccessTokenInput { get; }
```

- *Type:* string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.endpointInput"></a>

```csharp
public string EndpointInput { get; }
```

- *Type:* string

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.accessToken"></a>

```csharp
public string AccessToken { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



