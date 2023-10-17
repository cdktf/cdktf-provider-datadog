# `datadog_integration_slack_channel`

Refer to the Terraform Registory for docs: [`datadog_integration_slack_channel`](https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/integration_slack_channel).

# `integrationSlackChannel` Submodule <a name="`integrationSlackChannel` Submodule" id="@cdktf/provider-datadog.integrationSlackChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationSlackChannel <a name="IntegrationSlackChannel" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/integration_slack_channel datadog_integration_slack_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_slack_channel.IntegrationSlackChannel;

IntegrationSlackChannel.Builder.create(Construct scope, java.lang.String id)
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
    .accountName(java.lang.String)
    .channelName(java.lang.String)
    .display(IntegrationSlackChannelDisplay)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.accountName">accountName</a></code> | <code>java.lang.String</code> | Slack account name. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.channelName">channelName</a></code> | <code>java.lang.String</code> | Slack channel name. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.display">display</a></code> | <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay">IntegrationSlackChannelDisplay</a></code> | display block. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/integration_slack_channel#id IntegrationSlackChannel#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.accountName"></a>

- *Type:* java.lang.String

Slack account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/integration_slack_channel#account_name IntegrationSlackChannel#account_name}

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.channelName"></a>

- *Type:* java.lang.String

Slack channel name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/integration_slack_channel#channel_name IntegrationSlackChannel#channel_name}

---

##### `display`<sup>Required</sup> <a name="display" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.display"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay">IntegrationSlackChannelDisplay</a>

display block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/integration_slack_channel#display IntegrationSlackChannel#display}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/integration_slack_channel#id IntegrationSlackChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.putDisplay">putDisplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putDisplay` <a name="putDisplay" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.putDisplay"></a>

```java
public void putDisplay(IntegrationSlackChannelDisplay value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.putDisplay.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay">IntegrationSlackChannelDisplay</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationSlackChannel resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_slack_channel.IntegrationSlackChannel;

IntegrationSlackChannel.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_slack_channel.IntegrationSlackChannel;

IntegrationSlackChannel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_slack_channel.IntegrationSlackChannel;

IntegrationSlackChannel.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_slack_channel.IntegrationSlackChannel;

IntegrationSlackChannel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IntegrationSlackChannel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IntegrationSlackChannel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IntegrationSlackChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IntegrationSlackChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/integration_slack_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationSlackChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.display">display</a></code> | <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference">IntegrationSlackChannelDisplayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.accountNameInput">accountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.channelNameInput">channelNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.displayInput">displayInput</a></code> | <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay">IntegrationSlackChannelDisplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.accountName">accountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.channelName">channelName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `display`<sup>Required</sup> <a name="display" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.display"></a>

```java
public IntegrationSlackChannelDisplayOutputReference getDisplay();
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference">IntegrationSlackChannelDisplayOutputReference</a>

---

##### `accountNameInput`<sup>Optional</sup> <a name="accountNameInput" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.accountNameInput"></a>

```java
public java.lang.String getAccountNameInput();
```

- *Type:* java.lang.String

---

##### `channelNameInput`<sup>Optional</sup> <a name="channelNameInput" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.channelNameInput"></a>

```java
public java.lang.String getChannelNameInput();
```

- *Type:* java.lang.String

---

##### `displayInput`<sup>Optional</sup> <a name="displayInput" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.displayInput"></a>

```java
public IntegrationSlackChannelDisplay getDisplayInput();
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay">IntegrationSlackChannelDisplay</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.accountName"></a>

```java
public java.lang.String getAccountName();
```

- *Type:* java.lang.String

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.channelName"></a>

```java
public java.lang.String getChannelName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationSlackChannelConfig <a name="IntegrationSlackChannelConfig" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_slack_channel.IntegrationSlackChannelConfig;

IntegrationSlackChannelConfig.builder()
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
    .accountName(java.lang.String)
    .channelName(java.lang.String)
    .display(IntegrationSlackChannelDisplay)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.accountName">accountName</a></code> | <code>java.lang.String</code> | Slack account name. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.channelName">channelName</a></code> | <code>java.lang.String</code> | Slack channel name. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.display">display</a></code> | <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay">IntegrationSlackChannelDisplay</a></code> | display block. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/integration_slack_channel#id IntegrationSlackChannel#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.accountName"></a>

```java
public java.lang.String getAccountName();
```

- *Type:* java.lang.String

Slack account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/integration_slack_channel#account_name IntegrationSlackChannel#account_name}

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.channelName"></a>

```java
public java.lang.String getChannelName();
```

- *Type:* java.lang.String

Slack channel name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/integration_slack_channel#channel_name IntegrationSlackChannel#channel_name}

---

##### `display`<sup>Required</sup> <a name="display" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.display"></a>

```java
public IntegrationSlackChannelDisplay getDisplay();
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay">IntegrationSlackChannelDisplay</a>

display block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/integration_slack_channel#display IntegrationSlackChannel#display}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/integration_slack_channel#id IntegrationSlackChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### IntegrationSlackChannelDisplay <a name="IntegrationSlackChannelDisplay" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_slack_channel.IntegrationSlackChannelDisplay;

IntegrationSlackChannelDisplay.builder()
//  .message(java.lang.Boolean)
//  .message(IResolvable)
//  .notified(java.lang.Boolean)
//  .notified(IResolvable)
//  .snapshot(java.lang.Boolean)
//  .snapshot(IResolvable)
//  .tags(java.lang.Boolean)
//  .tags(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay.property.message">message</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Show the main body of the alert event. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay.property.notified">notified</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Show the list of. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay.property.snapshot">snapshot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Show the alert event's snapshot image. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay.property.tags">tags</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Show the scopes on which the monitor alerted. |

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay.property.message"></a>

```java
public java.lang.Object getMessage();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Show the main body of the alert event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/integration_slack_channel#message IntegrationSlackChannel#message}

---

##### `notified`<sup>Optional</sup> <a name="notified" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay.property.notified"></a>

```java
public java.lang.Object getNotified();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Show the list of.

---

##### `snapshot`<sup>Optional</sup> <a name="snapshot" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay.property.snapshot"></a>

```java
public java.lang.Object getSnapshot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Show the alert event's snapshot image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/integration_slack_channel#snapshot IntegrationSlackChannel#snapshot}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay.property.tags"></a>

```java
public java.lang.Object getTags();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Show the scopes on which the monitor alerted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.30.0/docs/resources/integration_slack_channel#tags IntegrationSlackChannel#tags}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationSlackChannelDisplayOutputReference <a name="IntegrationSlackChannelDisplayOutputReference" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_slack_channel.IntegrationSlackChannelDisplayOutputReference;

new IntegrationSlackChannelDisplayOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resetNotified">resetNotified</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resetSnapshot">resetSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessage` <a name="resetMessage" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resetMessage"></a>

```java
public void resetMessage()
```

##### `resetNotified` <a name="resetNotified" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resetNotified"></a>

```java
public void resetNotified()
```

##### `resetSnapshot` <a name="resetSnapshot" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resetSnapshot"></a>

```java
public void resetSnapshot()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.messageInput">messageInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.notifiedInput">notifiedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.snapshotInput">snapshotInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.tagsInput">tagsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.message">message</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.notified">notified</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.snapshot">snapshot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.tags">tags</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay">IntegrationSlackChannelDisplay</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.messageInput"></a>

```java
public java.lang.Object getMessageInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `notifiedInput`<sup>Optional</sup> <a name="notifiedInput" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.notifiedInput"></a>

```java
public java.lang.Object getNotifiedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `snapshotInput`<sup>Optional</sup> <a name="snapshotInput" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.snapshotInput"></a>

```java
public java.lang.Object getSnapshotInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.tagsInput"></a>

```java
public java.lang.Object getTagsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.message"></a>

```java
public java.lang.Object getMessage();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `notified`<sup>Required</sup> <a name="notified" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.notified"></a>

```java
public java.lang.Object getNotified();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `snapshot`<sup>Required</sup> <a name="snapshot" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.snapshot"></a>

```java
public java.lang.Object getSnapshot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.tags"></a>

```java
public java.lang.Object getTags();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.internalValue"></a>

```java
public IntegrationSlackChannelDisplay getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay">IntegrationSlackChannelDisplay</a>

---



