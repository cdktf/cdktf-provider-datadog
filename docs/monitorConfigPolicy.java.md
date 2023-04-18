# `datadog_monitor_config_policy`

Refer to the Terraform Registory for docs: [`datadog_monitor_config_policy`](https://www.terraform.io/docs/providers/datadog/r/monitor_config_policy).

# `monitorConfigPolicy` Submodule <a name="`monitorConfigPolicy` Submodule" id="@cdktf/provider-datadog.monitorConfigPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorConfigPolicy <a name="MonitorConfigPolicy" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/datadog/r/monitor_config_policy datadog_monitor_config_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.monitor_config_policy.MonitorConfigPolicy;

MonitorConfigPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .policyType(java.lang.String)
//  .id(java.lang.String)
//  .tagPolicy(MonitorConfigPolicyTagPolicy)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.policyType">policyType</a></code> | <code>java.lang.String</code> | The monitor config policy type Valid values are `tag`. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor_config_policy#id MonitorConfigPolicy#id}. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.tagPolicy">tagPolicy</a></code> | <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy">MonitorConfigPolicyTagPolicy</a></code> | tag_policy block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.policyType"></a>

- *Type:* java.lang.String

The monitor config policy type Valid values are `tag`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor_config_policy#policy_type MonitorConfigPolicy#policy_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor_config_policy#id MonitorConfigPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tagPolicy`<sup>Optional</sup> <a name="tagPolicy" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.tagPolicy"></a>

- *Type:* <a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy">MonitorConfigPolicyTagPolicy</a>

tag_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor_config_policy#tag_policy MonitorConfigPolicy#tag_policy}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.putTagPolicy">putTagPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.resetTagPolicy">resetTagPolicy</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTagPolicy` <a name="putTagPolicy" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.putTagPolicy"></a>

```java
public void putTagPolicy(MonitorConfigPolicyTagPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.putTagPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy">MonitorConfigPolicyTagPolicy</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetTagPolicy` <a name="resetTagPolicy" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.resetTagPolicy"></a>

```java
public void resetTagPolicy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.datadog.monitor_config_policy.MonitorConfigPolicy;

MonitorConfigPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.datadog.monitor_config_policy.MonitorConfigPolicy;

MonitorConfigPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.datadog.monitor_config_policy.MonitorConfigPolicy;

MonitorConfigPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.tagPolicy">tagPolicy</a></code> | <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference">MonitorConfigPolicyTagPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.policyTypeInput">policyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.tagPolicyInput">tagPolicyInput</a></code> | <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy">MonitorConfigPolicyTagPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.policyType">policyType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `tagPolicy`<sup>Required</sup> <a name="tagPolicy" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.tagPolicy"></a>

```java
public MonitorConfigPolicyTagPolicyOutputReference getTagPolicy();
```

- *Type:* <a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference">MonitorConfigPolicyTagPolicyOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `policyTypeInput`<sup>Optional</sup> <a name="policyTypeInput" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.policyTypeInput"></a>

```java
public java.lang.String getPolicyTypeInput();
```

- *Type:* java.lang.String

---

##### `tagPolicyInput`<sup>Optional</sup> <a name="tagPolicyInput" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.tagPolicyInput"></a>

```java
public MonitorConfigPolicyTagPolicy getTagPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy">MonitorConfigPolicyTagPolicy</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.policyType"></a>

```java
public java.lang.String getPolicyType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorConfigPolicyConfig <a name="MonitorConfigPolicyConfig" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.monitor_config_policy.MonitorConfigPolicyConfig;

MonitorConfigPolicyConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .policyType(java.lang.String)
//  .id(java.lang.String)
//  .tagPolicy(MonitorConfigPolicyTagPolicy)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.policyType">policyType</a></code> | <code>java.lang.String</code> | The monitor config policy type Valid values are `tag`. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor_config_policy#id MonitorConfigPolicy#id}. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.tagPolicy">tagPolicy</a></code> | <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy">MonitorConfigPolicyTagPolicy</a></code> | tag_policy block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.policyType"></a>

```java
public java.lang.String getPolicyType();
```

- *Type:* java.lang.String

The monitor config policy type Valid values are `tag`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor_config_policy#policy_type MonitorConfigPolicy#policy_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor_config_policy#id MonitorConfigPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tagPolicy`<sup>Optional</sup> <a name="tagPolicy" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.tagPolicy"></a>

```java
public MonitorConfigPolicyTagPolicy getTagPolicy();
```

- *Type:* <a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy">MonitorConfigPolicyTagPolicy</a>

tag_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor_config_policy#tag_policy MonitorConfigPolicy#tag_policy}

---

### MonitorConfigPolicyTagPolicy <a name="MonitorConfigPolicyTagPolicy" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.monitor_config_policy.MonitorConfigPolicyTagPolicy;

MonitorConfigPolicyTagPolicy.builder()
    .tagKey(java.lang.String)
    .tagKeyRequired(java.lang.Boolean)
    .tagKeyRequired(IResolvable)
    .validTagValues(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | The key of the tag. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy.property.tagKeyRequired">tagKeyRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If a tag key is required for monitor creation. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy.property.validTagValues">validTagValues</a></code> | <code>java.util.List<java.lang.String></code> | Valid values for the tag. |

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

The key of the tag.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor_config_policy#tag_key MonitorConfigPolicy#tag_key}

---

##### `tagKeyRequired`<sup>Required</sup> <a name="tagKeyRequired" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy.property.tagKeyRequired"></a>

```java
public java.lang.Object getTagKeyRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If a tag key is required for monitor creation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor_config_policy#tag_key_required MonitorConfigPolicy#tag_key_required}

---

##### `validTagValues`<sup>Required</sup> <a name="validTagValues" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy.property.validTagValues"></a>

```java
public java.util.List<java.lang.String> getValidTagValues();
```

- *Type:* java.util.List<java.lang.String>

Valid values for the tag.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor_config_policy#valid_tag_values MonitorConfigPolicy#valid_tag_values}

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorConfigPolicyTagPolicyOutputReference <a name="MonitorConfigPolicyTagPolicyOutputReference" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.monitor_config_policy.MonitorConfigPolicyTagPolicyOutputReference;

new MonitorConfigPolicyTagPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.tagKeyRequiredInput">tagKeyRequiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.validTagValuesInput">validTagValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.tagKeyRequired">tagKeyRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.validTagValues">validTagValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy">MonitorConfigPolicyTagPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.tagKeyInput"></a>

```java
public java.lang.String getTagKeyInput();
```

- *Type:* java.lang.String

---

##### `tagKeyRequiredInput`<sup>Optional</sup> <a name="tagKeyRequiredInput" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.tagKeyRequiredInput"></a>

```java
public java.lang.Object getTagKeyRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `validTagValuesInput`<sup>Optional</sup> <a name="validTagValuesInput" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.validTagValuesInput"></a>

```java
public java.util.List<java.lang.String> getValidTagValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `tagKeyRequired`<sup>Required</sup> <a name="tagKeyRequired" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.tagKeyRequired"></a>

```java
public java.lang.Object getTagKeyRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `validTagValues`<sup>Required</sup> <a name="validTagValues" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.validTagValues"></a>

```java
public java.util.List<java.lang.String> getValidTagValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.internalValue"></a>

```java
public MonitorConfigPolicyTagPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy">MonitorConfigPolicyTagPolicy</a>

---



