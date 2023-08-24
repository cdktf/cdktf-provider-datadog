# `datadog_monitor_config_policy`

Refer to the Terraform Registory for docs: [`datadog_monitor_config_policy`](https://registry.terraform.io/providers/datadog/datadog/3.29.0/docs/resources/monitor_config_policy).

# `monitorConfigPolicy` Submodule <a name="`monitorConfigPolicy` Submodule" id="@cdktf/provider-datadog.monitorConfigPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorConfigPolicy <a name="MonitorConfigPolicy" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.29.0/docs/resources/monitor_config_policy datadog_monitor_config_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new MonitorConfigPolicy(Construct Scope, string Id, MonitorConfigPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig">MonitorConfigPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig">MonitorConfigPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.putTagPolicy">PutTagPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.resetTagPolicy">ResetTagPolicy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTagPolicy` <a name="PutTagPolicy" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.putTagPolicy"></a>

```csharp
private void PutTagPolicy(MonitorConfigPolicyTagPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.putTagPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy">MonitorConfigPolicyTagPolicy</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTagPolicy` <a name="ResetTagPolicy" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.resetTagPolicy"></a>

```csharp
private void ResetTagPolicy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

MonitorConfigPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

MonitorConfigPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

MonitorConfigPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.tagPolicy">TagPolicy</a></code> | <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference">MonitorConfigPolicyTagPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.policyTypeInput">PolicyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.tagPolicyInput">TagPolicyInput</a></code> | <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy">MonitorConfigPolicyTagPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.policyType">PolicyType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `TagPolicy`<sup>Required</sup> <a name="TagPolicy" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.tagPolicy"></a>

```csharp
public MonitorConfigPolicyTagPolicyOutputReference TagPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference">MonitorConfigPolicyTagPolicyOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PolicyTypeInput`<sup>Optional</sup> <a name="PolicyTypeInput" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.policyTypeInput"></a>

```csharp
public string PolicyTypeInput { get; }
```

- *Type:* string

---

##### `TagPolicyInput`<sup>Optional</sup> <a name="TagPolicyInput" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.tagPolicyInput"></a>

```csharp
public MonitorConfigPolicyTagPolicy TagPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy">MonitorConfigPolicyTagPolicy</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.policyType"></a>

```csharp
public string PolicyType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorConfigPolicyConfig <a name="MonitorConfigPolicyConfig" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new MonitorConfigPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string PolicyType,
    string Id = null,
    MonitorConfigPolicyTagPolicy TagPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.policyType">PolicyType</a></code> | <code>string</code> | The monitor config policy type Valid values are `tag`. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.29.0/docs/resources/monitor_config_policy#id MonitorConfigPolicy#id}. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.tagPolicy">TagPolicy</a></code> | <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy">MonitorConfigPolicyTagPolicy</a></code> | tag_policy block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.policyType"></a>

```csharp
public string PolicyType { get; set; }
```

- *Type:* string

The monitor config policy type Valid values are `tag`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.29.0/docs/resources/monitor_config_policy#policy_type MonitorConfigPolicy#policy_type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.29.0/docs/resources/monitor_config_policy#id MonitorConfigPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TagPolicy`<sup>Optional</sup> <a name="TagPolicy" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.tagPolicy"></a>

```csharp
public MonitorConfigPolicyTagPolicy TagPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy">MonitorConfigPolicyTagPolicy</a>

tag_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.29.0/docs/resources/monitor_config_policy#tag_policy MonitorConfigPolicy#tag_policy}

---

### MonitorConfigPolicyTagPolicy <a name="MonitorConfigPolicyTagPolicy" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new MonitorConfigPolicyTagPolicy {
    string TagKey,
    object TagKeyRequired,
    string[] ValidTagValues
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy.property.tagKey">TagKey</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy.property.tagKeyRequired">TagKeyRequired</a></code> | <code>object</code> | If a tag key is required for monitor creation. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy.property.validTagValues">ValidTagValues</a></code> | <code>string[]</code> | Valid values for the tag. |

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy.property.tagKey"></a>

```csharp
public string TagKey { get; set; }
```

- *Type:* string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.29.0/docs/resources/monitor_config_policy#tag_key MonitorConfigPolicy#tag_key}

---

##### `TagKeyRequired`<sup>Required</sup> <a name="TagKeyRequired" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy.property.tagKeyRequired"></a>

```csharp
public object TagKeyRequired { get; set; }
```

- *Type:* object

If a tag key is required for monitor creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.29.0/docs/resources/monitor_config_policy#tag_key_required MonitorConfigPolicy#tag_key_required}

---

##### `ValidTagValues`<sup>Required</sup> <a name="ValidTagValues" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy.property.validTagValues"></a>

```csharp
public string[] ValidTagValues { get; set; }
```

- *Type:* string[]

Valid values for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.29.0/docs/resources/monitor_config_policy#valid_tag_values MonitorConfigPolicy#valid_tag_values}

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorConfigPolicyTagPolicyOutputReference <a name="MonitorConfigPolicyTagPolicyOutputReference" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new MonitorConfigPolicyTagPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.tagKeyInput">TagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.tagKeyRequiredInput">TagKeyRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.validTagValuesInput">ValidTagValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.tagKey">TagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.tagKeyRequired">TagKeyRequired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.validTagValues">ValidTagValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy">MonitorConfigPolicyTagPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TagKeyInput`<sup>Optional</sup> <a name="TagKeyInput" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.tagKeyInput"></a>

```csharp
public string TagKeyInput { get; }
```

- *Type:* string

---

##### `TagKeyRequiredInput`<sup>Optional</sup> <a name="TagKeyRequiredInput" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.tagKeyRequiredInput"></a>

```csharp
public object TagKeyRequiredInput { get; }
```

- *Type:* object

---

##### `ValidTagValuesInput`<sup>Optional</sup> <a name="ValidTagValuesInput" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.validTagValuesInput"></a>

```csharp
public string[] ValidTagValuesInput { get; }
```

- *Type:* string[]

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.tagKey"></a>

```csharp
public string TagKey { get; }
```

- *Type:* string

---

##### `TagKeyRequired`<sup>Required</sup> <a name="TagKeyRequired" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.tagKeyRequired"></a>

```csharp
public object TagKeyRequired { get; }
```

- *Type:* object

---

##### `ValidTagValues`<sup>Required</sup> <a name="ValidTagValues" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.validTagValues"></a>

```csharp
public string[] ValidTagValues { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.internalValue"></a>

```csharp
public MonitorConfigPolicyTagPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy">MonitorConfigPolicyTagPolicy</a>

---



