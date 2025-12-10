# `dataDatadogTagPipelineRuleset` Submodule <a name="`dataDatadogTagPipelineRuleset` Submodule" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogTagPipelineRuleset <a name="DataDatadogTagPipelineRuleset" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/tag_pipeline_ruleset datadog_tag_pipeline_ruleset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_tag_pipeline_ruleset.DataDatadogTagPipelineRuleset;

DataDatadogTagPipelineRuleset.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .id(java.lang.String)
//  .rules(IResolvable|java.util.List<DataDatadogTagPipelineRulesetRules>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The ID of the ruleset. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.Initializer.parameter.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRules">DataDatadogTagPipelineRulesetRules</a>></code> | rules block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The ID of the ruleset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/tag_pipeline_ruleset#id DataDatadogTagPipelineRuleset#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.Initializer.parameter.rules"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRules">DataDatadogTagPipelineRulesetRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/tag_pipeline_ruleset#rules DataDatadogTagPipelineRuleset#rules}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.resetRules">resetRules</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putRules` <a name="putRules" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.putRules"></a>

```java
public void putRules(IResolvable|java.util.List<DataDatadogTagPipelineRulesetRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.putRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRules">DataDatadogTagPipelineRulesetRules</a>>

---

##### `resetRules` <a name="resetRules" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.resetRules"></a>

```java
public void resetRules()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogTagPipelineRuleset resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_tag_pipeline_ruleset.DataDatadogTagPipelineRuleset;

DataDatadogTagPipelineRuleset.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_tag_pipeline_ruleset.DataDatadogTagPipelineRuleset;

DataDatadogTagPipelineRuleset.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_tag_pipeline_ruleset.DataDatadogTagPipelineRuleset;

DataDatadogTagPipelineRuleset.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_tag_pipeline_ruleset.DataDatadogTagPipelineRuleset;

DataDatadogTagPipelineRuleset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatadogTagPipelineRuleset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDatadogTagPipelineRuleset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatadogTagPipelineRuleset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatadogTagPipelineRuleset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/tag_pipeline_ruleset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogTagPipelineRuleset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.position">position</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList">DataDatadogTagPipelineRulesetRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.version">version</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.rulesInput">rulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRules">DataDatadogTagPipelineRulesetRules</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.rules"></a>

```java
public DataDatadogTagPipelineRulesetRulesList getRules();
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList">DataDatadogTagPipelineRulesetRulesList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.rulesInput"></a>

```java
public IResolvable|java.util.List<DataDatadogTagPipelineRulesetRules> getRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRules">DataDatadogTagPipelineRulesetRules</a>>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRuleset.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogTagPipelineRulesetConfig <a name="DataDatadogTagPipelineRulesetConfig" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_tag_pipeline_ruleset.DataDatadogTagPipelineRulesetConfig;

DataDatadogTagPipelineRulesetConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .id(java.lang.String)
//  .rules(IResolvable|java.util.List<DataDatadogTagPipelineRulesetRules>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetConfig.property.id">id</a></code> | <code>java.lang.String</code> | The ID of the ruleset. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetConfig.property.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRules">DataDatadogTagPipelineRulesetRules</a>></code> | rules block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The ID of the ruleset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/tag_pipeline_ruleset#id DataDatadogTagPipelineRuleset#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetConfig.property.rules"></a>

```java
public IResolvable|java.util.List<DataDatadogTagPipelineRulesetRules> getRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRules">DataDatadogTagPipelineRulesetRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/tag_pipeline_ruleset#rules DataDatadogTagPipelineRuleset#rules}

---

### DataDatadogTagPipelineRulesetRules <a name="DataDatadogTagPipelineRulesetRules" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_tag_pipeline_ruleset.DataDatadogTagPipelineRulesetRules;

DataDatadogTagPipelineRulesetRules.builder()
//  .referenceTable(DataDatadogTagPipelineRulesetRulesReferenceTable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRules.property.referenceTable">referenceTable</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTable">DataDatadogTagPipelineRulesetRulesReferenceTable</a></code> | reference_table block. |

---

##### `referenceTable`<sup>Optional</sup> <a name="referenceTable" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRules.property.referenceTable"></a>

```java
public DataDatadogTagPipelineRulesetRulesReferenceTable getReferenceTable();
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTable">DataDatadogTagPipelineRulesetRulesReferenceTable</a>

reference_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/tag_pipeline_ruleset#reference_table DataDatadogTagPipelineRuleset#reference_table}

---

### DataDatadogTagPipelineRulesetRulesMapping <a name="DataDatadogTagPipelineRulesetRulesMapping" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMapping.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_tag_pipeline_ruleset.DataDatadogTagPipelineRulesetRulesMapping;

DataDatadogTagPipelineRulesetRulesMapping.builder()
    .build();
```


### DataDatadogTagPipelineRulesetRulesQuery <a name="DataDatadogTagPipelineRulesetRulesQuery" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQuery.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_tag_pipeline_ruleset.DataDatadogTagPipelineRulesetRulesQuery;

DataDatadogTagPipelineRulesetRulesQuery.builder()
    .build();
```


### DataDatadogTagPipelineRulesetRulesQueryAddition <a name="DataDatadogTagPipelineRulesetRulesQueryAddition" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAddition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAddition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_tag_pipeline_ruleset.DataDatadogTagPipelineRulesetRulesQueryAddition;

DataDatadogTagPipelineRulesetRulesQueryAddition.builder()
    .build();
```


### DataDatadogTagPipelineRulesetRulesReferenceTable <a name="DataDatadogTagPipelineRulesetRulesReferenceTable" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_tag_pipeline_ruleset.DataDatadogTagPipelineRulesetRulesReferenceTable;

DataDatadogTagPipelineRulesetRulesReferenceTable.builder()
//  .fieldPairs(IResolvable|java.util.List<DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTable.property.fieldPairs">fieldPairs</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs">DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs</a>></code> | field_pairs block. |

---

##### `fieldPairs`<sup>Optional</sup> <a name="fieldPairs" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTable.property.fieldPairs"></a>

```java
public IResolvable|java.util.List<DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs> getFieldPairs();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs">DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs</a>>

field_pairs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/tag_pipeline_ruleset#field_pairs DataDatadogTagPipelineRuleset#field_pairs}

---

### DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs <a name="DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_tag_pipeline_ruleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs;

DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogTagPipelineRulesetRulesList <a name="DataDatadogTagPipelineRulesetRulesList" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_tag_pipeline_ruleset.DataDatadogTagPipelineRulesetRulesList;

new DataDatadogTagPipelineRulesetRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.get"></a>

```java
public DataDatadogTagPipelineRulesetRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRules">DataDatadogTagPipelineRulesetRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatadogTagPipelineRulesetRules> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRules">DataDatadogTagPipelineRulesetRules</a>>

---


### DataDatadogTagPipelineRulesetRulesMappingOutputReference <a name="DataDatadogTagPipelineRulesetRulesMappingOutputReference" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_tag_pipeline_ruleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference;

new DataDatadogTagPipelineRulesetRulesMappingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.property.destinationKey">destinationKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.property.ifNotExists">ifNotExists</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.property.sourceKeys">sourceKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMapping">DataDatadogTagPipelineRulesetRulesMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationKey`<sup>Required</sup> <a name="destinationKey" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.property.destinationKey"></a>

```java
public java.lang.String getDestinationKey();
```

- *Type:* java.lang.String

---

##### `ifNotExists`<sup>Required</sup> <a name="ifNotExists" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.property.ifNotExists"></a>

```java
public IResolvable getIfNotExists();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `sourceKeys`<sup>Required</sup> <a name="sourceKeys" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.property.sourceKeys"></a>

```java
public java.util.List<java.lang.String> getSourceKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatadogTagPipelineRulesetRulesMapping getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMapping">DataDatadogTagPipelineRulesetRulesMapping</a>

---


### DataDatadogTagPipelineRulesetRulesOutputReference <a name="DataDatadogTagPipelineRulesetRulesOutputReference" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_tag_pipeline_ruleset.DataDatadogTagPipelineRulesetRulesOutputReference;

new DataDatadogTagPipelineRulesetRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.putReferenceTable">putReferenceTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.resetReferenceTable">resetReferenceTable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putReferenceTable` <a name="putReferenceTable" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.putReferenceTable"></a>

```java
public void putReferenceTable(DataDatadogTagPipelineRulesetRulesReferenceTable value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.putReferenceTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTable">DataDatadogTagPipelineRulesetRulesReferenceTable</a>

---

##### `resetReferenceTable` <a name="resetReferenceTable" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.resetReferenceTable"></a>

```java
public void resetReferenceTable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.property.mapping">mapping</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference">DataDatadogTagPipelineRulesetRulesMappingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.property.metadata">metadata</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.property.query">query</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference">DataDatadogTagPipelineRulesetRulesQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.property.referenceTable">referenceTable</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference">DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.property.referenceTableInput">referenceTableInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTable">DataDatadogTagPipelineRulesetRulesReferenceTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRules">DataDatadogTagPipelineRulesetRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `mapping`<sup>Required</sup> <a name="mapping" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.property.mapping"></a>

```java
public DataDatadogTagPipelineRulesetRulesMappingOutputReference getMapping();
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesMappingOutputReference">DataDatadogTagPipelineRulesetRulesMappingOutputReference</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.property.metadata"></a>

```java
public StringMap getMetadata();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.property.query"></a>

```java
public DataDatadogTagPipelineRulesetRulesQueryOutputReference getQuery();
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference">DataDatadogTagPipelineRulesetRulesQueryOutputReference</a>

---

##### `referenceTable`<sup>Required</sup> <a name="referenceTable" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.property.referenceTable"></a>

```java
public DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference getReferenceTable();
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference">DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference</a>

---

##### `referenceTableInput`<sup>Optional</sup> <a name="referenceTableInput" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.property.referenceTableInput"></a>

```java
public IResolvable|DataDatadogTagPipelineRulesetRulesReferenceTable getReferenceTableInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTable">DataDatadogTagPipelineRulesetRulesReferenceTable</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatadogTagPipelineRulesetRules getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRules">DataDatadogTagPipelineRulesetRules</a>

---


### DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference <a name="DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_tag_pipeline_ruleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference;

new DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAddition">DataDatadogTagPipelineRulesetRulesQueryAddition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatadogTagPipelineRulesetRulesQueryAddition getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAddition">DataDatadogTagPipelineRulesetRulesQueryAddition</a>

---


### DataDatadogTagPipelineRulesetRulesQueryOutputReference <a name="DataDatadogTagPipelineRulesetRulesQueryOutputReference" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_tag_pipeline_ruleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference;

new DataDatadogTagPipelineRulesetRulesQueryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.property.addition">addition</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference">DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.property.caseInsensitivity">caseInsensitivity</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.property.ifNotExists">ifNotExists</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQuery">DataDatadogTagPipelineRulesetRulesQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addition`<sup>Required</sup> <a name="addition" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.property.addition"></a>

```java
public DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference getAddition();
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference">DataDatadogTagPipelineRulesetRulesQueryAdditionOutputReference</a>

---

##### `caseInsensitivity`<sup>Required</sup> <a name="caseInsensitivity" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.property.caseInsensitivity"></a>

```java
public IResolvable getCaseInsensitivity();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `ifNotExists`<sup>Required</sup> <a name="ifNotExists" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.property.ifNotExists"></a>

```java
public IResolvable getIfNotExists();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQueryOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatadogTagPipelineRulesetRulesQuery getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesQuery">DataDatadogTagPipelineRulesetRulesQuery</a>

---


### DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList <a name="DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_tag_pipeline_ruleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList;

new DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.get"></a>

```java
public DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs">DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs">DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs</a>>

---


### DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference <a name="DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_tag_pipeline_ruleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference;

new DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.inputColumn">inputColumn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.outputKey">outputKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs">DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inputColumn`<sup>Required</sup> <a name="inputColumn" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.inputColumn"></a>

```java
public java.lang.String getInputColumn();
```

- *Type:* java.lang.String

---

##### `outputKey`<sup>Required</sup> <a name="outputKey" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.outputKey"></a>

```java
public java.lang.String getOutputKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs">DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs</a>

---


### DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference <a name="DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_tag_pipeline_ruleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference;

new DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.putFieldPairs">putFieldPairs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.resetFieldPairs">resetFieldPairs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFieldPairs` <a name="putFieldPairs" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.putFieldPairs"></a>

```java
public void putFieldPairs(IResolvable|java.util.List<DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.putFieldPairs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs">DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs</a>>

---

##### `resetFieldPairs` <a name="resetFieldPairs" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.resetFieldPairs"></a>

```java
public void resetFieldPairs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.property.caseInsensitivity">caseInsensitivity</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.property.fieldPairs">fieldPairs</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList">DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.property.ifNotExists">ifNotExists</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.property.sourceKeys">sourceKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.property.fieldPairsInput">fieldPairsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs">DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTable">DataDatadogTagPipelineRulesetRulesReferenceTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `caseInsensitivity`<sup>Required</sup> <a name="caseInsensitivity" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.property.caseInsensitivity"></a>

```java
public IResolvable getCaseInsensitivity();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `fieldPairs`<sup>Required</sup> <a name="fieldPairs" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.property.fieldPairs"></a>

```java
public DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList getFieldPairs();
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList">DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairsList</a>

---

##### `ifNotExists`<sup>Required</sup> <a name="ifNotExists" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.property.ifNotExists"></a>

```java
public IResolvable getIfNotExists();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `sourceKeys`<sup>Required</sup> <a name="sourceKeys" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.property.sourceKeys"></a>

```java
public java.util.List<java.lang.String> getSourceKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `fieldPairsInput`<sup>Optional</sup> <a name="fieldPairsInput" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.property.fieldPairsInput"></a>

```java
public IResolvable|java.util.List<DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs> getFieldPairsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs">DataDatadogTagPipelineRulesetRulesReferenceTableFieldPairs</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTableOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatadogTagPipelineRulesetRulesReferenceTable getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogTagPipelineRuleset.DataDatadogTagPipelineRulesetRulesReferenceTable">DataDatadogTagPipelineRulesetRulesReferenceTable</a>

---



