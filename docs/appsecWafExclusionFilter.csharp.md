# `appsecWafExclusionFilter` Submodule <a name="`appsecWafExclusionFilter` Submodule" id="@cdktf/provider-datadog.appsecWafExclusionFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsecWafExclusionFilter <a name="AppsecWafExclusionFilter" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/appsec_waf_exclusion_filter datadog_appsec_waf_exclusion_filter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new AppsecWafExclusionFilter(Construct Scope, string Id, AppsecWafExclusionFilterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig">AppsecWafExclusionFilterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig">AppsecWafExclusionFilterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.putRulesTarget">PutRulesTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.putScope">PutScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetEventQuery">ResetEventQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetIpList">ResetIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetOnMatch">ResetOnMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetPathGlob">ResetPathGlob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetRulesTarget">ResetRulesTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRulesTarget` <a name="PutRulesTarget" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.putRulesTarget"></a>

```csharp
private void PutRulesTarget(IResolvable|AppsecWafExclusionFilterRulesTarget[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.putRulesTarget.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget">AppsecWafExclusionFilterRulesTarget</a>[]

---

##### `PutScope` <a name="PutScope" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.putScope"></a>

```csharp
private void PutScope(IResolvable|AppsecWafExclusionFilterScope[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.putScope.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope">AppsecWafExclusionFilterScope</a>[]

---

##### `ResetEventQuery` <a name="ResetEventQuery" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetEventQuery"></a>

```csharp
private void ResetEventQuery()
```

##### `ResetIpList` <a name="ResetIpList" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetIpList"></a>

```csharp
private void ResetIpList()
```

##### `ResetOnMatch` <a name="ResetOnMatch" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetOnMatch"></a>

```csharp
private void ResetOnMatch()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetPathGlob` <a name="ResetPathGlob" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetPathGlob"></a>

```csharp
private void ResetPathGlob()
```

##### `ResetRulesTarget` <a name="ResetRulesTarget" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetRulesTarget"></a>

```csharp
private void ResetRulesTarget()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetScope"></a>

```csharp
private void ResetScope()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AppsecWafExclusionFilter resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

AppsecWafExclusionFilter.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

AppsecWafExclusionFilter.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

AppsecWafExclusionFilter.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

AppsecWafExclusionFilter.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AppsecWafExclusionFilter resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppsecWafExclusionFilter to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppsecWafExclusionFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/appsec_waf_exclusion_filter#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AppsecWafExclusionFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.rulesTarget">RulesTarget</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList">AppsecWafExclusionFilterRulesTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.scope">Scope</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList">AppsecWafExclusionFilterScopeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.enabledInput">EnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.eventQueryInput">EventQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.ipListInput">IpListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.onMatchInput">OnMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.parametersInput">ParametersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.pathGlobInput">PathGlobInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.rulesTargetInput">RulesTargetInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget">AppsecWafExclusionFilterRulesTarget</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.scopeInput">ScopeInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope">AppsecWafExclusionFilterScope</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.eventQuery">EventQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.ipList">IpList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.onMatch">OnMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.parameters">Parameters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.pathGlob">PathGlob</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RulesTarget`<sup>Required</sup> <a name="RulesTarget" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.rulesTarget"></a>

```csharp
public AppsecWafExclusionFilterRulesTargetList RulesTarget { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList">AppsecWafExclusionFilterRulesTargetList</a>

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.scope"></a>

```csharp
public AppsecWafExclusionFilterScopeList Scope { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList">AppsecWafExclusionFilterScopeList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `EventQueryInput`<sup>Optional</sup> <a name="EventQueryInput" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.eventQueryInput"></a>

```csharp
public string EventQueryInput { get; }
```

- *Type:* string

---

##### `IpListInput`<sup>Optional</sup> <a name="IpListInput" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.ipListInput"></a>

```csharp
public string[] IpListInput { get; }
```

- *Type:* string[]

---

##### `OnMatchInput`<sup>Optional</sup> <a name="OnMatchInput" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.onMatchInput"></a>

```csharp
public string OnMatchInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.parametersInput"></a>

```csharp
public string[] ParametersInput { get; }
```

- *Type:* string[]

---

##### `PathGlobInput`<sup>Optional</sup> <a name="PathGlobInput" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.pathGlobInput"></a>

```csharp
public string PathGlobInput { get; }
```

- *Type:* string

---

##### `RulesTargetInput`<sup>Optional</sup> <a name="RulesTargetInput" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.rulesTargetInput"></a>

```csharp
public IResolvable|AppsecWafExclusionFilterRulesTarget[] RulesTargetInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget">AppsecWafExclusionFilterRulesTarget</a>[]

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.scopeInput"></a>

```csharp
public IResolvable|AppsecWafExclusionFilterScope[] ScopeInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope">AppsecWafExclusionFilterScope</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `EventQuery`<sup>Required</sup> <a name="EventQuery" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.eventQuery"></a>

```csharp
public string EventQuery { get; }
```

- *Type:* string

---

##### `IpList`<sup>Required</sup> <a name="IpList" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.ipList"></a>

```csharp
public string[] IpList { get; }
```

- *Type:* string[]

---

##### `OnMatch`<sup>Required</sup> <a name="OnMatch" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.onMatch"></a>

```csharp
public string OnMatch { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.parameters"></a>

```csharp
public string[] Parameters { get; }
```

- *Type:* string[]

---

##### `PathGlob`<sup>Required</sup> <a name="PathGlob" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.pathGlob"></a>

```csharp
public string PathGlob { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppsecWafExclusionFilterConfig <a name="AppsecWafExclusionFilterConfig" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new AppsecWafExclusionFilterConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Description,
    bool|IResolvable Enabled,
    string EventQuery = null,
    string[] IpList = null,
    string OnMatch = null,
    string[] Parameters = null,
    string PathGlob = null,
    IResolvable|AppsecWafExclusionFilterRulesTarget[] RulesTarget = null,
    IResolvable|AppsecWafExclusionFilterScope[] Scope = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.description">Description</a></code> | <code>string</code> | A description for the exclusion filter. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Indicates whether the exclusion filter is enabled. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.eventQuery">EventQuery</a></code> | <code>string</code> | The event query matched by the legacy exclusion filter. Cannot be created nor updated. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.ipList">IpList</a></code> | <code>string[]</code> | The client IP addresses matched by the exclusion filter (CIDR notation is supported). |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.onMatch">OnMatch</a></code> | <code>string</code> | The action taken when the exclusion filter matches. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.parameters">Parameters</a></code> | <code>string[]</code> | A list of parameters matched by the exclusion filter in the HTTP query string and HTTP request body. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.pathGlob">PathGlob</a></code> | <code>string</code> | The HTTP path glob expression matched by the exclusion filter. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.rulesTarget">RulesTarget</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget">AppsecWafExclusionFilterRulesTarget</a>[]</code> | rules_target block. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.scope">Scope</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope">AppsecWafExclusionFilterScope</a>[]</code> | scope block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description for the exclusion filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/appsec_waf_exclusion_filter#description AppsecWafExclusionFilter#description}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Indicates whether the exclusion filter is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/appsec_waf_exclusion_filter#enabled AppsecWafExclusionFilter#enabled}

---

##### `EventQuery`<sup>Optional</sup> <a name="EventQuery" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.eventQuery"></a>

```csharp
public string EventQuery { get; set; }
```

- *Type:* string

The event query matched by the legacy exclusion filter. Cannot be created nor updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/appsec_waf_exclusion_filter#event_query AppsecWafExclusionFilter#event_query}

---

##### `IpList`<sup>Optional</sup> <a name="IpList" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.ipList"></a>

```csharp
public string[] IpList { get; set; }
```

- *Type:* string[]

The client IP addresses matched by the exclusion filter (CIDR notation is supported).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/appsec_waf_exclusion_filter#ip_list AppsecWafExclusionFilter#ip_list}

---

##### `OnMatch`<sup>Optional</sup> <a name="OnMatch" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.onMatch"></a>

```csharp
public string OnMatch { get; set; }
```

- *Type:* string

The action taken when the exclusion filter matches.

When set to `monitor`, security traces are emitted but the requests are not blocked. By default, security traces are not emitted and the requests are not blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/appsec_waf_exclusion_filter#on_match AppsecWafExclusionFilter#on_match}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.parameters"></a>

```csharp
public string[] Parameters { get; set; }
```

- *Type:* string[]

A list of parameters matched by the exclusion filter in the HTTP query string and HTTP request body.

Nested parameters can be matched by joining fields with a dot character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/appsec_waf_exclusion_filter#parameters AppsecWafExclusionFilter#parameters}

---

##### `PathGlob`<sup>Optional</sup> <a name="PathGlob" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.pathGlob"></a>

```csharp
public string PathGlob { get; set; }
```

- *Type:* string

The HTTP path glob expression matched by the exclusion filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/appsec_waf_exclusion_filter#path_glob AppsecWafExclusionFilter#path_glob}

---

##### `RulesTarget`<sup>Optional</sup> <a name="RulesTarget" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.rulesTarget"></a>

```csharp
public IResolvable|AppsecWafExclusionFilterRulesTarget[] RulesTarget { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget">AppsecWafExclusionFilterRulesTarget</a>[]

rules_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/appsec_waf_exclusion_filter#rules_target AppsecWafExclusionFilter#rules_target}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.scope"></a>

```csharp
public IResolvable|AppsecWafExclusionFilterScope[] Scope { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope">AppsecWafExclusionFilterScope</a>[]

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/appsec_waf_exclusion_filter#scope AppsecWafExclusionFilter#scope}

---

### AppsecWafExclusionFilterRulesTarget <a name="AppsecWafExclusionFilterRulesTarget" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new AppsecWafExclusionFilterRulesTarget {
    string RuleId = null,
    AppsecWafExclusionFilterRulesTargetTags Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget.property.ruleId">RuleId</a></code> | <code>string</code> | Target a single WAF rule based on its identifier. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags">AppsecWafExclusionFilterRulesTargetTags</a></code> | tags block. |

---

##### `RuleId`<sup>Optional</sup> <a name="RuleId" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget.property.ruleId"></a>

```csharp
public string RuleId { get; set; }
```

- *Type:* string

Target a single WAF rule based on its identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/appsec_waf_exclusion_filter#rule_id AppsecWafExclusionFilter#rule_id}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget.property.tags"></a>

```csharp
public AppsecWafExclusionFilterRulesTargetTags Tags { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags">AppsecWafExclusionFilterRulesTargetTags</a>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/appsec_waf_exclusion_filter#tags AppsecWafExclusionFilter#tags}

---

### AppsecWafExclusionFilterRulesTargetTags <a name="AppsecWafExclusionFilterRulesTargetTags" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new AppsecWafExclusionFilterRulesTargetTags {
    string Category = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags.property.category">Category</a></code> | <code>string</code> | The category of the targeted WAF rules. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags.property.type">Type</a></code> | <code>string</code> | The type of the targeted WAF rules. |

---

##### `Category`<sup>Optional</sup> <a name="Category" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags.property.category"></a>

```csharp
public string Category { get; set; }
```

- *Type:* string

The category of the targeted WAF rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/appsec_waf_exclusion_filter#category AppsecWafExclusionFilter#category}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of the targeted WAF rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/appsec_waf_exclusion_filter#type AppsecWafExclusionFilter#type}

---

### AppsecWafExclusionFilterScope <a name="AppsecWafExclusionFilterScope" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new AppsecWafExclusionFilterScope {
    string Env = null,
    string Service = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope.property.env">Env</a></code> | <code>string</code> | Deploy on this environment. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope.property.service">Service</a></code> | <code>string</code> | Deploy on this service. |

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope.property.env"></a>

```csharp
public string Env { get; set; }
```

- *Type:* string

Deploy on this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/appsec_waf_exclusion_filter#env AppsecWafExclusionFilter#env}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Deploy on this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/appsec_waf_exclusion_filter#service AppsecWafExclusionFilter#service}

---

## Classes <a name="Classes" id="Classes"></a>

### AppsecWafExclusionFilterRulesTargetList <a name="AppsecWafExclusionFilterRulesTargetList" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new AppsecWafExclusionFilterRulesTargetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.get"></a>

```csharp
private AppsecWafExclusionFilterRulesTargetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget">AppsecWafExclusionFilterRulesTarget</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.property.internalValue"></a>

```csharp
public IResolvable|AppsecWafExclusionFilterRulesTarget[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget">AppsecWafExclusionFilterRulesTarget</a>[]

---


### AppsecWafExclusionFilterRulesTargetOutputReference <a name="AppsecWafExclusionFilterRulesTargetOutputReference" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new AppsecWafExclusionFilterRulesTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.resetRuleId">ResetRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTags` <a name="PutTags" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.putTags"></a>

```csharp
private void PutTags(AppsecWafExclusionFilterRulesTargetTags Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags">AppsecWafExclusionFilterRulesTargetTags</a>

---

##### `ResetRuleId` <a name="ResetRuleId" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.resetRuleId"></a>

```csharp
private void ResetRuleId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference">AppsecWafExclusionFilterRulesTargetTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.ruleIdInput">RuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.tagsInput">TagsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags">AppsecWafExclusionFilterRulesTargetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.ruleId">RuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget">AppsecWafExclusionFilterRulesTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.tags"></a>

```csharp
public AppsecWafExclusionFilterRulesTargetTagsOutputReference Tags { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference">AppsecWafExclusionFilterRulesTargetTagsOutputReference</a>

---

##### `RuleIdInput`<sup>Optional</sup> <a name="RuleIdInput" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.ruleIdInput"></a>

```csharp
public string RuleIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.tagsInput"></a>

```csharp
public IResolvable|AppsecWafExclusionFilterRulesTargetTags TagsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags">AppsecWafExclusionFilterRulesTargetTags</a>

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.ruleId"></a>

```csharp
public string RuleId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsecWafExclusionFilterRulesTarget InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget">AppsecWafExclusionFilterRulesTarget</a>

---


### AppsecWafExclusionFilterRulesTargetTagsOutputReference <a name="AppsecWafExclusionFilterRulesTargetTagsOutputReference" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new AppsecWafExclusionFilterRulesTargetTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.resetCategory">ResetCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCategory` <a name="ResetCategory" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.resetCategory"></a>

```csharp
private void ResetCategory()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.categoryInput">CategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags">AppsecWafExclusionFilterRulesTargetTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.categoryInput"></a>

```csharp
public string CategoryInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsecWafExclusionFilterRulesTargetTags InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags">AppsecWafExclusionFilterRulesTargetTags</a>

---


### AppsecWafExclusionFilterScopeList <a name="AppsecWafExclusionFilterScopeList" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new AppsecWafExclusionFilterScopeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.get"></a>

```csharp
private AppsecWafExclusionFilterScopeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope">AppsecWafExclusionFilterScope</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.property.internalValue"></a>

```csharp
public IResolvable|AppsecWafExclusionFilterScope[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope">AppsecWafExclusionFilterScope</a>[]

---


### AppsecWafExclusionFilterScopeOutputReference <a name="AppsecWafExclusionFilterScopeOutputReference" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new AppsecWafExclusionFilterScopeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.resetEnv">ResetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.resetService">ResetService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnv` <a name="ResetEnv" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.resetEnv"></a>

```csharp
private void ResetEnv()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.resetService"></a>

```csharp
private void ResetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.envInput">EnvInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.env">Env</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope">AppsecWafExclusionFilterScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.envInput"></a>

```csharp
public string EnvInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.env"></a>

```csharp
public string Env { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsecWafExclusionFilterScope InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope">AppsecWafExclusionFilterScope</a>

---



