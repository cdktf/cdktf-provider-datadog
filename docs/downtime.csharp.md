# `datadog_downtime`

Refer to the Terraform Registory for docs: [`datadog_downtime`](https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/downtime).

# `downtime` Submodule <a name="`downtime` Submodule" id="@cdktf/provider-datadog.downtime"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Downtime <a name="Downtime" id="@cdktf/provider-datadog.downtime.Downtime"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/downtime datadog_downtime}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.downtime.Downtime.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new Downtime(Construct Scope, string Id, DowntimeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig">DowntimeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.downtime.DowntimeConfig">DowntimeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.putRecurrence">PutRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetEnd">ResetEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetEndDate">ResetEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetMessage">ResetMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetMonitorId">ResetMonitorId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetMonitorTags">ResetMonitorTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetMuteFirstRecoveryNotification">ResetMuteFirstRecoveryNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetRecurrence">ResetRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetStart">ResetStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetStartDate">ResetStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetTimezone">ResetTimezone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.downtime.Downtime.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.downtime.Downtime.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.downtime.Downtime.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.downtime.Downtime.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.downtime.Downtime.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-datadog.downtime.Downtime.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.downtime.Downtime.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.downtime.Downtime.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.downtime.Downtime.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.downtime.Downtime.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.downtime.Downtime.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.downtime.Downtime.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.downtime.Downtime.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.downtime.Downtime.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.downtime.Downtime.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.downtime.Downtime.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.downtime.Downtime.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.downtime.Downtime.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-datadog.downtime.Downtime.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutRecurrence` <a name="PutRecurrence" id="@cdktf/provider-datadog.downtime.Downtime.putRecurrence"></a>

```csharp
private void PutRecurrence(DowntimeRecurrence Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.downtime.Downtime.putRecurrence.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence">DowntimeRecurrence</a>

---

##### `ResetEnd` <a name="ResetEnd" id="@cdktf/provider-datadog.downtime.Downtime.resetEnd"></a>

```csharp
private void ResetEnd()
```

##### `ResetEndDate` <a name="ResetEndDate" id="@cdktf/provider-datadog.downtime.Downtime.resetEndDate"></a>

```csharp
private void ResetEndDate()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-datadog.downtime.Downtime.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMessage` <a name="ResetMessage" id="@cdktf/provider-datadog.downtime.Downtime.resetMessage"></a>

```csharp
private void ResetMessage()
```

##### `ResetMonitorId` <a name="ResetMonitorId" id="@cdktf/provider-datadog.downtime.Downtime.resetMonitorId"></a>

```csharp
private void ResetMonitorId()
```

##### `ResetMonitorTags` <a name="ResetMonitorTags" id="@cdktf/provider-datadog.downtime.Downtime.resetMonitorTags"></a>

```csharp
private void ResetMonitorTags()
```

##### `ResetMuteFirstRecoveryNotification` <a name="ResetMuteFirstRecoveryNotification" id="@cdktf/provider-datadog.downtime.Downtime.resetMuteFirstRecoveryNotification"></a>

```csharp
private void ResetMuteFirstRecoveryNotification()
```

##### `ResetRecurrence` <a name="ResetRecurrence" id="@cdktf/provider-datadog.downtime.Downtime.resetRecurrence"></a>

```csharp
private void ResetRecurrence()
```

##### `ResetStart` <a name="ResetStart" id="@cdktf/provider-datadog.downtime.Downtime.resetStart"></a>

```csharp
private void ResetStart()
```

##### `ResetStartDate` <a name="ResetStartDate" id="@cdktf/provider-datadog.downtime.Downtime.resetStartDate"></a>

```csharp
private void ResetStartDate()
```

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktf/provider-datadog.downtime.Downtime.resetTimezone"></a>

```csharp
private void ResetTimezone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Downtime resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.downtime.Downtime.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

Downtime.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.downtime.Downtime.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.downtime.Downtime.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

Downtime.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.downtime.Downtime.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.downtime.Downtime.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

Downtime.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.downtime.Downtime.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.downtime.Downtime.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

Downtime.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Downtime resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.downtime.Downtime.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-datadog.downtime.Downtime.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Downtime to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-datadog.downtime.Downtime.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Downtime that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/downtime#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.downtime.Downtime.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Downtime to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.active">Active</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.activeChildId">ActiveChildId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.disabled">Disabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.recurrence">Recurrence</a></code> | <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference">DowntimeRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.endDateInput">EndDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.endInput">EndInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.messageInput">MessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.monitorIdInput">MonitorIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.monitorTagsInput">MonitorTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.muteFirstRecoveryNotificationInput">MuteFirstRecoveryNotificationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.recurrenceInput">RecurrenceInput</a></code> | <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence">DowntimeRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.scopeInput">ScopeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.startDateInput">StartDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.startInput">StartInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.timezoneInput">TimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.end">End</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.endDate">EndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.monitorId">MonitorId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.monitorTags">MonitorTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.muteFirstRecoveryNotification">MuteFirstRecoveryNotification</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.scope">Scope</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.start">Start</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.startDate">StartDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.downtime.Downtime.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.downtime.Downtime.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.downtime.Downtime.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.downtime.Downtime.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.downtime.Downtime.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.downtime.Downtime.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.downtime.Downtime.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.downtime.Downtime.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.downtime.Downtime.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.downtime.Downtime.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.downtime.Downtime.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.downtime.Downtime.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.downtime.Downtime.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.downtime.Downtime.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-datadog.downtime.Downtime.property.active"></a>

```csharp
public IResolvable Active { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ActiveChildId`<sup>Required</sup> <a name="ActiveChildId" id="@cdktf/provider-datadog.downtime.Downtime.property.activeChildId"></a>

```csharp
public double ActiveChildId { get; }
```

- *Type:* double

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-datadog.downtime.Downtime.property.disabled"></a>

```csharp
public IResolvable Disabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Recurrence`<sup>Required</sup> <a name="Recurrence" id="@cdktf/provider-datadog.downtime.Downtime.property.recurrence"></a>

```csharp
public DowntimeRecurrenceOutputReference Recurrence { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference">DowntimeRecurrenceOutputReference</a>

---

##### `EndDateInput`<sup>Optional</sup> <a name="EndDateInput" id="@cdktf/provider-datadog.downtime.Downtime.property.endDateInput"></a>

```csharp
public string EndDateInput { get; }
```

- *Type:* string

---

##### `EndInput`<sup>Optional</sup> <a name="EndInput" id="@cdktf/provider-datadog.downtime.Downtime.property.endInput"></a>

```csharp
public double EndInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.downtime.Downtime.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktf/provider-datadog.downtime.Downtime.property.messageInput"></a>

```csharp
public string MessageInput { get; }
```

- *Type:* string

---

##### `MonitorIdInput`<sup>Optional</sup> <a name="MonitorIdInput" id="@cdktf/provider-datadog.downtime.Downtime.property.monitorIdInput"></a>

```csharp
public double MonitorIdInput { get; }
```

- *Type:* double

---

##### `MonitorTagsInput`<sup>Optional</sup> <a name="MonitorTagsInput" id="@cdktf/provider-datadog.downtime.Downtime.property.monitorTagsInput"></a>

```csharp
public string[] MonitorTagsInput { get; }
```

- *Type:* string[]

---

##### `MuteFirstRecoveryNotificationInput`<sup>Optional</sup> <a name="MuteFirstRecoveryNotificationInput" id="@cdktf/provider-datadog.downtime.Downtime.property.muteFirstRecoveryNotificationInput"></a>

```csharp
public object MuteFirstRecoveryNotificationInput { get; }
```

- *Type:* object

---

##### `RecurrenceInput`<sup>Optional</sup> <a name="RecurrenceInput" id="@cdktf/provider-datadog.downtime.Downtime.property.recurrenceInput"></a>

```csharp
public DowntimeRecurrence RecurrenceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence">DowntimeRecurrence</a>

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-datadog.downtime.Downtime.property.scopeInput"></a>

```csharp
public string[] ScopeInput { get; }
```

- *Type:* string[]

---

##### `StartDateInput`<sup>Optional</sup> <a name="StartDateInput" id="@cdktf/provider-datadog.downtime.Downtime.property.startDateInput"></a>

```csharp
public string StartDateInput { get; }
```

- *Type:* string

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktf/provider-datadog.downtime.Downtime.property.startInput"></a>

```csharp
public double StartInput { get; }
```

- *Type:* double

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktf/provider-datadog.downtime.Downtime.property.timezoneInput"></a>

```csharp
public string TimezoneInput { get; }
```

- *Type:* string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-datadog.downtime.Downtime.property.end"></a>

```csharp
public double End { get; }
```

- *Type:* double

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktf/provider-datadog.downtime.Downtime.property.endDate"></a>

```csharp
public string EndDate { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.downtime.Downtime.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-datadog.downtime.Downtime.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `MonitorId`<sup>Required</sup> <a name="MonitorId" id="@cdktf/provider-datadog.downtime.Downtime.property.monitorId"></a>

```csharp
public double MonitorId { get; }
```

- *Type:* double

---

##### `MonitorTags`<sup>Required</sup> <a name="MonitorTags" id="@cdktf/provider-datadog.downtime.Downtime.property.monitorTags"></a>

```csharp
public string[] MonitorTags { get; }
```

- *Type:* string[]

---

##### `MuteFirstRecoveryNotification`<sup>Required</sup> <a name="MuteFirstRecoveryNotification" id="@cdktf/provider-datadog.downtime.Downtime.property.muteFirstRecoveryNotification"></a>

```csharp
public object MuteFirstRecoveryNotification { get; }
```

- *Type:* object

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.downtime.Downtime.property.scope"></a>

```csharp
public string[] Scope { get; }
```

- *Type:* string[]

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-datadog.downtime.Downtime.property.start"></a>

```csharp
public double Start { get; }
```

- *Type:* double

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-datadog.downtime.Downtime.property.startDate"></a>

```csharp
public string StartDate { get; }
```

- *Type:* string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-datadog.downtime.Downtime.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.downtime.Downtime.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DowntimeConfig <a name="DowntimeConfig" id="@cdktf/provider-datadog.downtime.DowntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.downtime.DowntimeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DowntimeConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] Scope,
    double End = null,
    string EndDate = null,
    string Id = null,
    string Message = null,
    double MonitorId = null,
    string[] MonitorTags = null,
    object MuteFirstRecoveryNotification = null,
    DowntimeRecurrence Recurrence = null,
    double Start = null,
    string StartDate = null,
    string Timezone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.scope">Scope</a></code> | <code>string[]</code> | specify the group scope to which this downtime applies. For everything use '*'. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.end">End</a></code> | <code>double</code> | Optionally specify an end date when this downtime should expire. Accepts a Unix timestamp in UTC. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.endDate">EndDate</a></code> | <code>string</code> | String representing date and time to end the downtime in RFC3339 format. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/downtime#id Downtime#id}. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.message">Message</a></code> | <code>string</code> | An optional message to provide when creating the downtime, can include notification handles. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.monitorId">MonitorId</a></code> | <code>double</code> | When specified, this downtime will only apply to this monitor. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.monitorTags">MonitorTags</a></code> | <code>string[]</code> | A list of monitor tags (up to 32) to base the scheduled downtime on. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.muteFirstRecoveryNotification">MuteFirstRecoveryNotification</a></code> | <code>object</code> | When true the first recovery notification during the downtime will be muted. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.recurrence">Recurrence</a></code> | <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence">DowntimeRecurrence</a></code> | recurrence block. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.start">Start</a></code> | <code>double</code> | Specify when this downtime should start. Accepts a Unix timestamp in UTC. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.startDate">StartDate</a></code> | <code>string</code> | String representing date and time to start the downtime in RFC3339 format. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.timezone">Timezone</a></code> | <code>string</code> | The timezone for the downtime, default UTC. Follows IANA timezone database identifiers. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.scope"></a>

```csharp
public string[] Scope { get; set; }
```

- *Type:* string[]

specify the group scope to which this downtime applies. For everything use '*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/downtime#scope Downtime#scope}

---

##### `End`<sup>Optional</sup> <a name="End" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.end"></a>

```csharp
public double End { get; set; }
```

- *Type:* double

Optionally specify an end date when this downtime should expire. Accepts a Unix timestamp in UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/downtime#end Downtime#end}

---

##### `EndDate`<sup>Optional</sup> <a name="EndDate" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.endDate"></a>

```csharp
public string EndDate { get; set; }
```

- *Type:* string

String representing date and time to end the downtime in RFC3339 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/downtime#end_date Downtime#end_date}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/downtime#id Downtime#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Message`<sup>Optional</sup> <a name="Message" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.message"></a>

```csharp
public string Message { get; set; }
```

- *Type:* string

An optional message to provide when creating the downtime, can include notification handles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/downtime#message Downtime#message}

---

##### `MonitorId`<sup>Optional</sup> <a name="MonitorId" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.monitorId"></a>

```csharp
public double MonitorId { get; set; }
```

- *Type:* double

When specified, this downtime will only apply to this monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/downtime#monitor_id Downtime#monitor_id}

---

##### `MonitorTags`<sup>Optional</sup> <a name="MonitorTags" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.monitorTags"></a>

```csharp
public string[] MonitorTags { get; set; }
```

- *Type:* string[]

A list of monitor tags (up to 32) to base the scheduled downtime on.

Only monitors that have all selected tags are silenced

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/downtime#monitor_tags Downtime#monitor_tags}

---

##### `MuteFirstRecoveryNotification`<sup>Optional</sup> <a name="MuteFirstRecoveryNotification" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.muteFirstRecoveryNotification"></a>

```csharp
public object MuteFirstRecoveryNotification { get; set; }
```

- *Type:* object

When true the first recovery notification during the downtime will be muted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/downtime#mute_first_recovery_notification Downtime#mute_first_recovery_notification}

---

##### `Recurrence`<sup>Optional</sup> <a name="Recurrence" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.recurrence"></a>

```csharp
public DowntimeRecurrence Recurrence { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence">DowntimeRecurrence</a>

recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/downtime#recurrence Downtime#recurrence}

---

##### `Start`<sup>Optional</sup> <a name="Start" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.start"></a>

```csharp
public double Start { get; set; }
```

- *Type:* double

Specify when this downtime should start. Accepts a Unix timestamp in UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/downtime#start Downtime#start}

---

##### `StartDate`<sup>Optional</sup> <a name="StartDate" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.startDate"></a>

```csharp
public string StartDate { get; set; }
```

- *Type:* string

String representing date and time to start the downtime in RFC3339 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/downtime#start_date Downtime#start_date}

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.timezone"></a>

```csharp
public string Timezone { get; set; }
```

- *Type:* string

The timezone for the downtime, default UTC. Follows IANA timezone database identifiers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/downtime#timezone Downtime#timezone}

---

### DowntimeRecurrence <a name="DowntimeRecurrence" id="@cdktf/provider-datadog.downtime.DowntimeRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.downtime.DowntimeRecurrence.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DowntimeRecurrence {
    string Type,
    double Period = null,
    string Rrule = null,
    double UntilDate = null,
    double UntilOccurrences = null,
    string[] WeekDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.type">Type</a></code> | <code>string</code> | One of `days`, `weeks`, `months`, `years`, or `rrule`. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.period">Period</a></code> | <code>double</code> | How often to repeat as an integer. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.rrule">Rrule</a></code> | <code>string</code> | The RRULE standard for defining recurring events. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.untilDate">UntilDate</a></code> | <code>double</code> | The date at which the recurrence should end as a POSIX timestamp. `until_occurrences` and `until_date` are mutually exclusive. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.untilOccurrences">UntilOccurrences</a></code> | <code>double</code> | How many times the downtime will be rescheduled. `until_occurrences` and `until_date` are mutually exclusive. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.weekDays">WeekDays</a></code> | <code>string[]</code> | A list of week days to repeat on. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

One of `days`, `weeks`, `months`, `years`, or `rrule`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/downtime#type Downtime#type}

---

##### `Period`<sup>Optional</sup> <a name="Period" id="@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.period"></a>

```csharp
public double Period { get; set; }
```

- *Type:* double

How often to repeat as an integer.

For example to repeat every 3 days, select a `type` of `days` and a `period` of `3`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/downtime#period Downtime#period}

---

##### `Rrule`<sup>Optional</sup> <a name="Rrule" id="@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.rrule"></a>

```csharp
public string Rrule { get; set; }
```

- *Type:* string

The RRULE standard for defining recurring events.

For example, to have a recurring event on the first day of each month, use `FREQ=MONTHLY;INTERVAL=1`. Most common rrule options from the iCalendar Spec are supported. Attributes specifying the duration in RRULE are not supported (for example, `DTSTART`, `DTEND`, `DURATION`). Only applicable when `type` is `rrule`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/downtime#rrule Downtime#rrule}

---

##### `UntilDate`<sup>Optional</sup> <a name="UntilDate" id="@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.untilDate"></a>

```csharp
public double UntilDate { get; set; }
```

- *Type:* double

The date at which the recurrence should end as a POSIX timestamp. `until_occurrences` and `until_date` are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/downtime#until_date Downtime#until_date}

---

##### `UntilOccurrences`<sup>Optional</sup> <a name="UntilOccurrences" id="@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.untilOccurrences"></a>

```csharp
public double UntilOccurrences { get; set; }
```

- *Type:* double

How many times the downtime will be rescheduled. `until_occurrences` and `until_date` are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/downtime#until_occurrences Downtime#until_occurrences}

---

##### `WeekDays`<sup>Optional</sup> <a name="WeekDays" id="@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.weekDays"></a>

```csharp
public string[] WeekDays { get; set; }
```

- *Type:* string[]

A list of week days to repeat on.

Choose from: `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat` or `Sun`. Only applicable when `type` is `weeks`. First letter must be capitalized.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/downtime#week_days Downtime#week_days}

---

## Classes <a name="Classes" id="Classes"></a>

### DowntimeRecurrenceOutputReference <a name="DowntimeRecurrenceOutputReference" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DowntimeRecurrenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetPeriod">ResetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetRrule">ResetRrule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetUntilDate">ResetUntilDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetUntilOccurrences">ResetUntilOccurrences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetWeekDays">ResetWeekDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPeriod` <a name="ResetPeriod" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetPeriod"></a>

```csharp
private void ResetPeriod()
```

##### `ResetRrule` <a name="ResetRrule" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetRrule"></a>

```csharp
private void ResetRrule()
```

##### `ResetUntilDate` <a name="ResetUntilDate" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetUntilDate"></a>

```csharp
private void ResetUntilDate()
```

##### `ResetUntilOccurrences` <a name="ResetUntilOccurrences" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetUntilOccurrences"></a>

```csharp
private void ResetUntilOccurrences()
```

##### `ResetWeekDays` <a name="ResetWeekDays" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetWeekDays"></a>

```csharp
private void ResetWeekDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.periodInput">PeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.rruleInput">RruleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.untilDateInput">UntilDateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.untilOccurrencesInput">UntilOccurrencesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.weekDaysInput">WeekDaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.period">Period</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.rrule">Rrule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.untilDate">UntilDate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.untilOccurrences">UntilOccurrences</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.weekDays">WeekDays</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence">DowntimeRecurrence</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.periodInput"></a>

```csharp
public double PeriodInput { get; }
```

- *Type:* double

---

##### `RruleInput`<sup>Optional</sup> <a name="RruleInput" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.rruleInput"></a>

```csharp
public string RruleInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UntilDateInput`<sup>Optional</sup> <a name="UntilDateInput" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.untilDateInput"></a>

```csharp
public double UntilDateInput { get; }
```

- *Type:* double

---

##### `UntilOccurrencesInput`<sup>Optional</sup> <a name="UntilOccurrencesInput" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.untilOccurrencesInput"></a>

```csharp
public double UntilOccurrencesInput { get; }
```

- *Type:* double

---

##### `WeekDaysInput`<sup>Optional</sup> <a name="WeekDaysInput" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.weekDaysInput"></a>

```csharp
public string[] WeekDaysInput { get; }
```

- *Type:* string[]

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.period"></a>

```csharp
public double Period { get; }
```

- *Type:* double

---

##### `Rrule`<sup>Required</sup> <a name="Rrule" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.rrule"></a>

```csharp
public string Rrule { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UntilDate`<sup>Required</sup> <a name="UntilDate" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.untilDate"></a>

```csharp
public double UntilDate { get; }
```

- *Type:* double

---

##### `UntilOccurrences`<sup>Required</sup> <a name="UntilOccurrences" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.untilOccurrences"></a>

```csharp
public double UntilOccurrences { get; }
```

- *Type:* double

---

##### `WeekDays`<sup>Required</sup> <a name="WeekDays" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.weekDays"></a>

```csharp
public string[] WeekDays { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.internalValue"></a>

```csharp
public DowntimeRecurrence InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence">DowntimeRecurrence</a>

---



