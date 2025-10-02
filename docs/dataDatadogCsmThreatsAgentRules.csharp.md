# `dataDatadogCsmThreatsAgentRules` Submodule <a name="`dataDatadogCsmThreatsAgentRules` Submodule" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogCsmThreatsAgentRules <a name="DataDatadogCsmThreatsAgentRules" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/data-sources/csm_threats_agent_rules datadog_csm_threats_agent_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogCsmThreatsAgentRules(Construct Scope, string Id, DataDatadogCsmThreatsAgentRulesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig">DataDatadogCsmThreatsAgentRulesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig">DataDatadogCsmThreatsAgentRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.resetPolicyId">ResetPolicyId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetPolicyId` <a name="ResetPolicyId" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.resetPolicyId"></a>

```csharp
private void ResetPolicyId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogCsmThreatsAgentRules resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogCsmThreatsAgentRules.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogCsmThreatsAgentRules.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogCsmThreatsAgentRules.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogCsmThreatsAgentRules.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatadogCsmThreatsAgentRules resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogCsmThreatsAgentRules to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogCsmThreatsAgentRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/data-sources/csm_threats_agent_rules#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogCsmThreatsAgentRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.agentRules">AgentRules</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList">DataDatadogCsmThreatsAgentRulesAgentRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.agentRulesIds">AgentRulesIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.policyIdInput">PolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AgentRules`<sup>Required</sup> <a name="AgentRules" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.agentRules"></a>

```csharp
public DataDatadogCsmThreatsAgentRulesAgentRulesList AgentRules { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList">DataDatadogCsmThreatsAgentRulesAgentRulesList</a>

---

##### `AgentRulesIds`<sup>Required</sup> <a name="AgentRulesIds" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.agentRulesIds"></a>

```csharp
public string[] AgentRulesIds { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.policyIdInput"></a>

```csharp
public string PolicyIdInput { get; }
```

- *Type:* string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogCsmThreatsAgentRulesAgentRules <a name="DataDatadogCsmThreatsAgentRulesAgentRules" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogCsmThreatsAgentRulesAgentRules {

};
```


### DataDatadogCsmThreatsAgentRulesAgentRulesActions <a name="DataDatadogCsmThreatsAgentRulesAgentRulesActions" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogCsmThreatsAgentRulesAgentRulesActions {

};
```


### DataDatadogCsmThreatsAgentRulesAgentRulesActionsHash <a name="DataDatadogCsmThreatsAgentRulesAgentRulesActionsHash" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHash"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHash.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogCsmThreatsAgentRulesAgentRulesActionsHash {

};
```


### DataDatadogCsmThreatsAgentRulesAgentRulesActionsSet <a name="DataDatadogCsmThreatsAgentRulesAgentRulesActionsSet" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogCsmThreatsAgentRulesAgentRulesActionsSet {

};
```


### DataDatadogCsmThreatsAgentRulesConfig <a name="DataDatadogCsmThreatsAgentRulesConfig" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogCsmThreatsAgentRulesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string PolicyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.policyId">PolicyId</a></code> | <code>string</code> | Listing only the rules in the policy with this field as the ID. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `PolicyId`<sup>Optional</sup> <a name="PolicyId" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.policyId"></a>

```csharp
public string PolicyId { get; set; }
```

- *Type:* string

Listing only the rules in the policy with this field as the ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/data-sources/csm_threats_agent_rules#policy_id DataDatadogCsmThreatsAgentRules#policy_id}

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference <a name="DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHash">DataDatadogCsmThreatsAgentRulesAgentRulesActionsHash</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.property.internalValue"></a>

```csharp
public DataDatadogCsmThreatsAgentRulesAgentRulesActionsHash InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHash">DataDatadogCsmThreatsAgentRulesAgentRulesActionsHash</a>

---


### DataDatadogCsmThreatsAgentRulesAgentRulesActionsList <a name="DataDatadogCsmThreatsAgentRulesAgentRulesActionsList" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogCsmThreatsAgentRulesAgentRulesActionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.get"></a>

```csharp
private DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference <a name="DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.property.hash">Hash</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference">DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.property.set">Set</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference">DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActions">DataDatadogCsmThreatsAgentRulesAgentRulesActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Hash`<sup>Required</sup> <a name="Hash" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.property.hash"></a>

```csharp
public DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference Hash { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference">DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference</a>

---

##### `Set`<sup>Required</sup> <a name="Set" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.property.set"></a>

```csharp
public DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference Set { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference">DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.property.internalValue"></a>

```csharp
public DataDatadogCsmThreatsAgentRulesAgentRulesActions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActions">DataDatadogCsmThreatsAgentRulesAgentRulesActions</a>

---


### DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference <a name="DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.append">Append</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.field">Field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.ttl">Ttl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSet">DataDatadogCsmThreatsAgentRulesAgentRulesActionsSet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Append`<sup>Required</sup> <a name="Append" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.append"></a>

```csharp
public IResolvable Append { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.field"></a>

```csharp
public string Field { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.ttl"></a>

```csharp
public double Ttl { get; }
```

- *Type:* double

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.internalValue"></a>

```csharp
public DataDatadogCsmThreatsAgentRulesAgentRulesActionsSet InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSet">DataDatadogCsmThreatsAgentRulesAgentRulesActionsSet</a>

---


### DataDatadogCsmThreatsAgentRulesAgentRulesList <a name="DataDatadogCsmThreatsAgentRulesAgentRulesList" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogCsmThreatsAgentRulesAgentRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.get"></a>

```csharp
private DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference <a name="DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.actions">Actions</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList">DataDatadogCsmThreatsAgentRulesAgentRulesActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.productTags">ProductTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRules">DataDatadogCsmThreatsAgentRulesAgentRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.actions"></a>

```csharp
public DataDatadogCsmThreatsAgentRulesAgentRulesActionsList Actions { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList">DataDatadogCsmThreatsAgentRulesAgentRulesActionsList</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProductTags`<sup>Required</sup> <a name="ProductTags" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.productTags"></a>

```csharp
public string[] ProductTags { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.internalValue"></a>

```csharp
public DataDatadogCsmThreatsAgentRulesAgentRules InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRules">DataDatadogCsmThreatsAgentRulesAgentRules</a>

---



