# `dataDatadogCustomAllocationRule` Submodule <a name="`dataDatadogCustomAllocationRule` Submodule" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogCustomAllocationRule <a name="DataDatadogCustomAllocationRule" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/data-sources/custom_allocation_rule datadog_custom_allocation_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_custom_allocation_rule.DataDatadogCustomAllocationRule;

DataDatadogCustomAllocationRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .costsToAllocate(IResolvable|java.util.List<DataDatadogCustomAllocationRuleCostsToAllocate>)
//  .ruleId(java.lang.Number)
//  .strategy(DataDatadogCustomAllocationRuleStrategy)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.costsToAllocate">costsToAllocate</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocate">DataDatadogCustomAllocationRuleCostsToAllocate</a>></code> | costs_to_allocate block. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.ruleId">ruleId</a></code> | <code>java.lang.Number</code> | The ID of the custom allocation rule to retrieve. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.strategy">strategy</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy">DataDatadogCustomAllocationRuleStrategy</a></code> | strategy block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `costsToAllocate`<sup>Optional</sup> <a name="costsToAllocate" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.costsToAllocate"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocate">DataDatadogCustomAllocationRuleCostsToAllocate</a>>

costs_to_allocate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/data-sources/custom_allocation_rule#costs_to_allocate DataDatadogCustomAllocationRule#costs_to_allocate}

---

##### `ruleId`<sup>Optional</sup> <a name="ruleId" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.ruleId"></a>

- *Type:* java.lang.Number

The ID of the custom allocation rule to retrieve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/data-sources/custom_allocation_rule#rule_id DataDatadogCustomAllocationRule#rule_id}

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.strategy"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy">DataDatadogCustomAllocationRuleStrategy</a>

strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/data-sources/custom_allocation_rule#strategy DataDatadogCustomAllocationRule#strategy}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.putCostsToAllocate">putCostsToAllocate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.putStrategy">putStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.resetCostsToAllocate">resetCostsToAllocate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.resetRuleId">resetRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.resetStrategy">resetStrategy</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCostsToAllocate` <a name="putCostsToAllocate" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.putCostsToAllocate"></a>

```java
public void putCostsToAllocate(IResolvable|java.util.List<DataDatadogCustomAllocationRuleCostsToAllocate> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.putCostsToAllocate.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocate">DataDatadogCustomAllocationRuleCostsToAllocate</a>>

---

##### `putStrategy` <a name="putStrategy" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.putStrategy"></a>

```java
public void putStrategy(DataDatadogCustomAllocationRuleStrategy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.putStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy">DataDatadogCustomAllocationRuleStrategy</a>

---

##### `resetCostsToAllocate` <a name="resetCostsToAllocate" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.resetCostsToAllocate"></a>

```java
public void resetCostsToAllocate()
```

##### `resetRuleId` <a name="resetRuleId" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.resetRuleId"></a>

```java
public void resetRuleId()
```

##### `resetStrategy` <a name="resetStrategy" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.resetStrategy"></a>

```java
public void resetStrategy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogCustomAllocationRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_custom_allocation_rule.DataDatadogCustomAllocationRule;

DataDatadogCustomAllocationRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_custom_allocation_rule.DataDatadogCustomAllocationRule;

DataDatadogCustomAllocationRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_custom_allocation_rule.DataDatadogCustomAllocationRule;

DataDatadogCustomAllocationRule.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_custom_allocation_rule.DataDatadogCustomAllocationRule;

DataDatadogCustomAllocationRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatadogCustomAllocationRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDatadogCustomAllocationRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatadogCustomAllocationRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatadogCustomAllocationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/data-sources/custom_allocation_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogCustomAllocationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.costsToAllocate">costsToAllocate</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList">DataDatadogCustomAllocationRuleCostsToAllocateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.lastModifiedUserUuid">lastModifiedUserUuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.orderId">orderId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.providernames">providernames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.rejected">rejected</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.strategy">strategy</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference">DataDatadogCustomAllocationRuleStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.updated">updated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.costsToAllocateInput">costsToAllocateInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocate">DataDatadogCustomAllocationRuleCostsToAllocate</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.ruleIdInput">ruleIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.strategyInput">strategyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy">DataDatadogCustomAllocationRuleStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.ruleId">ruleId</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `costsToAllocate`<sup>Required</sup> <a name="costsToAllocate" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.costsToAllocate"></a>

```java
public DataDatadogCustomAllocationRuleCostsToAllocateList getCostsToAllocate();
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList">DataDatadogCustomAllocationRuleCostsToAllocateList</a>

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastModifiedUserUuid`<sup>Required</sup> <a name="lastModifiedUserUuid" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.lastModifiedUserUuid"></a>

```java
public java.lang.String getLastModifiedUserUuid();
```

- *Type:* java.lang.String

---

##### `orderId`<sup>Required</sup> <a name="orderId" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.orderId"></a>

```java
public java.lang.Number getOrderId();
```

- *Type:* java.lang.Number

---

##### `providernames`<sup>Required</sup> <a name="providernames" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.providernames"></a>

```java
public java.util.List<java.lang.String> getProvidernames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `rejected`<sup>Required</sup> <a name="rejected" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.rejected"></a>

```java
public IResolvable getRejected();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.strategy"></a>

```java
public DataDatadogCustomAllocationRuleStrategyOutputReference getStrategy();
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference">DataDatadogCustomAllocationRuleStrategyOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `updated`<sup>Required</sup> <a name="updated" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.updated"></a>

```java
public java.lang.String getUpdated();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `costsToAllocateInput`<sup>Optional</sup> <a name="costsToAllocateInput" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.costsToAllocateInput"></a>

```java
public IResolvable|java.util.List<DataDatadogCustomAllocationRuleCostsToAllocate> getCostsToAllocateInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocate">DataDatadogCustomAllocationRuleCostsToAllocate</a>>

---

##### `ruleIdInput`<sup>Optional</sup> <a name="ruleIdInput" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.ruleIdInput"></a>

```java
public java.lang.Number getRuleIdInput();
```

- *Type:* java.lang.Number

---

##### `strategyInput`<sup>Optional</sup> <a name="strategyInput" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.strategyInput"></a>

```java
public IResolvable|DataDatadogCustomAllocationRuleStrategy getStrategyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy">DataDatadogCustomAllocationRuleStrategy</a>

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.ruleId"></a>

```java
public java.lang.Number getRuleId();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogCustomAllocationRuleConfig <a name="DataDatadogCustomAllocationRuleConfig" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_custom_allocation_rule.DataDatadogCustomAllocationRuleConfig;

DataDatadogCustomAllocationRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .costsToAllocate(IResolvable|java.util.List<DataDatadogCustomAllocationRuleCostsToAllocate>)
//  .ruleId(java.lang.Number)
//  .strategy(DataDatadogCustomAllocationRuleStrategy)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.costsToAllocate">costsToAllocate</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocate">DataDatadogCustomAllocationRuleCostsToAllocate</a>></code> | costs_to_allocate block. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.ruleId">ruleId</a></code> | <code>java.lang.Number</code> | The ID of the custom allocation rule to retrieve. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.strategy">strategy</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy">DataDatadogCustomAllocationRuleStrategy</a></code> | strategy block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `costsToAllocate`<sup>Optional</sup> <a name="costsToAllocate" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.costsToAllocate"></a>

```java
public IResolvable|java.util.List<DataDatadogCustomAllocationRuleCostsToAllocate> getCostsToAllocate();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocate">DataDatadogCustomAllocationRuleCostsToAllocate</a>>

costs_to_allocate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/data-sources/custom_allocation_rule#costs_to_allocate DataDatadogCustomAllocationRule#costs_to_allocate}

---

##### `ruleId`<sup>Optional</sup> <a name="ruleId" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.ruleId"></a>

```java
public java.lang.Number getRuleId();
```

- *Type:* java.lang.Number

The ID of the custom allocation rule to retrieve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/data-sources/custom_allocation_rule#rule_id DataDatadogCustomAllocationRule#rule_id}

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.strategy"></a>

```java
public DataDatadogCustomAllocationRuleStrategy getStrategy();
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy">DataDatadogCustomAllocationRuleStrategy</a>

strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/data-sources/custom_allocation_rule#strategy DataDatadogCustomAllocationRule#strategy}

---

### DataDatadogCustomAllocationRuleCostsToAllocate <a name="DataDatadogCustomAllocationRuleCostsToAllocate" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_custom_allocation_rule.DataDatadogCustomAllocationRuleCostsToAllocate;

DataDatadogCustomAllocationRuleCostsToAllocate.builder()
    .build();
```


### DataDatadogCustomAllocationRuleStrategy <a name="DataDatadogCustomAllocationRuleStrategy" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_custom_allocation_rule.DataDatadogCustomAllocationRuleStrategy;

DataDatadogCustomAllocationRuleStrategy.builder()
//  .allocatedBy(IResolvable|java.util.List<DataDatadogCustomAllocationRuleStrategyAllocatedBy>)
//  .allocatedByFilters(IResolvable|java.util.List<DataDatadogCustomAllocationRuleStrategyAllocatedByFilters>)
//  .basedOnCosts(IResolvable|java.util.List<DataDatadogCustomAllocationRuleStrategyBasedOnCosts>)
//  .basedOnTimeseries(DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries)
//  .evaluateGroupedByFilters(IResolvable|java.util.List<DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy.property.allocatedBy">allocatedBy</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedBy">DataDatadogCustomAllocationRuleStrategyAllocatedBy</a>></code> | allocated_by block. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy.property.allocatedByFilters">allocatedByFilters</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFilters">DataDatadogCustomAllocationRuleStrategyAllocatedByFilters</a>></code> | allocated_by_filters block. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy.property.basedOnCosts">basedOnCosts</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCosts">DataDatadogCustomAllocationRuleStrategyBasedOnCosts</a>></code> | based_on_costs block. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy.property.basedOnTimeseries">basedOnTimeseries</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries">DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries</a></code> | based_on_timeseries block. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy.property.evaluateGroupedByFilters">evaluateGroupedByFilters</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters">DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters</a>></code> | evaluate_grouped_by_filters block. |

---

##### `allocatedBy`<sup>Optional</sup> <a name="allocatedBy" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy.property.allocatedBy"></a>

```java
public IResolvable|java.util.List<DataDatadogCustomAllocationRuleStrategyAllocatedBy> getAllocatedBy();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedBy">DataDatadogCustomAllocationRuleStrategyAllocatedBy</a>>

allocated_by block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/data-sources/custom_allocation_rule#allocated_by DataDatadogCustomAllocationRule#allocated_by}

---

##### `allocatedByFilters`<sup>Optional</sup> <a name="allocatedByFilters" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy.property.allocatedByFilters"></a>

```java
public IResolvable|java.util.List<DataDatadogCustomAllocationRuleStrategyAllocatedByFilters> getAllocatedByFilters();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFilters">DataDatadogCustomAllocationRuleStrategyAllocatedByFilters</a>>

allocated_by_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/data-sources/custom_allocation_rule#allocated_by_filters DataDatadogCustomAllocationRule#allocated_by_filters}

---

##### `basedOnCosts`<sup>Optional</sup> <a name="basedOnCosts" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy.property.basedOnCosts"></a>

```java
public IResolvable|java.util.List<DataDatadogCustomAllocationRuleStrategyBasedOnCosts> getBasedOnCosts();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCosts">DataDatadogCustomAllocationRuleStrategyBasedOnCosts</a>>

based_on_costs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/data-sources/custom_allocation_rule#based_on_costs DataDatadogCustomAllocationRule#based_on_costs}

---

##### `basedOnTimeseries`<sup>Optional</sup> <a name="basedOnTimeseries" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy.property.basedOnTimeseries"></a>

```java
public DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries getBasedOnTimeseries();
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries">DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries</a>

based_on_timeseries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/data-sources/custom_allocation_rule#based_on_timeseries DataDatadogCustomAllocationRule#based_on_timeseries}

---

##### `evaluateGroupedByFilters`<sup>Optional</sup> <a name="evaluateGroupedByFilters" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy.property.evaluateGroupedByFilters"></a>

```java
public IResolvable|java.util.List<DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters> getEvaluateGroupedByFilters();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters">DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters</a>>

evaluate_grouped_by_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/data-sources/custom_allocation_rule#evaluate_grouped_by_filters DataDatadogCustomAllocationRule#evaluate_grouped_by_filters}

---

### DataDatadogCustomAllocationRuleStrategyAllocatedBy <a name="DataDatadogCustomAllocationRuleStrategyAllocatedBy" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedBy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_custom_allocation_rule.DataDatadogCustomAllocationRuleStrategyAllocatedBy;

DataDatadogCustomAllocationRuleStrategyAllocatedBy.builder()
//  .allocatedTags(IResolvable|java.util.List<DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedBy.property.allocatedTags">allocatedTags</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags">DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags</a>></code> | allocated_tags block. |

---

##### `allocatedTags`<sup>Optional</sup> <a name="allocatedTags" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedBy.property.allocatedTags"></a>

```java
public IResolvable|java.util.List<DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags> getAllocatedTags();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags">DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags</a>>

allocated_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/data-sources/custom_allocation_rule#allocated_tags DataDatadogCustomAllocationRule#allocated_tags}

---

### DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags <a name="DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_custom_allocation_rule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags;

DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags.builder()
    .build();
```


### DataDatadogCustomAllocationRuleStrategyAllocatedByFilters <a name="DataDatadogCustomAllocationRuleStrategyAllocatedByFilters" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFilters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_custom_allocation_rule.DataDatadogCustomAllocationRuleStrategyAllocatedByFilters;

DataDatadogCustomAllocationRuleStrategyAllocatedByFilters.builder()
    .build();
```


### DataDatadogCustomAllocationRuleStrategyBasedOnCosts <a name="DataDatadogCustomAllocationRuleStrategyBasedOnCosts" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCosts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCosts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_custom_allocation_rule.DataDatadogCustomAllocationRuleStrategyBasedOnCosts;

DataDatadogCustomAllocationRuleStrategyBasedOnCosts.builder()
    .build();
```


### DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries <a name="DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_custom_allocation_rule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries;

DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries.builder()
    .build();
```


### DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters <a name="DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_custom_allocation_rule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters;

DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogCustomAllocationRuleCostsToAllocateList <a name="DataDatadogCustomAllocationRuleCostsToAllocateList" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_custom_allocation_rule.DataDatadogCustomAllocationRuleCostsToAllocateList;

new DataDatadogCustomAllocationRuleCostsToAllocateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.get"></a>

```java
public DataDatadogCustomAllocationRuleCostsToAllocateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocate">DataDatadogCustomAllocationRuleCostsToAllocate</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatadogCustomAllocationRuleCostsToAllocate> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocate">DataDatadogCustomAllocationRuleCostsToAllocate</a>>

---


### DataDatadogCustomAllocationRuleCostsToAllocateOutputReference <a name="DataDatadogCustomAllocationRuleCostsToAllocateOutputReference" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_custom_allocation_rule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference;

new DataDatadogCustomAllocationRuleCostsToAllocateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.tag">tag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocate">DataDatadogCustomAllocationRuleCostsToAllocate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatadogCustomAllocationRuleCostsToAllocate getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocate">DataDatadogCustomAllocationRuleCostsToAllocate</a>

---


### DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList <a name="DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_custom_allocation_rule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList;

new DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.get"></a>

```java
public DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags">DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags">DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags</a>>

---


### DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference <a name="DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_custom_allocation_rule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference;

new DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags">DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags">DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags</a>

---


### DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList <a name="DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_custom_allocation_rule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList;

new DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.get"></a>

```java
public DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFilters">DataDatadogCustomAllocationRuleStrategyAllocatedByFilters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatadogCustomAllocationRuleStrategyAllocatedByFilters> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFilters">DataDatadogCustomAllocationRuleStrategyAllocatedByFilters</a>>

---


### DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference <a name="DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_custom_allocation_rule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference;

new DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.tag">tag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFilters">DataDatadogCustomAllocationRuleStrategyAllocatedByFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatadogCustomAllocationRuleStrategyAllocatedByFilters getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFilters">DataDatadogCustomAllocationRuleStrategyAllocatedByFilters</a>

---


### DataDatadogCustomAllocationRuleStrategyAllocatedByList <a name="DataDatadogCustomAllocationRuleStrategyAllocatedByList" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_custom_allocation_rule.DataDatadogCustomAllocationRuleStrategyAllocatedByList;

new DataDatadogCustomAllocationRuleStrategyAllocatedByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.get"></a>

```java
public DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedBy">DataDatadogCustomAllocationRuleStrategyAllocatedBy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatadogCustomAllocationRuleStrategyAllocatedBy> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedBy">DataDatadogCustomAllocationRuleStrategyAllocatedBy</a>>

---


### DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference <a name="DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_custom_allocation_rule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference;

new DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.putAllocatedTags">putAllocatedTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.resetAllocatedTags">resetAllocatedTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllocatedTags` <a name="putAllocatedTags" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.putAllocatedTags"></a>

```java
public void putAllocatedTags(IResolvable|java.util.List<DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.putAllocatedTags.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags">DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags</a>>

---

##### `resetAllocatedTags` <a name="resetAllocatedTags" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.resetAllocatedTags"></a>

```java
public void resetAllocatedTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.allocatedTags">allocatedTags</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList">DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.percentage">percentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.allocatedTagsInput">allocatedTagsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags">DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedBy">DataDatadogCustomAllocationRuleStrategyAllocatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allocatedTags`<sup>Required</sup> <a name="allocatedTags" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.allocatedTags"></a>

```java
public DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList getAllocatedTags();
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList">DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList</a>

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.percentage"></a>

```java
public java.lang.Number getPercentage();
```

- *Type:* java.lang.Number

---

##### `allocatedTagsInput`<sup>Optional</sup> <a name="allocatedTagsInput" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.allocatedTagsInput"></a>

```java
public IResolvable|java.util.List<DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags> getAllocatedTagsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags">DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatadogCustomAllocationRuleStrategyAllocatedBy getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedBy">DataDatadogCustomAllocationRuleStrategyAllocatedBy</a>

---


### DataDatadogCustomAllocationRuleStrategyBasedOnCostsList <a name="DataDatadogCustomAllocationRuleStrategyBasedOnCostsList" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_custom_allocation_rule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList;

new DataDatadogCustomAllocationRuleStrategyBasedOnCostsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.get"></a>

```java
public DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCosts">DataDatadogCustomAllocationRuleStrategyBasedOnCosts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatadogCustomAllocationRuleStrategyBasedOnCosts> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCosts">DataDatadogCustomAllocationRuleStrategyBasedOnCosts</a>>

---


### DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference <a name="DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_custom_allocation_rule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference;

new DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.tag">tag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCosts">DataDatadogCustomAllocationRuleStrategyBasedOnCosts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatadogCustomAllocationRuleStrategyBasedOnCosts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCosts">DataDatadogCustomAllocationRuleStrategyBasedOnCosts</a>

---


### DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference <a name="DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_custom_allocation_rule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference;

new DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries">DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries">DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries</a>

---


### DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList <a name="DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_custom_allocation_rule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList;

new DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.get"></a>

```java
public DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters">DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters">DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters</a>>

---


### DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference <a name="DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_custom_allocation_rule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference;

new DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.tag">tag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters">DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters">DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters</a>

---


### DataDatadogCustomAllocationRuleStrategyOutputReference <a name="DataDatadogCustomAllocationRuleStrategyOutputReference" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_custom_allocation_rule.DataDatadogCustomAllocationRuleStrategyOutputReference;

new DataDatadogCustomAllocationRuleStrategyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putAllocatedBy">putAllocatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putAllocatedByFilters">putAllocatedByFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putBasedOnCosts">putBasedOnCosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putBasedOnTimeseries">putBasedOnTimeseries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putEvaluateGroupedByFilters">putEvaluateGroupedByFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.resetAllocatedBy">resetAllocatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.resetAllocatedByFilters">resetAllocatedByFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.resetBasedOnCosts">resetBasedOnCosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.resetEvaluateGroupedByFilters">resetEvaluateGroupedByFilters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllocatedBy` <a name="putAllocatedBy" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putAllocatedBy"></a>

```java
public void putAllocatedBy(IResolvable|java.util.List<DataDatadogCustomAllocationRuleStrategyAllocatedBy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putAllocatedBy.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedBy">DataDatadogCustomAllocationRuleStrategyAllocatedBy</a>>

---

##### `putAllocatedByFilters` <a name="putAllocatedByFilters" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putAllocatedByFilters"></a>

```java
public void putAllocatedByFilters(IResolvable|java.util.List<DataDatadogCustomAllocationRuleStrategyAllocatedByFilters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putAllocatedByFilters.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFilters">DataDatadogCustomAllocationRuleStrategyAllocatedByFilters</a>>

---

##### `putBasedOnCosts` <a name="putBasedOnCosts" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putBasedOnCosts"></a>

```java
public void putBasedOnCosts(IResolvable|java.util.List<DataDatadogCustomAllocationRuleStrategyBasedOnCosts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putBasedOnCosts.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCosts">DataDatadogCustomAllocationRuleStrategyBasedOnCosts</a>>

---

##### `putBasedOnTimeseries` <a name="putBasedOnTimeseries" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putBasedOnTimeseries"></a>

```java
public void putBasedOnTimeseries(DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putBasedOnTimeseries.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries">DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries</a>

---

##### `putEvaluateGroupedByFilters` <a name="putEvaluateGroupedByFilters" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putEvaluateGroupedByFilters"></a>

```java
public void putEvaluateGroupedByFilters(IResolvable|java.util.List<DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putEvaluateGroupedByFilters.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters">DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters</a>>

---

##### `resetAllocatedBy` <a name="resetAllocatedBy" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.resetAllocatedBy"></a>

```java
public void resetAllocatedBy()
```

##### `resetAllocatedByFilters` <a name="resetAllocatedByFilters" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.resetAllocatedByFilters"></a>

```java
public void resetAllocatedByFilters()
```

##### `resetBasedOnCosts` <a name="resetBasedOnCosts" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.resetBasedOnCosts"></a>

```java
public void resetBasedOnCosts()
```

##### `resetEvaluateGroupedByFilters` <a name="resetEvaluateGroupedByFilters" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.resetEvaluateGroupedByFilters"></a>

```java
public void resetEvaluateGroupedByFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.allocatedBy">allocatedBy</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList">DataDatadogCustomAllocationRuleStrategyAllocatedByList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.allocatedByFilters">allocatedByFilters</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList">DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.allocatedByTagKeys">allocatedByTagKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.basedOnCosts">basedOnCosts</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList">DataDatadogCustomAllocationRuleStrategyBasedOnCostsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.basedOnTimeseries">basedOnTimeseries</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference">DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByFilters">evaluateGroupedByFilters</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList">DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByTagKeys">evaluateGroupedByTagKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.granularity">granularity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.allocatedByFiltersInput">allocatedByFiltersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFilters">DataDatadogCustomAllocationRuleStrategyAllocatedByFilters</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.allocatedByInput">allocatedByInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedBy">DataDatadogCustomAllocationRuleStrategyAllocatedBy</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.basedOnCostsInput">basedOnCostsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCosts">DataDatadogCustomAllocationRuleStrategyBasedOnCosts</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.basedOnTimeseriesInput">basedOnTimeseriesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries">DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByFiltersInput">evaluateGroupedByFiltersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters">DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy">DataDatadogCustomAllocationRuleStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allocatedBy`<sup>Required</sup> <a name="allocatedBy" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.allocatedBy"></a>

```java
public DataDatadogCustomAllocationRuleStrategyAllocatedByList getAllocatedBy();
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList">DataDatadogCustomAllocationRuleStrategyAllocatedByList</a>

---

##### `allocatedByFilters`<sup>Required</sup> <a name="allocatedByFilters" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.allocatedByFilters"></a>

```java
public DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList getAllocatedByFilters();
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList">DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList</a>

---

##### `allocatedByTagKeys`<sup>Required</sup> <a name="allocatedByTagKeys" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.allocatedByTagKeys"></a>

```java
public java.util.List<java.lang.String> getAllocatedByTagKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `basedOnCosts`<sup>Required</sup> <a name="basedOnCosts" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.basedOnCosts"></a>

```java
public DataDatadogCustomAllocationRuleStrategyBasedOnCostsList getBasedOnCosts();
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList">DataDatadogCustomAllocationRuleStrategyBasedOnCostsList</a>

---

##### `basedOnTimeseries`<sup>Required</sup> <a name="basedOnTimeseries" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.basedOnTimeseries"></a>

```java
public DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference getBasedOnTimeseries();
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference">DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference</a>

---

##### `evaluateGroupedByFilters`<sup>Required</sup> <a name="evaluateGroupedByFilters" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByFilters"></a>

```java
public DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList getEvaluateGroupedByFilters();
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList">DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList</a>

---

##### `evaluateGroupedByTagKeys`<sup>Required</sup> <a name="evaluateGroupedByTagKeys" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByTagKeys"></a>

```java
public java.util.List<java.lang.String> getEvaluateGroupedByTagKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.granularity"></a>

```java
public java.lang.String getGranularity();
```

- *Type:* java.lang.String

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `allocatedByFiltersInput`<sup>Optional</sup> <a name="allocatedByFiltersInput" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.allocatedByFiltersInput"></a>

```java
public IResolvable|java.util.List<DataDatadogCustomAllocationRuleStrategyAllocatedByFilters> getAllocatedByFiltersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFilters">DataDatadogCustomAllocationRuleStrategyAllocatedByFilters</a>>

---

##### `allocatedByInput`<sup>Optional</sup> <a name="allocatedByInput" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.allocatedByInput"></a>

```java
public IResolvable|java.util.List<DataDatadogCustomAllocationRuleStrategyAllocatedBy> getAllocatedByInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedBy">DataDatadogCustomAllocationRuleStrategyAllocatedBy</a>>

---

##### `basedOnCostsInput`<sup>Optional</sup> <a name="basedOnCostsInput" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.basedOnCostsInput"></a>

```java
public IResolvable|java.util.List<DataDatadogCustomAllocationRuleStrategyBasedOnCosts> getBasedOnCostsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCosts">DataDatadogCustomAllocationRuleStrategyBasedOnCosts</a>>

---

##### `basedOnTimeseriesInput`<sup>Optional</sup> <a name="basedOnTimeseriesInput" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.basedOnTimeseriesInput"></a>

```java
public IResolvable|DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries getBasedOnTimeseriesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries">DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries</a>

---

##### `evaluateGroupedByFiltersInput`<sup>Optional</sup> <a name="evaluateGroupedByFiltersInput" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByFiltersInput"></a>

```java
public IResolvable|java.util.List<DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters> getEvaluateGroupedByFiltersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters">DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatadogCustomAllocationRuleStrategy getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy">DataDatadogCustomAllocationRuleStrategy</a>

---



