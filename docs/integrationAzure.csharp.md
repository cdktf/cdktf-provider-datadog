# `integrationAzure` Submodule <a name="`integrationAzure` Submodule" id="@cdktf/provider-datadog.integrationAzure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationAzure <a name="IntegrationAzure" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/integration_azure datadog_integration_azure}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new IntegrationAzure(Construct Scope, string Id, IntegrationAzureConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig">IntegrationAzureConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig">IntegrationAzureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetAppServicePlanFilters">ResetAppServicePlanFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetAutomute">ResetAutomute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetContainerAppFilters">ResetContainerAppFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetCspmEnabled">ResetCspmEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetCustomMetricsEnabled">ResetCustomMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetHostFilters">ResetHostFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetAppServicePlanFilters` <a name="ResetAppServicePlanFilters" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetAppServicePlanFilters"></a>

```csharp
private void ResetAppServicePlanFilters()
```

##### `ResetAutomute` <a name="ResetAutomute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetAutomute"></a>

```csharp
private void ResetAutomute()
```

##### `ResetContainerAppFilters` <a name="ResetContainerAppFilters" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetContainerAppFilters"></a>

```csharp
private void ResetContainerAppFilters()
```

##### `ResetCspmEnabled` <a name="ResetCspmEnabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetCspmEnabled"></a>

```csharp
private void ResetCspmEnabled()
```

##### `ResetCustomMetricsEnabled` <a name="ResetCustomMetricsEnabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetCustomMetricsEnabled"></a>

```csharp
private void ResetCustomMetricsEnabled()
```

##### `ResetHostFilters` <a name="ResetHostFilters" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetHostFilters"></a>

```csharp
private void ResetHostFilters()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationAzure resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

IntegrationAzure.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

IntegrationAzure.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

IntegrationAzure.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

IntegrationAzure.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IntegrationAzure resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IntegrationAzure to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IntegrationAzure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/integration_azure#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationAzure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.appServicePlanFiltersInput">AppServicePlanFiltersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.automuteInput">AutomuteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.containerAppFiltersInput">ContainerAppFiltersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.cspmEnabledInput">CspmEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.customMetricsEnabledInput">CustomMetricsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.hostFiltersInput">HostFiltersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.tenantNameInput">TenantNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.appServicePlanFilters">AppServicePlanFilters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.automute">Automute</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.containerAppFilters">ContainerAppFilters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.cspmEnabled">CspmEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.customMetricsEnabled">CustomMetricsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.hostFilters">HostFilters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.tenantName">TenantName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AppServicePlanFiltersInput`<sup>Optional</sup> <a name="AppServicePlanFiltersInput" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.appServicePlanFiltersInput"></a>

```csharp
public string AppServicePlanFiltersInput { get; }
```

- *Type:* string

---

##### `AutomuteInput`<sup>Optional</sup> <a name="AutomuteInput" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.automuteInput"></a>

```csharp
public object AutomuteInput { get; }
```

- *Type:* object

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `ContainerAppFiltersInput`<sup>Optional</sup> <a name="ContainerAppFiltersInput" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.containerAppFiltersInput"></a>

```csharp
public string ContainerAppFiltersInput { get; }
```

- *Type:* string

---

##### `CspmEnabledInput`<sup>Optional</sup> <a name="CspmEnabledInput" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.cspmEnabledInput"></a>

```csharp
public object CspmEnabledInput { get; }
```

- *Type:* object

---

##### `CustomMetricsEnabledInput`<sup>Optional</sup> <a name="CustomMetricsEnabledInput" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.customMetricsEnabledInput"></a>

```csharp
public object CustomMetricsEnabledInput { get; }
```

- *Type:* object

---

##### `HostFiltersInput`<sup>Optional</sup> <a name="HostFiltersInput" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.hostFiltersInput"></a>

```csharp
public string HostFiltersInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TenantNameInput`<sup>Optional</sup> <a name="TenantNameInput" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.tenantNameInput"></a>

```csharp
public string TenantNameInput { get; }
```

- *Type:* string

---

##### `AppServicePlanFilters`<sup>Required</sup> <a name="AppServicePlanFilters" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.appServicePlanFilters"></a>

```csharp
public string AppServicePlanFilters { get; }
```

- *Type:* string

---

##### `Automute`<sup>Required</sup> <a name="Automute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.automute"></a>

```csharp
public object Automute { get; }
```

- *Type:* object

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `ContainerAppFilters`<sup>Required</sup> <a name="ContainerAppFilters" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.containerAppFilters"></a>

```csharp
public string ContainerAppFilters { get; }
```

- *Type:* string

---

##### `CspmEnabled`<sup>Required</sup> <a name="CspmEnabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.cspmEnabled"></a>

```csharp
public object CspmEnabled { get; }
```

- *Type:* object

---

##### `CustomMetricsEnabled`<sup>Required</sup> <a name="CustomMetricsEnabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.customMetricsEnabled"></a>

```csharp
public object CustomMetricsEnabled { get; }
```

- *Type:* object

---

##### `HostFilters`<sup>Required</sup> <a name="HostFilters" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.hostFilters"></a>

```csharp
public string HostFilters { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TenantName`<sup>Required</sup> <a name="TenantName" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.tenantName"></a>

```csharp
public string TenantName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationAzureConfig <a name="IntegrationAzureConfig" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new IntegrationAzureConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClientId,
    string ClientSecret,
    string TenantName,
    string AppServicePlanFilters = null,
    object Automute = null,
    string ContainerAppFilters = null,
    object CspmEnabled = null,
    object CustomMetricsEnabled = null,
    string HostFilters = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.clientId">ClientId</a></code> | <code>string</code> | Your Azure web application ID. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.clientSecret">ClientSecret</a></code> | <code>string</code> | (Required for Initial Creation) Your Azure web application secret key. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.tenantName">TenantName</a></code> | <code>string</code> | Your Azure Active Directory ID. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.appServicePlanFilters">AppServicePlanFilters</a></code> | <code>string</code> | This comma-separated list of tags (in the form `key:value,key:value`) defines a filter that Datadog uses when collecting metrics from Azure App Service Plans. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.automute">Automute</a></code> | <code>object</code> | Silence monitors for expected Azure VM shutdowns. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.containerAppFilters">ContainerAppFilters</a></code> | <code>string</code> | This comma-separated list of tags (in the form `key:value,key:value`) defines a filter that Datadog uses when collecting metrics from Azure Container Apps. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.cspmEnabled">CspmEnabled</a></code> | <code>object</code> | Enable Cloud Security Management Misconfigurations for your organization. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.customMetricsEnabled">CustomMetricsEnabled</a></code> | <code>object</code> | Enable custom metrics for your organization. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.hostFilters">HostFilters</a></code> | <code>string</code> | String of host tag(s) (in the form `key:value,key:value`) defines a filter that Datadog will use when collecting metrics from Azure. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/integration_azure#id IntegrationAzure#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Your Azure web application ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/integration_azure#client_id IntegrationAzure#client_id}

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

(Required for Initial Creation) Your Azure web application secret key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/integration_azure#client_secret IntegrationAzure#client_secret}

---

##### `TenantName`<sup>Required</sup> <a name="TenantName" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.tenantName"></a>

```csharp
public string TenantName { get; set; }
```

- *Type:* string

Your Azure Active Directory ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/integration_azure#tenant_name IntegrationAzure#tenant_name}

---

##### `AppServicePlanFilters`<sup>Optional</sup> <a name="AppServicePlanFilters" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.appServicePlanFilters"></a>

```csharp
public string AppServicePlanFilters { get; set; }
```

- *Type:* string

This comma-separated list of tags (in the form `key:value,key:value`) defines a filter that Datadog uses when collecting metrics from Azure App Service Plans.

Only App Service Plans that match one of the defined tags are imported into Datadog. The rest, including the apps and functions running on them, are ignored. This also filters the metrics for any App or Function running on the App Service Plan(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/integration_azure#app_service_plan_filters IntegrationAzure#app_service_plan_filters}

---

##### `Automute`<sup>Optional</sup> <a name="Automute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.automute"></a>

```csharp
public object Automute { get; set; }
```

- *Type:* object

Silence monitors for expected Azure VM shutdowns. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/integration_azure#automute IntegrationAzure#automute}

---

##### `ContainerAppFilters`<sup>Optional</sup> <a name="ContainerAppFilters" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.containerAppFilters"></a>

```csharp
public string ContainerAppFilters { get; set; }
```

- *Type:* string

This comma-separated list of tags (in the form `key:value,key:value`) defines a filter that Datadog uses when collecting metrics from Azure Container Apps.

Only Container Apps that match one of the defined tags are imported into Datadog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/integration_azure#container_app_filters IntegrationAzure#container_app_filters}

---

##### `CspmEnabled`<sup>Optional</sup> <a name="CspmEnabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.cspmEnabled"></a>

```csharp
public object CspmEnabled { get; set; }
```

- *Type:* object

Enable Cloud Security Management Misconfigurations for your organization. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/integration_azure#cspm_enabled IntegrationAzure#cspm_enabled}

---

##### `CustomMetricsEnabled`<sup>Optional</sup> <a name="CustomMetricsEnabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.customMetricsEnabled"></a>

```csharp
public object CustomMetricsEnabled { get; set; }
```

- *Type:* object

Enable custom metrics for your organization. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/integration_azure#custom_metrics_enabled IntegrationAzure#custom_metrics_enabled}

---

##### `HostFilters`<sup>Optional</sup> <a name="HostFilters" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.hostFilters"></a>

```csharp
public string HostFilters { get; set; }
```

- *Type:* string

String of host tag(s) (in the form `key:value,key:value`) defines a filter that Datadog will use when collecting metrics from Azure.

Limit the Azure instances that are pulled into Datadog by using tags. Only hosts that match one of the defined tags are imported into Datadog. e.x. `env:production,deploymentgroup:red`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/integration_azure#host_filters IntegrationAzure#host_filters}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/integration_azure#id IntegrationAzure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



