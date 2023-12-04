# `integrationGcpSts` Submodule <a name="`integrationGcpSts` Submodule" id="@cdktf/provider-datadog.integrationGcpSts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationGcpSts <a name="IntegrationGcpSts" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/integration_gcp_sts datadog_integration_gcp_sts}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new IntegrationGcpSts(Construct Scope, string Id, IntegrationGcpStsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig">IntegrationGcpStsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig">IntegrationGcpStsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetAutomute">ResetAutomute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetHostFilters">ResetHostFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetIsCspmEnabled">ResetIsCspmEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAutomute` <a name="ResetAutomute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetAutomute"></a>

```csharp
private void ResetAutomute()
```

##### `ResetHostFilters` <a name="ResetHostFilters" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetHostFilters"></a>

```csharp
private void ResetHostFilters()
```

##### `ResetIsCspmEnabled` <a name="ResetIsCspmEnabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetIsCspmEnabled"></a>

```csharp
private void ResetIsCspmEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationGcpSts resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

IntegrationGcpSts.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

IntegrationGcpSts.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

IntegrationGcpSts.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

IntegrationGcpSts.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IntegrationGcpSts resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IntegrationGcpSts to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IntegrationGcpSts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/integration_gcp_sts#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationGcpSts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.delegateAccountEmail">DelegateAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.automuteInput">AutomuteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.clientEmailInput">ClientEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.hostFiltersInput">HostFiltersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.isCspmEnabledInput">IsCspmEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.automute">Automute</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.clientEmail">ClientEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.hostFilters">HostFilters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.isCspmEnabled">IsCspmEnabled</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DelegateAccountEmail`<sup>Required</sup> <a name="DelegateAccountEmail" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.delegateAccountEmail"></a>

```csharp
public string DelegateAccountEmail { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `AutomuteInput`<sup>Optional</sup> <a name="AutomuteInput" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.automuteInput"></a>

```csharp
public object AutomuteInput { get; }
```

- *Type:* object

---

##### `ClientEmailInput`<sup>Optional</sup> <a name="ClientEmailInput" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.clientEmailInput"></a>

```csharp
public string ClientEmailInput { get; }
```

- *Type:* string

---

##### `HostFiltersInput`<sup>Optional</sup> <a name="HostFiltersInput" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.hostFiltersInput"></a>

```csharp
public string[] HostFiltersInput { get; }
```

- *Type:* string[]

---

##### `IsCspmEnabledInput`<sup>Optional</sup> <a name="IsCspmEnabledInput" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.isCspmEnabledInput"></a>

```csharp
public object IsCspmEnabledInput { get; }
```

- *Type:* object

---

##### `Automute`<sup>Required</sup> <a name="Automute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.automute"></a>

```csharp
public object Automute { get; }
```

- *Type:* object

---

##### `ClientEmail`<sup>Required</sup> <a name="ClientEmail" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.clientEmail"></a>

```csharp
public string ClientEmail { get; }
```

- *Type:* string

---

##### `HostFilters`<sup>Required</sup> <a name="HostFilters" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.hostFilters"></a>

```csharp
public string[] HostFilters { get; }
```

- *Type:* string[]

---

##### `IsCspmEnabled`<sup>Required</sup> <a name="IsCspmEnabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.isCspmEnabled"></a>

```csharp
public object IsCspmEnabled { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationGcpStsConfig <a name="IntegrationGcpStsConfig" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new IntegrationGcpStsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClientEmail,
    object Automute = null,
    string[] HostFilters = null,
    object IsCspmEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.clientEmail">ClientEmail</a></code> | <code>string</code> | Your service account email address. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.automute">Automute</a></code> | <code>object</code> | Silence monitors for expected GCE instance shutdowns. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.hostFilters">HostFilters</a></code> | <code>string[]</code> | Your Host Filters. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.isCspmEnabled">IsCspmEnabled</a></code> | <code>object</code> | When enabled, Datadog performs configuration checks across your Google Cloud environment by continuously scanning every resource, which may incur additional charges. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClientEmail`<sup>Required</sup> <a name="ClientEmail" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.clientEmail"></a>

```csharp
public string ClientEmail { get; set; }
```

- *Type:* string

Your service account email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/integration_gcp_sts#client_email IntegrationGcpSts#client_email}

---

##### `Automute`<sup>Optional</sup> <a name="Automute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.automute"></a>

```csharp
public object Automute { get; set; }
```

- *Type:* object

Silence monitors for expected GCE instance shutdowns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/integration_gcp_sts#automute IntegrationGcpSts#automute}

---

##### `HostFilters`<sup>Optional</sup> <a name="HostFilters" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.hostFilters"></a>

```csharp
public string[] HostFilters { get; set; }
```

- *Type:* string[]

Your Host Filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/integration_gcp_sts#host_filters IntegrationGcpSts#host_filters}

---

##### `IsCspmEnabled`<sup>Optional</sup> <a name="IsCspmEnabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.isCspmEnabled"></a>

```csharp
public object IsCspmEnabled { get; set; }
```

- *Type:* object

When enabled, Datadog performs configuration checks across your Google Cloud environment by continuously scanning every resource, which may incur additional charges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/integration_gcp_sts#is_cspm_enabled IntegrationGcpSts#is_cspm_enabled}

---



