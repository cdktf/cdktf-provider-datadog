# `tagPipelineRuleset` Submodule <a name="`tagPipelineRuleset` Submodule" id="@cdktf/provider-datadog.tagPipelineRuleset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TagPipelineRuleset <a name="TagPipelineRuleset" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset datadog_tag_pipeline_ruleset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.tag_pipeline_ruleset.TagPipelineRuleset;

TagPipelineRuleset.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
//  .rules(IResolvable|java.util.List<TagPipelineRulesetRules>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the ruleset. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether the ruleset is enabled. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.Initializer.parameter.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules">TagPipelineRulesetRules</a>></code> | rules block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the ruleset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#name TagPipelineRuleset#name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether the ruleset is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#enabled TagPipelineRuleset#enabled}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.Initializer.parameter.rules"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules">TagPipelineRulesetRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#rules TagPipelineRuleset#rules}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.resetRules">resetRules</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRules` <a name="putRules" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.putRules"></a>

```java
public void putRules(IResolvable|java.util.List<TagPipelineRulesetRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.putRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules">TagPipelineRulesetRules</a>>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetRules` <a name="resetRules" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.resetRules"></a>

```java
public void resetRules()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a TagPipelineRuleset resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.datadog.tag_pipeline_ruleset.TagPipelineRuleset;

TagPipelineRuleset.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.datadog.tag_pipeline_ruleset.TagPipelineRuleset;

TagPipelineRuleset.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.datadog.tag_pipeline_ruleset.TagPipelineRuleset;

TagPipelineRuleset.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.datadog.tag_pipeline_ruleset.TagPipelineRuleset;

TagPipelineRuleset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),TagPipelineRuleset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a TagPipelineRuleset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the TagPipelineRuleset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing TagPipelineRuleset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the TagPipelineRuleset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.position">position</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList">TagPipelineRulesetRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.version">version</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.rulesInput">rulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules">TagPipelineRulesetRules</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.rules"></a>

```java
public TagPipelineRulesetRulesList getRules();
```

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList">TagPipelineRulesetRulesList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.rulesInput"></a>

```java
public IResolvable|java.util.List<TagPipelineRulesetRules> getRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules">TagPipelineRulesetRules</a>>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TagPipelineRulesetConfig <a name="TagPipelineRulesetConfig" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.tag_pipeline_ruleset.TagPipelineRulesetConfig;

TagPipelineRulesetConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
//  .rules(IResolvable|java.util.List<TagPipelineRulesetRules>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the ruleset. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether the ruleset is enabled. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules">TagPipelineRulesetRules</a>></code> | rules block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the ruleset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#name TagPipelineRuleset#name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether the ruleset is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#enabled TagPipelineRuleset#enabled}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.rules"></a>

```java
public IResolvable|java.util.List<TagPipelineRulesetRules> getRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules">TagPipelineRulesetRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#rules TagPipelineRuleset#rules}

---

### TagPipelineRulesetRules <a name="TagPipelineRulesetRules" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.tag_pipeline_ruleset.TagPipelineRulesetRules;

TagPipelineRulesetRules.builder()
    .enabled(java.lang.Boolean|IResolvable)
    .name(java.lang.String)
//  .mapping(TagPipelineRulesetRulesMapping)
//  .query(TagPipelineRulesetRulesQuery)
//  .referenceTable(TagPipelineRulesetRulesReferenceTable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether the rule is enabled. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules.property.name">name</a></code> | <code>java.lang.String</code> | The name of the rule. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules.property.mapping">mapping</a></code> | <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping">TagPipelineRulesetRulesMapping</a></code> | mapping block. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules.property.query">query</a></code> | <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery">TagPipelineRulesetRulesQuery</a></code> | query block. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules.property.referenceTable">referenceTable</a></code> | <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable">TagPipelineRulesetRulesReferenceTable</a></code> | reference_table block. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether the rule is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#enabled TagPipelineRuleset#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#name TagPipelineRuleset#name}

---

##### `mapping`<sup>Optional</sup> <a name="mapping" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules.property.mapping"></a>

```java
public TagPipelineRulesetRulesMapping getMapping();
```

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping">TagPipelineRulesetRulesMapping</a>

mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#mapping TagPipelineRuleset#mapping}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules.property.query"></a>

```java
public TagPipelineRulesetRulesQuery getQuery();
```

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery">TagPipelineRulesetRulesQuery</a>

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#query TagPipelineRuleset#query}

---

##### `referenceTable`<sup>Optional</sup> <a name="referenceTable" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules.property.referenceTable"></a>

```java
public TagPipelineRulesetRulesReferenceTable getReferenceTable();
```

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable">TagPipelineRulesetRulesReferenceTable</a>

reference_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#reference_table TagPipelineRuleset#reference_table}

---

### TagPipelineRulesetRulesMapping <a name="TagPipelineRulesetRulesMapping" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.tag_pipeline_ruleset.TagPipelineRulesetRulesMapping;

TagPipelineRulesetRulesMapping.builder()
//  .destinationKey(java.lang.String)
//  .ifNotExists(java.lang.Boolean|IResolvable)
//  .sourceKeys(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping.property.destinationKey">destinationKey</a></code> | <code>java.lang.String</code> | The destination key for the mapping. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping.property.ifNotExists">ifNotExists</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether to apply the mapping only if the destination key doesn't exist. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping.property.sourceKeys">sourceKeys</a></code> | <code>java.util.List<java.lang.String></code> | The source keys for the mapping. |

---

##### `destinationKey`<sup>Optional</sup> <a name="destinationKey" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping.property.destinationKey"></a>

```java
public java.lang.String getDestinationKey();
```

- *Type:* java.lang.String

The destination key for the mapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#destination_key TagPipelineRuleset#destination_key}

---

##### `ifNotExists`<sup>Optional</sup> <a name="ifNotExists" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping.property.ifNotExists"></a>

```java
public java.lang.Boolean|IResolvable getIfNotExists();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether to apply the mapping only if the destination key doesn't exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#if_not_exists TagPipelineRuleset#if_not_exists}

---

##### `sourceKeys`<sup>Optional</sup> <a name="sourceKeys" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping.property.sourceKeys"></a>

```java
public java.util.List<java.lang.String> getSourceKeys();
```

- *Type:* java.util.List<java.lang.String>

The source keys for the mapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#source_keys TagPipelineRuleset#source_keys}

---

### TagPipelineRulesetRulesQuery <a name="TagPipelineRulesetRulesQuery" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.tag_pipeline_ruleset.TagPipelineRulesetRulesQuery;

TagPipelineRulesetRulesQuery.builder()
//  .addition(TagPipelineRulesetRulesQueryAddition)
//  .caseInsensitivity(java.lang.Boolean|IResolvable)
//  .ifNotExists(java.lang.Boolean|IResolvable)
//  .query(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery.property.addition">addition</a></code> | <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition">TagPipelineRulesetRulesQueryAddition</a></code> | addition block. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery.property.caseInsensitivity">caseInsensitivity</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether the query matching is case insensitive. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery.property.ifNotExists">ifNotExists</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether to apply the query only if the key doesn't exist. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery.property.query">query</a></code> | <code>java.lang.String</code> | The query string. |

---

##### `addition`<sup>Optional</sup> <a name="addition" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery.property.addition"></a>

```java
public TagPipelineRulesetRulesQueryAddition getAddition();
```

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition">TagPipelineRulesetRulesQueryAddition</a>

addition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#addition TagPipelineRuleset#addition}

---

##### `caseInsensitivity`<sup>Optional</sup> <a name="caseInsensitivity" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery.property.caseInsensitivity"></a>

```java
public java.lang.Boolean|IResolvable getCaseInsensitivity();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether the query matching is case insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#case_insensitivity TagPipelineRuleset#case_insensitivity}

---

##### `ifNotExists`<sup>Optional</sup> <a name="ifNotExists" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery.property.ifNotExists"></a>

```java
public java.lang.Boolean|IResolvable getIfNotExists();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether to apply the query only if the key doesn't exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#if_not_exists TagPipelineRuleset#if_not_exists}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

The query string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#query TagPipelineRuleset#query}

---

### TagPipelineRulesetRulesQueryAddition <a name="TagPipelineRulesetRulesQueryAddition" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.tag_pipeline_ruleset.TagPipelineRulesetRulesQueryAddition;

TagPipelineRulesetRulesQueryAddition.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition.property.key">key</a></code> | <code>java.lang.String</code> | The key to add. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition.property.value">value</a></code> | <code>java.lang.String</code> | The value to add. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key to add.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#key TagPipelineRuleset#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value to add.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#value TagPipelineRuleset#value}

---

### TagPipelineRulesetRulesReferenceTable <a name="TagPipelineRulesetRulesReferenceTable" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.tag_pipeline_ruleset.TagPipelineRulesetRulesReferenceTable;

TagPipelineRulesetRulesReferenceTable.builder()
//  .caseInsensitivity(java.lang.Boolean|IResolvable)
//  .fieldPairs(IResolvable|java.util.List<TagPipelineRulesetRulesReferenceTableFieldPairs>)
//  .ifNotExists(java.lang.Boolean|IResolvable)
//  .sourceKeys(java.util.List<java.lang.String>)
//  .tableName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable.property.caseInsensitivity">caseInsensitivity</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether the reference table lookup is case insensitive. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable.property.fieldPairs">fieldPairs</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs">TagPipelineRulesetRulesReferenceTableFieldPairs</a>></code> | field_pairs block. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable.property.ifNotExists">ifNotExists</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether to apply the reference table only if the key doesn't exist. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable.property.sourceKeys">sourceKeys</a></code> | <code>java.util.List<java.lang.String></code> | The source keys for the reference table lookup. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable.property.tableName">tableName</a></code> | <code>java.lang.String</code> | The name of the reference table. |

---

##### `caseInsensitivity`<sup>Optional</sup> <a name="caseInsensitivity" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable.property.caseInsensitivity"></a>

```java
public java.lang.Boolean|IResolvable getCaseInsensitivity();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether the reference table lookup is case insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#case_insensitivity TagPipelineRuleset#case_insensitivity}

---

##### `fieldPairs`<sup>Optional</sup> <a name="fieldPairs" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable.property.fieldPairs"></a>

```java
public IResolvable|java.util.List<TagPipelineRulesetRulesReferenceTableFieldPairs> getFieldPairs();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs">TagPipelineRulesetRulesReferenceTableFieldPairs</a>>

field_pairs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#field_pairs TagPipelineRuleset#field_pairs}

---

##### `ifNotExists`<sup>Optional</sup> <a name="ifNotExists" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable.property.ifNotExists"></a>

```java
public java.lang.Boolean|IResolvable getIfNotExists();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether to apply the reference table only if the key doesn't exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#if_not_exists TagPipelineRuleset#if_not_exists}

---

##### `sourceKeys`<sup>Optional</sup> <a name="sourceKeys" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable.property.sourceKeys"></a>

```java
public java.util.List<java.lang.String> getSourceKeys();
```

- *Type:* java.util.List<java.lang.String>

The source keys for the reference table lookup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#source_keys TagPipelineRuleset#source_keys}

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

The name of the reference table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#table_name TagPipelineRuleset#table_name}

---

### TagPipelineRulesetRulesReferenceTableFieldPairs <a name="TagPipelineRulesetRulesReferenceTableFieldPairs" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.tag_pipeline_ruleset.TagPipelineRulesetRulesReferenceTableFieldPairs;

TagPipelineRulesetRulesReferenceTableFieldPairs.builder()
//  .inputColumn(java.lang.String)
//  .outputKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs.property.inputColumn">inputColumn</a></code> | <code>java.lang.String</code> | The input column name. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs.property.outputKey">outputKey</a></code> | <code>java.lang.String</code> | The output key name. |

---

##### `inputColumn`<sup>Optional</sup> <a name="inputColumn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs.property.inputColumn"></a>

```java
public java.lang.String getInputColumn();
```

- *Type:* java.lang.String

The input column name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#input_column TagPipelineRuleset#input_column}

---

##### `outputKey`<sup>Optional</sup> <a name="outputKey" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs.property.outputKey"></a>

```java
public java.lang.String getOutputKey();
```

- *Type:* java.lang.String

The output key name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#output_key TagPipelineRuleset#output_key}

---

## Classes <a name="Classes" id="Classes"></a>

### TagPipelineRulesetRulesList <a name="TagPipelineRulesetRulesList" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.tag_pipeline_ruleset.TagPipelineRulesetRulesList;

new TagPipelineRulesetRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.get"></a>

```java
public TagPipelineRulesetRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules">TagPipelineRulesetRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<TagPipelineRulesetRules> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules">TagPipelineRulesetRules</a>>

---


### TagPipelineRulesetRulesMappingOutputReference <a name="TagPipelineRulesetRulesMappingOutputReference" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.tag_pipeline_ruleset.TagPipelineRulesetRulesMappingOutputReference;

new TagPipelineRulesetRulesMappingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.resetDestinationKey">resetDestinationKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.resetIfNotExists">resetIfNotExists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.resetSourceKeys">resetSourceKeys</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationKey` <a name="resetDestinationKey" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.resetDestinationKey"></a>

```java
public void resetDestinationKey()
```

##### `resetIfNotExists` <a name="resetIfNotExists" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.resetIfNotExists"></a>

```java
public void resetIfNotExists()
```

##### `resetSourceKeys` <a name="resetSourceKeys" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.resetSourceKeys"></a>

```java
public void resetSourceKeys()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.destinationKeyInput">destinationKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.ifNotExistsInput">ifNotExistsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.sourceKeysInput">sourceKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.destinationKey">destinationKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.ifNotExists">ifNotExists</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.sourceKeys">sourceKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping">TagPipelineRulesetRulesMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationKeyInput`<sup>Optional</sup> <a name="destinationKeyInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.destinationKeyInput"></a>

```java
public java.lang.String getDestinationKeyInput();
```

- *Type:* java.lang.String

---

##### `ifNotExistsInput`<sup>Optional</sup> <a name="ifNotExistsInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.ifNotExistsInput"></a>

```java
public java.lang.Boolean|IResolvable getIfNotExistsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `sourceKeysInput`<sup>Optional</sup> <a name="sourceKeysInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.sourceKeysInput"></a>

```java
public java.util.List<java.lang.String> getSourceKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationKey`<sup>Required</sup> <a name="destinationKey" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.destinationKey"></a>

```java
public java.lang.String getDestinationKey();
```

- *Type:* java.lang.String

---

##### `ifNotExists`<sup>Required</sup> <a name="ifNotExists" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.ifNotExists"></a>

```java
public java.lang.Boolean|IResolvable getIfNotExists();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `sourceKeys`<sup>Required</sup> <a name="sourceKeys" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.sourceKeys"></a>

```java
public java.util.List<java.lang.String> getSourceKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.internalValue"></a>

```java
public IResolvable|TagPipelineRulesetRulesMapping getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping">TagPipelineRulesetRulesMapping</a>

---


### TagPipelineRulesetRulesOutputReference <a name="TagPipelineRulesetRulesOutputReference" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.tag_pipeline_ruleset.TagPipelineRulesetRulesOutputReference;

new TagPipelineRulesetRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.putMapping">putMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.putQuery">putQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.putReferenceTable">putReferenceTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.resetMapping">resetMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.resetQuery">resetQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.resetReferenceTable">resetReferenceTable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMapping` <a name="putMapping" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.putMapping"></a>

```java
public void putMapping(TagPipelineRulesetRulesMapping value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.putMapping.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping">TagPipelineRulesetRulesMapping</a>

---

##### `putQuery` <a name="putQuery" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.putQuery"></a>

```java
public void putQuery(TagPipelineRulesetRulesQuery value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.putQuery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery">TagPipelineRulesetRulesQuery</a>

---

##### `putReferenceTable` <a name="putReferenceTable" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.putReferenceTable"></a>

```java
public void putReferenceTable(TagPipelineRulesetRulesReferenceTable value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.putReferenceTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable">TagPipelineRulesetRulesReferenceTable</a>

---

##### `resetMapping` <a name="resetMapping" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.resetMapping"></a>

```java
public void resetMapping()
```

##### `resetQuery` <a name="resetQuery" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.resetQuery"></a>

```java
public void resetQuery()
```

##### `resetReferenceTable` <a name="resetReferenceTable" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.resetReferenceTable"></a>

```java
public void resetReferenceTable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.mapping">mapping</a></code> | <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference">TagPipelineRulesetRulesMappingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.metadata">metadata</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.query">query</a></code> | <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference">TagPipelineRulesetRulesQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.referenceTable">referenceTable</a></code> | <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference">TagPipelineRulesetRulesReferenceTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.mappingInput">mappingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping">TagPipelineRulesetRulesMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.queryInput">queryInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery">TagPipelineRulesetRulesQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.referenceTableInput">referenceTableInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable">TagPipelineRulesetRulesReferenceTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules">TagPipelineRulesetRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mapping`<sup>Required</sup> <a name="mapping" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.mapping"></a>

```java
public TagPipelineRulesetRulesMappingOutputReference getMapping();
```

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference">TagPipelineRulesetRulesMappingOutputReference</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.metadata"></a>

```java
public StringMap getMetadata();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.query"></a>

```java
public TagPipelineRulesetRulesQueryOutputReference getQuery();
```

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference">TagPipelineRulesetRulesQueryOutputReference</a>

---

##### `referenceTable`<sup>Required</sup> <a name="referenceTable" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.referenceTable"></a>

```java
public TagPipelineRulesetRulesReferenceTableOutputReference getReferenceTable();
```

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference">TagPipelineRulesetRulesReferenceTableOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `mappingInput`<sup>Optional</sup> <a name="mappingInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.mappingInput"></a>

```java
public IResolvable|TagPipelineRulesetRulesMapping getMappingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping">TagPipelineRulesetRulesMapping</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.queryInput"></a>

```java
public IResolvable|TagPipelineRulesetRulesQuery getQueryInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery">TagPipelineRulesetRulesQuery</a>

---

##### `referenceTableInput`<sup>Optional</sup> <a name="referenceTableInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.referenceTableInput"></a>

```java
public IResolvable|TagPipelineRulesetRulesReferenceTable getReferenceTableInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable">TagPipelineRulesetRulesReferenceTable</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.internalValue"></a>

```java
public IResolvable|TagPipelineRulesetRules getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules">TagPipelineRulesetRules</a>

---


### TagPipelineRulesetRulesQueryAdditionOutputReference <a name="TagPipelineRulesetRulesQueryAdditionOutputReference" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.tag_pipeline_ruleset.TagPipelineRulesetRulesQueryAdditionOutputReference;

new TagPipelineRulesetRulesQueryAdditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition">TagPipelineRulesetRulesQueryAddition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.internalValue"></a>

```java
public IResolvable|TagPipelineRulesetRulesQueryAddition getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition">TagPipelineRulesetRulesQueryAddition</a>

---


### TagPipelineRulesetRulesQueryOutputReference <a name="TagPipelineRulesetRulesQueryOutputReference" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.tag_pipeline_ruleset.TagPipelineRulesetRulesQueryOutputReference;

new TagPipelineRulesetRulesQueryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.putAddition">putAddition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.resetAddition">resetAddition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.resetCaseInsensitivity">resetCaseInsensitivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.resetIfNotExists">resetIfNotExists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.resetQuery">resetQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAddition` <a name="putAddition" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.putAddition"></a>

```java
public void putAddition(TagPipelineRulesetRulesQueryAddition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.putAddition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition">TagPipelineRulesetRulesQueryAddition</a>

---

##### `resetAddition` <a name="resetAddition" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.resetAddition"></a>

```java
public void resetAddition()
```

##### `resetCaseInsensitivity` <a name="resetCaseInsensitivity" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.resetCaseInsensitivity"></a>

```java
public void resetCaseInsensitivity()
```

##### `resetIfNotExists` <a name="resetIfNotExists" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.resetIfNotExists"></a>

```java
public void resetIfNotExists()
```

##### `resetQuery` <a name="resetQuery" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.resetQuery"></a>

```java
public void resetQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.addition">addition</a></code> | <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference">TagPipelineRulesetRulesQueryAdditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.additionInput">additionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition">TagPipelineRulesetRulesQueryAddition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.caseInsensitivityInput">caseInsensitivityInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.ifNotExistsInput">ifNotExistsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.caseInsensitivity">caseInsensitivity</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.ifNotExists">ifNotExists</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery">TagPipelineRulesetRulesQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addition`<sup>Required</sup> <a name="addition" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.addition"></a>

```java
public TagPipelineRulesetRulesQueryAdditionOutputReference getAddition();
```

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference">TagPipelineRulesetRulesQueryAdditionOutputReference</a>

---

##### `additionInput`<sup>Optional</sup> <a name="additionInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.additionInput"></a>

```java
public IResolvable|TagPipelineRulesetRulesQueryAddition getAdditionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition">TagPipelineRulesetRulesQueryAddition</a>

---

##### `caseInsensitivityInput`<sup>Optional</sup> <a name="caseInsensitivityInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.caseInsensitivityInput"></a>

```java
public java.lang.Boolean|IResolvable getCaseInsensitivityInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `ifNotExistsInput`<sup>Optional</sup> <a name="ifNotExistsInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.ifNotExistsInput"></a>

```java
public java.lang.Boolean|IResolvable getIfNotExistsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `caseInsensitivity`<sup>Required</sup> <a name="caseInsensitivity" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.caseInsensitivity"></a>

```java
public java.lang.Boolean|IResolvable getCaseInsensitivity();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `ifNotExists`<sup>Required</sup> <a name="ifNotExists" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.ifNotExists"></a>

```java
public java.lang.Boolean|IResolvable getIfNotExists();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.internalValue"></a>

```java
public IResolvable|TagPipelineRulesetRulesQuery getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery">TagPipelineRulesetRulesQuery</a>

---


### TagPipelineRulesetRulesReferenceTableFieldPairsList <a name="TagPipelineRulesetRulesReferenceTableFieldPairsList" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.tag_pipeline_ruleset.TagPipelineRulesetRulesReferenceTableFieldPairsList;

new TagPipelineRulesetRulesReferenceTableFieldPairsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.get"></a>

```java
public TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs">TagPipelineRulesetRulesReferenceTableFieldPairs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<TagPipelineRulesetRulesReferenceTableFieldPairs> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs">TagPipelineRulesetRulesReferenceTableFieldPairs</a>>

---


### TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference <a name="TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.tag_pipeline_ruleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference;

new TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.resetInputColumn">resetInputColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.resetOutputKey">resetOutputKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInputColumn` <a name="resetInputColumn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.resetInputColumn"></a>

```java
public void resetInputColumn()
```

##### `resetOutputKey` <a name="resetOutputKey" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.resetOutputKey"></a>

```java
public void resetOutputKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.inputColumnInput">inputColumnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.outputKeyInput">outputKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.inputColumn">inputColumn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.outputKey">outputKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs">TagPipelineRulesetRulesReferenceTableFieldPairs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inputColumnInput`<sup>Optional</sup> <a name="inputColumnInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.inputColumnInput"></a>

```java
public java.lang.String getInputColumnInput();
```

- *Type:* java.lang.String

---

##### `outputKeyInput`<sup>Optional</sup> <a name="outputKeyInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.outputKeyInput"></a>

```java
public java.lang.String getOutputKeyInput();
```

- *Type:* java.lang.String

---

##### `inputColumn`<sup>Required</sup> <a name="inputColumn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.inputColumn"></a>

```java
public java.lang.String getInputColumn();
```

- *Type:* java.lang.String

---

##### `outputKey`<sup>Required</sup> <a name="outputKey" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.outputKey"></a>

```java
public java.lang.String getOutputKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.internalValue"></a>

```java
public IResolvable|TagPipelineRulesetRulesReferenceTableFieldPairs getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs">TagPipelineRulesetRulesReferenceTableFieldPairs</a>

---


### TagPipelineRulesetRulesReferenceTableOutputReference <a name="TagPipelineRulesetRulesReferenceTableOutputReference" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.tag_pipeline_ruleset.TagPipelineRulesetRulesReferenceTableOutputReference;

new TagPipelineRulesetRulesReferenceTableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.putFieldPairs">putFieldPairs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resetCaseInsensitivity">resetCaseInsensitivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resetFieldPairs">resetFieldPairs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resetIfNotExists">resetIfNotExists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resetSourceKeys">resetSourceKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resetTableName">resetTableName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFieldPairs` <a name="putFieldPairs" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.putFieldPairs"></a>

```java
public void putFieldPairs(IResolvable|java.util.List<TagPipelineRulesetRulesReferenceTableFieldPairs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.putFieldPairs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs">TagPipelineRulesetRulesReferenceTableFieldPairs</a>>

---

##### `resetCaseInsensitivity` <a name="resetCaseInsensitivity" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resetCaseInsensitivity"></a>

```java
public void resetCaseInsensitivity()
```

##### `resetFieldPairs` <a name="resetFieldPairs" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resetFieldPairs"></a>

```java
public void resetFieldPairs()
```

##### `resetIfNotExists` <a name="resetIfNotExists" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resetIfNotExists"></a>

```java
public void resetIfNotExists()
```

##### `resetSourceKeys` <a name="resetSourceKeys" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resetSourceKeys"></a>

```java
public void resetSourceKeys()
```

##### `resetTableName` <a name="resetTableName" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resetTableName"></a>

```java
public void resetTableName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.fieldPairs">fieldPairs</a></code> | <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList">TagPipelineRulesetRulesReferenceTableFieldPairsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.caseInsensitivityInput">caseInsensitivityInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.fieldPairsInput">fieldPairsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs">TagPipelineRulesetRulesReferenceTableFieldPairs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.ifNotExistsInput">ifNotExistsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.sourceKeysInput">sourceKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.caseInsensitivity">caseInsensitivity</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.ifNotExists">ifNotExists</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.sourceKeys">sourceKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable">TagPipelineRulesetRulesReferenceTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldPairs`<sup>Required</sup> <a name="fieldPairs" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.fieldPairs"></a>

```java
public TagPipelineRulesetRulesReferenceTableFieldPairsList getFieldPairs();
```

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList">TagPipelineRulesetRulesReferenceTableFieldPairsList</a>

---

##### `caseInsensitivityInput`<sup>Optional</sup> <a name="caseInsensitivityInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.caseInsensitivityInput"></a>

```java
public java.lang.Boolean|IResolvable getCaseInsensitivityInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `fieldPairsInput`<sup>Optional</sup> <a name="fieldPairsInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.fieldPairsInput"></a>

```java
public IResolvable|java.util.List<TagPipelineRulesetRulesReferenceTableFieldPairs> getFieldPairsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs">TagPipelineRulesetRulesReferenceTableFieldPairs</a>>

---

##### `ifNotExistsInput`<sup>Optional</sup> <a name="ifNotExistsInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.ifNotExistsInput"></a>

```java
public java.lang.Boolean|IResolvable getIfNotExistsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `sourceKeysInput`<sup>Optional</sup> <a name="sourceKeysInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.sourceKeysInput"></a>

```java
public java.util.List<java.lang.String> getSourceKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `caseInsensitivity`<sup>Required</sup> <a name="caseInsensitivity" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.caseInsensitivity"></a>

```java
public java.lang.Boolean|IResolvable getCaseInsensitivity();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `ifNotExists`<sup>Required</sup> <a name="ifNotExists" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.ifNotExists"></a>

```java
public java.lang.Boolean|IResolvable getIfNotExists();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `sourceKeys`<sup>Required</sup> <a name="sourceKeys" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.sourceKeys"></a>

```java
public java.util.List<java.lang.String> getSourceKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.internalValue"></a>

```java
public IResolvable|TagPipelineRulesetRulesReferenceTable getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable">TagPipelineRulesetRulesReferenceTable</a>

---



