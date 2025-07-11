# `csmThreatsPolicy` Submodule <a name="`csmThreatsPolicy` Submodule" id="@cdktf/provider-datadog.csmThreatsPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CsmThreatsPolicy <a name="CsmThreatsPolicy" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/csm_threats_policy datadog_csm_threats_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.csm_threats_policy.CsmThreatsPolicy;

CsmThreatsPolicy.Builder.create(Construct scope, java.lang.String id)
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
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .hostTagsLists(IResolvable)
//  .hostTagsLists(java.util.List<java.util.List<java.lang.String>>)
//  .tags(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the policy. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description for the policy. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether the policy is enabled. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.Initializer.parameter.hostTagsLists">hostTagsLists</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.List<java.lang.String>></code> | Host tags that define where the policy is deployed. Inner values are ANDed, outer arrays are ORed. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Host tags that define where the policy is deployed. Deprecated, use host_tags_lists instead. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/csm_threats_policy#name CsmThreatsPolicy#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description for the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/csm_threats_policy#description CsmThreatsPolicy#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether the policy is enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/csm_threats_policy#enabled CsmThreatsPolicy#enabled}

---

##### `hostTagsLists`<sup>Optional</sup> <a name="hostTagsLists" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.Initializer.parameter.hostTagsLists"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.List<java.lang.String>>

Host tags that define where the policy is deployed. Inner values are ANDed, outer arrays are ORed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/csm_threats_policy#host_tags_lists CsmThreatsPolicy#host_tags_lists}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

Host tags that define where the policy is deployed. Deprecated, use host_tags_lists instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/csm_threats_policy#tags CsmThreatsPolicy#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.resetHostTagsLists">resetHostTagsLists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetHostTagsLists` <a name="resetHostTagsLists" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.resetHostTagsLists"></a>

```java
public void resetHostTagsLists()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CsmThreatsPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.datadog.csm_threats_policy.CsmThreatsPolicy;

CsmThreatsPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.datadog.csm_threats_policy.CsmThreatsPolicy;

CsmThreatsPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.datadog.csm_threats_policy.CsmThreatsPolicy;

CsmThreatsPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.datadog.csm_threats_policy.CsmThreatsPolicy;

CsmThreatsPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CsmThreatsPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CsmThreatsPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CsmThreatsPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CsmThreatsPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/csm_threats_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CsmThreatsPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.hostTagsListsInput">hostTagsListsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.hostTagsLists">hostTagsLists</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostTagsListsInput`<sup>Optional</sup> <a name="hostTagsListsInput" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.hostTagsListsInput"></a>

```java
public java.lang.Object getHostTagsListsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.List<java.lang.String>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostTagsLists`<sup>Required</sup> <a name="hostTagsLists" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.hostTagsLists"></a>

```java
public java.lang.Object getHostTagsLists();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.List<java.lang.String>>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CsmThreatsPolicyConfig <a name="CsmThreatsPolicyConfig" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.csm_threats_policy.CsmThreatsPolicyConfig;

CsmThreatsPolicyConfig.builder()
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
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .hostTagsLists(IResolvable)
//  .hostTagsLists(java.util.List<java.util.List<java.lang.String>>)
//  .tags(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the policy. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description for the policy. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicyConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether the policy is enabled. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicyConfig.property.hostTagsLists">hostTagsLists</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.List<java.lang.String>></code> | Host tags that define where the policy is deployed. Inner values are ANDed, outer arrays are ORed. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicyConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Host tags that define where the policy is deployed. Deprecated, use host_tags_lists instead. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/csm_threats_policy#name CsmThreatsPolicy#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description for the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/csm_threats_policy#description CsmThreatsPolicy#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicyConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether the policy is enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/csm_threats_policy#enabled CsmThreatsPolicy#enabled}

---

##### `hostTagsLists`<sup>Optional</sup> <a name="hostTagsLists" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicyConfig.property.hostTagsLists"></a>

```java
public java.lang.Object getHostTagsLists();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.List<java.lang.String>>

Host tags that define where the policy is deployed. Inner values are ANDed, outer arrays are ORed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/csm_threats_policy#host_tags_lists CsmThreatsPolicy#host_tags_lists}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-datadog.csmThreatsPolicy.CsmThreatsPolicyConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Host tags that define where the policy is deployed. Deprecated, use host_tags_lists instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/csm_threats_policy#tags CsmThreatsPolicy#tags}

---



