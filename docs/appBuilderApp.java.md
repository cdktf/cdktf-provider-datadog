# `appBuilderApp` Submodule <a name="`appBuilderApp` Submodule" id="@cdktf/provider-datadog.appBuilderApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppBuilderApp <a name="AppBuilderApp" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/app_builder_app datadog_app_builder_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.app_builder_app.AppBuilderApp;

AppBuilderApp.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .appJson(java.lang.String)
//  .actionQueryNamesToConnectionIds(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .name(java.lang.String)
//  .published(java.lang.Boolean|IResolvable)
//  .rootInstanceName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.Initializer.parameter.appJson">appJson</a></code> | <code>java.lang.String</code> | The JSON representation of the App. String length must be at least 1. |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.Initializer.parameter.actionQueryNamesToConnectionIds">actionQueryNamesToConnectionIds</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | If specified, this will override the Action Connection IDs for the specified Action Query Names in the App JSON. |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | If specified, this will override the human-readable description of the App in the App JSON. |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | If specified, this will override the name of the App in the App JSON. |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.Initializer.parameter.published">published</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set the app to published or unpublished. |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.Initializer.parameter.rootInstanceName">rootInstanceName</a></code> | <code>java.lang.String</code> | The name of the root component of the app. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appJson`<sup>Required</sup> <a name="appJson" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.Initializer.parameter.appJson"></a>

- *Type:* java.lang.String

The JSON representation of the App. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/app_builder_app#app_json AppBuilderApp#app_json}

---

##### `actionQueryNamesToConnectionIds`<sup>Optional</sup> <a name="actionQueryNamesToConnectionIds" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.Initializer.parameter.actionQueryNamesToConnectionIds"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

If specified, this will override the Action Connection IDs for the specified Action Query Names in the App JSON.

Otherwise, a map of the App's Action Query Names to Action Connection IDs will be returned in output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/app_builder_app#action_query_names_to_connection_ids AppBuilderApp#action_query_names_to_connection_ids}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.Initializer.parameter.description"></a>

- *Type:* java.lang.String

If specified, this will override the human-readable description of the App in the App JSON.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/app_builder_app#description AppBuilderApp#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.Initializer.parameter.name"></a>

- *Type:* java.lang.String

If specified, this will override the name of the App in the App JSON.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/app_builder_app#name AppBuilderApp#name}

---

##### `published`<sup>Optional</sup> <a name="published" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.Initializer.parameter.published"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set the app to published or unpublished.

Published apps are available to other users. To ensure the app is accessible to the correct users, you also need to set a [Restriction Policy](https://docs.datadoghq.com/api/latest/restriction-policies/) on the app if a policy does not yet exist. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/app_builder_app#published AppBuilderApp#published}

---

##### `rootInstanceName`<sup>Optional</sup> <a name="rootInstanceName" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.Initializer.parameter.rootInstanceName"></a>

- *Type:* java.lang.String

The name of the root component of the app.

This must be a grid component that contains all other components. If specified, this will override the root instance name of the App in the App JSON. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/app_builder_app#root_instance_name AppBuilderApp#root_instance_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.resetActionQueryNamesToConnectionIds">resetActionQueryNamesToConnectionIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.resetPublished">resetPublished</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.resetRootInstanceName">resetRootInstanceName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetActionQueryNamesToConnectionIds` <a name="resetActionQueryNamesToConnectionIds" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.resetActionQueryNamesToConnectionIds"></a>

```java
public void resetActionQueryNamesToConnectionIds()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.resetName"></a>

```java
public void resetName()
```

##### `resetPublished` <a name="resetPublished" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.resetPublished"></a>

```java
public void resetPublished()
```

##### `resetRootInstanceName` <a name="resetRootInstanceName" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.resetRootInstanceName"></a>

```java
public void resetRootInstanceName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AppBuilderApp resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.datadog.app_builder_app.AppBuilderApp;

AppBuilderApp.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.datadog.app_builder_app.AppBuilderApp;

AppBuilderApp.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.datadog.app_builder_app.AppBuilderApp;

AppBuilderApp.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.datadog.app_builder_app.AppBuilderApp;

AppBuilderApp.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AppBuilderApp.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AppBuilderApp resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AppBuilderApp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AppBuilderApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/app_builder_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AppBuilderApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.actionQueryNamesToConnectionIdsInput">actionQueryNamesToConnectionIdsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.appJsonInput">appJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.publishedInput">publishedInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.rootInstanceNameInput">rootInstanceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.actionQueryNamesToConnectionIds">actionQueryNamesToConnectionIds</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.appJson">appJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.published">published</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.rootInstanceName">rootInstanceName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `actionQueryNamesToConnectionIdsInput`<sup>Optional</sup> <a name="actionQueryNamesToConnectionIdsInput" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.actionQueryNamesToConnectionIdsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getActionQueryNamesToConnectionIdsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `appJsonInput`<sup>Optional</sup> <a name="appJsonInput" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.appJsonInput"></a>

```java
public java.lang.String getAppJsonInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `publishedInput`<sup>Optional</sup> <a name="publishedInput" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.publishedInput"></a>

```java
public java.lang.Boolean|IResolvable getPublishedInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `rootInstanceNameInput`<sup>Optional</sup> <a name="rootInstanceNameInput" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.rootInstanceNameInput"></a>

```java
public java.lang.String getRootInstanceNameInput();
```

- *Type:* java.lang.String

---

##### `actionQueryNamesToConnectionIds`<sup>Required</sup> <a name="actionQueryNamesToConnectionIds" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.actionQueryNamesToConnectionIds"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getActionQueryNamesToConnectionIds();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `appJson`<sup>Required</sup> <a name="appJson" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.appJson"></a>

```java
public java.lang.String getAppJson();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `published`<sup>Required</sup> <a name="published" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.published"></a>

```java
public java.lang.Boolean|IResolvable getPublished();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `rootInstanceName`<sup>Required</sup> <a name="rootInstanceName" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.rootInstanceName"></a>

```java
public java.lang.String getRootInstanceName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderApp.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppBuilderAppConfig <a name="AppBuilderAppConfig" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.app_builder_app.AppBuilderAppConfig;

AppBuilderAppConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .appJson(java.lang.String)
//  .actionQueryNamesToConnectionIds(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .name(java.lang.String)
//  .published(java.lang.Boolean|IResolvable)
//  .rootInstanceName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.appJson">appJson</a></code> | <code>java.lang.String</code> | The JSON representation of the App. String length must be at least 1. |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.actionQueryNamesToConnectionIds">actionQueryNamesToConnectionIds</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | If specified, this will override the Action Connection IDs for the specified Action Query Names in the App JSON. |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.description">description</a></code> | <code>java.lang.String</code> | If specified, this will override the human-readable description of the App in the App JSON. |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.name">name</a></code> | <code>java.lang.String</code> | If specified, this will override the name of the App in the App JSON. |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.published">published</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set the app to published or unpublished. |
| <code><a href="#@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.rootInstanceName">rootInstanceName</a></code> | <code>java.lang.String</code> | The name of the root component of the app. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appJson`<sup>Required</sup> <a name="appJson" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.appJson"></a>

```java
public java.lang.String getAppJson();
```

- *Type:* java.lang.String

The JSON representation of the App. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/app_builder_app#app_json AppBuilderApp#app_json}

---

##### `actionQueryNamesToConnectionIds`<sup>Optional</sup> <a name="actionQueryNamesToConnectionIds" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.actionQueryNamesToConnectionIds"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getActionQueryNamesToConnectionIds();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

If specified, this will override the Action Connection IDs for the specified Action Query Names in the App JSON.

Otherwise, a map of the App's Action Query Names to Action Connection IDs will be returned in output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/app_builder_app#action_query_names_to_connection_ids AppBuilderApp#action_query_names_to_connection_ids}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

If specified, this will override the human-readable description of the App in the App JSON.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/app_builder_app#description AppBuilderApp#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

If specified, this will override the name of the App in the App JSON.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/app_builder_app#name AppBuilderApp#name}

---

##### `published`<sup>Optional</sup> <a name="published" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.published"></a>

```java
public java.lang.Boolean|IResolvable getPublished();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set the app to published or unpublished.

Published apps are available to other users. To ensure the app is accessible to the correct users, you also need to set a [Restriction Policy](https://docs.datadoghq.com/api/latest/restriction-policies/) on the app if a policy does not yet exist. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/app_builder_app#published AppBuilderApp#published}

---

##### `rootInstanceName`<sup>Optional</sup> <a name="rootInstanceName" id="@cdktf/provider-datadog.appBuilderApp.AppBuilderAppConfig.property.rootInstanceName"></a>

```java
public java.lang.String getRootInstanceName();
```

- *Type:* java.lang.String

The name of the root component of the app.

This must be a grid component that contains all other components. If specified, this will override the root instance name of the App in the App JSON. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/app_builder_app#root_instance_name AppBuilderApp#root_instance_name}

---



