# `dataDatadogUsers` Submodule <a name="`dataDatadogUsers` Submodule" id="@cdktf/provider-datadog.dataDatadogUsers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogUsers <a name="DataDatadogUsers" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/data-sources/users datadog_users}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogUsers(Construct Scope, string Id, DataDatadogUsersConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersConfig">DataDatadogUsersConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersConfig">DataDatadogUsersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.resetFilterStatus">ResetFilterStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetFilterStatus` <a name="ResetFilterStatus" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.resetFilterStatus"></a>

```csharp
private void ResetFilterStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogUsers resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogUsers.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogUsers.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogUsers.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogUsers.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatadogUsers resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogUsers to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogUsers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/data-sources/users#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogUsers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.property.users">Users</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersList">DataDatadogUsersUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.property.filterStatusInput">FilterStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.property.filterStatus">FilterStatus</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Users`<sup>Required</sup> <a name="Users" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.property.users"></a>

```csharp
public DataDatadogUsersUsersList Users { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersList">DataDatadogUsersUsersList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `FilterStatusInput`<sup>Optional</sup> <a name="FilterStatusInput" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.property.filterStatusInput"></a>

```csharp
public string FilterStatusInput { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `FilterStatus`<sup>Required</sup> <a name="FilterStatus" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.property.filterStatus"></a>

```csharp
public string FilterStatus { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsers.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogUsersConfig <a name="DataDatadogUsersConfig" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogUsersConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Filter = null,
    string FilterStatus = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersConfig.property.filter">Filter</a></code> | <code>string</code> | Filter all users by the given string. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersConfig.property.filterStatus">FilterStatus</a></code> | <code>string</code> | Filter on status attribute. Comma-separated list with possible values of Active, Pending, and Disabled. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersConfig.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

Filter all users by the given string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/data-sources/users#filter DataDatadogUsers#filter}

---

##### `FilterStatus`<sup>Optional</sup> <a name="FilterStatus" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersConfig.property.filterStatus"></a>

```csharp
public string FilterStatus { get; set; }
```

- *Type:* string

Filter on status attribute. Comma-separated list with possible values of Active, Pending, and Disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/data-sources/users#filter_status DataDatadogUsers#filter_status}

---

### DataDatadogUsersUsers <a name="DataDatadogUsersUsers" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogUsersUsers {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogUsersUsersList <a name="DataDatadogUsersUsersList" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogUsersUsersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersList.get"></a>

```csharp
private DataDatadogUsersUsersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDatadogUsersUsersOutputReference <a name="DataDatadogUsersUsersOutputReference" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogUsersUsersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.property.disabled">Disabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.property.handle">Handle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.property.icon">Icon</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.property.mfaEnabled">MfaEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.property.modifiedAt">ModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.property.verified">Verified</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsers">DataDatadogUsersUsers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.property.disabled"></a>

```csharp
public IResolvable Disabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `Handle`<sup>Required</sup> <a name="Handle" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.property.handle"></a>

```csharp
public string Handle { get; }
```

- *Type:* string

---

##### `Icon`<sup>Required</sup> <a name="Icon" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.property.icon"></a>

```csharp
public string Icon { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MfaEnabled`<sup>Required</sup> <a name="MfaEnabled" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.property.mfaEnabled"></a>

```csharp
public IResolvable MfaEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.property.modifiedAt"></a>

```csharp
public string ModifiedAt { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.property.serviceAccount"></a>

```csharp
public IResolvable ServiceAccount { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `Verified`<sup>Required</sup> <a name="Verified" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.property.verified"></a>

```csharp
public IResolvable Verified { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsersOutputReference.property.internalValue"></a>

```csharp
public DataDatadogUsersUsers InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogUsers.DataDatadogUsersUsers">DataDatadogUsersUsers</a>

---



