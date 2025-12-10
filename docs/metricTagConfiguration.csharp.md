# `metricTagConfiguration` Submodule <a name="`metricTagConfiguration` Submodule" id="@cdktf/provider-datadog.metricTagConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MetricTagConfiguration <a name="MetricTagConfiguration" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/metric_tag_configuration datadog_metric_tag_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new MetricTagConfiguration(Construct Scope, string Id, MetricTagConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig">MetricTagConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig">MetricTagConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.putAggregations">PutAggregations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.resetAggregations">ResetAggregations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.resetExcludeTagsMode">ResetExcludeTagsMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.resetIncludePercentiles">ResetIncludePercentiles</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAggregations` <a name="PutAggregations" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.putAggregations"></a>

```csharp
private void PutAggregations(IResolvable|MetricTagConfigurationAggregations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.putAggregations.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations">MetricTagConfigurationAggregations</a>[]

---

##### `ResetAggregations` <a name="ResetAggregations" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.resetAggregations"></a>

```csharp
private void ResetAggregations()
```

##### `ResetExcludeTagsMode` <a name="ResetExcludeTagsMode" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.resetExcludeTagsMode"></a>

```csharp
private void ResetExcludeTagsMode()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIncludePercentiles` <a name="ResetIncludePercentiles" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.resetIncludePercentiles"></a>

```csharp
private void ResetIncludePercentiles()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MetricTagConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

MetricTagConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

MetricTagConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

MetricTagConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

MetricTagConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MetricTagConfiguration resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MetricTagConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MetricTagConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/metric_tag_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MetricTagConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.aggregations">Aggregations</a></code> | <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList">MetricTagConfigurationAggregationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.aggregationsInput">AggregationsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations">MetricTagConfigurationAggregations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.excludeTagsModeInput">ExcludeTagsModeInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.includePercentilesInput">IncludePercentilesInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.metricNameInput">MetricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.metricTypeInput">MetricTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.excludeTagsMode">ExcludeTagsMode</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.includePercentiles">IncludePercentiles</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.metricName">MetricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.metricType">MetricType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Aggregations`<sup>Required</sup> <a name="Aggregations" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.aggregations"></a>

```csharp
public MetricTagConfigurationAggregationsList Aggregations { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList">MetricTagConfigurationAggregationsList</a>

---

##### `AggregationsInput`<sup>Optional</sup> <a name="AggregationsInput" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.aggregationsInput"></a>

```csharp
public IResolvable|MetricTagConfigurationAggregations[] AggregationsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations">MetricTagConfigurationAggregations</a>[]

---

##### `ExcludeTagsModeInput`<sup>Optional</sup> <a name="ExcludeTagsModeInput" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.excludeTagsModeInput"></a>

```csharp
public bool|IResolvable ExcludeTagsModeInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludePercentilesInput`<sup>Optional</sup> <a name="IncludePercentilesInput" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.includePercentilesInput"></a>

```csharp
public bool|IResolvable IncludePercentilesInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.metricNameInput"></a>

```csharp
public string MetricNameInput { get; }
```

- *Type:* string

---

##### `MetricTypeInput`<sup>Optional</sup> <a name="MetricTypeInput" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.metricTypeInput"></a>

```csharp
public string MetricTypeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `ExcludeTagsMode`<sup>Required</sup> <a name="ExcludeTagsMode" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.excludeTagsMode"></a>

```csharp
public bool|IResolvable ExcludeTagsMode { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IncludePercentiles`<sup>Required</sup> <a name="IncludePercentiles" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.includePercentiles"></a>

```csharp
public bool|IResolvable IncludePercentiles { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.metricName"></a>

```csharp
public string MetricName { get; }
```

- *Type:* string

---

##### `MetricType`<sup>Required</sup> <a name="MetricType" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.metricType"></a>

```csharp
public string MetricType { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MetricTagConfigurationAggregations <a name="MetricTagConfigurationAggregations" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new MetricTagConfigurationAggregations {
    string Space,
    string Time
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations.property.space">Space</a></code> | <code>string</code> | A space aggregation for use in query. Valid values are `avg`, `max`, `min`, `sum`. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations.property.time">Time</a></code> | <code>string</code> | A time aggregation for use in query. Valid values are `avg`, `count`, `max`, `min`, `sum`. |

---

##### `Space`<sup>Required</sup> <a name="Space" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations.property.space"></a>

```csharp
public string Space { get; set; }
```

- *Type:* string

A space aggregation for use in query. Valid values are `avg`, `max`, `min`, `sum`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/metric_tag_configuration#space MetricTagConfiguration#space}

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations.property.time"></a>

```csharp
public string Time { get; set; }
```

- *Type:* string

A time aggregation for use in query. Valid values are `avg`, `count`, `max`, `min`, `sum`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/metric_tag_configuration#time MetricTagConfiguration#time}

---

### MetricTagConfigurationConfig <a name="MetricTagConfigurationConfig" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new MetricTagConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string MetricName,
    string MetricType,
    string[] Tags,
    IResolvable|MetricTagConfigurationAggregations[] Aggregations = null,
    bool|IResolvable ExcludeTagsMode = null,
    string Id = null,
    bool|IResolvable IncludePercentiles = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.metricName">MetricName</a></code> | <code>string</code> | The metric name for this resource. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.metricType">MetricType</a></code> | <code>string</code> | The metric's type. This field can't be updated after creation. Valid values are `gauge`, `count`, `rate`, `distribution`. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.tags">Tags</a></code> | <code>string[]</code> | A list of tag keys that will be queryable for your metric. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.aggregations">Aggregations</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations">MetricTagConfigurationAggregations</a>[]</code> | aggregations block. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.excludeTagsMode">ExcludeTagsMode</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Toggle to include/exclude tags as queryable for your metric. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/metric_tag_configuration#id MetricTagConfiguration#id}. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.includePercentiles">IncludePercentiles</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Toggle to include/exclude percentiles for a distribution metric. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.metricName"></a>

```csharp
public string MetricName { get; set; }
```

- *Type:* string

The metric name for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/metric_tag_configuration#metric_name MetricTagConfiguration#metric_name}

---

##### `MetricType`<sup>Required</sup> <a name="MetricType" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.metricType"></a>

```csharp
public string MetricType { get; set; }
```

- *Type:* string

The metric's type. This field can't be updated after creation. Valid values are `gauge`, `count`, `rate`, `distribution`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/metric_tag_configuration#metric_type MetricTagConfiguration#metric_type}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

A list of tag keys that will be queryable for your metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/metric_tag_configuration#tags MetricTagConfiguration#tags}

---

##### `Aggregations`<sup>Optional</sup> <a name="Aggregations" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.aggregations"></a>

```csharp
public IResolvable|MetricTagConfigurationAggregations[] Aggregations { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations">MetricTagConfigurationAggregations</a>[]

aggregations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/metric_tag_configuration#aggregations MetricTagConfiguration#aggregations}

---

##### `ExcludeTagsMode`<sup>Optional</sup> <a name="ExcludeTagsMode" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.excludeTagsMode"></a>

```csharp
public bool|IResolvable ExcludeTagsMode { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Toggle to include/exclude tags as queryable for your metric.

Can only be applied to metrics that have one or more tags configured. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/metric_tag_configuration#exclude_tags_mode MetricTagConfiguration#exclude_tags_mode}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/metric_tag_configuration#id MetricTagConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludePercentiles`<sup>Optional</sup> <a name="IncludePercentiles" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.includePercentiles"></a>

```csharp
public bool|IResolvable IncludePercentiles { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Toggle to include/exclude percentiles for a distribution metric.

Defaults to false. Can only be applied to metrics that have a `metric_type` of distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/metric_tag_configuration#include_percentiles MetricTagConfiguration#include_percentiles}

---

## Classes <a name="Classes" id="Classes"></a>

### MetricTagConfigurationAggregationsList <a name="MetricTagConfigurationAggregationsList" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new MetricTagConfigurationAggregationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.get"></a>

```csharp
private MetricTagConfigurationAggregationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations">MetricTagConfigurationAggregations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.property.internalValue"></a>

```csharp
public IResolvable|MetricTagConfigurationAggregations[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations">MetricTagConfigurationAggregations</a>[]

---


### MetricTagConfigurationAggregationsOutputReference <a name="MetricTagConfigurationAggregationsOutputReference" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new MetricTagConfigurationAggregationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.spaceInput">SpaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.timeInput">TimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.space">Space</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.time">Time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations">MetricTagConfigurationAggregations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SpaceInput`<sup>Optional</sup> <a name="SpaceInput" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.spaceInput"></a>

```csharp
public string SpaceInput { get; }
```

- *Type:* string

---

##### `TimeInput`<sup>Optional</sup> <a name="TimeInput" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.timeInput"></a>

```csharp
public string TimeInput { get; }
```

- *Type:* string

---

##### `Space`<sup>Required</sup> <a name="Space" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.space"></a>

```csharp
public string Space { get; }
```

- *Type:* string

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.time"></a>

```csharp
public string Time { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MetricTagConfigurationAggregations InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations">MetricTagConfigurationAggregations</a>

---



