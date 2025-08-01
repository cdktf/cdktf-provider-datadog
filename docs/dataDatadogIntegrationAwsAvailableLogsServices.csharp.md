# `dataDatadogIntegrationAwsAvailableLogsServices` Submodule <a name="`dataDatadogIntegrationAwsAvailableLogsServices` Submodule" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogIntegrationAwsAvailableLogsServices <a name="DataDatadogIntegrationAwsAvailableLogsServices" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/data-sources/integration_aws_available_logs_services datadog_integration_aws_available_logs_services}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogIntegrationAwsAvailableLogsServices(Construct Scope, string Id, DataDatadogIntegrationAwsAvailableLogsServicesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig">DataDatadogIntegrationAwsAvailableLogsServicesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig">DataDatadogIntegrationAwsAvailableLogsServicesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogIntegrationAwsAvailableLogsServices resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogIntegrationAwsAvailableLogsServices.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogIntegrationAwsAvailableLogsServices.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogIntegrationAwsAvailableLogsServices.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

DataDatadogIntegrationAwsAvailableLogsServices.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatadogIntegrationAwsAvailableLogsServices resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogIntegrationAwsAvailableLogsServices to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogIntegrationAwsAvailableLogsServices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/data-sources/integration_aws_available_logs_services#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogIntegrationAwsAvailableLogsServices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.awsLogsServices">AwsLogsServices</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AwsLogsServices`<sup>Required</sup> <a name="AwsLogsServices" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.awsLogsServices"></a>

```csharp
public string[] AwsLogsServices { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogIntegrationAwsAvailableLogsServicesConfig <a name="DataDatadogIntegrationAwsAvailableLogsServicesConfig" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new DataDatadogIntegrationAwsAvailableLogsServicesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---



