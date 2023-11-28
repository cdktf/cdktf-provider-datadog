# `integrationPagerduty` Submodule <a name="`integrationPagerduty` Submodule" id="@cdktf/provider-datadog.integrationPagerduty"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationPagerduty <a name="IntegrationPagerduty" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/integration_pagerduty datadog_integration_pagerduty}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_pagerduty.IntegrationPagerduty;

IntegrationPagerduty.Builder.create(Construct scope, java.lang.String id)
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
    .subdomain(java.lang.String)
//  .apiToken(java.lang.String)
//  .id(java.lang.String)
//  .schedules(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.subdomain">subdomain</a></code> | <code>java.lang.String</code> | Your PagerDuty account’s personalized subdomain name. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.apiToken">apiToken</a></code> | <code>java.lang.String</code> | Your PagerDuty API token. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/integration_pagerduty#id IntegrationPagerduty#id}. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.schedules">schedules</a></code> | <code>java.util.List<java.lang.String></code> | Array of your schedule URLs. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `subdomain`<sup>Required</sup> <a name="subdomain" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.subdomain"></a>

- *Type:* java.lang.String

Your PagerDuty account’s personalized subdomain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/integration_pagerduty#subdomain IntegrationPagerduty#subdomain}

---

##### `apiToken`<sup>Optional</sup> <a name="apiToken" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.apiToken"></a>

- *Type:* java.lang.String

Your PagerDuty API token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/integration_pagerduty#api_token IntegrationPagerduty#api_token}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/integration_pagerduty#id IntegrationPagerduty#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `schedules`<sup>Optional</sup> <a name="schedules" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.schedules"></a>

- *Type:* java.util.List<java.lang.String>

Array of your schedule URLs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/integration_pagerduty#schedules IntegrationPagerduty#schedules}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.resetApiToken">resetApiToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.resetSchedules">resetSchedules</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetApiToken` <a name="resetApiToken" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.resetApiToken"></a>

```java
public void resetApiToken()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.resetId"></a>

```java
public void resetId()
```

##### `resetSchedules` <a name="resetSchedules" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.resetSchedules"></a>

```java
public void resetSchedules()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationPagerduty resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_pagerduty.IntegrationPagerduty;

IntegrationPagerduty.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_pagerduty.IntegrationPagerduty;

IntegrationPagerduty.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_pagerduty.IntegrationPagerduty;

IntegrationPagerduty.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_pagerduty.IntegrationPagerduty;

IntegrationPagerduty.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IntegrationPagerduty.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IntegrationPagerduty resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IntegrationPagerduty to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IntegrationPagerduty that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/integration_pagerduty#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationPagerduty to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.apiTokenInput">apiTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.schedulesInput">schedulesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.subdomainInput">subdomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.apiToken">apiToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.schedules">schedules</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.subdomain">subdomain</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiTokenInput`<sup>Optional</sup> <a name="apiTokenInput" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.apiTokenInput"></a>

```java
public java.lang.String getApiTokenInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `schedulesInput`<sup>Optional</sup> <a name="schedulesInput" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.schedulesInput"></a>

```java
public java.util.List<java.lang.String> getSchedulesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subdomainInput`<sup>Optional</sup> <a name="subdomainInput" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.subdomainInput"></a>

```java
public java.lang.String getSubdomainInput();
```

- *Type:* java.lang.String

---

##### `apiToken`<sup>Required</sup> <a name="apiToken" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.apiToken"></a>

```java
public java.lang.String getApiToken();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `schedules`<sup>Required</sup> <a name="schedules" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.schedules"></a>

```java
public java.util.List<java.lang.String> getSchedules();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subdomain`<sup>Required</sup> <a name="subdomain" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.subdomain"></a>

```java
public java.lang.String getSubdomain();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationPagerdutyConfig <a name="IntegrationPagerdutyConfig" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_pagerduty.IntegrationPagerdutyConfig;

IntegrationPagerdutyConfig.builder()
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
    .subdomain(java.lang.String)
//  .apiToken(java.lang.String)
//  .id(java.lang.String)
//  .schedules(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig.property.subdomain">subdomain</a></code> | <code>java.lang.String</code> | Your PagerDuty account’s personalized subdomain name. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig.property.apiToken">apiToken</a></code> | <code>java.lang.String</code> | Your PagerDuty API token. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/integration_pagerduty#id IntegrationPagerduty#id}. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig.property.schedules">schedules</a></code> | <code>java.util.List<java.lang.String></code> | Array of your schedule URLs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `subdomain`<sup>Required</sup> <a name="subdomain" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig.property.subdomain"></a>

```java
public java.lang.String getSubdomain();
```

- *Type:* java.lang.String

Your PagerDuty account’s personalized subdomain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/integration_pagerduty#subdomain IntegrationPagerduty#subdomain}

---

##### `apiToken`<sup>Optional</sup> <a name="apiToken" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig.property.apiToken"></a>

```java
public java.lang.String getApiToken();
```

- *Type:* java.lang.String

Your PagerDuty API token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/integration_pagerduty#api_token IntegrationPagerduty#api_token}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/integration_pagerduty#id IntegrationPagerduty#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `schedules`<sup>Optional</sup> <a name="schedules" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig.property.schedules"></a>

```java
public java.util.List<java.lang.String> getSchedules();
```

- *Type:* java.util.List<java.lang.String>

Array of your schedule URLs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/integration_pagerduty#schedules IntegrationPagerduty#schedules}

---



