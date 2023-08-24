# `data_datadog_logs_indexes`

Refer to the Terraform Registory for docs: [`data_datadog_logs_indexes`](https://registry.terraform.io/providers/datadog/datadog/3.29.0/docs/data-sources/logs_indexes).

# `dataDatadogLogsIndexes` Submodule <a name="`dataDatadogLogsIndexes` Submodule" id="@cdktf/provider-datadog.dataDatadogLogsIndexes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogLogsIndexes <a name="DataDatadogLogsIndexes" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.29.0/docs/data-sources/logs_indexes datadog_logs_indexes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogLogsIndexes(Construct Scope, string Id, DataDatadogLogsIndexesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesConfig">DataDatadogLogsIndexesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesConfig">DataDatadogLogsIndexesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogLogsIndexes.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogLogsIndexes.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogLogsIndexes.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.logsIndexes">LogsIndexes</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList">DataDatadogLogsIndexesLogsIndexesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `LogsIndexes`<sup>Required</sup> <a name="LogsIndexes" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.logsIndexes"></a>

```csharp
public DataDatadogLogsIndexesLogsIndexesList LogsIndexes { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList">DataDatadogLogsIndexesLogsIndexesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogLogsIndexesConfig <a name="DataDatadogLogsIndexesConfig" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogLogsIndexesConfig {
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
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.29.0/docs/data-sources/logs_indexes#id DataDatadogLogsIndexes#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.29.0/docs/data-sources/logs_indexes#id DataDatadogLogsIndexes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataDatadogLogsIndexesLogsIndexes <a name="DataDatadogLogsIndexesLogsIndexes" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogLogsIndexesLogsIndexes {

};
```


### DataDatadogLogsIndexesLogsIndexesExclusionFilter <a name="DataDatadogLogsIndexesLogsIndexesExclusionFilter" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogLogsIndexesLogsIndexesExclusionFilter {

};
```


### DataDatadogLogsIndexesLogsIndexesExclusionFilterFilter <a name="DataDatadogLogsIndexesLogsIndexesExclusionFilterFilter" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogLogsIndexesLogsIndexesExclusionFilterFilter {

};
```


### DataDatadogLogsIndexesLogsIndexesFilter <a name="DataDatadogLogsIndexesLogsIndexesFilter" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogLogsIndexesLogsIndexesFilter {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList <a name="DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList.get"></a>

```csharp
private DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference <a name="DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.property.sampleRate">SampleRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilter">DataDatadogLogsIndexesLogsIndexesExclusionFilterFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `SampleRate`<sup>Required</sup> <a name="SampleRate" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.property.sampleRate"></a>

```csharp
public double SampleRate { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.property.internalValue"></a>

```csharp
public DataDatadogLogsIndexesLogsIndexesExclusionFilterFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilter">DataDatadogLogsIndexesLogsIndexesExclusionFilterFilter</a>

---


### DataDatadogLogsIndexesLogsIndexesExclusionFilterList <a name="DataDatadogLogsIndexesLogsIndexesExclusionFilterList" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogLogsIndexesLogsIndexesExclusionFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList.get"></a>

```csharp
private DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference <a name="DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList">DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilter">DataDatadogLogsIndexesLogsIndexesExclusionFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.property.filter"></a>

```csharp
public DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList">DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList</a>

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.property.internalValue"></a>

```csharp
public DataDatadogLogsIndexesLogsIndexesExclusionFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilter">DataDatadogLogsIndexesLogsIndexesExclusionFilter</a>

---


### DataDatadogLogsIndexesLogsIndexesFilterList <a name="DataDatadogLogsIndexesLogsIndexesFilterList" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogLogsIndexesLogsIndexesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList.get"></a>

```csharp
private DataDatadogLogsIndexesLogsIndexesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDatadogLogsIndexesLogsIndexesFilterOutputReference <a name="DataDatadogLogsIndexesLogsIndexesFilterOutputReference" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogLogsIndexesLogsIndexesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilter">DataDatadogLogsIndexesLogsIndexesFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.property.internalValue"></a>

```csharp
public DataDatadogLogsIndexesLogsIndexesFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilter">DataDatadogLogsIndexesLogsIndexesFilter</a>

---


### DataDatadogLogsIndexesLogsIndexesList <a name="DataDatadogLogsIndexesLogsIndexesList" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogLogsIndexesLogsIndexesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList.get"></a>

```csharp
private DataDatadogLogsIndexesLogsIndexesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDatadogLogsIndexesLogsIndexesOutputReference <a name="DataDatadogLogsIndexesLogsIndexesOutputReference" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogLogsIndexesLogsIndexesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.property.dailyLimit">DailyLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.property.exclusionFilter">ExclusionFilter</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList">DataDatadogLogsIndexesLogsIndexesExclusionFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList">DataDatadogLogsIndexesLogsIndexesFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.property.retentionDays">RetentionDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexes">DataDatadogLogsIndexesLogsIndexes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DailyLimit`<sup>Required</sup> <a name="DailyLimit" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.property.dailyLimit"></a>

```csharp
public double DailyLimit { get; }
```

- *Type:* double

---

##### `ExclusionFilter`<sup>Required</sup> <a name="ExclusionFilter" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.property.exclusionFilter"></a>

```csharp
public DataDatadogLogsIndexesLogsIndexesExclusionFilterList ExclusionFilter { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList">DataDatadogLogsIndexesLogsIndexesExclusionFilterList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.property.filter"></a>

```csharp
public DataDatadogLogsIndexesLogsIndexesFilterList Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList">DataDatadogLogsIndexesLogsIndexesFilterList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.property.retentionDays"></a>

```csharp
public double RetentionDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.property.internalValue"></a>

```csharp
public DataDatadogLogsIndexesLogsIndexes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexes">DataDatadogLogsIndexesLogsIndexes</a>

---



