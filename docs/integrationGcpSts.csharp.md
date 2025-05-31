# `integrationGcpSts` Submodule <a name="`integrationGcpSts` Submodule" id="@cdktf/provider-datadog.integrationGcpSts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationGcpSts <a name="IntegrationGcpSts" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/integration_gcp_sts datadog_integration_gcp_sts}.

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
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
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
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.putMetricNamespaceConfigs">PutMetricNamespaceConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetAccountTags">ResetAccountTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetAutomute">ResetAutomute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetCloudRunRevisionFilters">ResetCloudRunRevisionFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetHostFilters">ResetHostFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetIsCspmEnabled">ResetIsCspmEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetIsPerProjectQuotaEnabled">ResetIsPerProjectQuotaEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetIsResourceChangeCollectionEnabled">ResetIsResourceChangeCollectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetIsSecurityCommandCenterEnabled">ResetIsSecurityCommandCenterEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetMetricNamespaceConfigs">ResetMetricNamespaceConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetResourceCollectionEnabled">ResetResourceCollectionEnabled</a></code> | *No description.* |

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

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

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

##### `PutMetricNamespaceConfigs` <a name="PutMetricNamespaceConfigs" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.putMetricNamespaceConfigs"></a>

```csharp
private void PutMetricNamespaceConfigs(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.putMetricNamespaceConfigs.parameter.value"></a>

- *Type:* object

---

##### `ResetAccountTags` <a name="ResetAccountTags" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetAccountTags"></a>

```csharp
private void ResetAccountTags()
```

##### `ResetAutomute` <a name="ResetAutomute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetAutomute"></a>

```csharp
private void ResetAutomute()
```

##### `ResetCloudRunRevisionFilters` <a name="ResetCloudRunRevisionFilters" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetCloudRunRevisionFilters"></a>

```csharp
private void ResetCloudRunRevisionFilters()
```

##### `ResetHostFilters` <a name="ResetHostFilters" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetHostFilters"></a>

```csharp
private void ResetHostFilters()
```

##### `ResetIsCspmEnabled` <a name="ResetIsCspmEnabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetIsCspmEnabled"></a>

```csharp
private void ResetIsCspmEnabled()
```

##### `ResetIsPerProjectQuotaEnabled` <a name="ResetIsPerProjectQuotaEnabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetIsPerProjectQuotaEnabled"></a>

```csharp
private void ResetIsPerProjectQuotaEnabled()
```

##### `ResetIsResourceChangeCollectionEnabled` <a name="ResetIsResourceChangeCollectionEnabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetIsResourceChangeCollectionEnabled"></a>

```csharp
private void ResetIsResourceChangeCollectionEnabled()
```

##### `ResetIsSecurityCommandCenterEnabled` <a name="ResetIsSecurityCommandCenterEnabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetIsSecurityCommandCenterEnabled"></a>

```csharp
private void ResetIsSecurityCommandCenterEnabled()
```

##### `ResetMetricNamespaceConfigs` <a name="ResetMetricNamespaceConfigs" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetMetricNamespaceConfigs"></a>

```csharp
private void ResetMetricNamespaceConfigs()
```

##### `ResetResourceCollectionEnabled` <a name="ResetResourceCollectionEnabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetResourceCollectionEnabled"></a>

```csharp
private void ResetResourceCollectionEnabled()
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

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/integration_gcp_sts#import import section} in the documentation of this resource for the id to use

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
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.metricNamespaceConfigs">MetricNamespaceConfigs</a></code> | <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList">IntegrationGcpStsMetricNamespaceConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.accountTagsInput">AccountTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.automuteInput">AutomuteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.clientEmailInput">ClientEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.cloudRunRevisionFiltersInput">CloudRunRevisionFiltersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.hostFiltersInput">HostFiltersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.isCspmEnabledInput">IsCspmEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.isPerProjectQuotaEnabledInput">IsPerProjectQuotaEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.isResourceChangeCollectionEnabledInput">IsResourceChangeCollectionEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.isSecurityCommandCenterEnabledInput">IsSecurityCommandCenterEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.metricNamespaceConfigsInput">MetricNamespaceConfigsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.resourceCollectionEnabledInput">ResourceCollectionEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.accountTags">AccountTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.automute">Automute</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.clientEmail">ClientEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.cloudRunRevisionFilters">CloudRunRevisionFilters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.hostFilters">HostFilters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.isCspmEnabled">IsCspmEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.isPerProjectQuotaEnabled">IsPerProjectQuotaEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.isResourceChangeCollectionEnabled">IsResourceChangeCollectionEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.isSecurityCommandCenterEnabled">IsSecurityCommandCenterEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.resourceCollectionEnabled">ResourceCollectionEnabled</a></code> | <code>object</code> | *No description.* |

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

##### `MetricNamespaceConfigs`<sup>Required</sup> <a name="MetricNamespaceConfigs" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.metricNamespaceConfigs"></a>

```csharp
public IntegrationGcpStsMetricNamespaceConfigsList MetricNamespaceConfigs { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList">IntegrationGcpStsMetricNamespaceConfigsList</a>

---

##### `AccountTagsInput`<sup>Optional</sup> <a name="AccountTagsInput" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.accountTagsInput"></a>

```csharp
public string[] AccountTagsInput { get; }
```

- *Type:* string[]

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

##### `CloudRunRevisionFiltersInput`<sup>Optional</sup> <a name="CloudRunRevisionFiltersInput" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.cloudRunRevisionFiltersInput"></a>

```csharp
public string[] CloudRunRevisionFiltersInput { get; }
```

- *Type:* string[]

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

##### `IsPerProjectQuotaEnabledInput`<sup>Optional</sup> <a name="IsPerProjectQuotaEnabledInput" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.isPerProjectQuotaEnabledInput"></a>

```csharp
public object IsPerProjectQuotaEnabledInput { get; }
```

- *Type:* object

---

##### `IsResourceChangeCollectionEnabledInput`<sup>Optional</sup> <a name="IsResourceChangeCollectionEnabledInput" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.isResourceChangeCollectionEnabledInput"></a>

```csharp
public object IsResourceChangeCollectionEnabledInput { get; }
```

- *Type:* object

---

##### `IsSecurityCommandCenterEnabledInput`<sup>Optional</sup> <a name="IsSecurityCommandCenterEnabledInput" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.isSecurityCommandCenterEnabledInput"></a>

```csharp
public object IsSecurityCommandCenterEnabledInput { get; }
```

- *Type:* object

---

##### `MetricNamespaceConfigsInput`<sup>Optional</sup> <a name="MetricNamespaceConfigsInput" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.metricNamespaceConfigsInput"></a>

```csharp
public object MetricNamespaceConfigsInput { get; }
```

- *Type:* object

---

##### `ResourceCollectionEnabledInput`<sup>Optional</sup> <a name="ResourceCollectionEnabledInput" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.resourceCollectionEnabledInput"></a>

```csharp
public object ResourceCollectionEnabledInput { get; }
```

- *Type:* object

---

##### `AccountTags`<sup>Required</sup> <a name="AccountTags" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.accountTags"></a>

```csharp
public string[] AccountTags { get; }
```

- *Type:* string[]

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

##### `CloudRunRevisionFilters`<sup>Required</sup> <a name="CloudRunRevisionFilters" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.cloudRunRevisionFilters"></a>

```csharp
public string[] CloudRunRevisionFilters { get; }
```

- *Type:* string[]

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

##### `IsPerProjectQuotaEnabled`<sup>Required</sup> <a name="IsPerProjectQuotaEnabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.isPerProjectQuotaEnabled"></a>

```csharp
public object IsPerProjectQuotaEnabled { get; }
```

- *Type:* object

---

##### `IsResourceChangeCollectionEnabled`<sup>Required</sup> <a name="IsResourceChangeCollectionEnabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.isResourceChangeCollectionEnabled"></a>

```csharp
public object IsResourceChangeCollectionEnabled { get; }
```

- *Type:* object

---

##### `IsSecurityCommandCenterEnabled`<sup>Required</sup> <a name="IsSecurityCommandCenterEnabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.isSecurityCommandCenterEnabled"></a>

```csharp
public object IsSecurityCommandCenterEnabled { get; }
```

- *Type:* object

---

##### `ResourceCollectionEnabled`<sup>Required</sup> <a name="ResourceCollectionEnabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.resourceCollectionEnabled"></a>

```csharp
public object ResourceCollectionEnabled { get; }
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
    string[] AccountTags = null,
    object Automute = null,
    string[] CloudRunRevisionFilters = null,
    string[] HostFilters = null,
    object IsCspmEnabled = null,
    object IsPerProjectQuotaEnabled = null,
    object IsResourceChangeCollectionEnabled = null,
    object IsSecurityCommandCenterEnabled = null,
    object MetricNamespaceConfigs = null,
    object ResourceCollectionEnabled = null
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
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.accountTags">AccountTags</a></code> | <code>string[]</code> | Tags to be associated with GCP metrics and service checks from your account. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.automute">Automute</a></code> | <code>object</code> | Silence monitors for expected GCE instance shutdowns. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.cloudRunRevisionFilters">CloudRunRevisionFilters</a></code> | <code>string[]</code> | Tags to filter which Cloud Run revisions are imported into Datadog. Only revisions that meet specified criteria are monitored. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.hostFilters">HostFilters</a></code> | <code>string[]</code> | Your Host Filters. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.isCspmEnabled">IsCspmEnabled</a></code> | <code>object</code> | Whether Datadog collects cloud security posture management resources from your GCP project. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.isPerProjectQuotaEnabled">IsPerProjectQuotaEnabled</a></code> | <code>object</code> | When enabled, Datadog includes the `X-Goog-User-Project` header to attribute Google Cloud billing and quota usage to the monitored project instead of the default service account project. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.isResourceChangeCollectionEnabled">IsResourceChangeCollectionEnabled</a></code> | <code>object</code> | When enabled, Datadog scans for all resource change data in your Google Cloud environment. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.isSecurityCommandCenterEnabled">IsSecurityCommandCenterEnabled</a></code> | <code>object</code> | When enabled, Datadog will attempt to collect Security Command Center Findings. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.metricNamespaceConfigs">MetricNamespaceConfigs</a></code> | <code>object</code> | Configuration for a GCP metric namespace. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.resourceCollectionEnabled">ResourceCollectionEnabled</a></code> | <code>object</code> | When enabled, Datadog scans for all resources in your GCP environment. |

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/integration_gcp_sts#client_email IntegrationGcpSts#client_email}

---

##### `AccountTags`<sup>Optional</sup> <a name="AccountTags" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.accountTags"></a>

```csharp
public string[] AccountTags { get; set; }
```

- *Type:* string[]

Tags to be associated with GCP metrics and service checks from your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/integration_gcp_sts#account_tags IntegrationGcpSts#account_tags}

---

##### `Automute`<sup>Optional</sup> <a name="Automute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.automute"></a>

```csharp
public object Automute { get; set; }
```

- *Type:* object

Silence monitors for expected GCE instance shutdowns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/integration_gcp_sts#automute IntegrationGcpSts#automute}

---

##### `CloudRunRevisionFilters`<sup>Optional</sup> <a name="CloudRunRevisionFilters" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.cloudRunRevisionFilters"></a>

```csharp
public string[] CloudRunRevisionFilters { get; set; }
```

- *Type:* string[]

Tags to filter which Cloud Run revisions are imported into Datadog. Only revisions that meet specified criteria are monitored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/integration_gcp_sts#cloud_run_revision_filters IntegrationGcpSts#cloud_run_revision_filters}

---

##### `HostFilters`<sup>Optional</sup> <a name="HostFilters" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.hostFilters"></a>

```csharp
public string[] HostFilters { get; set; }
```

- *Type:* string[]

Your Host Filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/integration_gcp_sts#host_filters IntegrationGcpSts#host_filters}

---

##### `IsCspmEnabled`<sup>Optional</sup> <a name="IsCspmEnabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.isCspmEnabled"></a>

```csharp
public object IsCspmEnabled { get; set; }
```

- *Type:* object

Whether Datadog collects cloud security posture management resources from your GCP project.

If enabled, requires `resource_collection_enabled` to also be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/integration_gcp_sts#is_cspm_enabled IntegrationGcpSts#is_cspm_enabled}

---

##### `IsPerProjectQuotaEnabled`<sup>Optional</sup> <a name="IsPerProjectQuotaEnabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.isPerProjectQuotaEnabled"></a>

```csharp
public object IsPerProjectQuotaEnabled { get; set; }
```

- *Type:* object

When enabled, Datadog includes the `X-Goog-User-Project` header to attribute Google Cloud billing and quota usage to the monitored project instead of the default service account project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/integration_gcp_sts#is_per_project_quota_enabled IntegrationGcpSts#is_per_project_quota_enabled}

---

##### `IsResourceChangeCollectionEnabled`<sup>Optional</sup> <a name="IsResourceChangeCollectionEnabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.isResourceChangeCollectionEnabled"></a>

```csharp
public object IsResourceChangeCollectionEnabled { get; set; }
```

- *Type:* object

When enabled, Datadog scans for all resource change data in your Google Cloud environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/integration_gcp_sts#is_resource_change_collection_enabled IntegrationGcpSts#is_resource_change_collection_enabled}

---

##### `IsSecurityCommandCenterEnabled`<sup>Optional</sup> <a name="IsSecurityCommandCenterEnabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.isSecurityCommandCenterEnabled"></a>

```csharp
public object IsSecurityCommandCenterEnabled { get; set; }
```

- *Type:* object

When enabled, Datadog will attempt to collect Security Command Center Findings.

Note: This requires additional permissions on the service account. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/integration_gcp_sts#is_security_command_center_enabled IntegrationGcpSts#is_security_command_center_enabled}

---

##### `MetricNamespaceConfigs`<sup>Optional</sup> <a name="MetricNamespaceConfigs" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.metricNamespaceConfigs"></a>

```csharp
public object MetricNamespaceConfigs { get; set; }
```

- *Type:* object

Configuration for a GCP metric namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/integration_gcp_sts#metric_namespace_configs IntegrationGcpSts#metric_namespace_configs}

---

##### `ResourceCollectionEnabled`<sup>Optional</sup> <a name="ResourceCollectionEnabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.resourceCollectionEnabled"></a>

```csharp
public object ResourceCollectionEnabled { get; set; }
```

- *Type:* object

When enabled, Datadog scans for all resources in your GCP environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/integration_gcp_sts#resource_collection_enabled IntegrationGcpSts#resource_collection_enabled}

---

### IntegrationGcpStsMetricNamespaceConfigs <a name="IntegrationGcpStsMetricNamespaceConfigs" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new IntegrationGcpStsMetricNamespaceConfigs {
    object Disabled = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigs.property.disabled">Disabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/integration_gcp_sts#disabled IntegrationGcpSts#disabled}. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigs.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/integration_gcp_sts#id IntegrationGcpSts#id}. |

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigs.property.disabled"></a>

```csharp
public object Disabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/integration_gcp_sts#disabled IntegrationGcpSts#disabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigs.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/integration_gcp_sts#id IntegrationGcpSts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationGcpStsMetricNamespaceConfigsList <a name="IntegrationGcpStsMetricNamespaceConfigsList" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new IntegrationGcpStsMetricNamespaceConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.get"></a>

```csharp
private IntegrationGcpStsMetricNamespaceConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IntegrationGcpStsMetricNamespaceConfigsOutputReference <a name="IntegrationGcpStsMetricNamespaceConfigsOutputReference" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new IntegrationGcpStsMetricNamespaceConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.resetId">ResetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.resetId"></a>

```csharp
private void ResetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.property.disabledInput">DisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.property.disabled">Disabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.property.disabledInput"></a>

```csharp
public object DisabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.property.disabled"></a>

```csharp
public object Disabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



