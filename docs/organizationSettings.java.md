# `datadog_organization_settings`

Refer to the Terraform Registory for docs: [`datadog_organization_settings`](https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/resources/organization_settings).

# `organizationSettings` Submodule <a name="`organizationSettings` Submodule" id="@cdktf/provider-datadog.organizationSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationSettings <a name="OrganizationSettings" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/resources/organization_settings datadog_organization_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.organization_settings.OrganizationSettings;

OrganizationSettings.Builder.create(Construct scope, java.lang.String id)
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
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .settings(OrganizationSettingsSettings)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/resources/organization_settings#id OrganizationSettings#id}. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name for Organization. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.Initializer.parameter.settings">settings</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings">OrganizationSettingsSettings</a></code> | settings block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/resources/organization_settings#id OrganizationSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name for Organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/resources/organization_settings#name OrganizationSettings#name}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.Initializer.parameter.settings"></a>

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings">OrganizationSettingsSettings</a>

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/resources/organization_settings#settings OrganizationSettings#settings}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.resetSettings">resetSettings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putSettings` <a name="putSettings" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.putSettings"></a>

```java
public void putSettings(OrganizationSettingsSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings">OrganizationSettingsSettings</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.resetName"></a>

```java
public void resetName()
```

##### `resetSettings` <a name="resetSettings" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.resetSettings"></a>

```java
public void resetSettings()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OrganizationSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.datadog.organization_settings.OrganizationSettings;

OrganizationSettings.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.datadog.organization_settings.OrganizationSettings;

OrganizationSettings.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.datadog.organization_settings.OrganizationSettings;

OrganizationSettings.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.datadog.organization_settings.OrganizationSettings;

OrganizationSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OrganizationSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OrganizationSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OrganizationSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OrganizationSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/resources/organization_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OrganizationSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.publicId">publicId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference">OrganizationSettingsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.settingsInput">settingsInput</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings">OrganizationSettingsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `publicId`<sup>Required</sup> <a name="publicId" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.publicId"></a>

```java
public java.lang.String getPublicId();
```

- *Type:* java.lang.String

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.settings"></a>

```java
public OrganizationSettingsSettingsOutputReference getSettings();
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference">OrganizationSettingsSettingsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.settingsInput"></a>

```java
public OrganizationSettingsSettings getSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings">OrganizationSettingsSettings</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationSettingsConfig <a name="OrganizationSettingsConfig" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.organization_settings.OrganizationSettingsConfig;

OrganizationSettingsConfig.builder()
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
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .settings(OrganizationSettingsSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/resources/organization_settings#id OrganizationSettings#id}. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name for Organization. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings">OrganizationSettingsSettings</a></code> | settings block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/resources/organization_settings#id OrganizationSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name for Organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/resources/organization_settings#name OrganizationSettings#name}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.settings"></a>

```java
public OrganizationSettingsSettings getSettings();
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings">OrganizationSettingsSettings</a>

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/resources/organization_settings#settings OrganizationSettings#settings}

---

### OrganizationSettingsSettings <a name="OrganizationSettingsSettings" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.organization_settings.OrganizationSettingsSettings;

OrganizationSettingsSettings.builder()
    .saml(OrganizationSettingsSettingsSaml)
    .samlAutocreateUsersDomains(OrganizationSettingsSettingsSamlAutocreateUsersDomains)
    .samlIdpInitiatedLogin(OrganizationSettingsSettingsSamlIdpInitiatedLogin)
    .samlStrictMode(OrganizationSettingsSettingsSamlStrictMode)
//  .privateWidgetShare(java.lang.Boolean)
//  .privateWidgetShare(IResolvable)
//  .samlAutocreateAccessRole(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.saml">saml</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSaml">OrganizationSettingsSettingsSaml</a></code> | saml block. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.samlAutocreateUsersDomains">samlAutocreateUsersDomains</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains">OrganizationSettingsSettingsSamlAutocreateUsersDomains</a></code> | saml_autocreate_users_domains block. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.samlIdpInitiatedLogin">samlIdpInitiatedLogin</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLogin">OrganizationSettingsSettingsSamlIdpInitiatedLogin</a></code> | saml_idp_initiated_login block. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.samlStrictMode">samlStrictMode</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictMode">OrganizationSettingsSettingsSamlStrictMode</a></code> | saml_strict_mode block. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.privateWidgetShare">privateWidgetShare</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not the organization users can share widgets outside of Datadog. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.samlAutocreateAccessRole">samlAutocreateAccessRole</a></code> | <code>java.lang.String</code> | The access role of the user. |

---

##### `saml`<sup>Required</sup> <a name="saml" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.saml"></a>

```java
public OrganizationSettingsSettingsSaml getSaml();
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSaml">OrganizationSettingsSettingsSaml</a>

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/resources/organization_settings#saml OrganizationSettings#saml}

---

##### `samlAutocreateUsersDomains`<sup>Required</sup> <a name="samlAutocreateUsersDomains" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.samlAutocreateUsersDomains"></a>

```java
public OrganizationSettingsSettingsSamlAutocreateUsersDomains getSamlAutocreateUsersDomains();
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains">OrganizationSettingsSettingsSamlAutocreateUsersDomains</a>

saml_autocreate_users_domains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/resources/organization_settings#saml_autocreate_users_domains OrganizationSettings#saml_autocreate_users_domains}

---

##### `samlIdpInitiatedLogin`<sup>Required</sup> <a name="samlIdpInitiatedLogin" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.samlIdpInitiatedLogin"></a>

```java
public OrganizationSettingsSettingsSamlIdpInitiatedLogin getSamlIdpInitiatedLogin();
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLogin">OrganizationSettingsSettingsSamlIdpInitiatedLogin</a>

saml_idp_initiated_login block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/resources/organization_settings#saml_idp_initiated_login OrganizationSettings#saml_idp_initiated_login}

---

##### `samlStrictMode`<sup>Required</sup> <a name="samlStrictMode" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.samlStrictMode"></a>

```java
public OrganizationSettingsSettingsSamlStrictMode getSamlStrictMode();
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictMode">OrganizationSettingsSettingsSamlStrictMode</a>

saml_strict_mode block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/resources/organization_settings#saml_strict_mode OrganizationSettings#saml_strict_mode}

---

##### `privateWidgetShare`<sup>Optional</sup> <a name="privateWidgetShare" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.privateWidgetShare"></a>

```java
public java.lang.Object getPrivateWidgetShare();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not the organization users can share widgets outside of Datadog. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/resources/organization_settings#private_widget_share OrganizationSettings#private_widget_share}

---

##### `samlAutocreateAccessRole`<sup>Optional</sup> <a name="samlAutocreateAccessRole" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.samlAutocreateAccessRole"></a>

```java
public java.lang.String getSamlAutocreateAccessRole();
```

- *Type:* java.lang.String

The access role of the user.

Options are `st` (standard user), `adm` (admin user), or `ro` (read-only user). Allowed enum values: `st`, `adm` , `ro`, `ERROR` Defaults to `"st"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/resources/organization_settings#saml_autocreate_access_role OrganizationSettings#saml_autocreate_access_role}

---

### OrganizationSettingsSettingsSaml <a name="OrganizationSettingsSettingsSaml" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSaml.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.organization_settings.OrganizationSettingsSettingsSaml;

OrganizationSettingsSettingsSaml.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSaml.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not SAML is enabled for this organization. Defaults to `false`. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSaml.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not SAML is enabled for this organization. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/resources/organization_settings#enabled OrganizationSettings#enabled}

---

### OrganizationSettingsSettingsSamlAutocreateUsersDomains <a name="OrganizationSettingsSettingsSamlAutocreateUsersDomains" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.organization_settings.OrganizationSettingsSettingsSamlAutocreateUsersDomains;

OrganizationSettingsSettingsSamlAutocreateUsersDomains.builder()
//  .domains(java.util.List<java.lang.String>)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains.property.domains">domains</a></code> | <code>java.util.List<java.lang.String></code> | List of domains where the SAML automated user creation is enabled. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not the automated user creation based on SAML domain is enabled. Defaults to `false`. |

---

##### `domains`<sup>Optional</sup> <a name="domains" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains.property.domains"></a>

```java
public java.util.List<java.lang.String> getDomains();
```

- *Type:* java.util.List<java.lang.String>

List of domains where the SAML automated user creation is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/resources/organization_settings#domains OrganizationSettings#domains}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not the automated user creation based on SAML domain is enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/resources/organization_settings#enabled OrganizationSettings#enabled}

---

### OrganizationSettingsSettingsSamlIdpInitiatedLogin <a name="OrganizationSettingsSettingsSamlIdpInitiatedLogin" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLogin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLogin.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.organization_settings.OrganizationSettingsSettingsSamlIdpInitiatedLogin;

OrganizationSettingsSettingsSamlIdpInitiatedLogin.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLogin.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not a SAML identity provider metadata file was provided to the Datadog organization. Defaults to `false`. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLogin.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not a SAML identity provider metadata file was provided to the Datadog organization. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/resources/organization_settings#enabled OrganizationSettings#enabled}

---

### OrganizationSettingsSettingsSamlStrictMode <a name="OrganizationSettingsSettingsSamlStrictMode" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictMode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictMode.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.organization_settings.OrganizationSettingsSettingsSamlStrictMode;

OrganizationSettingsSettingsSamlStrictMode.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictMode.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not the SAML strict mode is enabled. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictMode.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not the SAML strict mode is enabled.

If true, all users must log in with SAML. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/resources/organization_settings#enabled OrganizationSettings#enabled}

---

## Classes <a name="Classes" id="Classes"></a>

### OrganizationSettingsSettingsOutputReference <a name="OrganizationSettingsSettingsOutputReference" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.organization_settings.OrganizationSettingsSettingsOutputReference;

new OrganizationSettingsSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSaml">putSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSamlAutocreateUsersDomains">putSamlAutocreateUsersDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSamlIdpInitiatedLogin">putSamlIdpInitiatedLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSamlStrictMode">putSamlStrictMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.resetPrivateWidgetShare">resetPrivateWidgetShare</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.resetSamlAutocreateAccessRole">resetSamlAutocreateAccessRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSaml` <a name="putSaml" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSaml"></a>

```java
public void putSaml(OrganizationSettingsSettingsSaml value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSaml.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSaml">OrganizationSettingsSettingsSaml</a>

---

##### `putSamlAutocreateUsersDomains` <a name="putSamlAutocreateUsersDomains" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSamlAutocreateUsersDomains"></a>

```java
public void putSamlAutocreateUsersDomains(OrganizationSettingsSettingsSamlAutocreateUsersDomains value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSamlAutocreateUsersDomains.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains">OrganizationSettingsSettingsSamlAutocreateUsersDomains</a>

---

##### `putSamlIdpInitiatedLogin` <a name="putSamlIdpInitiatedLogin" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSamlIdpInitiatedLogin"></a>

```java
public void putSamlIdpInitiatedLogin(OrganizationSettingsSettingsSamlIdpInitiatedLogin value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSamlIdpInitiatedLogin.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLogin">OrganizationSettingsSettingsSamlIdpInitiatedLogin</a>

---

##### `putSamlStrictMode` <a name="putSamlStrictMode" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSamlStrictMode"></a>

```java
public void putSamlStrictMode(OrganizationSettingsSettingsSamlStrictMode value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSamlStrictMode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictMode">OrganizationSettingsSettingsSamlStrictMode</a>

---

##### `resetPrivateWidgetShare` <a name="resetPrivateWidgetShare" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.resetPrivateWidgetShare"></a>

```java
public void resetPrivateWidgetShare()
```

##### `resetSamlAutocreateAccessRole` <a name="resetSamlAutocreateAccessRole" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.resetSamlAutocreateAccessRole"></a>

```java
public void resetSamlAutocreateAccessRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.saml">saml</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference">OrganizationSettingsSettingsSamlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlAutocreateUsersDomains">samlAutocreateUsersDomains</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference">OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlCanBeEnabled">samlCanBeEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlIdpEndpoint">samlIdpEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlIdpInitiatedLogin">samlIdpInitiatedLogin</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference">OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlIdpMetadataUploaded">samlIdpMetadataUploaded</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlLoginUrl">samlLoginUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlStrictMode">samlStrictMode</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference">OrganizationSettingsSettingsSamlStrictModeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.privateWidgetShareInput">privateWidgetShareInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlAutocreateAccessRoleInput">samlAutocreateAccessRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlAutocreateUsersDomainsInput">samlAutocreateUsersDomainsInput</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains">OrganizationSettingsSettingsSamlAutocreateUsersDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlIdpInitiatedLoginInput">samlIdpInitiatedLoginInput</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLogin">OrganizationSettingsSettingsSamlIdpInitiatedLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlInput">samlInput</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSaml">OrganizationSettingsSettingsSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlStrictModeInput">samlStrictModeInput</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictMode">OrganizationSettingsSettingsSamlStrictMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.privateWidgetShare">privateWidgetShare</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlAutocreateAccessRole">samlAutocreateAccessRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings">OrganizationSettingsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `saml`<sup>Required</sup> <a name="saml" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.saml"></a>

```java
public OrganizationSettingsSettingsSamlOutputReference getSaml();
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference">OrganizationSettingsSettingsSamlOutputReference</a>

---

##### `samlAutocreateUsersDomains`<sup>Required</sup> <a name="samlAutocreateUsersDomains" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlAutocreateUsersDomains"></a>

```java
public OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference getSamlAutocreateUsersDomains();
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference">OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference</a>

---

##### `samlCanBeEnabled`<sup>Required</sup> <a name="samlCanBeEnabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlCanBeEnabled"></a>

```java
public IResolvable getSamlCanBeEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `samlIdpEndpoint`<sup>Required</sup> <a name="samlIdpEndpoint" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlIdpEndpoint"></a>

```java
public java.lang.String getSamlIdpEndpoint();
```

- *Type:* java.lang.String

---

##### `samlIdpInitiatedLogin`<sup>Required</sup> <a name="samlIdpInitiatedLogin" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlIdpInitiatedLogin"></a>

```java
public OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference getSamlIdpInitiatedLogin();
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference">OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference</a>

---

##### `samlIdpMetadataUploaded`<sup>Required</sup> <a name="samlIdpMetadataUploaded" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlIdpMetadataUploaded"></a>

```java
public IResolvable getSamlIdpMetadataUploaded();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `samlLoginUrl`<sup>Required</sup> <a name="samlLoginUrl" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlLoginUrl"></a>

```java
public java.lang.String getSamlLoginUrl();
```

- *Type:* java.lang.String

---

##### `samlStrictMode`<sup>Required</sup> <a name="samlStrictMode" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlStrictMode"></a>

```java
public OrganizationSettingsSettingsSamlStrictModeOutputReference getSamlStrictMode();
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference">OrganizationSettingsSettingsSamlStrictModeOutputReference</a>

---

##### `privateWidgetShareInput`<sup>Optional</sup> <a name="privateWidgetShareInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.privateWidgetShareInput"></a>

```java
public java.lang.Object getPrivateWidgetShareInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `samlAutocreateAccessRoleInput`<sup>Optional</sup> <a name="samlAutocreateAccessRoleInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlAutocreateAccessRoleInput"></a>

```java
public java.lang.String getSamlAutocreateAccessRoleInput();
```

- *Type:* java.lang.String

---

##### `samlAutocreateUsersDomainsInput`<sup>Optional</sup> <a name="samlAutocreateUsersDomainsInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlAutocreateUsersDomainsInput"></a>

```java
public OrganizationSettingsSettingsSamlAutocreateUsersDomains getSamlAutocreateUsersDomainsInput();
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains">OrganizationSettingsSettingsSamlAutocreateUsersDomains</a>

---

##### `samlIdpInitiatedLoginInput`<sup>Optional</sup> <a name="samlIdpInitiatedLoginInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlIdpInitiatedLoginInput"></a>

```java
public OrganizationSettingsSettingsSamlIdpInitiatedLogin getSamlIdpInitiatedLoginInput();
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLogin">OrganizationSettingsSettingsSamlIdpInitiatedLogin</a>

---

##### `samlInput`<sup>Optional</sup> <a name="samlInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlInput"></a>

```java
public OrganizationSettingsSettingsSaml getSamlInput();
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSaml">OrganizationSettingsSettingsSaml</a>

---

##### `samlStrictModeInput`<sup>Optional</sup> <a name="samlStrictModeInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlStrictModeInput"></a>

```java
public OrganizationSettingsSettingsSamlStrictMode getSamlStrictModeInput();
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictMode">OrganizationSettingsSettingsSamlStrictMode</a>

---

##### `privateWidgetShare`<sup>Required</sup> <a name="privateWidgetShare" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.privateWidgetShare"></a>

```java
public java.lang.Object getPrivateWidgetShare();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `samlAutocreateAccessRole`<sup>Required</sup> <a name="samlAutocreateAccessRole" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlAutocreateAccessRole"></a>

```java
public java.lang.String getSamlAutocreateAccessRole();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.internalValue"></a>

```java
public OrganizationSettingsSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings">OrganizationSettingsSettings</a>

---


### OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference <a name="OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.organization_settings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference;

new OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.resetDomains">resetDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDomains` <a name="resetDomains" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.resetDomains"></a>

```java
public void resetDomains()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.domainsInput">domainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.domains">domains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains">OrganizationSettingsSettingsSamlAutocreateUsersDomains</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainsInput`<sup>Optional</sup> <a name="domainsInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.domainsInput"></a>

```java
public java.util.List<java.lang.String> getDomainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.domains"></a>

```java
public java.util.List<java.lang.String> getDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.internalValue"></a>

```java
public OrganizationSettingsSettingsSamlAutocreateUsersDomains getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains">OrganizationSettingsSettingsSamlAutocreateUsersDomains</a>

---


### OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference <a name="OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.organization_settings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference;

new OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLogin">OrganizationSettingsSettingsSamlIdpInitiatedLogin</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.internalValue"></a>

```java
public OrganizationSettingsSettingsSamlIdpInitiatedLogin getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLogin">OrganizationSettingsSettingsSamlIdpInitiatedLogin</a>

---


### OrganizationSettingsSettingsSamlOutputReference <a name="OrganizationSettingsSettingsSamlOutputReference" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.organization_settings.OrganizationSettingsSettingsSamlOutputReference;

new OrganizationSettingsSettingsSamlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSaml">OrganizationSettingsSettingsSaml</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.property.internalValue"></a>

```java
public OrganizationSettingsSettingsSaml getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSaml">OrganizationSettingsSettingsSaml</a>

---


### OrganizationSettingsSettingsSamlStrictModeOutputReference <a name="OrganizationSettingsSettingsSamlStrictModeOutputReference" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.organization_settings.OrganizationSettingsSettingsSamlStrictModeOutputReference;

new OrganizationSettingsSettingsSamlStrictModeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictMode">OrganizationSettingsSettingsSamlStrictMode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.property.internalValue"></a>

```java
public OrganizationSettingsSettingsSamlStrictMode getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictMode">OrganizationSettingsSettingsSamlStrictMode</a>

---



