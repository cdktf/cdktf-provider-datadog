# `onCallEscalationPolicy` Submodule <a name="`onCallEscalationPolicy` Submodule" id="@cdktf/provider-datadog.onCallEscalationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OnCallEscalationPolicy <a name="OnCallEscalationPolicy" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/on_call_escalation_policy datadog_on_call_escalation_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.on_call_escalation_policy.OnCallEscalationPolicy;

OnCallEscalationPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .resolvePageOnPolicyEnd(java.lang.Boolean)
//  .resolvePageOnPolicyEnd(IResolvable)
//  .retries(java.lang.Number)
//  .step(IResolvable)
//  .step(java.util.List<OnCallEscalationPolicyStep>)
//  .teams(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A human-readable name for the escalation policy. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.resolvePageOnPolicyEnd">resolvePageOnPolicyEnd</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, pages will be automatically resolved if unacknowledged after the final step. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.retries">retries</a></code> | <code>java.lang.Number</code> | If set, policy will be retried this many times after the final step. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.step">step</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep">OnCallEscalationPolicyStep</a>></code> | step block. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.teams">teams</a></code> | <code>java.util.List<java.lang.String></code> | A list of team ids associated with the escalation policy. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A human-readable name for the escalation policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/on_call_escalation_policy#name OnCallEscalationPolicy#name}

---

##### `resolvePageOnPolicyEnd`<sup>Optional</sup> <a name="resolvePageOnPolicyEnd" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.resolvePageOnPolicyEnd"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, pages will be automatically resolved if unacknowledged after the final step. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/on_call_escalation_policy#resolve_page_on_policy_end OnCallEscalationPolicy#resolve_page_on_policy_end}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.retries"></a>

- *Type:* java.lang.Number

If set, policy will be retried this many times after the final step.

Must be in the range 0-10. Value must be between 0 and 10. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/on_call_escalation_policy#retries OnCallEscalationPolicy#retries}

---

##### `step`<sup>Optional</sup> <a name="step" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.step"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep">OnCallEscalationPolicyStep</a>>

step block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/on_call_escalation_policy#step OnCallEscalationPolicy#step}

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.teams"></a>

- *Type:* java.util.List<java.lang.String>

A list of team ids associated with the escalation policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/on_call_escalation_policy#teams OnCallEscalationPolicy#teams}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.putStep">putStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.resetResolvePageOnPolicyEnd">resetResolvePageOnPolicyEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.resetRetries">resetRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.resetStep">resetStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.resetTeams">resetTeams</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putStep` <a name="putStep" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.putStep"></a>

```java
public void putStep(IResolvable OR java.util.List<OnCallEscalationPolicyStep> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.putStep.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep">OnCallEscalationPolicyStep</a>>

---

##### `resetResolvePageOnPolicyEnd` <a name="resetResolvePageOnPolicyEnd" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.resetResolvePageOnPolicyEnd"></a>

```java
public void resetResolvePageOnPolicyEnd()
```

##### `resetRetries` <a name="resetRetries" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.resetRetries"></a>

```java
public void resetRetries()
```

##### `resetStep` <a name="resetStep" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.resetStep"></a>

```java
public void resetStep()
```

##### `resetTeams` <a name="resetTeams" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.resetTeams"></a>

```java
public void resetTeams()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OnCallEscalationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.datadog.on_call_escalation_policy.OnCallEscalationPolicy;

OnCallEscalationPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.datadog.on_call_escalation_policy.OnCallEscalationPolicy;

OnCallEscalationPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.datadog.on_call_escalation_policy.OnCallEscalationPolicy;

OnCallEscalationPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.datadog.on_call_escalation_policy.OnCallEscalationPolicy;

OnCallEscalationPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OnCallEscalationPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OnCallEscalationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OnCallEscalationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OnCallEscalationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/on_call_escalation_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OnCallEscalationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.step">step</a></code> | <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList">OnCallEscalationPolicyStepList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.resolvePageOnPolicyEndInput">resolvePageOnPolicyEndInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.retriesInput">retriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.stepInput">stepInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep">OnCallEscalationPolicyStep</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.teamsInput">teamsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.resolvePageOnPolicyEnd">resolvePageOnPolicyEnd</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.retries">retries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.teams">teams</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `step`<sup>Required</sup> <a name="step" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.step"></a>

```java
public OnCallEscalationPolicyStepList getStep();
```

- *Type:* <a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList">OnCallEscalationPolicyStepList</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resolvePageOnPolicyEndInput`<sup>Optional</sup> <a name="resolvePageOnPolicyEndInput" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.resolvePageOnPolicyEndInput"></a>

```java
public java.lang.Object getResolvePageOnPolicyEndInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retriesInput`<sup>Optional</sup> <a name="retriesInput" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.retriesInput"></a>

```java
public java.lang.Number getRetriesInput();
```

- *Type:* java.lang.Number

---

##### `stepInput`<sup>Optional</sup> <a name="stepInput" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.stepInput"></a>

```java
public java.lang.Object getStepInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep">OnCallEscalationPolicyStep</a>>

---

##### `teamsInput`<sup>Optional</sup> <a name="teamsInput" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.teamsInput"></a>

```java
public java.util.List<java.lang.String> getTeamsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resolvePageOnPolicyEnd`<sup>Required</sup> <a name="resolvePageOnPolicyEnd" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.resolvePageOnPolicyEnd"></a>

```java
public java.lang.Object getResolvePageOnPolicyEnd();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retries`<sup>Required</sup> <a name="retries" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.retries"></a>

```java
public java.lang.Number getRetries();
```

- *Type:* java.lang.Number

---

##### `teams`<sup>Required</sup> <a name="teams" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.teams"></a>

```java
public java.util.List<java.lang.String> getTeams();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OnCallEscalationPolicyConfig <a name="OnCallEscalationPolicyConfig" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.on_call_escalation_policy.OnCallEscalationPolicyConfig;

OnCallEscalationPolicyConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .resolvePageOnPolicyEnd(java.lang.Boolean)
//  .resolvePageOnPolicyEnd(IResolvable)
//  .retries(java.lang.Number)
//  .step(IResolvable)
//  .step(java.util.List<OnCallEscalationPolicyStep>)
//  .teams(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | A human-readable name for the escalation policy. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.resolvePageOnPolicyEnd">resolvePageOnPolicyEnd</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, pages will be automatically resolved if unacknowledged after the final step. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.retries">retries</a></code> | <code>java.lang.Number</code> | If set, policy will be retried this many times after the final step. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.step">step</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep">OnCallEscalationPolicyStep</a>></code> | step block. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.teams">teams</a></code> | <code>java.util.List<java.lang.String></code> | A list of team ids associated with the escalation policy. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A human-readable name for the escalation policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/on_call_escalation_policy#name OnCallEscalationPolicy#name}

---

##### `resolvePageOnPolicyEnd`<sup>Optional</sup> <a name="resolvePageOnPolicyEnd" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.resolvePageOnPolicyEnd"></a>

```java
public java.lang.Object getResolvePageOnPolicyEnd();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, pages will be automatically resolved if unacknowledged after the final step. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/on_call_escalation_policy#resolve_page_on_policy_end OnCallEscalationPolicy#resolve_page_on_policy_end}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.retries"></a>

```java
public java.lang.Number getRetries();
```

- *Type:* java.lang.Number

If set, policy will be retried this many times after the final step.

Must be in the range 0-10. Value must be between 0 and 10. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/on_call_escalation_policy#retries OnCallEscalationPolicy#retries}

---

##### `step`<sup>Optional</sup> <a name="step" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.step"></a>

```java
public java.lang.Object getStep();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep">OnCallEscalationPolicyStep</a>>

step block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/on_call_escalation_policy#step OnCallEscalationPolicy#step}

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.teams"></a>

```java
public java.util.List<java.lang.String> getTeams();
```

- *Type:* java.util.List<java.lang.String>

A list of team ids associated with the escalation policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/on_call_escalation_policy#teams OnCallEscalationPolicy#teams}

---

### OnCallEscalationPolicyStep <a name="OnCallEscalationPolicyStep" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.on_call_escalation_policy.OnCallEscalationPolicyStep;

OnCallEscalationPolicyStep.builder()
    .escalateAfterSeconds(java.lang.Number)
//  .assignment(java.lang.String)
//  .target(IResolvable)
//  .target(java.util.List<OnCallEscalationPolicyStepTarget>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep.property.escalateAfterSeconds">escalateAfterSeconds</a></code> | <code>java.lang.Number</code> | Defines how many seconds to wait before escalating to the next step. Value must be between 60 and 36000. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep.property.assignment">assignment</a></code> | <code>java.lang.String</code> | Specifies how this escalation step will assign targets. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep.property.target">target</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget">OnCallEscalationPolicyStepTarget</a>></code> | target block. |

---

##### `escalateAfterSeconds`<sup>Required</sup> <a name="escalateAfterSeconds" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep.property.escalateAfterSeconds"></a>

```java
public java.lang.Number getEscalateAfterSeconds();
```

- *Type:* java.lang.Number

Defines how many seconds to wait before escalating to the next step. Value must be between 60 and 36000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/on_call_escalation_policy#escalate_after_seconds OnCallEscalationPolicy#escalate_after_seconds}

---

##### `assignment`<sup>Optional</sup> <a name="assignment" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep.property.assignment"></a>

```java
public java.lang.String getAssignment();
```

- *Type:* java.lang.String

Specifies how this escalation step will assign targets.

Can be `default` (page all targets at once) or `round-robin`. Valid values are `default`, `round-robin`. Defaults to `"default"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/on_call_escalation_policy#assignment OnCallEscalationPolicy#assignment}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep.property.target"></a>

```java
public java.lang.Object getTarget();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget">OnCallEscalationPolicyStepTarget</a>>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/on_call_escalation_policy#target OnCallEscalationPolicy#target}

---

### OnCallEscalationPolicyStepTarget <a name="OnCallEscalationPolicyStepTarget" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.on_call_escalation_policy.OnCallEscalationPolicyStepTarget;

OnCallEscalationPolicyStepTarget.builder()
//  .schedule(java.lang.String)
//  .team(java.lang.String)
//  .user(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget.property.schedule">schedule</a></code> | <code>java.lang.String</code> | Targeted schedule ID. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget.property.team">team</a></code> | <code>java.lang.String</code> | Targeted team ID. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget.property.user">user</a></code> | <code>java.lang.String</code> | Targeted user ID. |

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

Targeted schedule ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/on_call_escalation_policy#schedule OnCallEscalationPolicy#schedule}

---

##### `team`<sup>Optional</sup> <a name="team" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget.property.team"></a>

```java
public java.lang.String getTeam();
```

- *Type:* java.lang.String

Targeted team ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/on_call_escalation_policy#team OnCallEscalationPolicy#team}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

Targeted user ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/on_call_escalation_policy#user OnCallEscalationPolicy#user}

---

## Classes <a name="Classes" id="Classes"></a>

### OnCallEscalationPolicyStepList <a name="OnCallEscalationPolicyStepList" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.on_call_escalation_policy.OnCallEscalationPolicyStepList;

new OnCallEscalationPolicyStepList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.get"></a>

```java
public OnCallEscalationPolicyStepOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep">OnCallEscalationPolicyStep</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep">OnCallEscalationPolicyStep</a>>

---


### OnCallEscalationPolicyStepOutputReference <a name="OnCallEscalationPolicyStepOutputReference" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.on_call_escalation_policy.OnCallEscalationPolicyStepOutputReference;

new OnCallEscalationPolicyStepOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.resetAssignment">resetAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTarget` <a name="putTarget" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.putTarget"></a>

```java
public void putTarget(IResolvable OR java.util.List<OnCallEscalationPolicyStepTarget> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.putTarget.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget">OnCallEscalationPolicyStepTarget</a>>

---

##### `resetAssignment` <a name="resetAssignment" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.resetAssignment"></a>

```java
public void resetAssignment()
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.resetTarget"></a>

```java
public void resetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.target">target</a></code> | <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList">OnCallEscalationPolicyStepTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.assignmentInput">assignmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.escalateAfterSecondsInput">escalateAfterSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.targetInput">targetInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget">OnCallEscalationPolicyStepTarget</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.assignment">assignment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.escalateAfterSeconds">escalateAfterSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep">OnCallEscalationPolicyStep</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.target"></a>

```java
public OnCallEscalationPolicyStepTargetList getTarget();
```

- *Type:* <a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList">OnCallEscalationPolicyStepTargetList</a>

---

##### `assignmentInput`<sup>Optional</sup> <a name="assignmentInput" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.assignmentInput"></a>

```java
public java.lang.String getAssignmentInput();
```

- *Type:* java.lang.String

---

##### `escalateAfterSecondsInput`<sup>Optional</sup> <a name="escalateAfterSecondsInput" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.escalateAfterSecondsInput"></a>

```java
public java.lang.Number getEscalateAfterSecondsInput();
```

- *Type:* java.lang.Number

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.targetInput"></a>

```java
public java.lang.Object getTargetInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget">OnCallEscalationPolicyStepTarget</a>>

---

##### `assignment`<sup>Required</sup> <a name="assignment" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.assignment"></a>

```java
public java.lang.String getAssignment();
```

- *Type:* java.lang.String

---

##### `escalateAfterSeconds`<sup>Required</sup> <a name="escalateAfterSeconds" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.escalateAfterSeconds"></a>

```java
public java.lang.Number getEscalateAfterSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep">OnCallEscalationPolicyStep</a>

---


### OnCallEscalationPolicyStepTargetList <a name="OnCallEscalationPolicyStepTargetList" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.on_call_escalation_policy.OnCallEscalationPolicyStepTargetList;

new OnCallEscalationPolicyStepTargetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.get"></a>

```java
public OnCallEscalationPolicyStepTargetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget">OnCallEscalationPolicyStepTarget</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget">OnCallEscalationPolicyStepTarget</a>>

---


### OnCallEscalationPolicyStepTargetOutputReference <a name="OnCallEscalationPolicyStepTargetOutputReference" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.on_call_escalation_policy.OnCallEscalationPolicyStepTargetOutputReference;

new OnCallEscalationPolicyStepTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.resetTeam">resetTeam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.resetUser">resetUser</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.resetSchedule"></a>

```java
public void resetSchedule()
```

##### `resetTeam` <a name="resetTeam" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.resetTeam"></a>

```java
public void resetTeam()
```

##### `resetUser` <a name="resetUser" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.resetUser"></a>

```java
public void resetUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.scheduleInput">scheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.teamInput">teamInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.userInput">userInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.schedule">schedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.team">team</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.user">user</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget">OnCallEscalationPolicyStepTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.scheduleInput"></a>

```java
public java.lang.String getScheduleInput();
```

- *Type:* java.lang.String

---

##### `teamInput`<sup>Optional</sup> <a name="teamInput" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.teamInput"></a>

```java
public java.lang.String getTeamInput();
```

- *Type:* java.lang.String

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.userInput"></a>

```java
public java.lang.String getUserInput();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

---

##### `team`<sup>Required</sup> <a name="team" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.team"></a>

```java
public java.lang.String getTeam();
```

- *Type:* java.lang.String

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget">OnCallEscalationPolicyStepTarget</a>

---



