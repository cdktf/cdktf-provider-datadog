# `integrationMsTeamsTenantBasedHandle` Submodule <a name="`integrationMsTeamsTenantBasedHandle` Submodule" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationMsTeamsTenantBasedHandle <a name="IntegrationMsTeamsTenantBasedHandle" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/integration_ms_teams_tenant_based_handle datadog_integration_ms_teams_tenant_based_handle}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new IntegrationMsTeamsTenantBasedHandle(Construct Scope, string Id, IntegrationMsTeamsTenantBasedHandleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig">IntegrationMsTeamsTenantBasedHandleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig">IntegrationMsTeamsTenantBasedHandleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationMsTeamsTenantBasedHandle resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

IntegrationMsTeamsTenantBasedHandle.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

IntegrationMsTeamsTenantBasedHandle.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

IntegrationMsTeamsTenantBasedHandle.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

IntegrationMsTeamsTenantBasedHandle.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IntegrationMsTeamsTenantBasedHandle resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IntegrationMsTeamsTenantBasedHandle to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IntegrationMsTeamsTenantBasedHandle that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/integration_ms_teams_tenant_based_handle#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationMsTeamsTenantBasedHandle to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.channelNameInput">ChannelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.teamNameInput">TeamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.tenantNameInput">TenantNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.channelName">ChannelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.teamName">TeamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.tenantName">TenantName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ChannelNameInput`<sup>Optional</sup> <a name="ChannelNameInput" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.channelNameInput"></a>

```csharp
public string ChannelNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TeamNameInput`<sup>Optional</sup> <a name="TeamNameInput" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.teamNameInput"></a>

```csharp
public string TeamNameInput { get; }
```

- *Type:* string

---

##### `TenantNameInput`<sup>Optional</sup> <a name="TenantNameInput" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.tenantNameInput"></a>

```csharp
public string TenantNameInput { get; }
```

- *Type:* string

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.channelName"></a>

```csharp
public string ChannelName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TeamName`<sup>Required</sup> <a name="TeamName" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.teamName"></a>

```csharp
public string TeamName { get; }
```

- *Type:* string

---

##### `TenantName`<sup>Required</sup> <a name="TenantName" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.tenantName"></a>

```csharp
public string TenantName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationMsTeamsTenantBasedHandleConfig <a name="IntegrationMsTeamsTenantBasedHandleConfig" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new IntegrationMsTeamsTenantBasedHandleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ChannelName,
    string Name,
    string TeamName,
    string TenantName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.channelName">ChannelName</a></code> | <code>string</code> | Your channel name. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.name">Name</a></code> | <code>string</code> | Your tenant-based handle name. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.teamName">TeamName</a></code> | <code>string</code> | Your team name. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.tenantName">TenantName</a></code> | <code>string</code> | Your tenant name. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.channelName"></a>

```csharp
public string ChannelName { get; set; }
```

- *Type:* string

Your channel name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/integration_ms_teams_tenant_based_handle#channel_name IntegrationMsTeamsTenantBasedHandle#channel_name}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Your tenant-based handle name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/integration_ms_teams_tenant_based_handle#name IntegrationMsTeamsTenantBasedHandle#name}

---

##### `TeamName`<sup>Required</sup> <a name="TeamName" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.teamName"></a>

```csharp
public string TeamName { get; set; }
```

- *Type:* string

Your team name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/integration_ms_teams_tenant_based_handle#team_name IntegrationMsTeamsTenantBasedHandle#team_name}

---

##### `TenantName`<sup>Required</sup> <a name="TenantName" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.tenantName"></a>

```csharp
public string TenantName { get; set; }
```

- *Type:* string

Your tenant name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/integration_ms_teams_tenant_based_handle#tenant_name IntegrationMsTeamsTenantBasedHandle#tenant_name}

---



