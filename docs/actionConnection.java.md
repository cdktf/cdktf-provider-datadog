# `actionConnection` Submodule <a name="`actionConnection` Submodule" id="@cdktf/provider-datadog.actionConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionConnection <a name="ActionConnection" id="@cdktf/provider-datadog.actionConnection.ActionConnection"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/action_connection datadog_action_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.actionConnection.ActionConnection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.action_connection.ActionConnection;

ActionConnection.Builder.create(Construct scope, java.lang.String id)
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
//  .aws(ActionConnectionAws)
//  .http(ActionConnectionHttp)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the connection. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.Initializer.parameter.aws">aws</a></code> | <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAws">ActionConnectionAws</a></code> | aws block. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.Initializer.parameter.http">http</a></code> | <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttp">ActionConnectionHttp</a></code> | http block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.actionConnection.ActionConnection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.actionConnection.ActionConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.actionConnection.ActionConnection.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.actionConnection.ActionConnection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.actionConnection.ActionConnection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.actionConnection.ActionConnection.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.actionConnection.ActionConnection.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.actionConnection.ActionConnection.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.actionConnection.ActionConnection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.actionConnection.ActionConnection.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/action_connection#name ActionConnection#name}

---

##### `aws`<sup>Optional</sup> <a name="aws" id="@cdktf/provider-datadog.actionConnection.ActionConnection.Initializer.parameter.aws"></a>

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAws">ActionConnectionAws</a>

aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/action_connection#aws ActionConnection#aws}

---

##### `http`<sup>Optional</sup> <a name="http" id="@cdktf/provider-datadog.actionConnection.ActionConnection.Initializer.parameter.http"></a>

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttp">ActionConnectionHttp</a>

http block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/action_connection#http ActionConnection#http}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.putAws">putAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.putHttp">putHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.resetAws">resetAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.resetHttp">resetHttp</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.actionConnection.ActionConnection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.actionConnection.ActionConnection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.actionConnection.ActionConnection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.actionConnection.ActionConnection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.actionConnection.ActionConnection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.actionConnection.ActionConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.actionConnection.ActionConnection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.actionConnection.ActionConnection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.actionConnection.ActionConnection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.actionConnection.ActionConnection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.actionConnection.ActionConnection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.actionConnection.ActionConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.actionConnection.ActionConnection.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.actionConnection.ActionConnection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.actionConnection.ActionConnection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.actionConnection.ActionConnection.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.actionConnection.ActionConnection.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.actionConnection.ActionConnection.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.actionConnection.ActionConnection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.actionConnection.ActionConnection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.actionConnection.ActionConnection.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.actionConnection.ActionConnection.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.actionConnection.ActionConnection.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAws` <a name="putAws" id="@cdktf/provider-datadog.actionConnection.ActionConnection.putAws"></a>

```java
public void putAws(ActionConnectionAws value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.actionConnection.ActionConnection.putAws.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAws">ActionConnectionAws</a>

---

##### `putHttp` <a name="putHttp" id="@cdktf/provider-datadog.actionConnection.ActionConnection.putHttp"></a>

```java
public void putHttp(ActionConnectionHttp value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.actionConnection.ActionConnection.putHttp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttp">ActionConnectionHttp</a>

---

##### `resetAws` <a name="resetAws" id="@cdktf/provider-datadog.actionConnection.ActionConnection.resetAws"></a>

```java
public void resetAws()
```

##### `resetHttp` <a name="resetHttp" id="@cdktf/provider-datadog.actionConnection.ActionConnection.resetHttp"></a>

```java
public void resetHttp()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ActionConnection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.actionConnection.ActionConnection.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.datadog.action_connection.ActionConnection;

ActionConnection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.actionConnection.ActionConnection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.actionConnection.ActionConnection.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.datadog.action_connection.ActionConnection;

ActionConnection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.actionConnection.ActionConnection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.actionConnection.ActionConnection.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.datadog.action_connection.ActionConnection;

ActionConnection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.actionConnection.ActionConnection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.actionConnection.ActionConnection.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.datadog.action_connection.ActionConnection;

ActionConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ActionConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ActionConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.actionConnection.ActionConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.actionConnection.ActionConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ActionConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.actionConnection.ActionConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ActionConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/action_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.actionConnection.ActionConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ActionConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.property.aws">aws</a></code> | <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference">ActionConnectionAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.property.http">http</a></code> | <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference">ActionConnectionHttpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.property.awsInput">awsInput</a></code> | <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAws">ActionConnectionAws</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.property.httpInput">httpInput</a></code> | <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttp">ActionConnectionHttp</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.actionConnection.ActionConnection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.actionConnection.ActionConnection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.actionConnection.ActionConnection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.actionConnection.ActionConnection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.actionConnection.ActionConnection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.actionConnection.ActionConnection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.actionConnection.ActionConnection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.actionConnection.ActionConnection.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.actionConnection.ActionConnection.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.actionConnection.ActionConnection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.actionConnection.ActionConnection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.actionConnection.ActionConnection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.actionConnection.ActionConnection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.actionConnection.ActionConnection.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aws`<sup>Required</sup> <a name="aws" id="@cdktf/provider-datadog.actionConnection.ActionConnection.property.aws"></a>

```java
public ActionConnectionAwsOutputReference getAws();
```

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference">ActionConnectionAwsOutputReference</a>

---

##### `http`<sup>Required</sup> <a name="http" id="@cdktf/provider-datadog.actionConnection.ActionConnection.property.http"></a>

```java
public ActionConnectionHttpOutputReference getHttp();
```

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference">ActionConnectionHttpOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.actionConnection.ActionConnection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `awsInput`<sup>Optional</sup> <a name="awsInput" id="@cdktf/provider-datadog.actionConnection.ActionConnection.property.awsInput"></a>

```java
public java.lang.Object getAwsInput();
```

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAws">ActionConnectionAws</a> OR com.hashicorp.cdktf.IResolvable

---

##### `httpInput`<sup>Optional</sup> <a name="httpInput" id="@cdktf/provider-datadog.actionConnection.ActionConnection.property.httpInput"></a>

```java
public java.lang.Object getHttpInput();
```

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttp">ActionConnectionHttp</a> OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.actionConnection.ActionConnection.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.actionConnection.ActionConnection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.actionConnection.ActionConnection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ActionConnectionAws <a name="ActionConnectionAws" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAws"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAws.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.action_connection.ActionConnectionAws;

ActionConnectionAws.builder()
//  .assumeRole(ActionConnectionAwsAssumeRole)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAws.property.assumeRole">assumeRole</a></code> | <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRole">ActionConnectionAwsAssumeRole</a></code> | assume_role block. |

---

##### `assumeRole`<sup>Optional</sup> <a name="assumeRole" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAws.property.assumeRole"></a>

```java
public ActionConnectionAwsAssumeRole getAssumeRole();
```

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRole">ActionConnectionAwsAssumeRole</a>

assume_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/action_connection#assume_role ActionConnection#assume_role}

---

### ActionConnectionAwsAssumeRole <a name="ActionConnectionAwsAssumeRole" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRole.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.action_connection.ActionConnectionAwsAssumeRole;

ActionConnectionAwsAssumeRole.builder()
//  .accountId(java.lang.String)
//  .role(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRole.property.accountId">accountId</a></code> | <code>java.lang.String</code> | AWS account that the connection is created for. String length must be at least 1. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRole.property.role">role</a></code> | <code>java.lang.String</code> | Role to assume. String length must be at least 1. |

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRole.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

AWS account that the connection is created for. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/action_connection#account_id ActionConnection#account_id}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRole.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Role to assume. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/action_connection#role ActionConnection#role}

---

### ActionConnectionConfig <a name="ActionConnectionConfig" id="@cdktf/provider-datadog.actionConnection.ActionConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.actionConnection.ActionConnectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.action_connection.ActionConnectionConfig;

ActionConnectionConfig.builder()
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
//  .aws(ActionConnectionAws)
//  .http(ActionConnectionHttp)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the connection. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionConfig.property.aws">aws</a></code> | <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAws">ActionConnectionAws</a></code> | aws block. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionConfig.property.http">http</a></code> | <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttp">ActionConnectionHttp</a></code> | http block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.actionConnection.ActionConnectionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.actionConnection.ActionConnectionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.actionConnection.ActionConnectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.actionConnection.ActionConnectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.actionConnection.ActionConnectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.actionConnection.ActionConnectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.actionConnection.ActionConnectionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.actionConnection.ActionConnectionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/action_connection#name ActionConnection#name}

---

##### `aws`<sup>Optional</sup> <a name="aws" id="@cdktf/provider-datadog.actionConnection.ActionConnectionConfig.property.aws"></a>

```java
public ActionConnectionAws getAws();
```

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAws">ActionConnectionAws</a>

aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/action_connection#aws ActionConnection#aws}

---

##### `http`<sup>Optional</sup> <a name="http" id="@cdktf/provider-datadog.actionConnection.ActionConnectionConfig.property.http"></a>

```java
public ActionConnectionHttp getHttp();
```

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttp">ActionConnectionHttp</a>

http block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/action_connection#http ActionConnection#http}

---

### ActionConnectionHttp <a name="ActionConnectionHttp" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.action_connection.ActionConnectionHttp;

ActionConnectionHttp.builder()
//  .baseUrl(java.lang.String)
//  .tokenAuth(ActionConnectionHttpTokenAuth)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttp.property.baseUrl">baseUrl</a></code> | <code>java.lang.String</code> | Base HTTP url for the integration. String length must be at least 1. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttp.property.tokenAuth">tokenAuth</a></code> | <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuth">ActionConnectionHttpTokenAuth</a></code> | token_auth block. |

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttp.property.baseUrl"></a>

```java
public java.lang.String getBaseUrl();
```

- *Type:* java.lang.String

Base HTTP url for the integration. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/action_connection#base_url ActionConnection#base_url}

---

##### `tokenAuth`<sup>Optional</sup> <a name="tokenAuth" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttp.property.tokenAuth"></a>

```java
public ActionConnectionHttpTokenAuth getTokenAuth();
```

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuth">ActionConnectionHttpTokenAuth</a>

token_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/action_connection#token_auth ActionConnection#token_auth}

---

### ActionConnectionHttpTokenAuth <a name="ActionConnectionHttpTokenAuth" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuth.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.action_connection.ActionConnectionHttpTokenAuth;

ActionConnectionHttpTokenAuth.builder()
//  .body(ActionConnectionHttpTokenAuthBody)
//  .header(IResolvable)
//  .header(java.util.List<ActionConnectionHttpTokenAuthHeader>)
//  .token(IResolvable)
//  .token(java.util.List<ActionConnectionHttpTokenAuthToken>)
//  .urlParameter(IResolvable)
//  .urlParameter(java.util.List<ActionConnectionHttpTokenAuthUrlParameter>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuth.property.body">body</a></code> | <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBody">ActionConnectionHttpTokenAuthBody</a></code> | body block. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuth.property.header">header</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeader">ActionConnectionHttpTokenAuthHeader</a>></code> | header block. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuth.property.token">token</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthToken">ActionConnectionHttpTokenAuthToken</a>></code> | token block. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuth.property.urlParameter">urlParameter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameter">ActionConnectionHttpTokenAuthUrlParameter</a>></code> | url_parameter block. |

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuth.property.body"></a>

```java
public ActionConnectionHttpTokenAuthBody getBody();
```

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBody">ActionConnectionHttpTokenAuthBody</a>

body block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/action_connection#body ActionConnection#body}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuth.property.header"></a>

```java
public java.lang.Object getHeader();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeader">ActionConnectionHttpTokenAuthHeader</a>>

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/action_connection#header ActionConnection#header}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuth.property.token"></a>

```java
public java.lang.Object getToken();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthToken">ActionConnectionHttpTokenAuthToken</a>>

token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/action_connection#token ActionConnection#token}

---

##### `urlParameter`<sup>Optional</sup> <a name="urlParameter" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuth.property.urlParameter"></a>

```java
public java.lang.Object getUrlParameter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameter">ActionConnectionHttpTokenAuthUrlParameter</a>>

url_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/action_connection#url_parameter ActionConnection#url_parameter}

---

### ActionConnectionHttpTokenAuthBody <a name="ActionConnectionHttpTokenAuthBody" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBody"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBody.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.action_connection.ActionConnectionHttpTokenAuthBody;

ActionConnectionHttpTokenAuthBody.builder()
//  .content(java.lang.String)
//  .contentType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBody.property.content">content</a></code> | <code>java.lang.String</code> | Serialized body content. String length must be at least 1. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBody.property.contentType">contentType</a></code> | <code>java.lang.String</code> | Content type of the body. String length must be at least 1. |

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBody.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

Serialized body content. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/action_connection#content ActionConnection#content}

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBody.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

Content type of the body. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/action_connection#content_type ActionConnection#content_type}

---

### ActionConnectionHttpTokenAuthHeader <a name="ActionConnectionHttpTokenAuthHeader" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeader.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.action_connection.ActionConnectionHttpTokenAuthHeader;

ActionConnectionHttpTokenAuthHeader.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeader.property.name">name</a></code> | <code>java.lang.String</code> | Header name. String length must be at least 1. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeader.property.value">value</a></code> | <code>java.lang.String</code> | String length must be at least 1. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeader.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Header name. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/action_connection#name ActionConnection#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeader.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/action_connection#value ActionConnection#value}

---

### ActionConnectionHttpTokenAuthToken <a name="ActionConnectionHttpTokenAuthToken" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthToken.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.action_connection.ActionConnectionHttpTokenAuthToken;

ActionConnectionHttpTokenAuthToken.builder()
//  .name(java.lang.String)
//  .type(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthToken.property.name">name</a></code> | <code>java.lang.String</code> | Token name. String length must be at least 1. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthToken.property.type">type</a></code> | <code>java.lang.String</code> | Token type Valid values are `SECRET`. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthToken.property.value">value</a></code> | <code>java.lang.String</code> | Token value. String length must be at least 1. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthToken.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Token name. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/action_connection#name ActionConnection#name}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthToken.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Token type Valid values are `SECRET`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/action_connection#type ActionConnection#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthToken.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Token value. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/action_connection#value ActionConnection#value}

---

### ActionConnectionHttpTokenAuthUrlParameter <a name="ActionConnectionHttpTokenAuthUrlParameter" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.action_connection.ActionConnectionHttpTokenAuthUrlParameter;

ActionConnectionHttpTokenAuthUrlParameter.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameter.property.name">name</a></code> | <code>java.lang.String</code> | URL parameter name. String length must be at least 1. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameter.property.value">value</a></code> | <code>java.lang.String</code> | URL parameter value. String length must be at least 1. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

URL parameter name. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/action_connection#name ActionConnection#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameter.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

URL parameter value. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/action_connection#value ActionConnection#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ActionConnectionAwsAssumeRoleOutputReference <a name="ActionConnectionAwsAssumeRoleOutputReference" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.action_connection.ActionConnectionAwsAssumeRoleOutputReference;

new ActionConnectionAwsAssumeRoleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.resetRole">resetRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetRole` <a name="resetRole" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.resetRole"></a>

```java
public void resetRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRole">ActionConnectionAwsAssumeRole</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRole">ActionConnectionAwsAssumeRole</a> OR com.hashicorp.cdktf.IResolvable

---


### ActionConnectionAwsOutputReference <a name="ActionConnectionAwsOutputReference" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.action_connection.ActionConnectionAwsOutputReference;

new ActionConnectionAwsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.putAssumeRole">putAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.resetAssumeRole">resetAssumeRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAssumeRole` <a name="putAssumeRole" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.putAssumeRole"></a>

```java
public void putAssumeRole(ActionConnectionAwsAssumeRole value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.putAssumeRole.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRole">ActionConnectionAwsAssumeRole</a>

---

##### `resetAssumeRole` <a name="resetAssumeRole" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.resetAssumeRole"></a>

```java
public void resetAssumeRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.property.assumeRole">assumeRole</a></code> | <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference">ActionConnectionAwsAssumeRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.property.assumeRoleInput">assumeRoleInput</a></code> | <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRole">ActionConnectionAwsAssumeRole</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAws">ActionConnectionAws</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `assumeRole`<sup>Required</sup> <a name="assumeRole" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.property.assumeRole"></a>

```java
public ActionConnectionAwsAssumeRoleOutputReference getAssumeRole();
```

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference">ActionConnectionAwsAssumeRoleOutputReference</a>

---

##### `assumeRoleInput`<sup>Optional</sup> <a name="assumeRoleInput" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.property.assumeRoleInput"></a>

```java
public java.lang.Object getAssumeRoleInput();
```

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRole">ActionConnectionAwsAssumeRole</a> OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAws">ActionConnectionAws</a> OR com.hashicorp.cdktf.IResolvable

---


### ActionConnectionHttpOutputReference <a name="ActionConnectionHttpOutputReference" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.action_connection.ActionConnectionHttpOutputReference;

new ActionConnectionHttpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.putTokenAuth">putTokenAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.resetBaseUrl">resetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.resetTokenAuth">resetTokenAuth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTokenAuth` <a name="putTokenAuth" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.putTokenAuth"></a>

```java
public void putTokenAuth(ActionConnectionHttpTokenAuth value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.putTokenAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuth">ActionConnectionHttpTokenAuth</a>

---

##### `resetBaseUrl` <a name="resetBaseUrl" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.resetBaseUrl"></a>

```java
public void resetBaseUrl()
```

##### `resetTokenAuth` <a name="resetTokenAuth" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.resetTokenAuth"></a>

```java
public void resetTokenAuth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.property.tokenAuth">tokenAuth</a></code> | <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference">ActionConnectionHttpTokenAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.property.baseUrlInput">baseUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.property.tokenAuthInput">tokenAuthInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuth">ActionConnectionHttpTokenAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.property.baseUrl">baseUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttp">ActionConnectionHttp</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tokenAuth`<sup>Required</sup> <a name="tokenAuth" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.property.tokenAuth"></a>

```java
public ActionConnectionHttpTokenAuthOutputReference getTokenAuth();
```

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference">ActionConnectionHttpTokenAuthOutputReference</a>

---

##### `baseUrlInput`<sup>Optional</sup> <a name="baseUrlInput" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.property.baseUrlInput"></a>

```java
public java.lang.String getBaseUrlInput();
```

- *Type:* java.lang.String

---

##### `tokenAuthInput`<sup>Optional</sup> <a name="tokenAuthInput" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.property.tokenAuthInput"></a>

```java
public java.lang.Object getTokenAuthInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuth">ActionConnectionHttpTokenAuth</a>

---

##### `baseUrl`<sup>Required</sup> <a name="baseUrl" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.property.baseUrl"></a>

```java
public java.lang.String getBaseUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttp">ActionConnectionHttp</a> OR com.hashicorp.cdktf.IResolvable

---


### ActionConnectionHttpTokenAuthBodyOutputReference <a name="ActionConnectionHttpTokenAuthBodyOutputReference" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.action_connection.ActionConnectionHttpTokenAuthBodyOutputReference;

new ActionConnectionHttpTokenAuthBodyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.resetContentType">resetContentType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContent` <a name="resetContent" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.resetContent"></a>

```java
public void resetContent()
```

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.resetContentType"></a>

```java
public void resetContentType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBody">ActionConnectionHttpTokenAuthBody</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBody">ActionConnectionHttpTokenAuthBody</a>

---


### ActionConnectionHttpTokenAuthHeaderList <a name="ActionConnectionHttpTokenAuthHeaderList" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.action_connection.ActionConnectionHttpTokenAuthHeaderList;

new ActionConnectionHttpTokenAuthHeaderList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.get"></a>

```java
public ActionConnectionHttpTokenAuthHeaderOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeader">ActionConnectionHttpTokenAuthHeader</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeader">ActionConnectionHttpTokenAuthHeader</a>>

---


### ActionConnectionHttpTokenAuthHeaderOutputReference <a name="ActionConnectionHttpTokenAuthHeaderOutputReference" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.action_connection.ActionConnectionHttpTokenAuthHeaderOutputReference;

new ActionConnectionHttpTokenAuthHeaderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeader">ActionConnectionHttpTokenAuthHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeader">ActionConnectionHttpTokenAuthHeader</a>

---


### ActionConnectionHttpTokenAuthOutputReference <a name="ActionConnectionHttpTokenAuthOutputReference" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.action_connection.ActionConnectionHttpTokenAuthOutputReference;

new ActionConnectionHttpTokenAuthOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.putBody">putBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.putHeader">putHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.putToken">putToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.putUrlParameter">putUrlParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.resetUrlParameter">resetUrlParameter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBody` <a name="putBody" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.putBody"></a>

```java
public void putBody(ActionConnectionHttpTokenAuthBody value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.putBody.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBody">ActionConnectionHttpTokenAuthBody</a>

---

##### `putHeader` <a name="putHeader" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.putHeader"></a>

```java
public void putHeader(IResolvable OR java.util.List<ActionConnectionHttpTokenAuthHeader> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.putHeader.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeader">ActionConnectionHttpTokenAuthHeader</a>>

---

##### `putToken` <a name="putToken" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.putToken"></a>

```java
public void putToken(IResolvable OR java.util.List<ActionConnectionHttpTokenAuthToken> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.putToken.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthToken">ActionConnectionHttpTokenAuthToken</a>>

---

##### `putUrlParameter` <a name="putUrlParameter" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.putUrlParameter"></a>

```java
public void putUrlParameter(IResolvable OR java.util.List<ActionConnectionHttpTokenAuthUrlParameter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.putUrlParameter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameter">ActionConnectionHttpTokenAuthUrlParameter</a>>

---

##### `resetBody` <a name="resetBody" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.resetBody"></a>

```java
public void resetBody()
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.resetHeader"></a>

```java
public void resetHeader()
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.resetToken"></a>

```java
public void resetToken()
```

##### `resetUrlParameter` <a name="resetUrlParameter" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.resetUrlParameter"></a>

```java
public void resetUrlParameter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.body">body</a></code> | <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference">ActionConnectionHttpTokenAuthBodyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList">ActionConnectionHttpTokenAuthHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.token">token</a></code> | <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList">ActionConnectionHttpTokenAuthTokenList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.urlParameter">urlParameter</a></code> | <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList">ActionConnectionHttpTokenAuthUrlParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.bodyInput">bodyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBody">ActionConnectionHttpTokenAuthBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.headerInput">headerInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeader">ActionConnectionHttpTokenAuthHeader</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.tokenInput">tokenInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthToken">ActionConnectionHttpTokenAuthToken</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.urlParameterInput">urlParameterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameter">ActionConnectionHttpTokenAuthUrlParameter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuth">ActionConnectionHttpTokenAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.body"></a>

```java
public ActionConnectionHttpTokenAuthBodyOutputReference getBody();
```

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference">ActionConnectionHttpTokenAuthBodyOutputReference</a>

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.header"></a>

```java
public ActionConnectionHttpTokenAuthHeaderList getHeader();
```

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList">ActionConnectionHttpTokenAuthHeaderList</a>

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.token"></a>

```java
public ActionConnectionHttpTokenAuthTokenList getToken();
```

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList">ActionConnectionHttpTokenAuthTokenList</a>

---

##### `urlParameter`<sup>Required</sup> <a name="urlParameter" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.urlParameter"></a>

```java
public ActionConnectionHttpTokenAuthUrlParameterList getUrlParameter();
```

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList">ActionConnectionHttpTokenAuthUrlParameterList</a>

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.bodyInput"></a>

```java
public java.lang.Object getBodyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBody">ActionConnectionHttpTokenAuthBody</a>

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.headerInput"></a>

```java
public java.lang.Object getHeaderInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeader">ActionConnectionHttpTokenAuthHeader</a>>

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.tokenInput"></a>

```java
public java.lang.Object getTokenInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthToken">ActionConnectionHttpTokenAuthToken</a>>

---

##### `urlParameterInput`<sup>Optional</sup> <a name="urlParameterInput" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.urlParameterInput"></a>

```java
public java.lang.Object getUrlParameterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameter">ActionConnectionHttpTokenAuthUrlParameter</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuth">ActionConnectionHttpTokenAuth</a>

---


### ActionConnectionHttpTokenAuthTokenList <a name="ActionConnectionHttpTokenAuthTokenList" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.action_connection.ActionConnectionHttpTokenAuthTokenList;

new ActionConnectionHttpTokenAuthTokenList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.get"></a>

```java
public ActionConnectionHttpTokenAuthTokenOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthToken">ActionConnectionHttpTokenAuthToken</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthToken">ActionConnectionHttpTokenAuthToken</a>>

---


### ActionConnectionHttpTokenAuthTokenOutputReference <a name="ActionConnectionHttpTokenAuthTokenOutputReference" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.action_connection.ActionConnectionHttpTokenAuthTokenOutputReference;

new ActionConnectionHttpTokenAuthTokenOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthToken">ActionConnectionHttpTokenAuthToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthToken">ActionConnectionHttpTokenAuthToken</a>

---


### ActionConnectionHttpTokenAuthUrlParameterList <a name="ActionConnectionHttpTokenAuthUrlParameterList" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.action_connection.ActionConnectionHttpTokenAuthUrlParameterList;

new ActionConnectionHttpTokenAuthUrlParameterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.get"></a>

```java
public ActionConnectionHttpTokenAuthUrlParameterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameter">ActionConnectionHttpTokenAuthUrlParameter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameter">ActionConnectionHttpTokenAuthUrlParameter</a>>

---


### ActionConnectionHttpTokenAuthUrlParameterOutputReference <a name="ActionConnectionHttpTokenAuthUrlParameterOutputReference" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.action_connection.ActionConnectionHttpTokenAuthUrlParameterOutputReference;

new ActionConnectionHttpTokenAuthUrlParameterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameter">ActionConnectionHttpTokenAuthUrlParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameter">ActionConnectionHttpTokenAuthUrlParameter</a>

---



