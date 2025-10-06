# `dataDatadogIncidentNotificationRule` Submodule <a name="`dataDatadogIncidentNotificationRule` Submodule" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogIncidentNotificationRule <a name="DataDatadogIncidentNotificationRule" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/data-sources/incident_notification_rule datadog_incident_notification_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_incident_notification_rule.DataDatadogIncidentNotificationRule;

DataDatadogIncidentNotificationRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .id(java.lang.String)
//  .conditions(IResolvable|java.util.List<DataDatadogIncidentNotificationRuleConditions>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The ID of the incident notification rule. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.conditions">conditions</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions">DataDatadogIncidentNotificationRuleConditions</a>></code> | conditions block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The ID of the incident notification rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/data-sources/incident_notification_rule#id DataDatadogIncidentNotificationRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.conditions"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions">DataDatadogIncidentNotificationRuleConditions</a>>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/data-sources/incident_notification_rule#conditions DataDatadogIncidentNotificationRule#conditions}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.resetConditions">resetConditions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putConditions` <a name="putConditions" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.putConditions"></a>

```java
public void putConditions(IResolvable|java.util.List<DataDatadogIncidentNotificationRuleConditions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.putConditions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions">DataDatadogIncidentNotificationRuleConditions</a>>

---

##### `resetConditions` <a name="resetConditions" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.resetConditions"></a>

```java
public void resetConditions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogIncidentNotificationRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_incident_notification_rule.DataDatadogIncidentNotificationRule;

DataDatadogIncidentNotificationRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_incident_notification_rule.DataDatadogIncidentNotificationRule;

DataDatadogIncidentNotificationRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_incident_notification_rule.DataDatadogIncidentNotificationRule;

DataDatadogIncidentNotificationRule.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_incident_notification_rule.DataDatadogIncidentNotificationRule;

DataDatadogIncidentNotificationRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatadogIncidentNotificationRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDatadogIncidentNotificationRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatadogIncidentNotificationRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatadogIncidentNotificationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/data-sources/incident_notification_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogIncidentNotificationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList">DataDatadogIncidentNotificationRuleConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.handles">handles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.incidentType">incidentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.modified">modified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.notificationTemplate">notificationTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.renotifyOn">renotifyOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.trigger">trigger</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.visibility">visibility</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.conditionsInput">conditionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions">DataDatadogIncidentNotificationRuleConditions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.conditions"></a>

```java
public DataDatadogIncidentNotificationRuleConditionsList getConditions();
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList">DataDatadogIncidentNotificationRuleConditionsList</a>

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `handles`<sup>Required</sup> <a name="handles" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.handles"></a>

```java
public java.util.List<java.lang.String> getHandles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `incidentType`<sup>Required</sup> <a name="incidentType" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.incidentType"></a>

```java
public java.lang.String getIncidentType();
```

- *Type:* java.lang.String

---

##### `modified`<sup>Required</sup> <a name="modified" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.modified"></a>

```java
public java.lang.String getModified();
```

- *Type:* java.lang.String

---

##### `notificationTemplate`<sup>Required</sup> <a name="notificationTemplate" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.notificationTemplate"></a>

```java
public java.lang.String getNotificationTemplate();
```

- *Type:* java.lang.String

---

##### `renotifyOn`<sup>Required</sup> <a name="renotifyOn" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.renotifyOn"></a>

```java
public java.util.List<java.lang.String> getRenotifyOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.trigger"></a>

```java
public java.lang.String getTrigger();
```

- *Type:* java.lang.String

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.visibility"></a>

```java
public java.lang.String getVisibility();
```

- *Type:* java.lang.String

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.conditionsInput"></a>

```java
public IResolvable|java.util.List<DataDatadogIncidentNotificationRuleConditions> getConditionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions">DataDatadogIncidentNotificationRuleConditions</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogIncidentNotificationRuleConditions <a name="DataDatadogIncidentNotificationRuleConditions" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_incident_notification_rule.DataDatadogIncidentNotificationRuleConditions;

DataDatadogIncidentNotificationRuleConditions.builder()
    .build();
```


### DataDatadogIncidentNotificationRuleConfig <a name="DataDatadogIncidentNotificationRuleConfig" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_incident_notification_rule.DataDatadogIncidentNotificationRuleConfig;

DataDatadogIncidentNotificationRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .id(java.lang.String)
//  .conditions(IResolvable|java.util.List<DataDatadogIncidentNotificationRuleConditions>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | The ID of the incident notification rule. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.conditions">conditions</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions">DataDatadogIncidentNotificationRuleConditions</a>></code> | conditions block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The ID of the incident notification rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/data-sources/incident_notification_rule#id DataDatadogIncidentNotificationRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.conditions"></a>

```java
public IResolvable|java.util.List<DataDatadogIncidentNotificationRuleConditions> getConditions();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions">DataDatadogIncidentNotificationRuleConditions</a>>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/data-sources/incident_notification_rule#conditions DataDatadogIncidentNotificationRule#conditions}

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatadogIncidentNotificationRuleConditionsList <a name="DataDatadogIncidentNotificationRuleConditionsList" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_incident_notification_rule.DataDatadogIncidentNotificationRuleConditionsList;

new DataDatadogIncidentNotificationRuleConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.get"></a>

```java
public DataDatadogIncidentNotificationRuleConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions">DataDatadogIncidentNotificationRuleConditions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatadogIncidentNotificationRuleConditions> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions">DataDatadogIncidentNotificationRuleConditions</a>>

---


### DataDatadogIncidentNotificationRuleConditionsOutputReference <a name="DataDatadogIncidentNotificationRuleConditionsOutputReference" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.data_datadog_incident_notification_rule.DataDatadogIncidentNotificationRuleConditionsOutputReference;

new DataDatadogIncidentNotificationRuleConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.field">field</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions">DataDatadogIncidentNotificationRuleConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatadogIncidentNotificationRuleConditions getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions">DataDatadogIncidentNotificationRuleConditions</a>

---



