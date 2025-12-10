# `referenceTable` Submodule <a name="`referenceTable` Submodule" id="@cdktf/provider-datadog.referenceTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ReferenceTable <a name="ReferenceTable" id="@cdktf/provider-datadog.referenceTable.ReferenceTable"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table datadog_reference_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ReferenceTable(Construct Scope, string Id, ReferenceTableConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableConfig">ReferenceTableConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableConfig">ReferenceTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.putFileMetadata">PutFileMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.putSchema">PutSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.resetFileMetadata">ResetFileMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.resetSchema">ResetSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFileMetadata` <a name="PutFileMetadata" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.putFileMetadata"></a>

```csharp
private void PutFileMetadata(ReferenceTableFileMetadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.putFileMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadata">ReferenceTableFileMetadata</a>

---

##### `PutSchema` <a name="PutSchema" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.putSchema"></a>

```csharp
private void PutSchema(ReferenceTableSchema Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchema">ReferenceTableSchema</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFileMetadata` <a name="ResetFileMetadata" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.resetFileMetadata"></a>

```csharp
private void ResetFileMetadata()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.resetSchema"></a>

```csharp
private void ResetSchema()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ReferenceTable resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

ReferenceTable.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

ReferenceTable.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

ReferenceTable.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

ReferenceTable.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ReferenceTable resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ReferenceTable to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ReferenceTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ReferenceTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.fileMetadata">FileMetadata</a></code> | <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference">ReferenceTableFileMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.lastUpdatedBy">LastUpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.rowCount">RowCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.schema">Schema</a></code> | <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference">ReferenceTableSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.fileMetadataInput">FileMetadataInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadata">ReferenceTableFileMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.schemaInput">SchemaInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchema">ReferenceTableSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `FileMetadata`<sup>Required</sup> <a name="FileMetadata" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.fileMetadata"></a>

```csharp
public ReferenceTableFileMetadataOutputReference FileMetadata { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference">ReferenceTableFileMetadataOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastUpdatedBy`<sup>Required</sup> <a name="LastUpdatedBy" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.lastUpdatedBy"></a>

```csharp
public string LastUpdatedBy { get; }
```

- *Type:* string

---

##### `RowCount`<sup>Required</sup> <a name="RowCount" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.rowCount"></a>

```csharp
public double RowCount { get; }
```

- *Type:* double

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.schema"></a>

```csharp
public ReferenceTableSchemaOutputReference Schema { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference">ReferenceTableSchemaOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FileMetadataInput`<sup>Optional</sup> <a name="FileMetadataInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.fileMetadataInput"></a>

```csharp
public IResolvable|ReferenceTableFileMetadata FileMetadataInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadata">ReferenceTableFileMetadata</a>

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.schemaInput"></a>

```csharp
public IResolvable|ReferenceTableSchema SchemaInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchema">ReferenceTableSchema</a>

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ReferenceTableConfig <a name="ReferenceTableConfig" id="@cdktf/provider-datadog.referenceTable.ReferenceTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ReferenceTableConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Source,
    string TableName,
    string Description = null,
    ReferenceTableFileMetadata FileMetadata = null,
    ReferenceTableSchema Schema = null,
    string[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.source">Source</a></code> | <code>string</code> | The source type for the reference table. Valid values are `S3`, `GCS`, `AZURE`. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.tableName">TableName</a></code> | <code>string</code> | The name of the reference table. This must be unique within your organization. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.description">Description</a></code> | <code>string</code> | The description of the reference table. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.fileMetadata">FileMetadata</a></code> | <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadata">ReferenceTableFileMetadata</a></code> | file_metadata block. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.schema">Schema</a></code> | <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchema">ReferenceTableSchema</a></code> | schema block. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.tags">Tags</a></code> | <code>string[]</code> | A list of tags to associate with the reference table. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

The source type for the reference table. Valid values are `S3`, `GCS`, `AZURE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#source ReferenceTable#source}

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

The name of the reference table. This must be unique within your organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#table_name ReferenceTable#table_name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the reference table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#description ReferenceTable#description}

---

##### `FileMetadata`<sup>Optional</sup> <a name="FileMetadata" id="@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.fileMetadata"></a>

```csharp
public ReferenceTableFileMetadata FileMetadata { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadata">ReferenceTableFileMetadata</a>

file_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#file_metadata ReferenceTable#file_metadata}

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.schema"></a>

```csharp
public ReferenceTableSchema Schema { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchema">ReferenceTableSchema</a>

schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#schema ReferenceTable#schema}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

A list of tags to associate with the reference table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#tags ReferenceTable#tags}

---

### ReferenceTableFileMetadata <a name="ReferenceTableFileMetadata" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ReferenceTableFileMetadata {
    bool|IResolvable SyncEnabled,
    ReferenceTableFileMetadataAccessDetails AccessDetails = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadata.property.syncEnabled">SyncEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Whether this table should automatically sync with the cloud storage source. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadata.property.accessDetails">AccessDetails</a></code> | <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetails">ReferenceTableFileMetadataAccessDetails</a></code> | access_details block. |

---

##### `SyncEnabled`<sup>Required</sup> <a name="SyncEnabled" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadata.property.syncEnabled"></a>

```csharp
public bool|IResolvable SyncEnabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Whether this table should automatically sync with the cloud storage source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#sync_enabled ReferenceTable#sync_enabled}

---

##### `AccessDetails`<sup>Optional</sup> <a name="AccessDetails" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadata.property.accessDetails"></a>

```csharp
public ReferenceTableFileMetadataAccessDetails AccessDetails { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetails">ReferenceTableFileMetadataAccessDetails</a>

access_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#access_details ReferenceTable#access_details}

---

### ReferenceTableFileMetadataAccessDetails <a name="ReferenceTableFileMetadataAccessDetails" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ReferenceTableFileMetadataAccessDetails {
    ReferenceTableFileMetadataAccessDetailsAwsDetail AwsDetail = null,
    ReferenceTableFileMetadataAccessDetailsAzureDetail AzureDetail = null,
    ReferenceTableFileMetadataAccessDetailsGcpDetail GcpDetail = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetails.property.awsDetail">AwsDetail</a></code> | <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetail">ReferenceTableFileMetadataAccessDetailsAwsDetail</a></code> | aws_detail block. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetails.property.azureDetail">AzureDetail</a></code> | <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail">ReferenceTableFileMetadataAccessDetailsAzureDetail</a></code> | azure_detail block. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetails.property.gcpDetail">GcpDetail</a></code> | <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail">ReferenceTableFileMetadataAccessDetailsGcpDetail</a></code> | gcp_detail block. |

---

##### `AwsDetail`<sup>Optional</sup> <a name="AwsDetail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetails.property.awsDetail"></a>

```csharp
public ReferenceTableFileMetadataAccessDetailsAwsDetail AwsDetail { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetail">ReferenceTableFileMetadataAccessDetailsAwsDetail</a>

aws_detail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#aws_detail ReferenceTable#aws_detail}

---

##### `AzureDetail`<sup>Optional</sup> <a name="AzureDetail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetails.property.azureDetail"></a>

```csharp
public ReferenceTableFileMetadataAccessDetailsAzureDetail AzureDetail { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail">ReferenceTableFileMetadataAccessDetailsAzureDetail</a>

azure_detail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#azure_detail ReferenceTable#azure_detail}

---

##### `GcpDetail`<sup>Optional</sup> <a name="GcpDetail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetails.property.gcpDetail"></a>

```csharp
public ReferenceTableFileMetadataAccessDetailsGcpDetail GcpDetail { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail">ReferenceTableFileMetadataAccessDetailsGcpDetail</a>

gcp_detail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#gcp_detail ReferenceTable#gcp_detail}

---

### ReferenceTableFileMetadataAccessDetailsAwsDetail <a name="ReferenceTableFileMetadataAccessDetailsAwsDetail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetail.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ReferenceTableFileMetadataAccessDetailsAwsDetail {
    string AwsAccountId = null,
    string AwsBucketName = null,
    string FilePath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetail.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | The ID of the AWS account. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetail.property.awsBucketName">AwsBucketName</a></code> | <code>string</code> | The name of the AWS S3 bucket. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetail.property.filePath">FilePath</a></code> | <code>string</code> | The relative file path from the AWS S3 bucket root to the CSV file. |

---

##### `AwsAccountId`<sup>Optional</sup> <a name="AwsAccountId" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetail.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; set; }
```

- *Type:* string

The ID of the AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#aws_account_id ReferenceTable#aws_account_id}

---

##### `AwsBucketName`<sup>Optional</sup> <a name="AwsBucketName" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetail.property.awsBucketName"></a>

```csharp
public string AwsBucketName { get; set; }
```

- *Type:* string

The name of the AWS S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#aws_bucket_name ReferenceTable#aws_bucket_name}

---

##### `FilePath`<sup>Optional</sup> <a name="FilePath" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetail.property.filePath"></a>

```csharp
public string FilePath { get; set; }
```

- *Type:* string

The relative file path from the AWS S3 bucket root to the CSV file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#file_path ReferenceTable#file_path}

---

### ReferenceTableFileMetadataAccessDetailsAzureDetail <a name="ReferenceTableFileMetadataAccessDetailsAzureDetail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ReferenceTableFileMetadataAccessDetailsAzureDetail {
    string AzureClientId = null,
    string AzureContainerName = null,
    string AzureStorageAccountName = null,
    string AzureTenantId = null,
    string FilePath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail.property.azureClientId">AzureClientId</a></code> | <code>string</code> | The Azure client ID (application ID). |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail.property.azureContainerName">AzureContainerName</a></code> | <code>string</code> | The name of the Azure container. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail.property.azureStorageAccountName">AzureStorageAccountName</a></code> | <code>string</code> | The name of the Azure storage account. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail.property.azureTenantId">AzureTenantId</a></code> | <code>string</code> | The ID of the Azure tenant. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail.property.filePath">FilePath</a></code> | <code>string</code> | The relative file path from the Azure container root to the CSV file. |

---

##### `AzureClientId`<sup>Optional</sup> <a name="AzureClientId" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail.property.azureClientId"></a>

```csharp
public string AzureClientId { get; set; }
```

- *Type:* string

The Azure client ID (application ID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#azure_client_id ReferenceTable#azure_client_id}

---

##### `AzureContainerName`<sup>Optional</sup> <a name="AzureContainerName" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail.property.azureContainerName"></a>

```csharp
public string AzureContainerName { get; set; }
```

- *Type:* string

The name of the Azure container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#azure_container_name ReferenceTable#azure_container_name}

---

##### `AzureStorageAccountName`<sup>Optional</sup> <a name="AzureStorageAccountName" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail.property.azureStorageAccountName"></a>

```csharp
public string AzureStorageAccountName { get; set; }
```

- *Type:* string

The name of the Azure storage account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#azure_storage_account_name ReferenceTable#azure_storage_account_name}

---

##### `AzureTenantId`<sup>Optional</sup> <a name="AzureTenantId" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail.property.azureTenantId"></a>

```csharp
public string AzureTenantId { get; set; }
```

- *Type:* string

The ID of the Azure tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#azure_tenant_id ReferenceTable#azure_tenant_id}

---

##### `FilePath`<sup>Optional</sup> <a name="FilePath" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail.property.filePath"></a>

```csharp
public string FilePath { get; set; }
```

- *Type:* string

The relative file path from the Azure container root to the CSV file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#file_path ReferenceTable#file_path}

---

### ReferenceTableFileMetadataAccessDetailsGcpDetail <a name="ReferenceTableFileMetadataAccessDetailsGcpDetail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ReferenceTableFileMetadataAccessDetailsGcpDetail {
    string FilePath = null,
    string GcpBucketName = null,
    string GcpProjectId = null,
    string GcpServiceAccountEmail = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail.property.filePath">FilePath</a></code> | <code>string</code> | The relative file path from the GCS bucket root to the CSV file. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail.property.gcpBucketName">GcpBucketName</a></code> | <code>string</code> | The name of the GCP bucket. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail.property.gcpProjectId">GcpProjectId</a></code> | <code>string</code> | The ID of the GCP project. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail.property.gcpServiceAccountEmail">GcpServiceAccountEmail</a></code> | <code>string</code> | The email of the GCP service account used to access the bucket. |

---

##### `FilePath`<sup>Optional</sup> <a name="FilePath" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail.property.filePath"></a>

```csharp
public string FilePath { get; set; }
```

- *Type:* string

The relative file path from the GCS bucket root to the CSV file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#file_path ReferenceTable#file_path}

---

##### `GcpBucketName`<sup>Optional</sup> <a name="GcpBucketName" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail.property.gcpBucketName"></a>

```csharp
public string GcpBucketName { get; set; }
```

- *Type:* string

The name of the GCP bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#gcp_bucket_name ReferenceTable#gcp_bucket_name}

---

##### `GcpProjectId`<sup>Optional</sup> <a name="GcpProjectId" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail.property.gcpProjectId"></a>

```csharp
public string GcpProjectId { get; set; }
```

- *Type:* string

The ID of the GCP project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#gcp_project_id ReferenceTable#gcp_project_id}

---

##### `GcpServiceAccountEmail`<sup>Optional</sup> <a name="GcpServiceAccountEmail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail.property.gcpServiceAccountEmail"></a>

```csharp
public string GcpServiceAccountEmail { get; set; }
```

- *Type:* string

The email of the GCP service account used to access the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#gcp_service_account_email ReferenceTable#gcp_service_account_email}

---

### ReferenceTableSchema <a name="ReferenceTableSchema" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchema.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ReferenceTableSchema {
    IResolvable|ReferenceTableSchemaFields[] Fields = null,
    string[] PrimaryKeys = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchema.property.fields">Fields</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFields">ReferenceTableSchemaFields</a>[]</code> | fields block. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchema.property.primaryKeys">PrimaryKeys</a></code> | <code>string[]</code> | List of field names that serve as primary keys for the table. Currently only one primary key is supported. |

---

##### `Fields`<sup>Optional</sup> <a name="Fields" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchema.property.fields"></a>

```csharp
public IResolvable|ReferenceTableSchemaFields[] Fields { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFields">ReferenceTableSchemaFields</a>[]

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#fields ReferenceTable#fields}

---

##### `PrimaryKeys`<sup>Optional</sup> <a name="PrimaryKeys" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchema.property.primaryKeys"></a>

```csharp
public string[] PrimaryKeys { get; set; }
```

- *Type:* string[]

List of field names that serve as primary keys for the table. Currently only one primary key is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#primary_keys ReferenceTable#primary_keys}

---

### ReferenceTableSchemaFields <a name="ReferenceTableSchemaFields" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFields.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ReferenceTableSchemaFields {
    string Name = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFields.property.name">Name</a></code> | <code>string</code> | The name of the field. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFields.property.type">Type</a></code> | <code>string</code> | The data type of the field. Must be one of: STRING, INT32. Valid values are `STRING`, `INT32`. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFields.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#name ReferenceTable#name}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFields.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The data type of the field. Must be one of: STRING, INT32. Valid values are `STRING`, `INT32`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#type ReferenceTable#type}

---

## Classes <a name="Classes" id="Classes"></a>

### ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference <a name="ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.resetAwsAccountId">ResetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.resetAwsBucketName">ResetAwsBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.resetFilePath">ResetFilePath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAwsAccountId` <a name="ResetAwsAccountId" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.resetAwsAccountId"></a>

```csharp
private void ResetAwsAccountId()
```

##### `ResetAwsBucketName` <a name="ResetAwsBucketName" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.resetAwsBucketName"></a>

```csharp
private void ResetAwsBucketName()
```

##### `ResetFilePath` <a name="ResetFilePath" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.resetFilePath"></a>

```csharp
private void ResetFilePath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.awsBucketNameInput">AwsBucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.filePathInput">FilePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.awsBucketName">AwsBucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.filePath">FilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetail">ReferenceTableFileMetadataAccessDetailsAwsDetail</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.awsAccountIdInput"></a>

```csharp
public string AwsAccountIdInput { get; }
```

- *Type:* string

---

##### `AwsBucketNameInput`<sup>Optional</sup> <a name="AwsBucketNameInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.awsBucketNameInput"></a>

```csharp
public string AwsBucketNameInput { get; }
```

- *Type:* string

---

##### `FilePathInput`<sup>Optional</sup> <a name="FilePathInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.filePathInput"></a>

```csharp
public string FilePathInput { get; }
```

- *Type:* string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; }
```

- *Type:* string

---

##### `AwsBucketName`<sup>Required</sup> <a name="AwsBucketName" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.awsBucketName"></a>

```csharp
public string AwsBucketName { get; }
```

- *Type:* string

---

##### `FilePath`<sup>Required</sup> <a name="FilePath" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.filePath"></a>

```csharp
public string FilePath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ReferenceTableFileMetadataAccessDetailsAwsDetail InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetail">ReferenceTableFileMetadataAccessDetailsAwsDetail</a>

---


### ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference <a name="ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resetAzureClientId">ResetAzureClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resetAzureContainerName">ResetAzureContainerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resetAzureStorageAccountName">ResetAzureStorageAccountName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resetAzureTenantId">ResetAzureTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resetFilePath">ResetFilePath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAzureClientId` <a name="ResetAzureClientId" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resetAzureClientId"></a>

```csharp
private void ResetAzureClientId()
```

##### `ResetAzureContainerName` <a name="ResetAzureContainerName" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resetAzureContainerName"></a>

```csharp
private void ResetAzureContainerName()
```

##### `ResetAzureStorageAccountName` <a name="ResetAzureStorageAccountName" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resetAzureStorageAccountName"></a>

```csharp
private void ResetAzureStorageAccountName()
```

##### `ResetAzureTenantId` <a name="ResetAzureTenantId" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resetAzureTenantId"></a>

```csharp
private void ResetAzureTenantId()
```

##### `ResetFilePath` <a name="ResetFilePath" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resetFilePath"></a>

```csharp
private void ResetFilePath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureClientIdInput">AzureClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureContainerNameInput">AzureContainerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureStorageAccountNameInput">AzureStorageAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureTenantIdInput">AzureTenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.filePathInput">FilePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureClientId">AzureClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureContainerName">AzureContainerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureStorageAccountName">AzureStorageAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureTenantId">AzureTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.filePath">FilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail">ReferenceTableFileMetadataAccessDetailsAzureDetail</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AzureClientIdInput`<sup>Optional</sup> <a name="AzureClientIdInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureClientIdInput"></a>

```csharp
public string AzureClientIdInput { get; }
```

- *Type:* string

---

##### `AzureContainerNameInput`<sup>Optional</sup> <a name="AzureContainerNameInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureContainerNameInput"></a>

```csharp
public string AzureContainerNameInput { get; }
```

- *Type:* string

---

##### `AzureStorageAccountNameInput`<sup>Optional</sup> <a name="AzureStorageAccountNameInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureStorageAccountNameInput"></a>

```csharp
public string AzureStorageAccountNameInput { get; }
```

- *Type:* string

---

##### `AzureTenantIdInput`<sup>Optional</sup> <a name="AzureTenantIdInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureTenantIdInput"></a>

```csharp
public string AzureTenantIdInput { get; }
```

- *Type:* string

---

##### `FilePathInput`<sup>Optional</sup> <a name="FilePathInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.filePathInput"></a>

```csharp
public string FilePathInput { get; }
```

- *Type:* string

---

##### `AzureClientId`<sup>Required</sup> <a name="AzureClientId" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureClientId"></a>

```csharp
public string AzureClientId { get; }
```

- *Type:* string

---

##### `AzureContainerName`<sup>Required</sup> <a name="AzureContainerName" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureContainerName"></a>

```csharp
public string AzureContainerName { get; }
```

- *Type:* string

---

##### `AzureStorageAccountName`<sup>Required</sup> <a name="AzureStorageAccountName" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureStorageAccountName"></a>

```csharp
public string AzureStorageAccountName { get; }
```

- *Type:* string

---

##### `AzureTenantId`<sup>Required</sup> <a name="AzureTenantId" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureTenantId"></a>

```csharp
public string AzureTenantId { get; }
```

- *Type:* string

---

##### `FilePath`<sup>Required</sup> <a name="FilePath" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.filePath"></a>

```csharp
public string FilePath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ReferenceTableFileMetadataAccessDetailsAzureDetail InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail">ReferenceTableFileMetadataAccessDetailsAzureDetail</a>

---


### ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference <a name="ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.resetFilePath">ResetFilePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.resetGcpBucketName">ResetGcpBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.resetGcpProjectId">ResetGcpProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.resetGcpServiceAccountEmail">ResetGcpServiceAccountEmail</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilePath` <a name="ResetFilePath" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.resetFilePath"></a>

```csharp
private void ResetFilePath()
```

##### `ResetGcpBucketName` <a name="ResetGcpBucketName" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.resetGcpBucketName"></a>

```csharp
private void ResetGcpBucketName()
```

##### `ResetGcpProjectId` <a name="ResetGcpProjectId" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.resetGcpProjectId"></a>

```csharp
private void ResetGcpProjectId()
```

##### `ResetGcpServiceAccountEmail` <a name="ResetGcpServiceAccountEmail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.resetGcpServiceAccountEmail"></a>

```csharp
private void ResetGcpServiceAccountEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.filePathInput">FilePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpBucketNameInput">GcpBucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpProjectIdInput">GcpProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpServiceAccountEmailInput">GcpServiceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.filePath">FilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpBucketName">GcpBucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpProjectId">GcpProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpServiceAccountEmail">GcpServiceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail">ReferenceTableFileMetadataAccessDetailsGcpDetail</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilePathInput`<sup>Optional</sup> <a name="FilePathInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.filePathInput"></a>

```csharp
public string FilePathInput { get; }
```

- *Type:* string

---

##### `GcpBucketNameInput`<sup>Optional</sup> <a name="GcpBucketNameInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpBucketNameInput"></a>

```csharp
public string GcpBucketNameInput { get; }
```

- *Type:* string

---

##### `GcpProjectIdInput`<sup>Optional</sup> <a name="GcpProjectIdInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpProjectIdInput"></a>

```csharp
public string GcpProjectIdInput { get; }
```

- *Type:* string

---

##### `GcpServiceAccountEmailInput`<sup>Optional</sup> <a name="GcpServiceAccountEmailInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpServiceAccountEmailInput"></a>

```csharp
public string GcpServiceAccountEmailInput { get; }
```

- *Type:* string

---

##### `FilePath`<sup>Required</sup> <a name="FilePath" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.filePath"></a>

```csharp
public string FilePath { get; }
```

- *Type:* string

---

##### `GcpBucketName`<sup>Required</sup> <a name="GcpBucketName" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpBucketName"></a>

```csharp
public string GcpBucketName { get; }
```

- *Type:* string

---

##### `GcpProjectId`<sup>Required</sup> <a name="GcpProjectId" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpProjectId"></a>

```csharp
public string GcpProjectId { get; }
```

- *Type:* string

---

##### `GcpServiceAccountEmail`<sup>Required</sup> <a name="GcpServiceAccountEmail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpServiceAccountEmail"></a>

```csharp
public string GcpServiceAccountEmail { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ReferenceTableFileMetadataAccessDetailsGcpDetail InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail">ReferenceTableFileMetadataAccessDetailsGcpDetail</a>

---


### ReferenceTableFileMetadataAccessDetailsOutputReference <a name="ReferenceTableFileMetadataAccessDetailsOutputReference" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ReferenceTableFileMetadataAccessDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.putAwsDetail">PutAwsDetail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.putAzureDetail">PutAzureDetail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.putGcpDetail">PutGcpDetail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.resetAwsDetail">ResetAwsDetail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.resetAzureDetail">ResetAzureDetail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.resetGcpDetail">ResetGcpDetail</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsDetail` <a name="PutAwsDetail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.putAwsDetail"></a>

```csharp
private void PutAwsDetail(ReferenceTableFileMetadataAccessDetailsAwsDetail Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.putAwsDetail.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetail">ReferenceTableFileMetadataAccessDetailsAwsDetail</a>

---

##### `PutAzureDetail` <a name="PutAzureDetail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.putAzureDetail"></a>

```csharp
private void PutAzureDetail(ReferenceTableFileMetadataAccessDetailsAzureDetail Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.putAzureDetail.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail">ReferenceTableFileMetadataAccessDetailsAzureDetail</a>

---

##### `PutGcpDetail` <a name="PutGcpDetail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.putGcpDetail"></a>

```csharp
private void PutGcpDetail(ReferenceTableFileMetadataAccessDetailsGcpDetail Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.putGcpDetail.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail">ReferenceTableFileMetadataAccessDetailsGcpDetail</a>

---

##### `ResetAwsDetail` <a name="ResetAwsDetail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.resetAwsDetail"></a>

```csharp
private void ResetAwsDetail()
```

##### `ResetAzureDetail` <a name="ResetAzureDetail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.resetAzureDetail"></a>

```csharp
private void ResetAzureDetail()
```

##### `ResetGcpDetail` <a name="ResetGcpDetail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.resetGcpDetail"></a>

```csharp
private void ResetGcpDetail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.awsDetail">AwsDetail</a></code> | <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference">ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.azureDetail">AzureDetail</a></code> | <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference">ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.gcpDetail">GcpDetail</a></code> | <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference">ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.awsDetailInput">AwsDetailInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetail">ReferenceTableFileMetadataAccessDetailsAwsDetail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.azureDetailInput">AzureDetailInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail">ReferenceTableFileMetadataAccessDetailsAzureDetail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.gcpDetailInput">GcpDetailInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail">ReferenceTableFileMetadataAccessDetailsGcpDetail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetails">ReferenceTableFileMetadataAccessDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsDetail`<sup>Required</sup> <a name="AwsDetail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.awsDetail"></a>

```csharp
public ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference AwsDetail { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference">ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference</a>

---

##### `AzureDetail`<sup>Required</sup> <a name="AzureDetail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.azureDetail"></a>

```csharp
public ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference AzureDetail { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference">ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference</a>

---

##### `GcpDetail`<sup>Required</sup> <a name="GcpDetail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.gcpDetail"></a>

```csharp
public ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference GcpDetail { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference">ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference</a>

---

##### `AwsDetailInput`<sup>Optional</sup> <a name="AwsDetailInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.awsDetailInput"></a>

```csharp
public IResolvable|ReferenceTableFileMetadataAccessDetailsAwsDetail AwsDetailInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetail">ReferenceTableFileMetadataAccessDetailsAwsDetail</a>

---

##### `AzureDetailInput`<sup>Optional</sup> <a name="AzureDetailInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.azureDetailInput"></a>

```csharp
public IResolvable|ReferenceTableFileMetadataAccessDetailsAzureDetail AzureDetailInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail">ReferenceTableFileMetadataAccessDetailsAzureDetail</a>

---

##### `GcpDetailInput`<sup>Optional</sup> <a name="GcpDetailInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.gcpDetailInput"></a>

```csharp
public IResolvable|ReferenceTableFileMetadataAccessDetailsGcpDetail GcpDetailInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail">ReferenceTableFileMetadataAccessDetailsGcpDetail</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ReferenceTableFileMetadataAccessDetails InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetails">ReferenceTableFileMetadataAccessDetails</a>

---


### ReferenceTableFileMetadataOutputReference <a name="ReferenceTableFileMetadataOutputReference" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ReferenceTableFileMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.putAccessDetails">PutAccessDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.resetAccessDetails">ResetAccessDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccessDetails` <a name="PutAccessDetails" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.putAccessDetails"></a>

```csharp
private void PutAccessDetails(ReferenceTableFileMetadataAccessDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.putAccessDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetails">ReferenceTableFileMetadataAccessDetails</a>

---

##### `ResetAccessDetails` <a name="ResetAccessDetails" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.resetAccessDetails"></a>

```csharp
private void ResetAccessDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.accessDetails">AccessDetails</a></code> | <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference">ReferenceTableFileMetadataAccessDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.errorRowCount">ErrorRowCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.errorType">ErrorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.accessDetailsInput">AccessDetailsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetails">ReferenceTableFileMetadataAccessDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.syncEnabledInput">SyncEnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.syncEnabled">SyncEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadata">ReferenceTableFileMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessDetails`<sup>Required</sup> <a name="AccessDetails" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.accessDetails"></a>

```csharp
public ReferenceTableFileMetadataAccessDetailsOutputReference AccessDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference">ReferenceTableFileMetadataAccessDetailsOutputReference</a>

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.errorMessage"></a>

```csharp
public string ErrorMessage { get; }
```

- *Type:* string

---

##### `ErrorRowCount`<sup>Required</sup> <a name="ErrorRowCount" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.errorRowCount"></a>

```csharp
public double ErrorRowCount { get; }
```

- *Type:* double

---

##### `ErrorType`<sup>Required</sup> <a name="ErrorType" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.errorType"></a>

```csharp
public string ErrorType { get; }
```

- *Type:* string

---

##### `AccessDetailsInput`<sup>Optional</sup> <a name="AccessDetailsInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.accessDetailsInput"></a>

```csharp
public IResolvable|ReferenceTableFileMetadataAccessDetails AccessDetailsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetails">ReferenceTableFileMetadataAccessDetails</a>

---

##### `SyncEnabledInput`<sup>Optional</sup> <a name="SyncEnabledInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.syncEnabledInput"></a>

```csharp
public bool|IResolvable SyncEnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `SyncEnabled`<sup>Required</sup> <a name="SyncEnabled" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.syncEnabled"></a>

```csharp
public bool|IResolvable SyncEnabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ReferenceTableFileMetadata InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadata">ReferenceTableFileMetadata</a>

---


### ReferenceTableSchemaFieldsList <a name="ReferenceTableSchemaFieldsList" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ReferenceTableSchemaFieldsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.get"></a>

```csharp
private ReferenceTableSchemaFieldsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFields">ReferenceTableSchemaFields</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.property.internalValue"></a>

```csharp
public IResolvable|ReferenceTableSchemaFields[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFields">ReferenceTableSchemaFields</a>[]

---


### ReferenceTableSchemaFieldsOutputReference <a name="ReferenceTableSchemaFieldsOutputReference" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ReferenceTableSchemaFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFields">ReferenceTableSchemaFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ReferenceTableSchemaFields InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFields">ReferenceTableSchemaFields</a>

---


### ReferenceTableSchemaOutputReference <a name="ReferenceTableSchemaOutputReference" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new ReferenceTableSchemaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.putFields">PutFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.resetFields">ResetFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.resetPrimaryKeys">ResetPrimaryKeys</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFields` <a name="PutFields" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.putFields"></a>

```csharp
private void PutFields(IResolvable|ReferenceTableSchemaFields[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.putFields.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFields">ReferenceTableSchemaFields</a>[]

---

##### `ResetFields` <a name="ResetFields" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.resetFields"></a>

```csharp
private void ResetFields()
```

##### `ResetPrimaryKeys` <a name="ResetPrimaryKeys" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.resetPrimaryKeys"></a>

```csharp
private void ResetPrimaryKeys()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.property.fields">Fields</a></code> | <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList">ReferenceTableSchemaFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.property.fieldsInput">FieldsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFields">ReferenceTableSchemaFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.property.primaryKeysInput">PrimaryKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.property.primaryKeys">PrimaryKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchema">ReferenceTableSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.property.fields"></a>

```csharp
public ReferenceTableSchemaFieldsList Fields { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList">ReferenceTableSchemaFieldsList</a>

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.property.fieldsInput"></a>

```csharp
public IResolvable|ReferenceTableSchemaFields[] FieldsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFields">ReferenceTableSchemaFields</a>[]

---

##### `PrimaryKeysInput`<sup>Optional</sup> <a name="PrimaryKeysInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.property.primaryKeysInput"></a>

```csharp
public string[] PrimaryKeysInput { get; }
```

- *Type:* string[]

---

##### `PrimaryKeys`<sup>Required</sup> <a name="PrimaryKeys" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.property.primaryKeys"></a>

```csharp
public string[] PrimaryKeys { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ReferenceTableSchema InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchema">ReferenceTableSchema</a>

---



