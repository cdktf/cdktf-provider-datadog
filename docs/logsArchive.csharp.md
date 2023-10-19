# `datadog_logs_archive`

Refer to the Terraform Registory for docs: [`datadog_logs_archive`](https://registry.terraform.io/providers/datadog/datadog/3.31.0/docs/resources/logs_archive).

# `logsArchive` Submodule <a name="`logsArchive` Submodule" id="@cdktf/provider-datadog.logsArchive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogsArchive <a name="LogsArchive" id="@cdktf/provider-datadog.logsArchive.LogsArchive"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.31.0/docs/resources/logs_archive datadog_logs_archive}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new LogsArchive(Construct Scope, string Id, LogsArchiveConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig">LogsArchiveConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig">LogsArchiveConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.putAzureArchive">PutAzureArchive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.putGcsArchive">PutGcsArchive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.putS3Archive">PutS3Archive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.resetAzureArchive">ResetAzureArchive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.resetGcsArchive">ResetGcsArchive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.resetIncludeTags">ResetIncludeTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.resetRehydrationMaxScanSizeInGb">ResetRehydrationMaxScanSizeInGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.resetRehydrationTags">ResetRehydrationTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.resetS3Archive">ResetS3Archive</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.logsArchive.LogsArchive.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.logsArchive.LogsArchive.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.logsArchive.LogsArchive.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.logsArchive.LogsArchive.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.logsArchive.LogsArchive.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-datadog.logsArchive.LogsArchive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.logsArchive.LogsArchive.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.logsArchive.LogsArchive.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.logsArchive.LogsArchive.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.logsArchive.LogsArchive.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.logsArchive.LogsArchive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.logsArchive.LogsArchive.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.logsArchive.LogsArchive.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.logsArchive.LogsArchive.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.logsArchive.LogsArchive.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.logsArchive.LogsArchive.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-datadog.logsArchive.LogsArchive.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutAzureArchive` <a name="PutAzureArchive" id="@cdktf/provider-datadog.logsArchive.LogsArchive.putAzureArchive"></a>

```csharp
private void PutAzureArchive(LogsArchiveAzureArchive Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.logsArchive.LogsArchive.putAzureArchive.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive">LogsArchiveAzureArchive</a>

---

##### `PutGcsArchive` <a name="PutGcsArchive" id="@cdktf/provider-datadog.logsArchive.LogsArchive.putGcsArchive"></a>

```csharp
private void PutGcsArchive(LogsArchiveGcsArchive Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.logsArchive.LogsArchive.putGcsArchive.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive">LogsArchiveGcsArchive</a>

---

##### `PutS3Archive` <a name="PutS3Archive" id="@cdktf/provider-datadog.logsArchive.LogsArchive.putS3Archive"></a>

```csharp
private void PutS3Archive(LogsArchiveS3Archive Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.logsArchive.LogsArchive.putS3Archive.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive">LogsArchiveS3Archive</a>

---

##### `ResetAzureArchive` <a name="ResetAzureArchive" id="@cdktf/provider-datadog.logsArchive.LogsArchive.resetAzureArchive"></a>

```csharp
private void ResetAzureArchive()
```

##### `ResetGcsArchive` <a name="ResetGcsArchive" id="@cdktf/provider-datadog.logsArchive.LogsArchive.resetGcsArchive"></a>

```csharp
private void ResetGcsArchive()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-datadog.logsArchive.LogsArchive.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIncludeTags` <a name="ResetIncludeTags" id="@cdktf/provider-datadog.logsArchive.LogsArchive.resetIncludeTags"></a>

```csharp
private void ResetIncludeTags()
```

##### `ResetRehydrationMaxScanSizeInGb` <a name="ResetRehydrationMaxScanSizeInGb" id="@cdktf/provider-datadog.logsArchive.LogsArchive.resetRehydrationMaxScanSizeInGb"></a>

```csharp
private void ResetRehydrationMaxScanSizeInGb()
```

##### `ResetRehydrationTags` <a name="ResetRehydrationTags" id="@cdktf/provider-datadog.logsArchive.LogsArchive.resetRehydrationTags"></a>

```csharp
private void ResetRehydrationTags()
```

##### `ResetS3Archive` <a name="ResetS3Archive" id="@cdktf/provider-datadog.logsArchive.LogsArchive.resetS3Archive"></a>

```csharp
private void ResetS3Archive()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LogsArchive resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.logsArchive.LogsArchive.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

LogsArchive.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.logsArchive.LogsArchive.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.logsArchive.LogsArchive.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

LogsArchive.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.logsArchive.LogsArchive.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.logsArchive.LogsArchive.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

LogsArchive.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.logsArchive.LogsArchive.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.logsArchive.LogsArchive.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

LogsArchive.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LogsArchive resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.logsArchive.LogsArchive.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-datadog.logsArchive.LogsArchive.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LogsArchive to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-datadog.logsArchive.LogsArchive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LogsArchive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.31.0/docs/resources/logs_archive#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.logsArchive.LogsArchive.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LogsArchive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.azureArchive">AzureArchive</a></code> | <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference">LogsArchiveAzureArchiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.gcsArchive">GcsArchive</a></code> | <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference">LogsArchiveGcsArchiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.s3Archive">S3Archive</a></code> | <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference">LogsArchiveS3ArchiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.azureArchiveInput">AzureArchiveInput</a></code> | <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive">LogsArchiveAzureArchive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.gcsArchiveInput">GcsArchiveInput</a></code> | <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive">LogsArchiveGcsArchive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.includeTagsInput">IncludeTagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.rehydrationMaxScanSizeInGbInput">RehydrationMaxScanSizeInGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.rehydrationTagsInput">RehydrationTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.s3ArchiveInput">S3ArchiveInput</a></code> | <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive">LogsArchiveS3Archive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.includeTags">IncludeTags</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.rehydrationMaxScanSizeInGb">RehydrationMaxScanSizeInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.rehydrationTags">RehydrationTags</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AzureArchive`<sup>Required</sup> <a name="AzureArchive" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.azureArchive"></a>

```csharp
public LogsArchiveAzureArchiveOutputReference AzureArchive { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference">LogsArchiveAzureArchiveOutputReference</a>

---

##### `GcsArchive`<sup>Required</sup> <a name="GcsArchive" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.gcsArchive"></a>

```csharp
public LogsArchiveGcsArchiveOutputReference GcsArchive { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference">LogsArchiveGcsArchiveOutputReference</a>

---

##### `S3Archive`<sup>Required</sup> <a name="S3Archive" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.s3Archive"></a>

```csharp
public LogsArchiveS3ArchiveOutputReference S3Archive { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference">LogsArchiveS3ArchiveOutputReference</a>

---

##### `AzureArchiveInput`<sup>Optional</sup> <a name="AzureArchiveInput" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.azureArchiveInput"></a>

```csharp
public LogsArchiveAzureArchive AzureArchiveInput { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive">LogsArchiveAzureArchive</a>

---

##### `GcsArchiveInput`<sup>Optional</sup> <a name="GcsArchiveInput" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.gcsArchiveInput"></a>

```csharp
public LogsArchiveGcsArchive GcsArchiveInput { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive">LogsArchiveGcsArchive</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludeTagsInput`<sup>Optional</sup> <a name="IncludeTagsInput" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.includeTagsInput"></a>

```csharp
public object IncludeTagsInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `RehydrationMaxScanSizeInGbInput`<sup>Optional</sup> <a name="RehydrationMaxScanSizeInGbInput" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.rehydrationMaxScanSizeInGbInput"></a>

```csharp
public double RehydrationMaxScanSizeInGbInput { get; }
```

- *Type:* double

---

##### `RehydrationTagsInput`<sup>Optional</sup> <a name="RehydrationTagsInput" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.rehydrationTagsInput"></a>

```csharp
public string[] RehydrationTagsInput { get; }
```

- *Type:* string[]

---

##### `S3ArchiveInput`<sup>Optional</sup> <a name="S3ArchiveInput" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.s3ArchiveInput"></a>

```csharp
public LogsArchiveS3Archive S3ArchiveInput { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive">LogsArchiveS3Archive</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IncludeTags`<sup>Required</sup> <a name="IncludeTags" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.includeTags"></a>

```csharp
public object IncludeTags { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `RehydrationMaxScanSizeInGb`<sup>Required</sup> <a name="RehydrationMaxScanSizeInGb" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.rehydrationMaxScanSizeInGb"></a>

```csharp
public double RehydrationMaxScanSizeInGb { get; }
```

- *Type:* double

---

##### `RehydrationTags`<sup>Required</sup> <a name="RehydrationTags" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.rehydrationTags"></a>

```csharp
public string[] RehydrationTags { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogsArchiveAzureArchive <a name="LogsArchiveAzureArchive" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new LogsArchiveAzureArchive {
    string ClientId,
    string Container,
    string StorageAccount,
    string TenantId,
    string Path = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive.property.clientId">ClientId</a></code> | <code>string</code> | Your client id. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive.property.container">Container</a></code> | <code>string</code> | The container where the archive is stored. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive.property.storageAccount">StorageAccount</a></code> | <code>string</code> | The associated storage account. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive.property.tenantId">TenantId</a></code> | <code>string</code> | Your tenant id. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive.property.path">Path</a></code> | <code>string</code> | The path where the archive is stored. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Your client id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.31.0/docs/resources/logs_archive#client_id LogsArchive#client_id}

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive.property.container"></a>

```csharp
public string Container { get; set; }
```

- *Type:* string

The container where the archive is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.31.0/docs/resources/logs_archive#container LogsArchive#container}

---

##### `StorageAccount`<sup>Required</sup> <a name="StorageAccount" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive.property.storageAccount"></a>

```csharp
public string StorageAccount { get; set; }
```

- *Type:* string

The associated storage account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.31.0/docs/resources/logs_archive#storage_account LogsArchive#storage_account}

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Your tenant id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.31.0/docs/resources/logs_archive#tenant_id LogsArchive#tenant_id}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The path where the archive is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.31.0/docs/resources/logs_archive#path LogsArchive#path}

---

### LogsArchiveConfig <a name="LogsArchiveConfig" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new LogsArchiveConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Query,
    LogsArchiveAzureArchive AzureArchive = null,
    LogsArchiveGcsArchive GcsArchive = null,
    string Id = null,
    object IncludeTags = null,
    double RehydrationMaxScanSizeInGb = null,
    string[] RehydrationTags = null,
    LogsArchiveS3Archive S3Archive = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.name">Name</a></code> | <code>string</code> | Your archive name. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.query">Query</a></code> | <code>string</code> | The archive query/filter. Logs matching this query are included in the archive. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.azureArchive">AzureArchive</a></code> | <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive">LogsArchiveAzureArchive</a></code> | azure_archive block. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.gcsArchive">GcsArchive</a></code> | <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive">LogsArchiveGcsArchive</a></code> | gcs_archive block. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.31.0/docs/resources/logs_archive#id LogsArchive#id}. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.includeTags">IncludeTags</a></code> | <code>object</code> | To store the tags in the archive, set the value `true`. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.rehydrationMaxScanSizeInGb">RehydrationMaxScanSizeInGb</a></code> | <code>double</code> | To limit the rehydration scan size for the archive, set a value in GB. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.rehydrationTags">RehydrationTags</a></code> | <code>string[]</code> | An array of tags to add to rehydrated logs from an archive. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.s3Archive">S3Archive</a></code> | <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive">LogsArchiveS3Archive</a></code> | s3_archive block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Your archive name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.31.0/docs/resources/logs_archive#name LogsArchive#name}

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

The archive query/filter. Logs matching this query are included in the archive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.31.0/docs/resources/logs_archive#query LogsArchive#query}

---

##### `AzureArchive`<sup>Optional</sup> <a name="AzureArchive" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.azureArchive"></a>

```csharp
public LogsArchiveAzureArchive AzureArchive { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive">LogsArchiveAzureArchive</a>

azure_archive block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.31.0/docs/resources/logs_archive#azure_archive LogsArchive#azure_archive}

---

##### `GcsArchive`<sup>Optional</sup> <a name="GcsArchive" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.gcsArchive"></a>

```csharp
public LogsArchiveGcsArchive GcsArchive { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive">LogsArchiveGcsArchive</a>

gcs_archive block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.31.0/docs/resources/logs_archive#gcs_archive LogsArchive#gcs_archive}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.31.0/docs/resources/logs_archive#id LogsArchive#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeTags`<sup>Optional</sup> <a name="IncludeTags" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.includeTags"></a>

```csharp
public object IncludeTags { get; set; }
```

- *Type:* object

To store the tags in the archive, set the value `true`.

If it is set to `false`, the tags will be dropped when the logs are sent to the archive. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.31.0/docs/resources/logs_archive#include_tags LogsArchive#include_tags}

---

##### `RehydrationMaxScanSizeInGb`<sup>Optional</sup> <a name="RehydrationMaxScanSizeInGb" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.rehydrationMaxScanSizeInGb"></a>

```csharp
public double RehydrationMaxScanSizeInGb { get; set; }
```

- *Type:* double

To limit the rehydration scan size for the archive, set a value in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.31.0/docs/resources/logs_archive#rehydration_max_scan_size_in_gb LogsArchive#rehydration_max_scan_size_in_gb}

---

##### `RehydrationTags`<sup>Optional</sup> <a name="RehydrationTags" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.rehydrationTags"></a>

```csharp
public string[] RehydrationTags { get; set; }
```

- *Type:* string[]

An array of tags to add to rehydrated logs from an archive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.31.0/docs/resources/logs_archive#rehydration_tags LogsArchive#rehydration_tags}

---

##### `S3Archive`<sup>Optional</sup> <a name="S3Archive" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.s3Archive"></a>

```csharp
public LogsArchiveS3Archive S3Archive { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive">LogsArchiveS3Archive</a>

s3_archive block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.31.0/docs/resources/logs_archive#s3_archive LogsArchive#s3_archive}

---

### LogsArchiveGcsArchive <a name="LogsArchiveGcsArchive" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new LogsArchiveGcsArchive {
    string Bucket,
    string ClientEmail,
    string ProjectId,
    string Path = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive.property.bucket">Bucket</a></code> | <code>string</code> | Name of your GCS bucket. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive.property.clientEmail">ClientEmail</a></code> | <code>string</code> | Your client email. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive.property.projectId">ProjectId</a></code> | <code>string</code> | Your project id. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive.property.path">Path</a></code> | <code>string</code> | Path where the archive is stored. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Name of your GCS bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.31.0/docs/resources/logs_archive#bucket LogsArchive#bucket}

---

##### `ClientEmail`<sup>Required</sup> <a name="ClientEmail" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive.property.clientEmail"></a>

```csharp
public string ClientEmail { get; set; }
```

- *Type:* string

Your client email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.31.0/docs/resources/logs_archive#client_email LogsArchive#client_email}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Your project id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.31.0/docs/resources/logs_archive#project_id LogsArchive#project_id}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Path where the archive is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.31.0/docs/resources/logs_archive#path LogsArchive#path}

---

### LogsArchiveS3Archive <a name="LogsArchiveS3Archive" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new LogsArchiveS3Archive {
    string AccountId,
    string Bucket,
    string RoleName,
    string Path = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive.property.accountId">AccountId</a></code> | <code>string</code> | Your AWS account id. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive.property.bucket">Bucket</a></code> | <code>string</code> | Name of your s3 bucket. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive.property.roleName">RoleName</a></code> | <code>string</code> | Your AWS role name. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive.property.path">Path</a></code> | <code>string</code> | Path where the archive is stored. |

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Your AWS account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.31.0/docs/resources/logs_archive#account_id LogsArchive#account_id}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Name of your s3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.31.0/docs/resources/logs_archive#bucket LogsArchive#bucket}

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive.property.roleName"></a>

```csharp
public string RoleName { get; set; }
```

- *Type:* string

Your AWS role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.31.0/docs/resources/logs_archive#role_name LogsArchive#role_name}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Path where the archive is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.31.0/docs/resources/logs_archive#path LogsArchive#path}

---

## Classes <a name="Classes" id="Classes"></a>

### LogsArchiveAzureArchiveOutputReference <a name="LogsArchiveAzureArchiveOutputReference" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new LogsArchiveAzureArchiveOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.containerInput">ContainerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.storageAccountInput">StorageAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.container">Container</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.storageAccount">StorageAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive">LogsArchiveAzureArchive</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.containerInput"></a>

```csharp
public string ContainerInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `StorageAccountInput`<sup>Optional</sup> <a name="StorageAccountInput" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.storageAccountInput"></a>

```csharp
public string StorageAccountInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.container"></a>

```csharp
public string Container { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `StorageAccount`<sup>Required</sup> <a name="StorageAccount" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.storageAccount"></a>

```csharp
public string StorageAccount { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.internalValue"></a>

```csharp
public LogsArchiveAzureArchive InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive">LogsArchiveAzureArchive</a>

---


### LogsArchiveGcsArchiveOutputReference <a name="LogsArchiveGcsArchiveOutputReference" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new LogsArchiveGcsArchiveOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.clientEmailInput">ClientEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.clientEmail">ClientEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive">LogsArchiveGcsArchive</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `ClientEmailInput`<sup>Optional</sup> <a name="ClientEmailInput" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.clientEmailInput"></a>

```csharp
public string ClientEmailInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `ClientEmail`<sup>Required</sup> <a name="ClientEmail" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.clientEmail"></a>

```csharp
public string ClientEmail { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.internalValue"></a>

```csharp
public LogsArchiveGcsArchive InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive">LogsArchiveGcsArchive</a>

---


### LogsArchiveS3ArchiveOutputReference <a name="LogsArchiveS3ArchiveOutputReference" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new LogsArchiveS3ArchiveOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.roleNameInput">RoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.roleName">RoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive">LogsArchiveS3Archive</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.roleNameInput"></a>

```csharp
public string RoleNameInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.roleName"></a>

```csharp
public string RoleName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.internalValue"></a>

```csharp
public LogsArchiveS3Archive InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive">LogsArchiveS3Archive</a>

---



