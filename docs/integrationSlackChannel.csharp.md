# `integrationSlackChannel` Submodule <a name="`integrationSlackChannel` Submodule" id="@cdktf/provider-datadog.integrationSlackChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationSlackChannel <a name="IntegrationSlackChannel" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.44.1/docs/resources/integration_slack_channel datadog_integration_slack_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new IntegrationSlackChannel(Construct Scope, string Id, IntegrationSlackChannelConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig">IntegrationSlackChannelConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig">IntegrationSlackChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.putDisplay">PutDisplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDisplay` <a name="PutDisplay" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.putDisplay"></a>

```csharp
private void PutDisplay(IntegrationSlackChannelDisplay Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.putDisplay.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay">IntegrationSlackChannelDisplay</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationSlackChannel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

IntegrationSlackChannel.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

IntegrationSlackChannel.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

IntegrationSlackChannel.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

IntegrationSlackChannel.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IntegrationSlackChannel resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IntegrationSlackChannel to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IntegrationSlackChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.44.1/docs/resources/integration_slack_channel#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationSlackChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.display">Display</a></code> | <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference">IntegrationSlackChannelDisplayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.accountNameInput">AccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.channelNameInput">ChannelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.displayInput">DisplayInput</a></code> | <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay">IntegrationSlackChannelDisplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.accountName">AccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.channelName">ChannelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Display`<sup>Required</sup> <a name="Display" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.display"></a>

```csharp
public IntegrationSlackChannelDisplayOutputReference Display { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference">IntegrationSlackChannelDisplayOutputReference</a>

---

##### `AccountNameInput`<sup>Optional</sup> <a name="AccountNameInput" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.accountNameInput"></a>

```csharp
public string AccountNameInput { get; }
```

- *Type:* string

---

##### `ChannelNameInput`<sup>Optional</sup> <a name="ChannelNameInput" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.channelNameInput"></a>

```csharp
public string ChannelNameInput { get; }
```

- *Type:* string

---

##### `DisplayInput`<sup>Optional</sup> <a name="DisplayInput" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.displayInput"></a>

```csharp
public IntegrationSlackChannelDisplay DisplayInput { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay">IntegrationSlackChannelDisplay</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.accountName"></a>

```csharp
public string AccountName { get; }
```

- *Type:* string

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.channelName"></a>

```csharp
public string ChannelName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationSlackChannelConfig <a name="IntegrationSlackChannelConfig" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new IntegrationSlackChannelConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountName,
    string ChannelName,
    IntegrationSlackChannelDisplay Display,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.accountName">AccountName</a></code> | <code>string</code> | Slack account name. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.channelName">ChannelName</a></code> | <code>string</code> | Slack channel name. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.display">Display</a></code> | <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay">IntegrationSlackChannelDisplay</a></code> | display block. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.44.1/docs/resources/integration_slack_channel#id IntegrationSlackChannel#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.accountName"></a>

```csharp
public string AccountName { get; set; }
```

- *Type:* string

Slack account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.44.1/docs/resources/integration_slack_channel#account_name IntegrationSlackChannel#account_name}

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.channelName"></a>

```csharp
public string ChannelName { get; set; }
```

- *Type:* string

Slack channel name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.44.1/docs/resources/integration_slack_channel#channel_name IntegrationSlackChannel#channel_name}

---

##### `Display`<sup>Required</sup> <a name="Display" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.display"></a>

```csharp
public IntegrationSlackChannelDisplay Display { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay">IntegrationSlackChannelDisplay</a>

display block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.44.1/docs/resources/integration_slack_channel#display IntegrationSlackChannel#display}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.44.1/docs/resources/integration_slack_channel#id IntegrationSlackChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### IntegrationSlackChannelDisplay <a name="IntegrationSlackChannelDisplay" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new IntegrationSlackChannelDisplay {
    object Message = null,
    object Notified = null,
    object Snapshot = null,
    object Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay.property.message">Message</a></code> | <code>object</code> | Show the main body of the alert event. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay.property.notified">Notified</a></code> | <code>object</code> | Show the list of. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay.property.snapshot">Snapshot</a></code> | <code>object</code> | Show the alert event's snapshot image. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay.property.tags">Tags</a></code> | <code>object</code> | Show the scopes on which the monitor alerted. Defaults to `true`. |

---

##### `Message`<sup>Optional</sup> <a name="Message" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay.property.message"></a>

```csharp
public object Message { get; set; }
```

- *Type:* object

Show the main body of the alert event. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.44.1/docs/resources/integration_slack_channel#message IntegrationSlackChannel#message}

---

##### `Notified`<sup>Optional</sup> <a name="Notified" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay.property.notified"></a>

```csharp
public object Notified { get; set; }
```

- *Type:* object

Show the list of.

---

##### `Snapshot`<sup>Optional</sup> <a name="Snapshot" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay.property.snapshot"></a>

```csharp
public object Snapshot { get; set; }
```

- *Type:* object

Show the alert event's snapshot image. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.44.1/docs/resources/integration_slack_channel#snapshot IntegrationSlackChannel#snapshot}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay.property.tags"></a>

```csharp
public object Tags { get; set; }
```

- *Type:* object

Show the scopes on which the monitor alerted. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.44.1/docs/resources/integration_slack_channel#tags IntegrationSlackChannel#tags}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationSlackChannelDisplayOutputReference <a name="IntegrationSlackChannelDisplayOutputReference" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new IntegrationSlackChannelDisplayOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resetMessage">ResetMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resetNotified">ResetNotified</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resetSnapshot">ResetSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMessage` <a name="ResetMessage" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resetMessage"></a>

```csharp
private void ResetMessage()
```

##### `ResetNotified` <a name="ResetNotified" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resetNotified"></a>

```csharp
private void ResetNotified()
```

##### `ResetSnapshot` <a name="ResetSnapshot" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resetSnapshot"></a>

```csharp
private void ResetSnapshot()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.messageInput">MessageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.notifiedInput">NotifiedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.snapshotInput">SnapshotInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.tagsInput">TagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.message">Message</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.notified">Notified</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.snapshot">Snapshot</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.tags">Tags</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay">IntegrationSlackChannelDisplay</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.messageInput"></a>

```csharp
public object MessageInput { get; }
```

- *Type:* object

---

##### `NotifiedInput`<sup>Optional</sup> <a name="NotifiedInput" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.notifiedInput"></a>

```csharp
public object NotifiedInput { get; }
```

- *Type:* object

---

##### `SnapshotInput`<sup>Optional</sup> <a name="SnapshotInput" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.snapshotInput"></a>

```csharp
public object SnapshotInput { get; }
```

- *Type:* object

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.tagsInput"></a>

```csharp
public object TagsInput { get; }
```

- *Type:* object

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.message"></a>

```csharp
public object Message { get; }
```

- *Type:* object

---

##### `Notified`<sup>Required</sup> <a name="Notified" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.notified"></a>

```csharp
public object Notified { get; }
```

- *Type:* object

---

##### `Snapshot`<sup>Required</sup> <a name="Snapshot" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.snapshot"></a>

```csharp
public object Snapshot { get; }
```

- *Type:* object

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.tags"></a>

```csharp
public object Tags { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.internalValue"></a>

```csharp
public IntegrationSlackChannelDisplay InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay">IntegrationSlackChannelDisplay</a>

---



