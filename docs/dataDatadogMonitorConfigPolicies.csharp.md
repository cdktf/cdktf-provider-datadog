# `dataDatadogMonitorConfigPolicies` Submodule <a name="`dataDatadogMonitorConfigPolicies` Submodule" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogMonitorConfigPolicies <a name="DataDatadogMonitorConfigPolicies" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/data-sources/monitor_config_policies datadog_monitor_config_policies}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogMonitorConfigPolicies(Construct Scope, string Id, DataDatadogMonitorConfigPoliciesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig">DataDatadogMonitorConfigPoliciesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig">DataDatadogMonitorConfigPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogMonitorConfigPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogMonitorConfigPolicies.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogMonitorConfigPolicies.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogMonitorConfigPolicies.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogMonitorConfigPolicies.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatadogMonitorConfigPolicies resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogMonitorConfigPolicies to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogMonitorConfigPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/data-sources/monitor_config_policies#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogMonitorConfigPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.monitorConfigPolicies">MonitorConfigPolicies</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList">DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `MonitorConfigPolicies`<sup>Required</sup> <a name="MonitorConfigPolicies" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.monitorConfigPolicies"></a>

```csharp
public DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList MonitorConfigPolicies { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList">DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogMonitorConfigPoliciesConfig <a name="DataDatadogMonitorConfigPoliciesConfig" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogMonitorConfigPoliciesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/data-sources/monitor_config_policies#id DataDatadogMonitorConfigPolicies#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/data-sources/monitor_config_policies#id DataDatadogMonitorConfigPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataDatadogMonitorConfigPoliciesMonitorConfigPolicies <a name="DataDatadogMonitorConfigPoliciesMonitorConfigPolicies" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogMonitorConfigPoliciesMonitorConfigPolicies {

};
```


### DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicy <a name="DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicy" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicy {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList <a name="DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.get"></a>

```csharp
private DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference <a name="DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.property.policyType">PolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.property.tagPolicy">TagPolicy</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList">DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPolicies">DataDatadogMonitorConfigPoliciesMonitorConfigPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.property.policyType"></a>

```csharp
public string PolicyType { get; }
```

- *Type:* string

---

##### `TagPolicy`<sup>Required</sup> <a name="TagPolicy" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.property.tagPolicy"></a>

```csharp
public DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList TagPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList">DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.property.internalValue"></a>

```csharp
public DataDatadogMonitorConfigPoliciesMonitorConfigPolicies InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPolicies">DataDatadogMonitorConfigPoliciesMonitorConfigPolicies</a>

---


### DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList <a name="DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.get"></a>

```csharp
private DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference <a name="DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.property.tagKey">TagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.property.tagKeyRequired">TagKeyRequired</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.property.validTagValues">ValidTagValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicy">DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.property.tagKey"></a>

```csharp
public string TagKey { get; }
```

- *Type:* string

---

##### `TagKeyRequired`<sup>Required</sup> <a name="TagKeyRequired" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.property.tagKeyRequired"></a>

```csharp
public IResolvable TagKeyRequired { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ValidTagValues`<sup>Required</sup> <a name="ValidTagValues" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.property.validTagValues"></a>

```csharp
public string[] ValidTagValues { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.property.internalValue"></a>

```csharp
public DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicy">DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicy</a>

---



