# `observabilityPipeline` Submodule <a name="`observabilityPipeline` Submodule" id="@cdktf/provider-datadog.observabilityPipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObservabilityPipeline <a name="ObservabilityPipeline" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline datadog_observability_pipeline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipeline(Construct Scope, string Id, ObservabilityPipelineConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig">ObservabilityPipelineConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig">ObservabilityPipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.resetConfig">ResetConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.putConfig"></a>

```csharp
private void PutConfig(ObservabilityPipelineConfigA Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigA">ObservabilityPipelineConfigA</a>

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.resetConfig"></a>

```csharp
private void ResetConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ObservabilityPipeline resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

ObservabilityPipeline.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

ObservabilityPipeline.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

ObservabilityPipeline.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

ObservabilityPipeline.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ObservabilityPipeline resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ObservabilityPipeline to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ObservabilityPipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ObservabilityPipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference">ObservabilityPipelineConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.configInput">ConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.config"></a>

```csharp
public ObservabilityPipelineConfigAOutputReference Config { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference">ObservabilityPipelineConfigAOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.configInput"></a>

```csharp
public object ConfigInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ObservabilityPipelineConfig <a name="ObservabilityPipelineConfig" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    ObservabilityPipelineConfigA Config = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.name">Name</a></code> | <code>string</code> | The pipeline name. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigA">ObservabilityPipelineConfigA</a></code> | config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The pipeline name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.config"></a>

```csharp
public ObservabilityPipelineConfigA Config { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigA">ObservabilityPipelineConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#config ObservabilityPipeline#config}

---

### ObservabilityPipelineConfigA <a name="ObservabilityPipelineConfigA" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigA {
    ObservabilityPipelineConfigDestinations Destinations = null,
    ObservabilityPipelineConfigProcessors Processors = null,
    ObservabilityPipelineConfigSources Sources = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigA.property.destinations">Destinations</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinations">ObservabilityPipelineConfigDestinations</a></code> | destinations block. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigA.property.processors">Processors</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors">ObservabilityPipelineConfigProcessors</a></code> | processors block. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigA.property.sources">Sources</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSources">ObservabilityPipelineConfigSources</a></code> | sources block. |

---

##### `Destinations`<sup>Optional</sup> <a name="Destinations" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigA.property.destinations"></a>

```csharp
public ObservabilityPipelineConfigDestinations Destinations { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinations">ObservabilityPipelineConfigDestinations</a>

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#destinations ObservabilityPipeline#destinations}

---

##### `Processors`<sup>Optional</sup> <a name="Processors" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigA.property.processors"></a>

```csharp
public ObservabilityPipelineConfigProcessors Processors { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors">ObservabilityPipelineConfigProcessors</a>

processors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#processors ObservabilityPipeline#processors}

---

##### `Sources`<sup>Optional</sup> <a name="Sources" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigA.property.sources"></a>

```csharp
public ObservabilityPipelineConfigSources Sources { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSources">ObservabilityPipelineConfigSources</a>

sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#sources ObservabilityPipeline#sources}

---

### ObservabilityPipelineConfigDestinations <a name="ObservabilityPipelineConfigDestinations" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigDestinations {
    object DatadogLogs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinations.property.datadogLogs">DatadogLogs</a></code> | <code>object</code> | datadog_logs block. |

---

##### `DatadogLogs`<sup>Optional</sup> <a name="DatadogLogs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinations.property.datadogLogs"></a>

```csharp
public object DatadogLogs { get; set; }
```

- *Type:* object

datadog_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#datadog_logs ObservabilityPipeline#datadog_logs}

---

### ObservabilityPipelineConfigDestinationsDatadogLogs <a name="ObservabilityPipelineConfigDestinationsDatadogLogs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigDestinationsDatadogLogs {
    string Id,
    string[] Inputs
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogs.property.id">Id</a></code> | <code>string</code> | The unique ID of the destination. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogs.property.inputs">Inputs</a></code> | <code>string[]</code> | The inputs for the destination. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogs.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The unique ID of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogs.property.inputs"></a>

```csharp
public string[] Inputs { get; set; }
```

- *Type:* string[]

The inputs for the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}

---

### ObservabilityPipelineConfigProcessors <a name="ObservabilityPipelineConfigProcessors" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigProcessors {
    object AddFields = null,
    object Filter = null,
    object ParseJson = null,
    object Quota = null,
    object RemoveFields = null,
    object RenameFields = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors.property.addFields">AddFields</a></code> | <code>object</code> | add_fields block. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors.property.parseJson">ParseJson</a></code> | <code>object</code> | parse_json block. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors.property.quota">Quota</a></code> | <code>object</code> | quota block. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors.property.removeFields">RemoveFields</a></code> | <code>object</code> | remove_fields block. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors.property.renameFields">RenameFields</a></code> | <code>object</code> | rename_fields block. |

---

##### `AddFields`<sup>Optional</sup> <a name="AddFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors.property.addFields"></a>

```csharp
public object AddFields { get; set; }
```

- *Type:* object

add_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#add_fields ObservabilityPipeline#add_fields}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#filter ObservabilityPipeline#filter}

---

##### `ParseJson`<sup>Optional</sup> <a name="ParseJson" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors.property.parseJson"></a>

```csharp
public object ParseJson { get; set; }
```

- *Type:* object

parse_json block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#parse_json ObservabilityPipeline#parse_json}

---

##### `Quota`<sup>Optional</sup> <a name="Quota" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors.property.quota"></a>

```csharp
public object Quota { get; set; }
```

- *Type:* object

quota block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#quota ObservabilityPipeline#quota}

---

##### `RemoveFields`<sup>Optional</sup> <a name="RemoveFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors.property.removeFields"></a>

```csharp
public object RemoveFields { get; set; }
```

- *Type:* object

remove_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#remove_fields ObservabilityPipeline#remove_fields}

---

##### `RenameFields`<sup>Optional</sup> <a name="RenameFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors.property.renameFields"></a>

```csharp
public object RenameFields { get; set; }
```

- *Type:* object

rename_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#rename_fields ObservabilityPipeline#rename_fields}

---

### ObservabilityPipelineConfigProcessorsAddFields <a name="ObservabilityPipelineConfigProcessorsAddFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFields.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigProcessorsAddFields {
    string Id,
    string Include,
    string[] Inputs,
    object Field = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFields.property.id">Id</a></code> | <code>string</code> | The unique ID of the processor. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFields.property.include">Include</a></code> | <code>string</code> | A Datadog search query used to determine which logs this processor targets. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFields.property.inputs">Inputs</a></code> | <code>string[]</code> | The inputs for the processor. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFields.property.field">Field</a></code> | <code>object</code> | field block. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFields.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The unique ID of the processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFields.property.include"></a>

```csharp
public string Include { get; set; }
```

- *Type:* string

A Datadog search query used to determine which logs this processor targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFields.property.inputs"></a>

```csharp
public string[] Inputs { get; set; }
```

- *Type:* string[]

The inputs for the processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}

---

##### `Field`<sup>Optional</sup> <a name="Field" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFields.property.field"></a>

```csharp
public object Field { get; set; }
```

- *Type:* object

field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#field ObservabilityPipeline#field}

---

### ObservabilityPipelineConfigProcessorsAddFieldsField <a name="ObservabilityPipelineConfigProcessorsAddFieldsField" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsField"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsField.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigProcessorsAddFieldsField {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsField.property.name">Name</a></code> | <code>string</code> | The field name to add. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsField.property.value">Value</a></code> | <code>string</code> | The value to assign to the field. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsField.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The field name to add.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsField.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value to assign to the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#value ObservabilityPipeline#value}

---

### ObservabilityPipelineConfigProcessorsFilter <a name="ObservabilityPipelineConfigProcessorsFilter" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigProcessorsFilter {
    string Id,
    string Include,
    string[] Inputs
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilter.property.id">Id</a></code> | <code>string</code> | The unique ID of the processor. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilter.property.include">Include</a></code> | <code>string</code> | A Datadog search query used to determine which logs should pass through the filter. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilter.property.inputs">Inputs</a></code> | <code>string[]</code> | The inputs for the processor. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilter.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The unique ID of the processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilter.property.include"></a>

```csharp
public string Include { get; set; }
```

- *Type:* string

A Datadog search query used to determine which logs should pass through the filter.

Logs that match this query continue to downstream components; others are dropped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilter.property.inputs"></a>

```csharp
public string[] Inputs { get; set; }
```

- *Type:* string[]

The inputs for the processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}

---

### ObservabilityPipelineConfigProcessorsParseJson <a name="ObservabilityPipelineConfigProcessorsParseJson" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJson"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJson.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigProcessorsParseJson {
    string Field,
    string Id,
    string Include,
    string[] Inputs
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJson.property.field">Field</a></code> | <code>string</code> | The field to parse. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJson.property.id">Id</a></code> | <code>string</code> | The unique ID of the processor. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJson.property.include">Include</a></code> | <code>string</code> | A Datadog search query used to determine which logs this processor targets. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJson.property.inputs">Inputs</a></code> | <code>string[]</code> | The inputs for the processor. |

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJson.property.field"></a>

```csharp
public string Field { get; set; }
```

- *Type:* string

The field to parse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#field ObservabilityPipeline#field}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJson.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The unique ID of the processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJson.property.include"></a>

```csharp
public string Include { get; set; }
```

- *Type:* string

A Datadog search query used to determine which logs this processor targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJson.property.inputs"></a>

```csharp
public string[] Inputs { get; set; }
```

- *Type:* string[]

The inputs for the processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}

---

### ObservabilityPipelineConfigProcessorsQuota <a name="ObservabilityPipelineConfigProcessorsQuota" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigProcessorsQuota {
    object DropEvents,
    string Id,
    string Include,
    string[] Inputs,
    ObservabilityPipelineConfigProcessorsQuotaLimit Limit,
    string Name,
    object IgnoreWhenMissingPartitions = null,
    object Overrides = null,
    string[] PartitionFields = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.dropEvents">DropEvents</a></code> | <code>object</code> | Whether to drop events exceeding the limit. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.id">Id</a></code> | <code>string</code> | The unique ID of the processor. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.include">Include</a></code> | <code>string</code> | A Datadog search query used to determine which logs this processor targets. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.inputs">Inputs</a></code> | <code>string[]</code> | The inputs for the processor. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.limit">Limit</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimit">ObservabilityPipelineConfigProcessorsQuotaLimit</a></code> | limit block. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.name">Name</a></code> | <code>string</code> | The name of the quota. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.ignoreWhenMissingPartitions">IgnoreWhenMissingPartitions</a></code> | <code>object</code> | Whether to ignore when partition fields are missing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.overrides">Overrides</a></code> | <code>object</code> | overrides block. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.partitionFields">PartitionFields</a></code> | <code>string[]</code> | List of partition fields. |

---

##### `DropEvents`<sup>Required</sup> <a name="DropEvents" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.dropEvents"></a>

```csharp
public object DropEvents { get; set; }
```

- *Type:* object

Whether to drop events exceeding the limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#drop_events ObservabilityPipeline#drop_events}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The unique ID of the processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.include"></a>

```csharp
public string Include { get; set; }
```

- *Type:* string

A Datadog search query used to determine which logs this processor targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.inputs"></a>

```csharp
public string[] Inputs { get; set; }
```

- *Type:* string[]

The inputs for the processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.limit"></a>

```csharp
public ObservabilityPipelineConfigProcessorsQuotaLimit Limit { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimit">ObservabilityPipelineConfigProcessorsQuotaLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#limit ObservabilityPipeline#limit}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the quota.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}

---

##### `IgnoreWhenMissingPartitions`<sup>Optional</sup> <a name="IgnoreWhenMissingPartitions" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.ignoreWhenMissingPartitions"></a>

```csharp
public object IgnoreWhenMissingPartitions { get; set; }
```

- *Type:* object

Whether to ignore when partition fields are missing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#ignore_when_missing_partitions ObservabilityPipeline#ignore_when_missing_partitions}

---

##### `Overrides`<sup>Optional</sup> <a name="Overrides" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.overrides"></a>

```csharp
public object Overrides { get; set; }
```

- *Type:* object

overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#overrides ObservabilityPipeline#overrides}

---

##### `PartitionFields`<sup>Optional</sup> <a name="PartitionFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.partitionFields"></a>

```csharp
public string[] PartitionFields { get; set; }
```

- *Type:* string[]

List of partition fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#partition_fields ObservabilityPipeline#partition_fields}

---

### ObservabilityPipelineConfigProcessorsQuotaLimit <a name="ObservabilityPipelineConfigProcessorsQuotaLimit" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimit.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigProcessorsQuotaLimit {
    string Enforce,
    double Limit
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimit.property.enforce">Enforce</a></code> | <code>string</code> | Whether to enforce by 'bytes' or 'events'. Valid values are `bytes`, `events`. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimit.property.limit">Limit</a></code> | <code>double</code> | The daily quota limit. |

---

##### `Enforce`<sup>Required</sup> <a name="Enforce" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimit.property.enforce"></a>

```csharp
public string Enforce { get; set; }
```

- *Type:* string

Whether to enforce by 'bytes' or 'events'. Valid values are `bytes`, `events`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#enforce ObservabilityPipeline#enforce}

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimit.property.limit"></a>

```csharp
public double Limit { get; set; }
```

- *Type:* double

The daily quota limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#limit ObservabilityPipeline#limit}

---

### ObservabilityPipelineConfigProcessorsQuotaOverrides <a name="ObservabilityPipelineConfigProcessorsQuotaOverrides" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverrides.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigProcessorsQuotaOverrides {
    ObservabilityPipelineConfigProcessorsQuotaOverridesLimit Limit,
    object Field = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverrides.property.limit">Limit</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimit">ObservabilityPipelineConfigProcessorsQuotaOverridesLimit</a></code> | limit block. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverrides.property.field">Field</a></code> | <code>object</code> | field block. |

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverrides.property.limit"></a>

```csharp
public ObservabilityPipelineConfigProcessorsQuotaOverridesLimit Limit { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimit">ObservabilityPipelineConfigProcessorsQuotaOverridesLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#limit ObservabilityPipeline#limit}

---

##### `Field`<sup>Optional</sup> <a name="Field" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverrides.property.field"></a>

```csharp
public object Field { get; set; }
```

- *Type:* object

field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#field ObservabilityPipeline#field}

---

### ObservabilityPipelineConfigProcessorsQuotaOverridesField <a name="ObservabilityPipelineConfigProcessorsQuotaOverridesField" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesField"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesField.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigProcessorsQuotaOverridesField {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesField.property.name">Name</a></code> | <code>string</code> | The field name. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesField.property.value">Value</a></code> | <code>string</code> | The field value. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesField.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesField.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The field value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#value ObservabilityPipeline#value}

---

### ObservabilityPipelineConfigProcessorsQuotaOverridesLimit <a name="ObservabilityPipelineConfigProcessorsQuotaOverridesLimit" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimit.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigProcessorsQuotaOverridesLimit {
    string Enforce,
    double Limit
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimit.property.enforce">Enforce</a></code> | <code>string</code> | Whether to enforce by 'bytes' or 'events'. Valid values are `bytes`, `events`. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimit.property.limit">Limit</a></code> | <code>double</code> | The daily quota limit. |

---

##### `Enforce`<sup>Required</sup> <a name="Enforce" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimit.property.enforce"></a>

```csharp
public string Enforce { get; set; }
```

- *Type:* string

Whether to enforce by 'bytes' or 'events'. Valid values are `bytes`, `events`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#enforce ObservabilityPipeline#enforce}

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimit.property.limit"></a>

```csharp
public double Limit { get; set; }
```

- *Type:* double

The daily quota limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#limit ObservabilityPipeline#limit}

---

### ObservabilityPipelineConfigProcessorsRemoveFields <a name="ObservabilityPipelineConfigProcessorsRemoveFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFields.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigProcessorsRemoveFields {
    string[] Fields,
    string Id,
    string Include,
    string[] Inputs
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFields.property.fields">Fields</a></code> | <code>string[]</code> | List of fields to remove from the events. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFields.property.id">Id</a></code> | <code>string</code> | The unique ID of the processor. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFields.property.include">Include</a></code> | <code>string</code> | A Datadog search query used to determine which logs this processor targets. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFields.property.inputs">Inputs</a></code> | <code>string[]</code> | The inputs for the processor. |

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFields.property.fields"></a>

```csharp
public string[] Fields { get; set; }
```

- *Type:* string[]

List of fields to remove from the events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#fields ObservabilityPipeline#fields}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFields.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The unique ID of the processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFields.property.include"></a>

```csharp
public string Include { get; set; }
```

- *Type:* string

A Datadog search query used to determine which logs this processor targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFields.property.inputs"></a>

```csharp
public string[] Inputs { get; set; }
```

- *Type:* string[]

The inputs for the processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}

---

### ObservabilityPipelineConfigProcessorsRenameFields <a name="ObservabilityPipelineConfigProcessorsRenameFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFields.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigProcessorsRenameFields {
    string Id,
    string Include,
    string[] Inputs,
    object Field = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFields.property.id">Id</a></code> | <code>string</code> | The unique ID of the processor. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFields.property.include">Include</a></code> | <code>string</code> | A Datadog search query used to determine which logs this processor targets. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFields.property.inputs">Inputs</a></code> | <code>string[]</code> | he inputs for the processor. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFields.property.field">Field</a></code> | <code>object</code> | field block. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFields.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The unique ID of the processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFields.property.include"></a>

```csharp
public string Include { get; set; }
```

- *Type:* string

A Datadog search query used to determine which logs this processor targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFields.property.inputs"></a>

```csharp
public string[] Inputs { get; set; }
```

- *Type:* string[]

he inputs for the processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}

---

##### `Field`<sup>Optional</sup> <a name="Field" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFields.property.field"></a>

```csharp
public object Field { get; set; }
```

- *Type:* object

field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#field ObservabilityPipeline#field}

---

### ObservabilityPipelineConfigProcessorsRenameFieldsField <a name="ObservabilityPipelineConfigProcessorsRenameFieldsField" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsField"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsField.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigProcessorsRenameFieldsField {
    string Destination,
    object PreserveSource,
    string Source
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsField.property.destination">Destination</a></code> | <code>string</code> | Destination field name. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsField.property.preserveSource">PreserveSource</a></code> | <code>object</code> | Whether to keep the original field. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsField.property.source">Source</a></code> | <code>string</code> | Source field to rename. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsField.property.destination"></a>

```csharp
public string Destination { get; set; }
```

- *Type:* string

Destination field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#destination ObservabilityPipeline#destination}

---

##### `PreserveSource`<sup>Required</sup> <a name="PreserveSource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsField.property.preserveSource"></a>

```csharp
public object PreserveSource { get; set; }
```

- *Type:* object

Whether to keep the original field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#preserve_source ObservabilityPipeline#preserve_source}

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsField.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Source field to rename.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#source ObservabilityPipeline#source}

---

### ObservabilityPipelineConfigSources <a name="ObservabilityPipelineConfigSources" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigSources {
    object DatadogAgent = null,
    object Kafka = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSources.property.datadogAgent">DatadogAgent</a></code> | <code>object</code> | datadog_agent block. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSources.property.kafka">Kafka</a></code> | <code>object</code> | kafka block. |

---

##### `DatadogAgent`<sup>Optional</sup> <a name="DatadogAgent" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSources.property.datadogAgent"></a>

```csharp
public object DatadogAgent { get; set; }
```

- *Type:* object

datadog_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#datadog_agent ObservabilityPipeline#datadog_agent}

---

##### `Kafka`<sup>Optional</sup> <a name="Kafka" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSources.property.kafka"></a>

```csharp
public object Kafka { get; set; }
```

- *Type:* object

kafka block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#kafka ObservabilityPipeline#kafka}

---

### ObservabilityPipelineConfigSourcesDatadogAgent <a name="ObservabilityPipelineConfigSourcesDatadogAgent" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgent.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigSourcesDatadogAgent {
    string Id,
    object Tls = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgent.property.id">Id</a></code> | <code>string</code> | The unique ID of the source. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgent.property.tls">Tls</a></code> | <code>object</code> | tls block. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgent.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The unique ID of the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tls`<sup>Optional</sup> <a name="Tls" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgent.property.tls"></a>

```csharp
public object Tls { get; set; }
```

- *Type:* object

tls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}

---

### ObservabilityPipelineConfigSourcesDatadogAgentTls <a name="ObservabilityPipelineConfigSourcesDatadogAgentTls" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTls.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigSourcesDatadogAgentTls {
    string CrtFile,
    string CaFile = null,
    string KeyFile = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTls.property.crtFile">CrtFile</a></code> | <code>string</code> | Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTls.property.caFile">CaFile</a></code> | <code>string</code> | Path to the Certificate Authority (CA) file used to validate the server’s TLS certificate. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTls.property.keyFile">KeyFile</a></code> | <code>string</code> | Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication. |

---

##### `CrtFile`<sup>Required</sup> <a name="CrtFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTls.property.crtFile"></a>

```csharp
public string CrtFile { get; set; }
```

- *Type:* string

Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}

---

##### `CaFile`<sup>Optional</sup> <a name="CaFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTls.property.caFile"></a>

```csharp
public string CaFile { get; set; }
```

- *Type:* string

Path to the Certificate Authority (CA) file used to validate the server’s TLS certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}

---

##### `KeyFile`<sup>Optional</sup> <a name="KeyFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTls.property.keyFile"></a>

```csharp
public string KeyFile { get; set; }
```

- *Type:* string

Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}

---

### ObservabilityPipelineConfigSourcesKafka <a name="ObservabilityPipelineConfigSourcesKafka" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigSourcesKafka {
    string GroupId,
    string Id,
    ObservabilityPipelineConfigSourcesKafkaSasl Sasl,
    string[] Topics,
    object LibrdkafkaOption = null,
    object Tls = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka.property.groupId">GroupId</a></code> | <code>string</code> | The Kafka consumer group ID. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka.property.id">Id</a></code> | <code>string</code> | The unique ID of the source. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka.property.sasl">Sasl</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSasl">ObservabilityPipelineConfigSourcesKafkaSasl</a></code> | sasl block. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka.property.topics">Topics</a></code> | <code>string[]</code> | A list of Kafka topic names to subscribe to. The source ingests messages from each topic specified. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka.property.librdkafkaOption">LibrdkafkaOption</a></code> | <code>object</code> | librdkafka_option block. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka.property.tls">Tls</a></code> | <code>object</code> | tls block. |

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka.property.groupId"></a>

```csharp
public string GroupId { get; set; }
```

- *Type:* string

The Kafka consumer group ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#group_id ObservabilityPipeline#group_id}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The unique ID of the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Sasl`<sup>Required</sup> <a name="Sasl" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka.property.sasl"></a>

```csharp
public ObservabilityPipelineConfigSourcesKafkaSasl Sasl { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSasl">ObservabilityPipelineConfigSourcesKafkaSasl</a>

sasl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#sasl ObservabilityPipeline#sasl}

---

##### `Topics`<sup>Required</sup> <a name="Topics" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka.property.topics"></a>

```csharp
public string[] Topics { get; set; }
```

- *Type:* string[]

A list of Kafka topic names to subscribe to. The source ingests messages from each topic specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#topics ObservabilityPipeline#topics}

---

##### `LibrdkafkaOption`<sup>Optional</sup> <a name="LibrdkafkaOption" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka.property.librdkafkaOption"></a>

```csharp
public object LibrdkafkaOption { get; set; }
```

- *Type:* object

librdkafka_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#librdkafka_option ObservabilityPipeline#librdkafka_option}

---

##### `Tls`<sup>Optional</sup> <a name="Tls" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka.property.tls"></a>

```csharp
public object Tls { get; set; }
```

- *Type:* object

tls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}

---

### ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption <a name="ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption.property.name">Name</a></code> | <code>string</code> | The name of the librdkafka option. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption.property.value">Value</a></code> | <code>string</code> | The value of the librdkafka option. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the librdkafka option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the librdkafka option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#value ObservabilityPipeline#value}

---

### ObservabilityPipelineConfigSourcesKafkaSasl <a name="ObservabilityPipelineConfigSourcesKafkaSasl" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSasl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSasl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigSourcesKafkaSasl {
    string Mechanism
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSasl.property.mechanism">Mechanism</a></code> | <code>string</code> | SASL mechanism to use (e.g., PLAIN, SCRAM-SHA-256, SCRAM-SHA-512). Valid values are `PLAIN`, `SCRAM-SHA-256`, `SCRAM-SHA-512`. |

---

##### `Mechanism`<sup>Required</sup> <a name="Mechanism" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSasl.property.mechanism"></a>

```csharp
public string Mechanism { get; set; }
```

- *Type:* string

SASL mechanism to use (e.g., PLAIN, SCRAM-SHA-256, SCRAM-SHA-512). Valid values are `PLAIN`, `SCRAM-SHA-256`, `SCRAM-SHA-512`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#mechanism ObservabilityPipeline#mechanism}

---

### ObservabilityPipelineConfigSourcesKafkaTls <a name="ObservabilityPipelineConfigSourcesKafkaTls" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTls.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigSourcesKafkaTls {
    string CrtFile,
    string CaFile = null,
    string KeyFile = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTls.property.crtFile">CrtFile</a></code> | <code>string</code> | Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTls.property.caFile">CaFile</a></code> | <code>string</code> | Path to the Certificate Authority (CA) file used to validate the server’s TLS certificate. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTls.property.keyFile">KeyFile</a></code> | <code>string</code> | Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication. |

---

##### `CrtFile`<sup>Required</sup> <a name="CrtFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTls.property.crtFile"></a>

```csharp
public string CrtFile { get; set; }
```

- *Type:* string

Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}

---

##### `CaFile`<sup>Optional</sup> <a name="CaFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTls.property.caFile"></a>

```csharp
public string CaFile { get; set; }
```

- *Type:* string

Path to the Certificate Authority (CA) file used to validate the server’s TLS certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}

---

##### `KeyFile`<sup>Optional</sup> <a name="KeyFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTls.property.keyFile"></a>

```csharp
public string KeyFile { get; set; }
```

- *Type:* string

Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}

---

## Classes <a name="Classes" id="Classes"></a>

### ObservabilityPipelineConfigAOutputReference <a name="ObservabilityPipelineConfigAOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.putDestinations">PutDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.putProcessors">PutProcessors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.putSources">PutSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.resetDestinations">ResetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.resetProcessors">ResetProcessors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.resetSources">ResetSources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinations` <a name="PutDestinations" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.putDestinations"></a>

```csharp
private void PutDestinations(ObservabilityPipelineConfigDestinations Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.putDestinations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinations">ObservabilityPipelineConfigDestinations</a>

---

##### `PutProcessors` <a name="PutProcessors" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.putProcessors"></a>

```csharp
private void PutProcessors(ObservabilityPipelineConfigProcessors Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.putProcessors.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors">ObservabilityPipelineConfigProcessors</a>

---

##### `PutSources` <a name="PutSources" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.putSources"></a>

```csharp
private void PutSources(ObservabilityPipelineConfigSources Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.putSources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSources">ObservabilityPipelineConfigSources</a>

---

##### `ResetDestinations` <a name="ResetDestinations" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.resetDestinations"></a>

```csharp
private void ResetDestinations()
```

##### `ResetProcessors` <a name="ResetProcessors" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.resetProcessors"></a>

```csharp
private void ResetProcessors()
```

##### `ResetSources` <a name="ResetSources" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.resetSources"></a>

```csharp
private void ResetSources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.destinations">Destinations</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference">ObservabilityPipelineConfigDestinationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.processors">Processors</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference">ObservabilityPipelineConfigProcessorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.sources">Sources</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference">ObservabilityPipelineConfigSourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.destinationsInput">DestinationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.processorsInput">ProcessorsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.sourcesInput">SourcesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.destinations"></a>

```csharp
public ObservabilityPipelineConfigDestinationsOutputReference Destinations { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference">ObservabilityPipelineConfigDestinationsOutputReference</a>

---

##### `Processors`<sup>Required</sup> <a name="Processors" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.processors"></a>

```csharp
public ObservabilityPipelineConfigProcessorsOutputReference Processors { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference">ObservabilityPipelineConfigProcessorsOutputReference</a>

---

##### `Sources`<sup>Required</sup> <a name="Sources" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.sources"></a>

```csharp
public ObservabilityPipelineConfigSourcesOutputReference Sources { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference">ObservabilityPipelineConfigSourcesOutputReference</a>

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.destinationsInput"></a>

```csharp
public object DestinationsInput { get; }
```

- *Type:* object

---

##### `ProcessorsInput`<sup>Optional</sup> <a name="ProcessorsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.processorsInput"></a>

```csharp
public object ProcessorsInput { get; }
```

- *Type:* object

---

##### `SourcesInput`<sup>Optional</sup> <a name="SourcesInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.sourcesInput"></a>

```csharp
public object SourcesInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObservabilityPipelineConfigDestinationsDatadogLogsList <a name="ObservabilityPipelineConfigDestinationsDatadogLogsList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigDestinationsDatadogLogsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.get"></a>

```csharp
private ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference <a name="ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.property.inputsInput">InputsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.property.inputs">Inputs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InputsInput`<sup>Optional</sup> <a name="InputsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.property.inputsInput"></a>

```csharp
public string[] InputsInput { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.property.inputs"></a>

```csharp
public string[] Inputs { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObservabilityPipelineConfigDestinationsOutputReference <a name="ObservabilityPipelineConfigDestinationsOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigDestinationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.putDatadogLogs">PutDatadogLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.resetDatadogLogs">ResetDatadogLogs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatadogLogs` <a name="PutDatadogLogs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.putDatadogLogs"></a>

```csharp
private void PutDatadogLogs(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.putDatadogLogs.parameter.value"></a>

- *Type:* object

---

##### `ResetDatadogLogs` <a name="ResetDatadogLogs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.resetDatadogLogs"></a>

```csharp
private void ResetDatadogLogs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.property.datadogLogs">DatadogLogs</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList">ObservabilityPipelineConfigDestinationsDatadogLogsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.property.datadogLogsInput">DatadogLogsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatadogLogs`<sup>Required</sup> <a name="DatadogLogs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.property.datadogLogs"></a>

```csharp
public ObservabilityPipelineConfigDestinationsDatadogLogsList DatadogLogs { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList">ObservabilityPipelineConfigDestinationsDatadogLogsList</a>

---

##### `DatadogLogsInput`<sup>Optional</sup> <a name="DatadogLogsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.property.datadogLogsInput"></a>

```csharp
public object DatadogLogsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObservabilityPipelineConfigProcessorsAddFieldsFieldList <a name="ObservabilityPipelineConfigProcessorsAddFieldsFieldList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigProcessorsAddFieldsFieldList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.get"></a>

```csharp
private ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference <a name="ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObservabilityPipelineConfigProcessorsAddFieldsList <a name="ObservabilityPipelineConfigProcessorsAddFieldsList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigProcessorsAddFieldsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.get"></a>

```csharp
private ObservabilityPipelineConfigProcessorsAddFieldsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObservabilityPipelineConfigProcessorsAddFieldsOutputReference <a name="ObservabilityPipelineConfigProcessorsAddFieldsOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigProcessorsAddFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.putField">PutField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.resetField">ResetField</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutField` <a name="PutField" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.putField"></a>

```csharp
private void PutField(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.putField.parameter.value"></a>

- *Type:* object

---

##### `ResetField` <a name="ResetField" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.resetField"></a>

```csharp
private void ResetField()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.field">Field</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList">ObservabilityPipelineConfigProcessorsAddFieldsFieldList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.fieldInput">FieldInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.includeInput">IncludeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.inputsInput">InputsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.include">Include</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.inputs">Inputs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.field"></a>

```csharp
public ObservabilityPipelineConfigProcessorsAddFieldsFieldList Field { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList">ObservabilityPipelineConfigProcessorsAddFieldsFieldList</a>

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.fieldInput"></a>

```csharp
public object FieldInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.includeInput"></a>

```csharp
public string IncludeInput { get; }
```

- *Type:* string

---

##### `InputsInput`<sup>Optional</sup> <a name="InputsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.inputsInput"></a>

```csharp
public string[] InputsInput { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.include"></a>

```csharp
public string Include { get; }
```

- *Type:* string

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.inputs"></a>

```csharp
public string[] Inputs { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObservabilityPipelineConfigProcessorsFilterList <a name="ObservabilityPipelineConfigProcessorsFilterList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigProcessorsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.get"></a>

```csharp
private ObservabilityPipelineConfigProcessorsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObservabilityPipelineConfigProcessorsFilterOutputReference <a name="ObservabilityPipelineConfigProcessorsFilterOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigProcessorsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.includeInput">IncludeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.inputsInput">InputsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.include">Include</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.inputs">Inputs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.includeInput"></a>

```csharp
public string IncludeInput { get; }
```

- *Type:* string

---

##### `InputsInput`<sup>Optional</sup> <a name="InputsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.inputsInput"></a>

```csharp
public string[] InputsInput { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.include"></a>

```csharp
public string Include { get; }
```

- *Type:* string

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.inputs"></a>

```csharp
public string[] Inputs { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObservabilityPipelineConfigProcessorsOutputReference <a name="ObservabilityPipelineConfigProcessorsOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigProcessorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putAddFields">PutAddFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putParseJson">PutParseJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putQuota">PutQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putRemoveFields">PutRemoveFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putRenameFields">PutRenameFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.resetAddFields">ResetAddFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.resetParseJson">ResetParseJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.resetQuota">ResetQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.resetRemoveFields">ResetRemoveFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.resetRenameFields">ResetRenameFields</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAddFields` <a name="PutAddFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putAddFields"></a>

```csharp
private void PutAddFields(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putAddFields.parameter.value"></a>

- *Type:* object

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putFilter.parameter.value"></a>

- *Type:* object

---

##### `PutParseJson` <a name="PutParseJson" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putParseJson"></a>

```csharp
private void PutParseJson(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putParseJson.parameter.value"></a>

- *Type:* object

---

##### `PutQuota` <a name="PutQuota" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putQuota"></a>

```csharp
private void PutQuota(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putQuota.parameter.value"></a>

- *Type:* object

---

##### `PutRemoveFields` <a name="PutRemoveFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putRemoveFields"></a>

```csharp
private void PutRemoveFields(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putRemoveFields.parameter.value"></a>

- *Type:* object

---

##### `PutRenameFields` <a name="PutRenameFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putRenameFields"></a>

```csharp
private void PutRenameFields(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putRenameFields.parameter.value"></a>

- *Type:* object

---

##### `ResetAddFields` <a name="ResetAddFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.resetAddFields"></a>

```csharp
private void ResetAddFields()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetParseJson` <a name="ResetParseJson" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.resetParseJson"></a>

```csharp
private void ResetParseJson()
```

##### `ResetQuota` <a name="ResetQuota" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.resetQuota"></a>

```csharp
private void ResetQuota()
```

##### `ResetRemoveFields` <a name="ResetRemoveFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.resetRemoveFields"></a>

```csharp
private void ResetRemoveFields()
```

##### `ResetRenameFields` <a name="ResetRenameFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.resetRenameFields"></a>

```csharp
private void ResetRenameFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.addFields">AddFields</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList">ObservabilityPipelineConfigProcessorsAddFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList">ObservabilityPipelineConfigProcessorsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.parseJson">ParseJson</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList">ObservabilityPipelineConfigProcessorsParseJsonList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.quota">Quota</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList">ObservabilityPipelineConfigProcessorsQuotaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.removeFields">RemoveFields</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList">ObservabilityPipelineConfigProcessorsRemoveFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.renameFields">RenameFields</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList">ObservabilityPipelineConfigProcessorsRenameFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.addFieldsInput">AddFieldsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.parseJsonInput">ParseJsonInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.quotaInput">QuotaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.removeFieldsInput">RemoveFieldsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.renameFieldsInput">RenameFieldsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddFields`<sup>Required</sup> <a name="AddFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.addFields"></a>

```csharp
public ObservabilityPipelineConfigProcessorsAddFieldsList AddFields { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList">ObservabilityPipelineConfigProcessorsAddFieldsList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.filter"></a>

```csharp
public ObservabilityPipelineConfigProcessorsFilterList Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList">ObservabilityPipelineConfigProcessorsFilterList</a>

---

##### `ParseJson`<sup>Required</sup> <a name="ParseJson" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.parseJson"></a>

```csharp
public ObservabilityPipelineConfigProcessorsParseJsonList ParseJson { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList">ObservabilityPipelineConfigProcessorsParseJsonList</a>

---

##### `Quota`<sup>Required</sup> <a name="Quota" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.quota"></a>

```csharp
public ObservabilityPipelineConfigProcessorsQuotaList Quota { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList">ObservabilityPipelineConfigProcessorsQuotaList</a>

---

##### `RemoveFields`<sup>Required</sup> <a name="RemoveFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.removeFields"></a>

```csharp
public ObservabilityPipelineConfigProcessorsRemoveFieldsList RemoveFields { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList">ObservabilityPipelineConfigProcessorsRemoveFieldsList</a>

---

##### `RenameFields`<sup>Required</sup> <a name="RenameFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.renameFields"></a>

```csharp
public ObservabilityPipelineConfigProcessorsRenameFieldsList RenameFields { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList">ObservabilityPipelineConfigProcessorsRenameFieldsList</a>

---

##### `AddFieldsInput`<sup>Optional</sup> <a name="AddFieldsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.addFieldsInput"></a>

```csharp
public object AddFieldsInput { get; }
```

- *Type:* object

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `ParseJsonInput`<sup>Optional</sup> <a name="ParseJsonInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.parseJsonInput"></a>

```csharp
public object ParseJsonInput { get; }
```

- *Type:* object

---

##### `QuotaInput`<sup>Optional</sup> <a name="QuotaInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.quotaInput"></a>

```csharp
public object QuotaInput { get; }
```

- *Type:* object

---

##### `RemoveFieldsInput`<sup>Optional</sup> <a name="RemoveFieldsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.removeFieldsInput"></a>

```csharp
public object RemoveFieldsInput { get; }
```

- *Type:* object

---

##### `RenameFieldsInput`<sup>Optional</sup> <a name="RenameFieldsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.renameFieldsInput"></a>

```csharp
public object RenameFieldsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObservabilityPipelineConfigProcessorsParseJsonList <a name="ObservabilityPipelineConfigProcessorsParseJsonList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigProcessorsParseJsonList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.get"></a>

```csharp
private ObservabilityPipelineConfigProcessorsParseJsonOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObservabilityPipelineConfigProcessorsParseJsonOutputReference <a name="ObservabilityPipelineConfigProcessorsParseJsonOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigProcessorsParseJsonOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.fieldInput">FieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.includeInput">IncludeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.inputsInput">InputsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.field">Field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.include">Include</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.inputs">Inputs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.fieldInput"></a>

```csharp
public string FieldInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.includeInput"></a>

```csharp
public string IncludeInput { get; }
```

- *Type:* string

---

##### `InputsInput`<sup>Optional</sup> <a name="InputsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.inputsInput"></a>

```csharp
public string[] InputsInput { get; }
```

- *Type:* string[]

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.field"></a>

```csharp
public string Field { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.include"></a>

```csharp
public string Include { get; }
```

- *Type:* string

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.inputs"></a>

```csharp
public string[] Inputs { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference <a name="ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.property.enforceInput">EnforceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.property.limitInput">LimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.property.enforce">Enforce</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.property.limit">Limit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnforceInput`<sup>Optional</sup> <a name="EnforceInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.property.enforceInput"></a>

```csharp
public string EnforceInput { get; }
```

- *Type:* string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.property.limitInput"></a>

```csharp
public double LimitInput { get; }
```

- *Type:* double

---

##### `Enforce`<sup>Required</sup> <a name="Enforce" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.property.enforce"></a>

```csharp
public string Enforce { get; }
```

- *Type:* string

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.property.limit"></a>

```csharp
public double Limit { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObservabilityPipelineConfigProcessorsQuotaList <a name="ObservabilityPipelineConfigProcessorsQuotaList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigProcessorsQuotaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.get"></a>

```csharp
private ObservabilityPipelineConfigProcessorsQuotaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObservabilityPipelineConfigProcessorsQuotaOutputReference <a name="ObservabilityPipelineConfigProcessorsQuotaOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigProcessorsQuotaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.putLimit">PutLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.putOverrides">PutOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.resetIgnoreWhenMissingPartitions">ResetIgnoreWhenMissingPartitions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.resetOverrides">ResetOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.resetPartitionFields">ResetPartitionFields</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLimit` <a name="PutLimit" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.putLimit"></a>

```csharp
private void PutLimit(ObservabilityPipelineConfigProcessorsQuotaLimit Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.putLimit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimit">ObservabilityPipelineConfigProcessorsQuotaLimit</a>

---

##### `PutOverrides` <a name="PutOverrides" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.putOverrides"></a>

```csharp
private void PutOverrides(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.putOverrides.parameter.value"></a>

- *Type:* object

---

##### `ResetIgnoreWhenMissingPartitions` <a name="ResetIgnoreWhenMissingPartitions" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.resetIgnoreWhenMissingPartitions"></a>

```csharp
private void ResetIgnoreWhenMissingPartitions()
```

##### `ResetOverrides` <a name="ResetOverrides" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.resetOverrides"></a>

```csharp
private void ResetOverrides()
```

##### `ResetPartitionFields` <a name="ResetPartitionFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.resetPartitionFields"></a>

```csharp
private void ResetPartitionFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.limit">Limit</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference">ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.overrides">Overrides</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList">ObservabilityPipelineConfigProcessorsQuotaOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.dropEventsInput">DropEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.ignoreWhenMissingPartitionsInput">IgnoreWhenMissingPartitionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.includeInput">IncludeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.inputsInput">InputsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.limitInput">LimitInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.overridesInput">OverridesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.partitionFieldsInput">PartitionFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.dropEvents">DropEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.ignoreWhenMissingPartitions">IgnoreWhenMissingPartitions</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.include">Include</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.inputs">Inputs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.partitionFields">PartitionFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.limit"></a>

```csharp
public ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference Limit { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference">ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference</a>

---

##### `Overrides`<sup>Required</sup> <a name="Overrides" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.overrides"></a>

```csharp
public ObservabilityPipelineConfigProcessorsQuotaOverridesList Overrides { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList">ObservabilityPipelineConfigProcessorsQuotaOverridesList</a>

---

##### `DropEventsInput`<sup>Optional</sup> <a name="DropEventsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.dropEventsInput"></a>

```csharp
public object DropEventsInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IgnoreWhenMissingPartitionsInput`<sup>Optional</sup> <a name="IgnoreWhenMissingPartitionsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.ignoreWhenMissingPartitionsInput"></a>

```csharp
public object IgnoreWhenMissingPartitionsInput { get; }
```

- *Type:* object

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.includeInput"></a>

```csharp
public string IncludeInput { get; }
```

- *Type:* string

---

##### `InputsInput`<sup>Optional</sup> <a name="InputsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.inputsInput"></a>

```csharp
public string[] InputsInput { get; }
```

- *Type:* string[]

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.limitInput"></a>

```csharp
public object LimitInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OverridesInput`<sup>Optional</sup> <a name="OverridesInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.overridesInput"></a>

```csharp
public object OverridesInput { get; }
```

- *Type:* object

---

##### `PartitionFieldsInput`<sup>Optional</sup> <a name="PartitionFieldsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.partitionFieldsInput"></a>

```csharp
public string[] PartitionFieldsInput { get; }
```

- *Type:* string[]

---

##### `DropEvents`<sup>Required</sup> <a name="DropEvents" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.dropEvents"></a>

```csharp
public object DropEvents { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IgnoreWhenMissingPartitions`<sup>Required</sup> <a name="IgnoreWhenMissingPartitions" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.ignoreWhenMissingPartitions"></a>

```csharp
public object IgnoreWhenMissingPartitions { get; }
```

- *Type:* object

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.include"></a>

```csharp
public string Include { get; }
```

- *Type:* string

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.inputs"></a>

```csharp
public string[] Inputs { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PartitionFields`<sup>Required</sup> <a name="PartitionFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.partitionFields"></a>

```csharp
public string[] PartitionFields { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList <a name="ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.get"></a>

```csharp
private ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference <a name="ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference <a name="ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.property.enforceInput">EnforceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.property.limitInput">LimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.property.enforce">Enforce</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.property.limit">Limit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnforceInput`<sup>Optional</sup> <a name="EnforceInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.property.enforceInput"></a>

```csharp
public string EnforceInput { get; }
```

- *Type:* string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.property.limitInput"></a>

```csharp
public double LimitInput { get; }
```

- *Type:* double

---

##### `Enforce`<sup>Required</sup> <a name="Enforce" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.property.enforce"></a>

```csharp
public string Enforce { get; }
```

- *Type:* string

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.property.limit"></a>

```csharp
public double Limit { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObservabilityPipelineConfigProcessorsQuotaOverridesList <a name="ObservabilityPipelineConfigProcessorsQuotaOverridesList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigProcessorsQuotaOverridesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.get"></a>

```csharp
private ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference <a name="ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.putField">PutField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.putLimit">PutLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.resetField">ResetField</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutField` <a name="PutField" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.putField"></a>

```csharp
private void PutField(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.putField.parameter.value"></a>

- *Type:* object

---

##### `PutLimit` <a name="PutLimit" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.putLimit"></a>

```csharp
private void PutLimit(ObservabilityPipelineConfigProcessorsQuotaOverridesLimit Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.putLimit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimit">ObservabilityPipelineConfigProcessorsQuotaOverridesLimit</a>

---

##### `ResetField` <a name="ResetField" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.resetField"></a>

```csharp
private void ResetField()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.property.field">Field</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList">ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.property.limit">Limit</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference">ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.property.fieldInput">FieldInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.property.limitInput">LimitInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.property.field"></a>

```csharp
public ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList Field { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList">ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList</a>

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.property.limit"></a>

```csharp
public ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference Limit { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference">ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference</a>

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.property.fieldInput"></a>

```csharp
public object FieldInput { get; }
```

- *Type:* object

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.property.limitInput"></a>

```csharp
public object LimitInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObservabilityPipelineConfigProcessorsRemoveFieldsList <a name="ObservabilityPipelineConfigProcessorsRemoveFieldsList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigProcessorsRemoveFieldsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.get"></a>

```csharp
private ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference <a name="ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.fieldsInput">FieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.includeInput">IncludeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.inputsInput">InputsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.fields">Fields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.include">Include</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.inputs">Inputs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.fieldsInput"></a>

```csharp
public string[] FieldsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.includeInput"></a>

```csharp
public string IncludeInput { get; }
```

- *Type:* string

---

##### `InputsInput`<sup>Optional</sup> <a name="InputsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.inputsInput"></a>

```csharp
public string[] InputsInput { get; }
```

- *Type:* string[]

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.fields"></a>

```csharp
public string[] Fields { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.include"></a>

```csharp
public string Include { get; }
```

- *Type:* string

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.inputs"></a>

```csharp
public string[] Inputs { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObservabilityPipelineConfigProcessorsRenameFieldsFieldList <a name="ObservabilityPipelineConfigProcessorsRenameFieldsFieldList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigProcessorsRenameFieldsFieldList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.get"></a>

```csharp
private ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference <a name="ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.destinationInput">DestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.preserveSourceInput">PreserveSourceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.destination">Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.preserveSource">PreserveSource</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.destinationInput"></a>

```csharp
public string DestinationInput { get; }
```

- *Type:* string

---

##### `PreserveSourceInput`<sup>Optional</sup> <a name="PreserveSourceInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.preserveSourceInput"></a>

```csharp
public object PreserveSourceInput { get; }
```

- *Type:* object

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.destination"></a>

```csharp
public string Destination { get; }
```

- *Type:* string

---

##### `PreserveSource`<sup>Required</sup> <a name="PreserveSource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.preserveSource"></a>

```csharp
public object PreserveSource { get; }
```

- *Type:* object

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObservabilityPipelineConfigProcessorsRenameFieldsList <a name="ObservabilityPipelineConfigProcessorsRenameFieldsList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigProcessorsRenameFieldsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.get"></a>

```csharp
private ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference <a name="ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.putField">PutField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.resetField">ResetField</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutField` <a name="PutField" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.putField"></a>

```csharp
private void PutField(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.putField.parameter.value"></a>

- *Type:* object

---

##### `ResetField` <a name="ResetField" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.resetField"></a>

```csharp
private void ResetField()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.field">Field</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList">ObservabilityPipelineConfigProcessorsRenameFieldsFieldList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.fieldInput">FieldInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.includeInput">IncludeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.inputsInput">InputsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.include">Include</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.inputs">Inputs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.field"></a>

```csharp
public ObservabilityPipelineConfigProcessorsRenameFieldsFieldList Field { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList">ObservabilityPipelineConfigProcessorsRenameFieldsFieldList</a>

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.fieldInput"></a>

```csharp
public object FieldInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.includeInput"></a>

```csharp
public string IncludeInput { get; }
```

- *Type:* string

---

##### `InputsInput`<sup>Optional</sup> <a name="InputsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.inputsInput"></a>

```csharp
public string[] InputsInput { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.include"></a>

```csharp
public string Include { get; }
```

- *Type:* string

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.inputs"></a>

```csharp
public string[] Inputs { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObservabilityPipelineConfigSourcesDatadogAgentList <a name="ObservabilityPipelineConfigSourcesDatadogAgentList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigSourcesDatadogAgentList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.get"></a>

```csharp
private ObservabilityPipelineConfigSourcesDatadogAgentOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObservabilityPipelineConfigSourcesDatadogAgentOutputReference <a name="ObservabilityPipelineConfigSourcesDatadogAgentOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigSourcesDatadogAgentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.putTls">PutTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.resetTls">ResetTls</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTls` <a name="PutTls" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.putTls"></a>

```csharp
private void PutTls(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.putTls.parameter.value"></a>

- *Type:* object

---

##### `ResetTls` <a name="ResetTls" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.resetTls"></a>

```csharp
private void ResetTls()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.property.tls">Tls</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList">ObservabilityPipelineConfigSourcesDatadogAgentTlsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.property.tlsInput">TlsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.property.tls"></a>

```csharp
public ObservabilityPipelineConfigSourcesDatadogAgentTlsList Tls { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList">ObservabilityPipelineConfigSourcesDatadogAgentTlsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TlsInput`<sup>Optional</sup> <a name="TlsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.property.tlsInput"></a>

```csharp
public object TlsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObservabilityPipelineConfigSourcesDatadogAgentTlsList <a name="ObservabilityPipelineConfigSourcesDatadogAgentTlsList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigSourcesDatadogAgentTlsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.get"></a>

```csharp
private ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference <a name="ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.resetCaFile">ResetCaFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.resetKeyFile">ResetKeyFile</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCaFile` <a name="ResetCaFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.resetCaFile"></a>

```csharp
private void ResetCaFile()
```

##### `ResetKeyFile` <a name="ResetKeyFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.resetKeyFile"></a>

```csharp
private void ResetKeyFile()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.caFileInput">CaFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.crtFileInput">CrtFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.keyFileInput">KeyFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.caFile">CaFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.crtFile">CrtFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.keyFile">KeyFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CaFileInput`<sup>Optional</sup> <a name="CaFileInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.caFileInput"></a>

```csharp
public string CaFileInput { get; }
```

- *Type:* string

---

##### `CrtFileInput`<sup>Optional</sup> <a name="CrtFileInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.crtFileInput"></a>

```csharp
public string CrtFileInput { get; }
```

- *Type:* string

---

##### `KeyFileInput`<sup>Optional</sup> <a name="KeyFileInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.keyFileInput"></a>

```csharp
public string KeyFileInput { get; }
```

- *Type:* string

---

##### `CaFile`<sup>Required</sup> <a name="CaFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.caFile"></a>

```csharp
public string CaFile { get; }
```

- *Type:* string

---

##### `CrtFile`<sup>Required</sup> <a name="CrtFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.crtFile"></a>

```csharp
public string CrtFile { get; }
```

- *Type:* string

---

##### `KeyFile`<sup>Required</sup> <a name="KeyFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.keyFile"></a>

```csharp
public string KeyFile { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList <a name="ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.get"></a>

```csharp
private ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference <a name="ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObservabilityPipelineConfigSourcesKafkaList <a name="ObservabilityPipelineConfigSourcesKafkaList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigSourcesKafkaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.get"></a>

```csharp
private ObservabilityPipelineConfigSourcesKafkaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObservabilityPipelineConfigSourcesKafkaOutputReference <a name="ObservabilityPipelineConfigSourcesKafkaOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigSourcesKafkaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.putLibrdkafkaOption">PutLibrdkafkaOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.putSasl">PutSasl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.putTls">PutTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.resetLibrdkafkaOption">ResetLibrdkafkaOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.resetTls">ResetTls</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLibrdkafkaOption` <a name="PutLibrdkafkaOption" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.putLibrdkafkaOption"></a>

```csharp
private void PutLibrdkafkaOption(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.putLibrdkafkaOption.parameter.value"></a>

- *Type:* object

---

##### `PutSasl` <a name="PutSasl" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.putSasl"></a>

```csharp
private void PutSasl(ObservabilityPipelineConfigSourcesKafkaSasl Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.putSasl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSasl">ObservabilityPipelineConfigSourcesKafkaSasl</a>

---

##### `PutTls` <a name="PutTls" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.putTls"></a>

```csharp
private void PutTls(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.putTls.parameter.value"></a>

- *Type:* object

---

##### `ResetLibrdkafkaOption` <a name="ResetLibrdkafkaOption" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.resetLibrdkafkaOption"></a>

```csharp
private void ResetLibrdkafkaOption()
```

##### `ResetTls` <a name="ResetTls" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.resetTls"></a>

```csharp
private void ResetTls()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.librdkafkaOption">LibrdkafkaOption</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList">ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.sasl">Sasl</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference">ObservabilityPipelineConfigSourcesKafkaSaslOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.tls">Tls</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList">ObservabilityPipelineConfigSourcesKafkaTlsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.groupIdInput">GroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.librdkafkaOptionInput">LibrdkafkaOptionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.saslInput">SaslInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.tlsInput">TlsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.topicsInput">TopicsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.groupId">GroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.topics">Topics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LibrdkafkaOption`<sup>Required</sup> <a name="LibrdkafkaOption" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.librdkafkaOption"></a>

```csharp
public ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList LibrdkafkaOption { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList">ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList</a>

---

##### `Sasl`<sup>Required</sup> <a name="Sasl" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.sasl"></a>

```csharp
public ObservabilityPipelineConfigSourcesKafkaSaslOutputReference Sasl { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference">ObservabilityPipelineConfigSourcesKafkaSaslOutputReference</a>

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.tls"></a>

```csharp
public ObservabilityPipelineConfigSourcesKafkaTlsList Tls { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList">ObservabilityPipelineConfigSourcesKafkaTlsList</a>

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.groupIdInput"></a>

```csharp
public string GroupIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LibrdkafkaOptionInput`<sup>Optional</sup> <a name="LibrdkafkaOptionInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.librdkafkaOptionInput"></a>

```csharp
public object LibrdkafkaOptionInput { get; }
```

- *Type:* object

---

##### `SaslInput`<sup>Optional</sup> <a name="SaslInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.saslInput"></a>

```csharp
public object SaslInput { get; }
```

- *Type:* object

---

##### `TlsInput`<sup>Optional</sup> <a name="TlsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.tlsInput"></a>

```csharp
public object TlsInput { get; }
```

- *Type:* object

---

##### `TopicsInput`<sup>Optional</sup> <a name="TopicsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.topicsInput"></a>

```csharp
public string[] TopicsInput { get; }
```

- *Type:* string[]

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.groupId"></a>

```csharp
public string GroupId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Topics`<sup>Required</sup> <a name="Topics" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.topics"></a>

```csharp
public string[] Topics { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObservabilityPipelineConfigSourcesKafkaSaslOutputReference <a name="ObservabilityPipelineConfigSourcesKafkaSaslOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigSourcesKafkaSaslOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.property.mechanismInput">MechanismInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.property.mechanism">Mechanism</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MechanismInput`<sup>Optional</sup> <a name="MechanismInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.property.mechanismInput"></a>

```csharp
public string MechanismInput { get; }
```

- *Type:* string

---

##### `Mechanism`<sup>Required</sup> <a name="Mechanism" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.property.mechanism"></a>

```csharp
public string Mechanism { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObservabilityPipelineConfigSourcesKafkaTlsList <a name="ObservabilityPipelineConfigSourcesKafkaTlsList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigSourcesKafkaTlsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.get"></a>

```csharp
private ObservabilityPipelineConfigSourcesKafkaTlsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObservabilityPipelineConfigSourcesKafkaTlsOutputReference <a name="ObservabilityPipelineConfigSourcesKafkaTlsOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigSourcesKafkaTlsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.resetCaFile">ResetCaFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.resetKeyFile">ResetKeyFile</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCaFile` <a name="ResetCaFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.resetCaFile"></a>

```csharp
private void ResetCaFile()
```

##### `ResetKeyFile` <a name="ResetKeyFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.resetKeyFile"></a>

```csharp
private void ResetKeyFile()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.caFileInput">CaFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.crtFileInput">CrtFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.keyFileInput">KeyFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.caFile">CaFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.crtFile">CrtFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.keyFile">KeyFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CaFileInput`<sup>Optional</sup> <a name="CaFileInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.caFileInput"></a>

```csharp
public string CaFileInput { get; }
```

- *Type:* string

---

##### `CrtFileInput`<sup>Optional</sup> <a name="CrtFileInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.crtFileInput"></a>

```csharp
public string CrtFileInput { get; }
```

- *Type:* string

---

##### `KeyFileInput`<sup>Optional</sup> <a name="KeyFileInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.keyFileInput"></a>

```csharp
public string KeyFileInput { get; }
```

- *Type:* string

---

##### `CaFile`<sup>Required</sup> <a name="CaFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.caFile"></a>

```csharp
public string CaFile { get; }
```

- *Type:* string

---

##### `CrtFile`<sup>Required</sup> <a name="CrtFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.crtFile"></a>

```csharp
public string CrtFile { get; }
```

- *Type:* string

---

##### `KeyFile`<sup>Required</sup> <a name="KeyFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.keyFile"></a>

```csharp
public string KeyFile { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ObservabilityPipelineConfigSourcesOutputReference <a name="ObservabilityPipelineConfigSourcesOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ObservabilityPipelineConfigSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.putDatadogAgent">PutDatadogAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.putKafka">PutKafka</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.resetDatadogAgent">ResetDatadogAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.resetKafka">ResetKafka</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatadogAgent` <a name="PutDatadogAgent" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.putDatadogAgent"></a>

```csharp
private void PutDatadogAgent(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.putDatadogAgent.parameter.value"></a>

- *Type:* object

---

##### `PutKafka` <a name="PutKafka" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.putKafka"></a>

```csharp
private void PutKafka(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.putKafka.parameter.value"></a>

- *Type:* object

---

##### `ResetDatadogAgent` <a name="ResetDatadogAgent" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.resetDatadogAgent"></a>

```csharp
private void ResetDatadogAgent()
```

##### `ResetKafka` <a name="ResetKafka" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.resetKafka"></a>

```csharp
private void ResetKafka()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.property.datadogAgent">DatadogAgent</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList">ObservabilityPipelineConfigSourcesDatadogAgentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.property.kafka">Kafka</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList">ObservabilityPipelineConfigSourcesKafkaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.property.datadogAgentInput">DatadogAgentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.property.kafkaInput">KafkaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatadogAgent`<sup>Required</sup> <a name="DatadogAgent" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.property.datadogAgent"></a>

```csharp
public ObservabilityPipelineConfigSourcesDatadogAgentList DatadogAgent { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList">ObservabilityPipelineConfigSourcesDatadogAgentList</a>

---

##### `Kafka`<sup>Required</sup> <a name="Kafka" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.property.kafka"></a>

```csharp
public ObservabilityPipelineConfigSourcesKafkaList Kafka { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList">ObservabilityPipelineConfigSourcesKafkaList</a>

---

##### `DatadogAgentInput`<sup>Optional</sup> <a name="DatadogAgentInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.property.datadogAgentInput"></a>

```csharp
public object DatadogAgentInput { get; }
```

- *Type:* object

---

##### `KafkaInput`<sup>Optional</sup> <a name="KafkaInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.property.kafkaInput"></a>

```csharp
public object KafkaInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



