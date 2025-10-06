# `appBuilderApp` Submodule <a name="`appBuilderApp` Submodule" id="@cdktf/provider-datadog.appBuilderApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppBuilderApp <a name="AppBuilderApp" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/app_builder_app datadog_app_builder_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new AppBuilderApp(Construct Scope, string Id, AppBuilderAppConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig">AppBuilderAppConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig">AppBuilderAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.resetActionQueryNamesToConnectionIds">ResetActionQueryNamesToConnectionIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.resetPublished">ResetPublished</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.resetRootInstanceName">ResetRootInstanceName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetActionQueryNamesToConnectionIds` <a name="ResetActionQueryNamesToConnectionIds" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.resetActionQueryNamesToConnectionIds"></a>

```csharp
private void ResetActionQueryNamesToConnectionIds()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPublished` <a name="ResetPublished" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.resetPublished"></a>

```csharp
private void ResetPublished()
```

##### `ResetRootInstanceName` <a name="ResetRootInstanceName" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.resetRootInstanceName"></a>

```csharp
private void ResetRootInstanceName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AppBuilderApp resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

AppBuilderApp.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

AppBuilderApp.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

AppBuilderApp.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

AppBuilderApp.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AppBuilderApp resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppBuilderApp to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppBuilderApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/app_builder_app#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AppBuilderApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.actionQueryNamesToConnectionIdsInput">ActionQueryNamesToConnectionIdsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.appJsonInput">AppJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.publishedInput">PublishedInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.rootInstanceNameInput">RootInstanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.actionQueryNamesToConnectionIds">ActionQueryNamesToConnectionIds</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.appJson">AppJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.published">Published</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.rootInstanceName">RootInstanceName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ActionQueryNamesToConnectionIdsInput`<sup>Optional</sup> <a name="ActionQueryNamesToConnectionIdsInput" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.actionQueryNamesToConnectionIdsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ActionQueryNamesToConnectionIdsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AppJsonInput`<sup>Optional</sup> <a name="AppJsonInput" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.appJsonInput"></a>

```csharp
public string AppJsonInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PublishedInput`<sup>Optional</sup> <a name="PublishedInput" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.publishedInput"></a>

```csharp
public bool|IResolvable PublishedInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `RootInstanceNameInput`<sup>Optional</sup> <a name="RootInstanceNameInput" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.rootInstanceNameInput"></a>

```csharp
public string RootInstanceNameInput { get; }
```

- *Type:* string

---

##### `ActionQueryNamesToConnectionIds`<sup>Required</sup> <a name="ActionQueryNamesToConnectionIds" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.actionQueryNamesToConnectionIds"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ActionQueryNamesToConnectionIds { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AppJson`<sup>Required</sup> <a name="AppJson" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.appJson"></a>

```csharp
public string AppJson { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Published`<sup>Required</sup> <a name="Published" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.published"></a>

```csharp
public bool|IResolvable Published { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `RootInstanceName`<sup>Required</sup> <a name="RootInstanceName" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.rootInstanceName"></a>

```csharp
public string RootInstanceName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppBuilderAppConfig <a name="AppBuilderAppConfig" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new AppBuilderAppConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AppJson,
    System.Collections.Generic.IDictionary<string, string> ActionQueryNamesToConnectionIds = null,
    string Description = null,
    string Name = null,
    bool|IResolvable Published = null,
    string RootInstanceName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.appJson">AppJson</a></code> | <code>string</code> | The JSON representation of the App. String length must be at least 1. |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.actionQueryNamesToConnectionIds">ActionQueryNamesToConnectionIds</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | If specified, this will override the Action Connection IDs for the specified Action Query Names in the App JSON. |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.description">Description</a></code> | <code>string</code> | If specified, this will override the human-readable description of the App in the App JSON. |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.name">Name</a></code> | <code>string</code> | If specified, this will override the name of the App in the App JSON. |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.published">Published</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Set the app to published or unpublished. |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.rootInstanceName">RootInstanceName</a></code> | <code>string</code> | The name of the root component of the app. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AppJson`<sup>Required</sup> <a name="AppJson" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.appJson"></a>

```csharp
public string AppJson { get; set; }
```

- *Type:* string

The JSON representation of the App. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/app_builder_app#app_json AppBuilderApp#app_json}

---

##### `ActionQueryNamesToConnectionIds`<sup>Optional</sup> <a name="ActionQueryNamesToConnectionIds" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.actionQueryNamesToConnectionIds"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ActionQueryNamesToConnectionIds { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

If specified, this will override the Action Connection IDs for the specified Action Query Names in the App JSON.

Otherwise, a map of the App's Action Query Names to Action Connection IDs will be returned in output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/app_builder_app#action_query_names_to_connection_ids AppBuilderApp#action_query_names_to_connection_ids}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

If specified, this will override the human-readable description of the App in the App JSON.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/app_builder_app#description AppBuilderApp#description}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

If specified, this will override the name of the App in the App JSON.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/app_builder_app#name AppBuilderApp#name}

---

##### `Published`<sup>Optional</sup> <a name="Published" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.published"></a>

```csharp
public bool|IResolvable Published { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Set the app to published or unpublished.

Published apps are available to other users. To ensure the app is accessible to the correct users, you also need to set a [Restriction Policy](https://docs.datadoghq.com/api/latest/restriction-policies/) on the app if a policy does not yet exist. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/app_builder_app#published AppBuilderApp#published}

---

##### `RootInstanceName`<sup>Optional</sup> <a name="RootInstanceName" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.rootInstanceName"></a>

```csharp
public string RootInstanceName { get; set; }
```

- *Type:* string

The name of the root component of the app.

This must be a grid component that contains all other components. If specified, this will override the root instance name of the App in the App JSON. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/app_builder_app#root_instance_name AppBuilderApp#root_instance_name}

---



