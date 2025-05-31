# `integrationAwsExternalId` Submodule <a name="`integrationAwsExternalId` Submodule" id="@cdktf/provider-datadog.integrationAwsExternalId"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationAwsExternalId <a name="IntegrationAwsExternalId" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/integration_aws_external_id datadog_integration_aws_external_id}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new IntegrationAwsExternalId(Construct Scope, string Id, IntegrationAwsExternalIdConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalIdConfig">IntegrationAwsExternalIdConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalIdConfig">IntegrationAwsExternalIdConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationAwsExternalId resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

IntegrationAwsExternalId.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

IntegrationAwsExternalId.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

IntegrationAwsExternalId.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

IntegrationAwsExternalId.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IntegrationAwsExternalId resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IntegrationAwsExternalId to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IntegrationAwsExternalId that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/integration_aws_external_id#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationAwsExternalId to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalId.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationAwsExternalIdConfig <a name="IntegrationAwsExternalIdConfig" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalIdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalIdConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new IntegrationAwsExternalIdConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalIdConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalIdConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalIdConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalIdConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalIdConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalIdConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalIdConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalIdConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalIdConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalIdConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalIdConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalIdConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalIdConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.integrationAwsExternalId.IntegrationAwsExternalIdConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---



