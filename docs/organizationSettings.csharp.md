# `organizationSettings` Submodule <a name="`organizationSettings` Submodule" id="@cdktf/provider-datadog.organizationSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationSettings <a name="OrganizationSettings" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.38.0/docs/resources/organization_settings datadog_organization_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new OrganizationSettings(Construct Scope, string Id, OrganizationSettingsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig">OrganizationSettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig">OrganizationSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.resetSettings">ResetSettings</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSettings` <a name="PutSettings" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.putSettings"></a>

```csharp
private void PutSettings(OrganizationSettingsSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings">OrganizationSettingsSettings</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.resetSettings"></a>

```csharp
private void ResetSettings()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OrganizationSettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

OrganizationSettings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

OrganizationSettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

OrganizationSettings.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

OrganizationSettings.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OrganizationSettings resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OrganizationSettings to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OrganizationSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.38.0/docs/resources/organization_settings#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OrganizationSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.publicId">PublicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.settings">Settings</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference">OrganizationSettingsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.settingsInput">SettingsInput</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings">OrganizationSettingsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `PublicId`<sup>Required</sup> <a name="PublicId" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.publicId"></a>

```csharp
public string PublicId { get; }
```

- *Type:* string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.settings"></a>

```csharp
public OrganizationSettingsSettingsOutputReference Settings { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference">OrganizationSettingsSettingsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.settingsInput"></a>

```csharp
public OrganizationSettingsSettings SettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings">OrganizationSettingsSettings</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationSettingsConfig <a name="OrganizationSettingsConfig" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new OrganizationSettingsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null,
    string Name = null,
    OrganizationSettingsSettings Settings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.38.0/docs/resources/organization_settings#id OrganizationSettings#id}. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.name">Name</a></code> | <code>string</code> | Name for Organization. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.settings">Settings</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings">OrganizationSettingsSettings</a></code> | settings block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.38.0/docs/resources/organization_settings#id OrganizationSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name for Organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.38.0/docs/resources/organization_settings#name OrganizationSettings#name}

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.settings"></a>

```csharp
public OrganizationSettingsSettings Settings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings">OrganizationSettingsSettings</a>

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.38.0/docs/resources/organization_settings#settings OrganizationSettings#settings}

---

### OrganizationSettingsSettings <a name="OrganizationSettingsSettings" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new OrganizationSettingsSettings {
    OrganizationSettingsSettingsSaml Saml,
    OrganizationSettingsSettingsSamlAutocreateUsersDomains SamlAutocreateUsersDomains,
    OrganizationSettingsSettingsSamlIdpInitiatedLogin SamlIdpInitiatedLogin,
    OrganizationSettingsSettingsSamlStrictMode SamlStrictMode,
    object PrivateWidgetShare = null,
    string SamlAutocreateAccessRole = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.saml">Saml</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSaml">OrganizationSettingsSettingsSaml</a></code> | saml block. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.samlAutocreateUsersDomains">SamlAutocreateUsersDomains</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains">OrganizationSettingsSettingsSamlAutocreateUsersDomains</a></code> | saml_autocreate_users_domains block. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.samlIdpInitiatedLogin">SamlIdpInitiatedLogin</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLogin">OrganizationSettingsSettingsSamlIdpInitiatedLogin</a></code> | saml_idp_initiated_login block. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.samlStrictMode">SamlStrictMode</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictMode">OrganizationSettingsSettingsSamlStrictMode</a></code> | saml_strict_mode block. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.privateWidgetShare">PrivateWidgetShare</a></code> | <code>object</code> | Whether or not the organization users can share widgets outside of Datadog. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.samlAutocreateAccessRole">SamlAutocreateAccessRole</a></code> | <code>string</code> | The access role of the user. |

---

##### `Saml`<sup>Required</sup> <a name="Saml" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.saml"></a>

```csharp
public OrganizationSettingsSettingsSaml Saml { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSaml">OrganizationSettingsSettingsSaml</a>

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.38.0/docs/resources/organization_settings#saml OrganizationSettings#saml}

---

##### `SamlAutocreateUsersDomains`<sup>Required</sup> <a name="SamlAutocreateUsersDomains" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.samlAutocreateUsersDomains"></a>

```csharp
public OrganizationSettingsSettingsSamlAutocreateUsersDomains SamlAutocreateUsersDomains { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains">OrganizationSettingsSettingsSamlAutocreateUsersDomains</a>

saml_autocreate_users_domains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.38.0/docs/resources/organization_settings#saml_autocreate_users_domains OrganizationSettings#saml_autocreate_users_domains}

---

##### `SamlIdpInitiatedLogin`<sup>Required</sup> <a name="SamlIdpInitiatedLogin" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.samlIdpInitiatedLogin"></a>

```csharp
public OrganizationSettingsSettingsSamlIdpInitiatedLogin SamlIdpInitiatedLogin { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLogin">OrganizationSettingsSettingsSamlIdpInitiatedLogin</a>

saml_idp_initiated_login block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.38.0/docs/resources/organization_settings#saml_idp_initiated_login OrganizationSettings#saml_idp_initiated_login}

---

##### `SamlStrictMode`<sup>Required</sup> <a name="SamlStrictMode" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.samlStrictMode"></a>

```csharp
public OrganizationSettingsSettingsSamlStrictMode SamlStrictMode { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictMode">OrganizationSettingsSettingsSamlStrictMode</a>

saml_strict_mode block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.38.0/docs/resources/organization_settings#saml_strict_mode OrganizationSettings#saml_strict_mode}

---

##### `PrivateWidgetShare`<sup>Optional</sup> <a name="PrivateWidgetShare" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.privateWidgetShare"></a>

```csharp
public object PrivateWidgetShare { get; set; }
```

- *Type:* object

Whether or not the organization users can share widgets outside of Datadog. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.38.0/docs/resources/organization_settings#private_widget_share OrganizationSettings#private_widget_share}

---

##### `SamlAutocreateAccessRole`<sup>Optional</sup> <a name="SamlAutocreateAccessRole" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.samlAutocreateAccessRole"></a>

```csharp
public string SamlAutocreateAccessRole { get; set; }
```

- *Type:* string

The access role of the user.

Options are `st` (standard user), `adm` (admin user), or `ro` (read-only user). Allowed enum values: `st`, `adm` , `ro`, `ERROR` Defaults to `"st"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.38.0/docs/resources/organization_settings#saml_autocreate_access_role OrganizationSettings#saml_autocreate_access_role}

---

### OrganizationSettingsSettingsSaml <a name="OrganizationSettingsSettingsSaml" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSaml.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new OrganizationSettingsSettingsSaml {
    object Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSaml.property.enabled">Enabled</a></code> | <code>object</code> | Whether or not SAML is enabled for this organization. Defaults to `false`. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSaml.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether or not SAML is enabled for this organization. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.38.0/docs/resources/organization_settings#enabled OrganizationSettings#enabled}

---

### OrganizationSettingsSettingsSamlAutocreateUsersDomains <a name="OrganizationSettingsSettingsSamlAutocreateUsersDomains" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new OrganizationSettingsSettingsSamlAutocreateUsersDomains {
    string[] Domains = null,
    object Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains.property.domains">Domains</a></code> | <code>string[]</code> | List of domains where the SAML automated user creation is enabled. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains.property.enabled">Enabled</a></code> | <code>object</code> | Whether or not the automated user creation based on SAML domain is enabled. Defaults to `false`. |

---

##### `Domains`<sup>Optional</sup> <a name="Domains" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains.property.domains"></a>

```csharp
public string[] Domains { get; set; }
```

- *Type:* string[]

List of domains where the SAML automated user creation is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.38.0/docs/resources/organization_settings#domains OrganizationSettings#domains}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether or not the automated user creation based on SAML domain is enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.38.0/docs/resources/organization_settings#enabled OrganizationSettings#enabled}

---

### OrganizationSettingsSettingsSamlIdpInitiatedLogin <a name="OrganizationSettingsSettingsSamlIdpInitiatedLogin" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLogin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLogin.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new OrganizationSettingsSettingsSamlIdpInitiatedLogin {
    object Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLogin.property.enabled">Enabled</a></code> | <code>object</code> | Whether or not a SAML identity provider metadata file was provided to the Datadog organization. Defaults to `false`. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLogin.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether or not a SAML identity provider metadata file was provided to the Datadog organization. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.38.0/docs/resources/organization_settings#enabled OrganizationSettings#enabled}

---

### OrganizationSettingsSettingsSamlStrictMode <a name="OrganizationSettingsSettingsSamlStrictMode" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictMode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictMode.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new OrganizationSettingsSettingsSamlStrictMode {
    object Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictMode.property.enabled">Enabled</a></code> | <code>object</code> | Whether or not the SAML strict mode is enabled. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictMode.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether or not the SAML strict mode is enabled.

If true, all users must log in with SAML. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.38.0/docs/resources/organization_settings#enabled OrganizationSettings#enabled}

---

## Classes <a name="Classes" id="Classes"></a>

### OrganizationSettingsSettingsOutputReference <a name="OrganizationSettingsSettingsOutputReference" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new OrganizationSettingsSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSaml">PutSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSamlAutocreateUsersDomains">PutSamlAutocreateUsersDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSamlIdpInitiatedLogin">PutSamlIdpInitiatedLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSamlStrictMode">PutSamlStrictMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.resetPrivateWidgetShare">ResetPrivateWidgetShare</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.resetSamlAutocreateAccessRole">ResetSamlAutocreateAccessRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSaml` <a name="PutSaml" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSaml"></a>

```csharp
private void PutSaml(OrganizationSettingsSettingsSaml Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSaml.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSaml">OrganizationSettingsSettingsSaml</a>

---

##### `PutSamlAutocreateUsersDomains` <a name="PutSamlAutocreateUsersDomains" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSamlAutocreateUsersDomains"></a>

```csharp
private void PutSamlAutocreateUsersDomains(OrganizationSettingsSettingsSamlAutocreateUsersDomains Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSamlAutocreateUsersDomains.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains">OrganizationSettingsSettingsSamlAutocreateUsersDomains</a>

---

##### `PutSamlIdpInitiatedLogin` <a name="PutSamlIdpInitiatedLogin" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSamlIdpInitiatedLogin"></a>

```csharp
private void PutSamlIdpInitiatedLogin(OrganizationSettingsSettingsSamlIdpInitiatedLogin Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSamlIdpInitiatedLogin.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLogin">OrganizationSettingsSettingsSamlIdpInitiatedLogin</a>

---

##### `PutSamlStrictMode` <a name="PutSamlStrictMode" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSamlStrictMode"></a>

```csharp
private void PutSamlStrictMode(OrganizationSettingsSettingsSamlStrictMode Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSamlStrictMode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictMode">OrganizationSettingsSettingsSamlStrictMode</a>

---

##### `ResetPrivateWidgetShare` <a name="ResetPrivateWidgetShare" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.resetPrivateWidgetShare"></a>

```csharp
private void ResetPrivateWidgetShare()
```

##### `ResetSamlAutocreateAccessRole` <a name="ResetSamlAutocreateAccessRole" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.resetSamlAutocreateAccessRole"></a>

```csharp
private void ResetSamlAutocreateAccessRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.saml">Saml</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference">OrganizationSettingsSettingsSamlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlAutocreateUsersDomains">SamlAutocreateUsersDomains</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference">OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlCanBeEnabled">SamlCanBeEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlIdpEndpoint">SamlIdpEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlIdpInitiatedLogin">SamlIdpInitiatedLogin</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference">OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlIdpMetadataUploaded">SamlIdpMetadataUploaded</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlLoginUrl">SamlLoginUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlStrictMode">SamlStrictMode</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference">OrganizationSettingsSettingsSamlStrictModeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.privateWidgetShareInput">PrivateWidgetShareInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlAutocreateAccessRoleInput">SamlAutocreateAccessRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlAutocreateUsersDomainsInput">SamlAutocreateUsersDomainsInput</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains">OrganizationSettingsSettingsSamlAutocreateUsersDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlIdpInitiatedLoginInput">SamlIdpInitiatedLoginInput</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLogin">OrganizationSettingsSettingsSamlIdpInitiatedLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlInput">SamlInput</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSaml">OrganizationSettingsSettingsSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlStrictModeInput">SamlStrictModeInput</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictMode">OrganizationSettingsSettingsSamlStrictMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.privateWidgetShare">PrivateWidgetShare</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlAutocreateAccessRole">SamlAutocreateAccessRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings">OrganizationSettingsSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Saml`<sup>Required</sup> <a name="Saml" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.saml"></a>

```csharp
public OrganizationSettingsSettingsSamlOutputReference Saml { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference">OrganizationSettingsSettingsSamlOutputReference</a>

---

##### `SamlAutocreateUsersDomains`<sup>Required</sup> <a name="SamlAutocreateUsersDomains" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlAutocreateUsersDomains"></a>

```csharp
public OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference SamlAutocreateUsersDomains { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference">OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference</a>

---

##### `SamlCanBeEnabled`<sup>Required</sup> <a name="SamlCanBeEnabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlCanBeEnabled"></a>

```csharp
public IResolvable SamlCanBeEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SamlIdpEndpoint`<sup>Required</sup> <a name="SamlIdpEndpoint" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlIdpEndpoint"></a>

```csharp
public string SamlIdpEndpoint { get; }
```

- *Type:* string

---

##### `SamlIdpInitiatedLogin`<sup>Required</sup> <a name="SamlIdpInitiatedLogin" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlIdpInitiatedLogin"></a>

```csharp
public OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference SamlIdpInitiatedLogin { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference">OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference</a>

---

##### `SamlIdpMetadataUploaded`<sup>Required</sup> <a name="SamlIdpMetadataUploaded" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlIdpMetadataUploaded"></a>

```csharp
public IResolvable SamlIdpMetadataUploaded { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SamlLoginUrl`<sup>Required</sup> <a name="SamlLoginUrl" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlLoginUrl"></a>

```csharp
public string SamlLoginUrl { get; }
```

- *Type:* string

---

##### `SamlStrictMode`<sup>Required</sup> <a name="SamlStrictMode" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlStrictMode"></a>

```csharp
public OrganizationSettingsSettingsSamlStrictModeOutputReference SamlStrictMode { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference">OrganizationSettingsSettingsSamlStrictModeOutputReference</a>

---

##### `PrivateWidgetShareInput`<sup>Optional</sup> <a name="PrivateWidgetShareInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.privateWidgetShareInput"></a>

```csharp
public object PrivateWidgetShareInput { get; }
```

- *Type:* object

---

##### `SamlAutocreateAccessRoleInput`<sup>Optional</sup> <a name="SamlAutocreateAccessRoleInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlAutocreateAccessRoleInput"></a>

```csharp
public string SamlAutocreateAccessRoleInput { get; }
```

- *Type:* string

---

##### `SamlAutocreateUsersDomainsInput`<sup>Optional</sup> <a name="SamlAutocreateUsersDomainsInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlAutocreateUsersDomainsInput"></a>

```csharp
public OrganizationSettingsSettingsSamlAutocreateUsersDomains SamlAutocreateUsersDomainsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains">OrganizationSettingsSettingsSamlAutocreateUsersDomains</a>

---

##### `SamlIdpInitiatedLoginInput`<sup>Optional</sup> <a name="SamlIdpInitiatedLoginInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlIdpInitiatedLoginInput"></a>

```csharp
public OrganizationSettingsSettingsSamlIdpInitiatedLogin SamlIdpInitiatedLoginInput { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLogin">OrganizationSettingsSettingsSamlIdpInitiatedLogin</a>

---

##### `SamlInput`<sup>Optional</sup> <a name="SamlInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlInput"></a>

```csharp
public OrganizationSettingsSettingsSaml SamlInput { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSaml">OrganizationSettingsSettingsSaml</a>

---

##### `SamlStrictModeInput`<sup>Optional</sup> <a name="SamlStrictModeInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlStrictModeInput"></a>

```csharp
public OrganizationSettingsSettingsSamlStrictMode SamlStrictModeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictMode">OrganizationSettingsSettingsSamlStrictMode</a>

---

##### `PrivateWidgetShare`<sup>Required</sup> <a name="PrivateWidgetShare" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.privateWidgetShare"></a>

```csharp
public object PrivateWidgetShare { get; }
```

- *Type:* object

---

##### `SamlAutocreateAccessRole`<sup>Required</sup> <a name="SamlAutocreateAccessRole" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlAutocreateAccessRole"></a>

```csharp
public string SamlAutocreateAccessRole { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.internalValue"></a>

```csharp
public OrganizationSettingsSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings">OrganizationSettingsSettings</a>

---


### OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference <a name="OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.resetDomains">ResetDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDomains` <a name="ResetDomains" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.resetDomains"></a>

```csharp
private void ResetDomains()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.domainsInput">DomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.domains">Domains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains">OrganizationSettingsSettingsSamlAutocreateUsersDomains</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainsInput`<sup>Optional</sup> <a name="DomainsInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.domainsInput"></a>

```csharp
public string[] DomainsInput { get; }
```

- *Type:* string[]

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.domains"></a>

```csharp
public string[] Domains { get; }
```

- *Type:* string[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.internalValue"></a>

```csharp
public OrganizationSettingsSettingsSamlAutocreateUsersDomains InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains">OrganizationSettingsSettingsSamlAutocreateUsersDomains</a>

---


### OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference <a name="OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLogin">OrganizationSettingsSettingsSamlIdpInitiatedLogin</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.internalValue"></a>

```csharp
public OrganizationSettingsSettingsSamlIdpInitiatedLogin InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLogin">OrganizationSettingsSettingsSamlIdpInitiatedLogin</a>

---


### OrganizationSettingsSettingsSamlOutputReference <a name="OrganizationSettingsSettingsSamlOutputReference" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new OrganizationSettingsSettingsSamlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSaml">OrganizationSettingsSettingsSaml</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.property.internalValue"></a>

```csharp
public OrganizationSettingsSettingsSaml InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSaml">OrganizationSettingsSettingsSaml</a>

---


### OrganizationSettingsSettingsSamlStrictModeOutputReference <a name="OrganizationSettingsSettingsSamlStrictModeOutputReference" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new OrganizationSettingsSettingsSamlStrictModeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictMode">OrganizationSettingsSettingsSamlStrictMode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.property.internalValue"></a>

```csharp
public OrganizationSettingsSettingsSamlStrictMode InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictMode">OrganizationSettingsSettingsSamlStrictMode</a>

---



