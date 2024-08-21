# `integrationAws` Submodule <a name="`integrationAws` Submodule" id="@cdktf/provider-datadog.integrationAws"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationAws <a name="IntegrationAws" id="@cdktf/provider-datadog.integrationAws.IntegrationAws"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.43.1/docs/resources/integration_aws datadog_integration_aws}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new IntegrationAws(Construct Scope, string Id, IntegrationAwsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig">IntegrationAwsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig">IntegrationAwsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.resetAccessKeyId">ResetAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.resetAccountSpecificNamespaceRules">ResetAccountSpecificNamespaceRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.resetCspmResourceCollectionEnabled">ResetCspmResourceCollectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.resetExcludedRegions">ResetExcludedRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.resetExtendedResourceCollectionEnabled">ResetExtendedResourceCollectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.resetFilterTags">ResetFilterTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.resetHostTags">ResetHostTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.resetMetricsCollectionEnabled">ResetMetricsCollectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.resetResourceCollectionEnabled">ResetResourceCollectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.resetRoleName">ResetRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.resetSecretAccessKey">ResetSecretAccessKey</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAccessKeyId` <a name="ResetAccessKeyId" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.resetAccessKeyId"></a>

```csharp
private void ResetAccessKeyId()
```

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetAccountSpecificNamespaceRules` <a name="ResetAccountSpecificNamespaceRules" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.resetAccountSpecificNamespaceRules"></a>

```csharp
private void ResetAccountSpecificNamespaceRules()
```

##### `ResetCspmResourceCollectionEnabled` <a name="ResetCspmResourceCollectionEnabled" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.resetCspmResourceCollectionEnabled"></a>

```csharp
private void ResetCspmResourceCollectionEnabled()
```

##### `ResetExcludedRegions` <a name="ResetExcludedRegions" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.resetExcludedRegions"></a>

```csharp
private void ResetExcludedRegions()
```

##### `ResetExtendedResourceCollectionEnabled` <a name="ResetExtendedResourceCollectionEnabled" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.resetExtendedResourceCollectionEnabled"></a>

```csharp
private void ResetExtendedResourceCollectionEnabled()
```

##### `ResetFilterTags` <a name="ResetFilterTags" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.resetFilterTags"></a>

```csharp
private void ResetFilterTags()
```

##### `ResetHostTags` <a name="ResetHostTags" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.resetHostTags"></a>

```csharp
private void ResetHostTags()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMetricsCollectionEnabled` <a name="ResetMetricsCollectionEnabled" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.resetMetricsCollectionEnabled"></a>

```csharp
private void ResetMetricsCollectionEnabled()
```

##### `ResetResourceCollectionEnabled` <a name="ResetResourceCollectionEnabled" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.resetResourceCollectionEnabled"></a>

```csharp
private void ResetResourceCollectionEnabled()
```

##### `ResetRoleName` <a name="ResetRoleName" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.resetRoleName"></a>

```csharp
private void ResetRoleName()
```

##### `ResetSecretAccessKey` <a name="ResetSecretAccessKey" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.resetSecretAccessKey"></a>

```csharp
private void ResetSecretAccessKey()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationAws resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

IntegrationAws.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

IntegrationAws.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

IntegrationAws.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

IntegrationAws.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IntegrationAws resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IntegrationAws to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IntegrationAws that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.43.1/docs/resources/integration_aws#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationAws to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.accessKeyIdInput">AccessKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.accountSpecificNamespaceRulesInput">AccountSpecificNamespaceRulesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.cspmResourceCollectionEnabledInput">CspmResourceCollectionEnabledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.excludedRegionsInput">ExcludedRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.extendedResourceCollectionEnabledInput">ExtendedResourceCollectionEnabledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.filterTagsInput">FilterTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.hostTagsInput">HostTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.metricsCollectionEnabledInput">MetricsCollectionEnabledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.resourceCollectionEnabledInput">ResourceCollectionEnabledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.roleNameInput">RoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.secretAccessKeyInput">SecretAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.accessKeyId">AccessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.accountSpecificNamespaceRules">AccountSpecificNamespaceRules</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.cspmResourceCollectionEnabled">CspmResourceCollectionEnabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.excludedRegions">ExcludedRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.extendedResourceCollectionEnabled">ExtendedResourceCollectionEnabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.filterTags">FilterTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.hostTags">HostTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.metricsCollectionEnabled">MetricsCollectionEnabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.resourceCollectionEnabled">ResourceCollectionEnabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.roleName">RoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.secretAccessKey">SecretAccessKey</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `AccessKeyIdInput`<sup>Optional</sup> <a name="AccessKeyIdInput" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.accessKeyIdInput"></a>

```csharp
public string AccessKeyIdInput { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `AccountSpecificNamespaceRulesInput`<sup>Optional</sup> <a name="AccountSpecificNamespaceRulesInput" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.accountSpecificNamespaceRulesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> AccountSpecificNamespaceRulesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `CspmResourceCollectionEnabledInput`<sup>Optional</sup> <a name="CspmResourceCollectionEnabledInput" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.cspmResourceCollectionEnabledInput"></a>

```csharp
public string CspmResourceCollectionEnabledInput { get; }
```

- *Type:* string

---

##### `ExcludedRegionsInput`<sup>Optional</sup> <a name="ExcludedRegionsInput" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.excludedRegionsInput"></a>

```csharp
public string[] ExcludedRegionsInput { get; }
```

- *Type:* string[]

---

##### `ExtendedResourceCollectionEnabledInput`<sup>Optional</sup> <a name="ExtendedResourceCollectionEnabledInput" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.extendedResourceCollectionEnabledInput"></a>

```csharp
public string ExtendedResourceCollectionEnabledInput { get; }
```

- *Type:* string

---

##### `FilterTagsInput`<sup>Optional</sup> <a name="FilterTagsInput" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.filterTagsInput"></a>

```csharp
public string[] FilterTagsInput { get; }
```

- *Type:* string[]

---

##### `HostTagsInput`<sup>Optional</sup> <a name="HostTagsInput" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.hostTagsInput"></a>

```csharp
public string[] HostTagsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetricsCollectionEnabledInput`<sup>Optional</sup> <a name="MetricsCollectionEnabledInput" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.metricsCollectionEnabledInput"></a>

```csharp
public string MetricsCollectionEnabledInput { get; }
```

- *Type:* string

---

##### `ResourceCollectionEnabledInput`<sup>Optional</sup> <a name="ResourceCollectionEnabledInput" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.resourceCollectionEnabledInput"></a>

```csharp
public string ResourceCollectionEnabledInput { get; }
```

- *Type:* string

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.roleNameInput"></a>

```csharp
public string RoleNameInput { get; }
```

- *Type:* string

---

##### `SecretAccessKeyInput`<sup>Optional</sup> <a name="SecretAccessKeyInput" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.secretAccessKeyInput"></a>

```csharp
public string SecretAccessKeyInput { get; }
```

- *Type:* string

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.accessKeyId"></a>

```csharp
public string AccessKeyId { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `AccountSpecificNamespaceRules`<sup>Required</sup> <a name="AccountSpecificNamespaceRules" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.accountSpecificNamespaceRules"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> AccountSpecificNamespaceRules { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `CspmResourceCollectionEnabled`<sup>Required</sup> <a name="CspmResourceCollectionEnabled" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.cspmResourceCollectionEnabled"></a>

```csharp
public string CspmResourceCollectionEnabled { get; }
```

- *Type:* string

---

##### `ExcludedRegions`<sup>Required</sup> <a name="ExcludedRegions" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.excludedRegions"></a>

```csharp
public string[] ExcludedRegions { get; }
```

- *Type:* string[]

---

##### `ExtendedResourceCollectionEnabled`<sup>Required</sup> <a name="ExtendedResourceCollectionEnabled" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.extendedResourceCollectionEnabled"></a>

```csharp
public string ExtendedResourceCollectionEnabled { get; }
```

- *Type:* string

---

##### `FilterTags`<sup>Required</sup> <a name="FilterTags" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.filterTags"></a>

```csharp
public string[] FilterTags { get; }
```

- *Type:* string[]

---

##### `HostTags`<sup>Required</sup> <a name="HostTags" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.hostTags"></a>

```csharp
public string[] HostTags { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MetricsCollectionEnabled`<sup>Required</sup> <a name="MetricsCollectionEnabled" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.metricsCollectionEnabled"></a>

```csharp
public string MetricsCollectionEnabled { get; }
```

- *Type:* string

---

##### `ResourceCollectionEnabled`<sup>Required</sup> <a name="ResourceCollectionEnabled" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.resourceCollectionEnabled"></a>

```csharp
public string ResourceCollectionEnabled { get; }
```

- *Type:* string

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.roleName"></a>

```csharp
public string RoleName { get; }
```

- *Type:* string

---

##### `SecretAccessKey`<sup>Required</sup> <a name="SecretAccessKey" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.secretAccessKey"></a>

```csharp
public string SecretAccessKey { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationAwsConfig <a name="IntegrationAwsConfig" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new IntegrationAwsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccessKeyId = null,
    string AccountId = null,
    System.Collections.Generic.IDictionary<string, object> AccountSpecificNamespaceRules = null,
    string CspmResourceCollectionEnabled = null,
    string[] ExcludedRegions = null,
    string ExtendedResourceCollectionEnabled = null,
    string[] FilterTags = null,
    string[] HostTags = null,
    string Id = null,
    string MetricsCollectionEnabled = null,
    string ResourceCollectionEnabled = null,
    string RoleName = null,
    string SecretAccessKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.accessKeyId">AccessKeyId</a></code> | <code>string</code> | Your AWS access key ID. Only required if your AWS account is a GovCloud or China account. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.accountId">AccountId</a></code> | <code>string</code> | Your AWS Account ID without dashes. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.accountSpecificNamespaceRules">AccountSpecificNamespaceRules</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | Enables or disables metric collection for specific AWS namespaces for this AWS account only. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.cspmResourceCollectionEnabled">CspmResourceCollectionEnabled</a></code> | <code>string</code> | Whether Datadog collects cloud security posture management resources from your AWS account. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.excludedRegions">ExcludedRegions</a></code> | <code>string[]</code> | An array of AWS regions to exclude from metrics collection. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.extendedResourceCollectionEnabled">ExtendedResourceCollectionEnabled</a></code> | <code>string</code> | Whether Datadog collects additional attributes and configuration information about the resources in your AWS account. Required for `cspm_resource_collection_enabled`. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.filterTags">FilterTags</a></code> | <code>string[]</code> | Array of EC2 tags (in the form `key:value`) defines a filter that Datadog uses when collecting metrics from EC2. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.hostTags">HostTags</a></code> | <code>string[]</code> | Array of tags (in the form `key:value`) to add to all hosts and metrics reporting through this integration. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.1/docs/resources/integration_aws#id IntegrationAws#id}. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.metricsCollectionEnabled">MetricsCollectionEnabled</a></code> | <code>string</code> | Whether Datadog collects metrics for this AWS account. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.resourceCollectionEnabled">ResourceCollectionEnabled</a></code> | <code>string</code> | Whether Datadog collects a standard set of resources from your AWS account. **Deprecated.** Deprecated in favor of `extended_resource_collection_enabled`. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.roleName">RoleName</a></code> | <code>string</code> | Your Datadog role delegation name. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.secretAccessKey">SecretAccessKey</a></code> | <code>string</code> | Your AWS secret access key. Only required if your AWS account is a GovCloud or China account. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccessKeyId`<sup>Optional</sup> <a name="AccessKeyId" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.accessKeyId"></a>

```csharp
public string AccessKeyId { get; set; }
```

- *Type:* string

Your AWS access key ID. Only required if your AWS account is a GovCloud or China account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.1/docs/resources/integration_aws#access_key_id IntegrationAws#access_key_id}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Your AWS Account ID without dashes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.1/docs/resources/integration_aws#account_id IntegrationAws#account_id}

---

##### `AccountSpecificNamespaceRules`<sup>Optional</sup> <a name="AccountSpecificNamespaceRules" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.accountSpecificNamespaceRules"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> AccountSpecificNamespaceRules { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

Enables or disables metric collection for specific AWS namespaces for this AWS account only.

A list of namespaces can be found at the [available namespace rules API endpoint](https://docs.datadoghq.com/api/v1/aws-integration/#list-namespace-rules).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.1/docs/resources/integration_aws#account_specific_namespace_rules IntegrationAws#account_specific_namespace_rules}

---

##### `CspmResourceCollectionEnabled`<sup>Optional</sup> <a name="CspmResourceCollectionEnabled" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.cspmResourceCollectionEnabled"></a>

```csharp
public string CspmResourceCollectionEnabled { get; set; }
```

- *Type:* string

Whether Datadog collects cloud security posture management resources from your AWS account.

This includes additional resources not covered under the general resource_collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.1/docs/resources/integration_aws#cspm_resource_collection_enabled IntegrationAws#cspm_resource_collection_enabled}

---

##### `ExcludedRegions`<sup>Optional</sup> <a name="ExcludedRegions" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.excludedRegions"></a>

```csharp
public string[] ExcludedRegions { get; set; }
```

- *Type:* string[]

An array of AWS regions to exclude from metrics collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.1/docs/resources/integration_aws#excluded_regions IntegrationAws#excluded_regions}

---

##### `ExtendedResourceCollectionEnabled`<sup>Optional</sup> <a name="ExtendedResourceCollectionEnabled" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.extendedResourceCollectionEnabled"></a>

```csharp
public string ExtendedResourceCollectionEnabled { get; set; }
```

- *Type:* string

Whether Datadog collects additional attributes and configuration information about the resources in your AWS account. Required for `cspm_resource_collection_enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.1/docs/resources/integration_aws#extended_resource_collection_enabled IntegrationAws#extended_resource_collection_enabled}

---

##### `FilterTags`<sup>Optional</sup> <a name="FilterTags" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.filterTags"></a>

```csharp
public string[] FilterTags { get; set; }
```

- *Type:* string[]

Array of EC2 tags (in the form `key:value`) defines a filter that Datadog uses when collecting metrics from EC2.

Wildcards, such as `?` (for single characters) and `*` (for multiple characters) can also be used. Only hosts that match one of the defined tags will be imported into Datadog. The rest will be ignored. Host matching a given tag can also be excluded by adding `!` before the tag. e.x. `env:production,instance-type:c1.*,!region:us-east-1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.1/docs/resources/integration_aws#filter_tags IntegrationAws#filter_tags}

---

##### `HostTags`<sup>Optional</sup> <a name="HostTags" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.hostTags"></a>

```csharp
public string[] HostTags { get; set; }
```

- *Type:* string[]

Array of tags (in the form `key:value`) to add to all hosts and metrics reporting through this integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.1/docs/resources/integration_aws#host_tags IntegrationAws#host_tags}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.1/docs/resources/integration_aws#id IntegrationAws#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MetricsCollectionEnabled`<sup>Optional</sup> <a name="MetricsCollectionEnabled" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.metricsCollectionEnabled"></a>

```csharp
public string MetricsCollectionEnabled { get; set; }
```

- *Type:* string

Whether Datadog collects metrics for this AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.1/docs/resources/integration_aws#metrics_collection_enabled IntegrationAws#metrics_collection_enabled}

---

##### `ResourceCollectionEnabled`<sup>Optional</sup> <a name="ResourceCollectionEnabled" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.resourceCollectionEnabled"></a>

```csharp
public string ResourceCollectionEnabled { get; set; }
```

- *Type:* string

Whether Datadog collects a standard set of resources from your AWS account. **Deprecated.** Deprecated in favor of `extended_resource_collection_enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.1/docs/resources/integration_aws#resource_collection_enabled IntegrationAws#resource_collection_enabled}

---

##### `RoleName`<sup>Optional</sup> <a name="RoleName" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.roleName"></a>

```csharp
public string RoleName { get; set; }
```

- *Type:* string

Your Datadog role delegation name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.1/docs/resources/integration_aws#role_name IntegrationAws#role_name}

---

##### `SecretAccessKey`<sup>Optional</sup> <a name="SecretAccessKey" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.secretAccessKey"></a>

```csharp
public string SecretAccessKey { get; set; }
```

- *Type:* string

Your AWS secret access key. Only required if your AWS account is a GovCloud or China account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.1/docs/resources/integration_aws#secret_access_key IntegrationAws#secret_access_key}

---



