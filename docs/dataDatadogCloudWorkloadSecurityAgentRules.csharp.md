# `dataDatadogCloudWorkloadSecurityAgentRules` Submodule <a name="`dataDatadogCloudWorkloadSecurityAgentRules` Submodule" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogCloudWorkloadSecurityAgentRules <a name="DataDatadogCloudWorkloadSecurityAgentRules" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/data-sources/cloud_workload_security_agent_rules datadog_cloud_workload_security_agent_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogCloudWorkloadSecurityAgentRules(Construct Scope, string Id, DataDatadogCloudWorkloadSecurityAgentRulesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig">DataDatadogCloudWorkloadSecurityAgentRulesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig">DataDatadogCloudWorkloadSecurityAgentRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogCloudWorkloadSecurityAgentRules resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogCloudWorkloadSecurityAgentRules.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogCloudWorkloadSecurityAgentRules.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogCloudWorkloadSecurityAgentRules.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogCloudWorkloadSecurityAgentRules.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatadogCloudWorkloadSecurityAgentRules resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogCloudWorkloadSecurityAgentRules to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogCloudWorkloadSecurityAgentRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/data-sources/cloud_workload_security_agent_rules#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogCloudWorkloadSecurityAgentRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.agentRules">AgentRules</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList">DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AgentRules`<sup>Required</sup> <a name="AgentRules" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.agentRules"></a>

```csharp
public DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList AgentRules { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList">DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogCloudWorkloadSecurityAgentRulesAgentRules <a name="DataDatadogCloudWorkloadSecurityAgentRulesAgentRules" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogCloudWorkloadSecurityAgentRulesAgentRules {

};
```


### DataDatadogCloudWorkloadSecurityAgentRulesConfig <a name="DataDatadogCloudWorkloadSecurityAgentRulesConfig" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogCloudWorkloadSecurityAgentRulesConfig {
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
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/data-sources/cloud_workload_security_agent_rules#id DataDatadogCloudWorkloadSecurityAgentRules#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/data-sources/cloud_workload_security_agent_rules#id DataDatadogCloudWorkloadSecurityAgentRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList <a name="DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.get"></a>

```csharp
private DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference <a name="DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRules">DataDatadogCloudWorkloadSecurityAgentRulesAgentRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.internalValue"></a>

```csharp
public DataDatadogCloudWorkloadSecurityAgentRulesAgentRules InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRules">DataDatadogCloudWorkloadSecurityAgentRulesAgentRules</a>

---



