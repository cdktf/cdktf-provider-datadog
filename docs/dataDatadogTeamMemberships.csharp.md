# `dataDatadogTeamMemberships` Submodule <a name="`dataDatadogTeamMemberships` Submodule" id="@cdktf/provider-datadog.dataDatadogTeamMemberships"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogTeamMemberships <a name="DataDatadogTeamMemberships" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/data-sources/team_memberships datadog_team_memberships}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogTeamMemberships(Construct Scope, string Id, DataDatadogTeamMembershipsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig">DataDatadogTeamMembershipsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig">DataDatadogTeamMembershipsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.resetExactMatch">ResetExactMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.resetFilterKeyword">ResetFilterKeyword</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetExactMatch` <a name="ResetExactMatch" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.resetExactMatch"></a>

```csharp
private void ResetExactMatch()
```

##### `ResetFilterKeyword` <a name="ResetFilterKeyword" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.resetFilterKeyword"></a>

```csharp
private void ResetFilterKeyword()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogTeamMemberships resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogTeamMemberships.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogTeamMemberships.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogTeamMemberships.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogTeamMemberships.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatadogTeamMemberships resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogTeamMemberships to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogTeamMemberships that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/data-sources/team_memberships#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogTeamMemberships to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.teamMemberships">TeamMemberships</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList">DataDatadogTeamMembershipsTeamMembershipsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.exactMatchInput">ExactMatchInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.filterKeywordInput">FilterKeywordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.teamIdInput">TeamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.exactMatch">ExactMatch</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.filterKeyword">FilterKeyword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.teamId">TeamId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TeamMemberships`<sup>Required</sup> <a name="TeamMemberships" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.teamMemberships"></a>

```csharp
public DataDatadogTeamMembershipsTeamMembershipsList TeamMemberships { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList">DataDatadogTeamMembershipsTeamMembershipsList</a>

---

##### `ExactMatchInput`<sup>Optional</sup> <a name="ExactMatchInput" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.exactMatchInput"></a>

```csharp
public object ExactMatchInput { get; }
```

- *Type:* object

---

##### `FilterKeywordInput`<sup>Optional</sup> <a name="FilterKeywordInput" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.filterKeywordInput"></a>

```csharp
public string FilterKeywordInput { get; }
```

- *Type:* string

---

##### `TeamIdInput`<sup>Optional</sup> <a name="TeamIdInput" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.teamIdInput"></a>

```csharp
public string TeamIdInput { get; }
```

- *Type:* string

---

##### `ExactMatch`<sup>Required</sup> <a name="ExactMatch" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.exactMatch"></a>

```csharp
public object ExactMatch { get; }
```

- *Type:* object

---

##### `FilterKeyword`<sup>Required</sup> <a name="FilterKeyword" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.filterKeyword"></a>

```csharp
public string FilterKeyword { get; }
```

- *Type:* string

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.teamId"></a>

```csharp
public string TeamId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogTeamMembershipsConfig <a name="DataDatadogTeamMembershipsConfig" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogTeamMembershipsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string TeamId,
    object ExactMatch = null,
    string FilterKeyword = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.teamId">TeamId</a></code> | <code>string</code> | The team's identifier. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.exactMatch">ExactMatch</a></code> | <code>object</code> | When true, `filter_keyword` string is exact matched against the user's `email`, followed by `name`. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.filterKeyword">FilterKeyword</a></code> | <code>string</code> | Search query, can be user email or name. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.teamId"></a>

```csharp
public string TeamId { get; set; }
```

- *Type:* string

The team's identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/data-sources/team_memberships#team_id DataDatadogTeamMemberships#team_id}

---

##### `ExactMatch`<sup>Optional</sup> <a name="ExactMatch" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.exactMatch"></a>

```csharp
public object ExactMatch { get; set; }
```

- *Type:* object

When true, `filter_keyword` string is exact matched against the user's `email`, followed by `name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/data-sources/team_memberships#exact_match DataDatadogTeamMemberships#exact_match}

---

##### `FilterKeyword`<sup>Optional</sup> <a name="FilterKeyword" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.filterKeyword"></a>

```csharp
public string FilterKeyword { get; set; }
```

- *Type:* string

Search query, can be user email or name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/data-sources/team_memberships#filter_keyword DataDatadogTeamMemberships#filter_keyword}

---

### DataDatadogTeamMembershipsTeamMemberships <a name="DataDatadogTeamMembershipsTeamMemberships" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMemberships"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMemberships.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogTeamMembershipsTeamMemberships {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogTeamMembershipsTeamMembershipsList <a name="DataDatadogTeamMembershipsTeamMembershipsList" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogTeamMembershipsTeamMembershipsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.get"></a>

```csharp
private DataDatadogTeamMembershipsTeamMembershipsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDatadogTeamMembershipsTeamMembershipsOutputReference <a name="DataDatadogTeamMembershipsTeamMembershipsOutputReference" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogTeamMembershipsTeamMembershipsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.property.teamId">TeamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.property.userId">UserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMemberships">DataDatadogTeamMembershipsTeamMemberships</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.property.teamId"></a>

```csharp
public string TeamId { get; }
```

- *Type:* string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.property.internalValue"></a>

```csharp
public DataDatadogTeamMembershipsTeamMemberships InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMemberships">DataDatadogTeamMembershipsTeamMemberships</a>

---



