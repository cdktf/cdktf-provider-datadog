# `downtime` Submodule <a name="`downtime` Submodule" id="@cdktf/provider-datadog.downtime"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Downtime <a name="Downtime" id="@cdktf/provider-datadog.downtime.Downtime"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/downtime datadog_downtime}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.downtime.Downtime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.downtime.Downtime;

Downtime.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .scope(java.util.List<java.lang.String>)
//  .end(java.lang.Number)
//  .endDate(java.lang.String)
//  .id(java.lang.String)
//  .message(java.lang.String)
//  .monitorId(java.lang.Number)
//  .monitorTags(java.util.List<java.lang.String>)
//  .muteFirstRecoveryNotification(java.lang.Boolean|IResolvable)
//  .recurrence(DowntimeRecurrence)
//  .start(java.lang.Number)
//  .startDate(java.lang.String)
//  .timezone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.scope">scope</a></code> | <code>java.util.List<java.lang.String></code> | specify the group scope to which this downtime applies. For everything use '*'. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.end">end</a></code> | <code>java.lang.Number</code> | Optionally specify an end date when this downtime should expire. Accepts a Unix timestamp in UTC. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.endDate">endDate</a></code> | <code>java.lang.String</code> | String representing date and time to end the downtime in RFC3339 format. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/downtime#id Downtime#id}. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.message">message</a></code> | <code>java.lang.String</code> | An optional message to provide when creating the downtime, can include notification handles. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.monitorId">monitorId</a></code> | <code>java.lang.Number</code> | When specified, this downtime will only apply to this monitor. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.monitorTags">monitorTags</a></code> | <code>java.util.List<java.lang.String></code> | A list of monitor tags (up to 32) to base the scheduled downtime on. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.muteFirstRecoveryNotification">muteFirstRecoveryNotification</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | When true the first recovery notification during the downtime will be muted Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.recurrence">recurrence</a></code> | <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence">DowntimeRecurrence</a></code> | recurrence block. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.start">start</a></code> | <code>java.lang.Number</code> | Specify when this downtime should start. Accepts a Unix timestamp in UTC. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.startDate">startDate</a></code> | <code>java.lang.String</code> | String representing date and time to start the downtime in RFC3339 format. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.timezone">timezone</a></code> | <code>java.lang.String</code> | The timezone for the downtime. Follows IANA timezone database identifiers. Defaults to `"UTC"`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.scope"></a>

- *Type:* java.util.List<java.lang.String>

specify the group scope to which this downtime applies. For everything use '*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/downtime#scope Downtime#scope}

---

##### `end`<sup>Optional</sup> <a name="end" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.end"></a>

- *Type:* java.lang.Number

Optionally specify an end date when this downtime should expire. Accepts a Unix timestamp in UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/downtime#end Downtime#end}

---

##### `endDate`<sup>Optional</sup> <a name="endDate" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.endDate"></a>

- *Type:* java.lang.String

String representing date and time to end the downtime in RFC3339 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/downtime#end_date Downtime#end_date}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/downtime#id Downtime#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.message"></a>

- *Type:* java.lang.String

An optional message to provide when creating the downtime, can include notification handles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/downtime#message Downtime#message}

---

##### `monitorId`<sup>Optional</sup> <a name="monitorId" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.monitorId"></a>

- *Type:* java.lang.Number

When specified, this downtime will only apply to this monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/downtime#monitor_id Downtime#monitor_id}

---

##### `monitorTags`<sup>Optional</sup> <a name="monitorTags" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.monitorTags"></a>

- *Type:* java.util.List<java.lang.String>

A list of monitor tags (up to 32) to base the scheduled downtime on.

Only monitors that have all selected tags are silenced

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/downtime#monitor_tags Downtime#monitor_tags}

---

##### `muteFirstRecoveryNotification`<sup>Optional</sup> <a name="muteFirstRecoveryNotification" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.muteFirstRecoveryNotification"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

When true the first recovery notification during the downtime will be muted Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/downtime#mute_first_recovery_notification Downtime#mute_first_recovery_notification}

---

##### `recurrence`<sup>Optional</sup> <a name="recurrence" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.recurrence"></a>

- *Type:* <a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence">DowntimeRecurrence</a>

recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/downtime#recurrence Downtime#recurrence}

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.start"></a>

- *Type:* java.lang.Number

Specify when this downtime should start. Accepts a Unix timestamp in UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/downtime#start Downtime#start}

---

##### `startDate`<sup>Optional</sup> <a name="startDate" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.startDate"></a>

- *Type:* java.lang.String

String representing date and time to start the downtime in RFC3339 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/downtime#start_date Downtime#start_date}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.timezone"></a>

- *Type:* java.lang.String

The timezone for the downtime. Follows IANA timezone database identifiers. Defaults to `"UTC"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/downtime#timezone Downtime#timezone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.putRecurrence">putRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetEnd">resetEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetEndDate">resetEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetMonitorId">resetMonitorId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetMonitorTags">resetMonitorTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetMuteFirstRecoveryNotification">resetMuteFirstRecoveryNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetRecurrence">resetRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetStart">resetStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetStartDate">resetStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetTimezone">resetTimezone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.downtime.Downtime.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.downtime.Downtime.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.downtime.Downtime.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.downtime.Downtime.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.downtime.Downtime.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.downtime.Downtime.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.downtime.Downtime.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.downtime.Downtime.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.downtime.Downtime.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.downtime.Downtime.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.downtime.Downtime.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.downtime.Downtime.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.downtime.Downtime.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.downtime.Downtime.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.downtime.Downtime.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.downtime.Downtime.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.downtime.Downtime.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.Downtime.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.downtime.Downtime.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.downtime.Downtime.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.downtime.Downtime.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.downtime.Downtime.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.downtime.Downtime.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.downtime.Downtime.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.downtime.Downtime.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRecurrence` <a name="putRecurrence" id="@cdktf/provider-datadog.downtime.Downtime.putRecurrence"></a>

```java
public void putRecurrence(DowntimeRecurrence value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.downtime.Downtime.putRecurrence.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence">DowntimeRecurrence</a>

---

##### `resetEnd` <a name="resetEnd" id="@cdktf/provider-datadog.downtime.Downtime.resetEnd"></a>

```java
public void resetEnd()
```

##### `resetEndDate` <a name="resetEndDate" id="@cdktf/provider-datadog.downtime.Downtime.resetEndDate"></a>

```java
public void resetEndDate()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-datadog.downtime.Downtime.resetId"></a>

```java
public void resetId()
```

##### `resetMessage` <a name="resetMessage" id="@cdktf/provider-datadog.downtime.Downtime.resetMessage"></a>

```java
public void resetMessage()
```

##### `resetMonitorId` <a name="resetMonitorId" id="@cdktf/provider-datadog.downtime.Downtime.resetMonitorId"></a>

```java
public void resetMonitorId()
```

##### `resetMonitorTags` <a name="resetMonitorTags" id="@cdktf/provider-datadog.downtime.Downtime.resetMonitorTags"></a>

```java
public void resetMonitorTags()
```

##### `resetMuteFirstRecoveryNotification` <a name="resetMuteFirstRecoveryNotification" id="@cdktf/provider-datadog.downtime.Downtime.resetMuteFirstRecoveryNotification"></a>

```java
public void resetMuteFirstRecoveryNotification()
```

##### `resetRecurrence` <a name="resetRecurrence" id="@cdktf/provider-datadog.downtime.Downtime.resetRecurrence"></a>

```java
public void resetRecurrence()
```

##### `resetStart` <a name="resetStart" id="@cdktf/provider-datadog.downtime.Downtime.resetStart"></a>

```java
public void resetStart()
```

##### `resetStartDate` <a name="resetStartDate" id="@cdktf/provider-datadog.downtime.Downtime.resetStartDate"></a>

```java
public void resetStartDate()
```

##### `resetTimezone` <a name="resetTimezone" id="@cdktf/provider-datadog.downtime.Downtime.resetTimezone"></a>

```java
public void resetTimezone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Downtime resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.downtime.Downtime.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.datadog.downtime.Downtime;

Downtime.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.downtime.Downtime.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.downtime.Downtime.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.datadog.downtime.Downtime;

Downtime.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.downtime.Downtime.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.downtime.Downtime.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.datadog.downtime.Downtime;

Downtime.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.downtime.Downtime.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.downtime.Downtime.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.datadog.downtime.Downtime;

Downtime.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Downtime.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Downtime resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.downtime.Downtime.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.downtime.Downtime.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Downtime to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.downtime.Downtime.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Downtime that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/downtime#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.downtime.Downtime.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Downtime to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.active">active</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.activeChildId">activeChildId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.disabled">disabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.recurrence">recurrence</a></code> | <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference">DowntimeRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.endDateInput">endDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.endInput">endInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.messageInput">messageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.monitorIdInput">monitorIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.monitorTagsInput">monitorTagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.muteFirstRecoveryNotificationInput">muteFirstRecoveryNotificationInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.recurrenceInput">recurrenceInput</a></code> | <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence">DowntimeRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.scopeInput">scopeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.startDateInput">startDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.startInput">startInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.timezoneInput">timezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.end">end</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.endDate">endDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.monitorId">monitorId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.monitorTags">monitorTags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.muteFirstRecoveryNotification">muteFirstRecoveryNotification</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.scope">scope</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.start">start</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.startDate">startDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.timezone">timezone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.downtime.Downtime.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.downtime.Downtime.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.downtime.Downtime.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.downtime.Downtime.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.downtime.Downtime.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.downtime.Downtime.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.downtime.Downtime.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.downtime.Downtime.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.downtime.Downtime.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.downtime.Downtime.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.downtime.Downtime.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.downtime.Downtime.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.downtime.Downtime.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.downtime.Downtime.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-datadog.downtime.Downtime.property.active"></a>

```java
public IResolvable getActive();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `activeChildId`<sup>Required</sup> <a name="activeChildId" id="@cdktf/provider-datadog.downtime.Downtime.property.activeChildId"></a>

```java
public java.lang.Number getActiveChildId();
```

- *Type:* java.lang.Number

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-datadog.downtime.Downtime.property.disabled"></a>

```java
public IResolvable getDisabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktf/provider-datadog.downtime.Downtime.property.recurrence"></a>

```java
public DowntimeRecurrenceOutputReference getRecurrence();
```

- *Type:* <a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference">DowntimeRecurrenceOutputReference</a>

---

##### `endDateInput`<sup>Optional</sup> <a name="endDateInput" id="@cdktf/provider-datadog.downtime.Downtime.property.endDateInput"></a>

```java
public java.lang.String getEndDateInput();
```

- *Type:* java.lang.String

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="@cdktf/provider-datadog.downtime.Downtime.property.endInput"></a>

```java
public java.lang.Number getEndInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.downtime.Downtime.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/provider-datadog.downtime.Downtime.property.messageInput"></a>

```java
public java.lang.String getMessageInput();
```

- *Type:* java.lang.String

---

##### `monitorIdInput`<sup>Optional</sup> <a name="monitorIdInput" id="@cdktf/provider-datadog.downtime.Downtime.property.monitorIdInput"></a>

```java
public java.lang.Number getMonitorIdInput();
```

- *Type:* java.lang.Number

---

##### `monitorTagsInput`<sup>Optional</sup> <a name="monitorTagsInput" id="@cdktf/provider-datadog.downtime.Downtime.property.monitorTagsInput"></a>

```java
public java.util.List<java.lang.String> getMonitorTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `muteFirstRecoveryNotificationInput`<sup>Optional</sup> <a name="muteFirstRecoveryNotificationInput" id="@cdktf/provider-datadog.downtime.Downtime.property.muteFirstRecoveryNotificationInput"></a>

```java
public java.lang.Boolean|IResolvable getMuteFirstRecoveryNotificationInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `recurrenceInput`<sup>Optional</sup> <a name="recurrenceInput" id="@cdktf/provider-datadog.downtime.Downtime.property.recurrenceInput"></a>

```java
public DowntimeRecurrence getRecurrenceInput();
```

- *Type:* <a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence">DowntimeRecurrence</a>

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-datadog.downtime.Downtime.property.scopeInput"></a>

```java
public java.util.List<java.lang.String> getScopeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `startDateInput`<sup>Optional</sup> <a name="startDateInput" id="@cdktf/provider-datadog.downtime.Downtime.property.startDateInput"></a>

```java
public java.lang.String getStartDateInput();
```

- *Type:* java.lang.String

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktf/provider-datadog.downtime.Downtime.property.startInput"></a>

```java
public java.lang.Number getStartInput();
```

- *Type:* java.lang.Number

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktf/provider-datadog.downtime.Downtime.property.timezoneInput"></a>

```java
public java.lang.String getTimezoneInput();
```

- *Type:* java.lang.String

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-datadog.downtime.Downtime.property.end"></a>

```java
public java.lang.Number getEnd();
```

- *Type:* java.lang.Number

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktf/provider-datadog.downtime.Downtime.property.endDate"></a>

```java
public java.lang.String getEndDate();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.downtime.Downtime.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-datadog.downtime.Downtime.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `monitorId`<sup>Required</sup> <a name="monitorId" id="@cdktf/provider-datadog.downtime.Downtime.property.monitorId"></a>

```java
public java.lang.Number getMonitorId();
```

- *Type:* java.lang.Number

---

##### `monitorTags`<sup>Required</sup> <a name="monitorTags" id="@cdktf/provider-datadog.downtime.Downtime.property.monitorTags"></a>

```java
public java.util.List<java.lang.String> getMonitorTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `muteFirstRecoveryNotification`<sup>Required</sup> <a name="muteFirstRecoveryNotification" id="@cdktf/provider-datadog.downtime.Downtime.property.muteFirstRecoveryNotification"></a>

```java
public java.lang.Boolean|IResolvable getMuteFirstRecoveryNotification();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.downtime.Downtime.property.scope"></a>

```java
public java.util.List<java.lang.String> getScope();
```

- *Type:* java.util.List<java.lang.String>

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-datadog.downtime.Downtime.property.start"></a>

```java
public java.lang.Number getStart();
```

- *Type:* java.lang.Number

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktf/provider-datadog.downtime.Downtime.property.startDate"></a>

```java
public java.lang.String getStartDate();
```

- *Type:* java.lang.String

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-datadog.downtime.Downtime.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.downtime.Downtime.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DowntimeConfig <a name="DowntimeConfig" id="@cdktf/provider-datadog.downtime.DowntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.downtime.DowntimeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.downtime.DowntimeConfig;

DowntimeConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .scope(java.util.List<java.lang.String>)
//  .end(java.lang.Number)
//  .endDate(java.lang.String)
//  .id(java.lang.String)
//  .message(java.lang.String)
//  .monitorId(java.lang.Number)
//  .monitorTags(java.util.List<java.lang.String>)
//  .muteFirstRecoveryNotification(java.lang.Boolean|IResolvable)
//  .recurrence(DowntimeRecurrence)
//  .start(java.lang.Number)
//  .startDate(java.lang.String)
//  .timezone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.scope">scope</a></code> | <code>java.util.List<java.lang.String></code> | specify the group scope to which this downtime applies. For everything use '*'. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.end">end</a></code> | <code>java.lang.Number</code> | Optionally specify an end date when this downtime should expire. Accepts a Unix timestamp in UTC. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.endDate">endDate</a></code> | <code>java.lang.String</code> | String representing date and time to end the downtime in RFC3339 format. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/downtime#id Downtime#id}. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.message">message</a></code> | <code>java.lang.String</code> | An optional message to provide when creating the downtime, can include notification handles. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.monitorId">monitorId</a></code> | <code>java.lang.Number</code> | When specified, this downtime will only apply to this monitor. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.monitorTags">monitorTags</a></code> | <code>java.util.List<java.lang.String></code> | A list of monitor tags (up to 32) to base the scheduled downtime on. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.muteFirstRecoveryNotification">muteFirstRecoveryNotification</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | When true the first recovery notification during the downtime will be muted Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.recurrence">recurrence</a></code> | <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence">DowntimeRecurrence</a></code> | recurrence block. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.start">start</a></code> | <code>java.lang.Number</code> | Specify when this downtime should start. Accepts a Unix timestamp in UTC. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.startDate">startDate</a></code> | <code>java.lang.String</code> | String representing date and time to start the downtime in RFC3339 format. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.timezone">timezone</a></code> | <code>java.lang.String</code> | The timezone for the downtime. Follows IANA timezone database identifiers. Defaults to `"UTC"`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.scope"></a>

```java
public java.util.List<java.lang.String> getScope();
```

- *Type:* java.util.List<java.lang.String>

specify the group scope to which this downtime applies. For everything use '*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/downtime#scope Downtime#scope}

---

##### `end`<sup>Optional</sup> <a name="end" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.end"></a>

```java
public java.lang.Number getEnd();
```

- *Type:* java.lang.Number

Optionally specify an end date when this downtime should expire. Accepts a Unix timestamp in UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/downtime#end Downtime#end}

---

##### `endDate`<sup>Optional</sup> <a name="endDate" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.endDate"></a>

```java
public java.lang.String getEndDate();
```

- *Type:* java.lang.String

String representing date and time to end the downtime in RFC3339 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/downtime#end_date Downtime#end_date}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/downtime#id Downtime#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

An optional message to provide when creating the downtime, can include notification handles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/downtime#message Downtime#message}

---

##### `monitorId`<sup>Optional</sup> <a name="monitorId" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.monitorId"></a>

```java
public java.lang.Number getMonitorId();
```

- *Type:* java.lang.Number

When specified, this downtime will only apply to this monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/downtime#monitor_id Downtime#monitor_id}

---

##### `monitorTags`<sup>Optional</sup> <a name="monitorTags" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.monitorTags"></a>

```java
public java.util.List<java.lang.String> getMonitorTags();
```

- *Type:* java.util.List<java.lang.String>

A list of monitor tags (up to 32) to base the scheduled downtime on.

Only monitors that have all selected tags are silenced

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/downtime#monitor_tags Downtime#monitor_tags}

---

##### `muteFirstRecoveryNotification`<sup>Optional</sup> <a name="muteFirstRecoveryNotification" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.muteFirstRecoveryNotification"></a>

```java
public java.lang.Boolean|IResolvable getMuteFirstRecoveryNotification();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

When true the first recovery notification during the downtime will be muted Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/downtime#mute_first_recovery_notification Downtime#mute_first_recovery_notification}

---

##### `recurrence`<sup>Optional</sup> <a name="recurrence" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.recurrence"></a>

```java
public DowntimeRecurrence getRecurrence();
```

- *Type:* <a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence">DowntimeRecurrence</a>

recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/downtime#recurrence Downtime#recurrence}

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.start"></a>

```java
public java.lang.Number getStart();
```

- *Type:* java.lang.Number

Specify when this downtime should start. Accepts a Unix timestamp in UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/downtime#start Downtime#start}

---

##### `startDate`<sup>Optional</sup> <a name="startDate" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.startDate"></a>

```java
public java.lang.String getStartDate();
```

- *Type:* java.lang.String

String representing date and time to start the downtime in RFC3339 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/downtime#start_date Downtime#start_date}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

The timezone for the downtime. Follows IANA timezone database identifiers. Defaults to `"UTC"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/downtime#timezone Downtime#timezone}

---

### DowntimeRecurrence <a name="DowntimeRecurrence" id="@cdktf/provider-datadog.downtime.DowntimeRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.downtime.DowntimeRecurrence.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.downtime.DowntimeRecurrence;

DowntimeRecurrence.builder()
    .type(java.lang.String)
//  .period(java.lang.Number)
//  .rrule(java.lang.String)
//  .untilDate(java.lang.Number)
//  .untilOccurrences(java.lang.Number)
//  .weekDays(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.type">type</a></code> | <code>java.lang.String</code> | One of `days`, `weeks`, `months`, `years`, or `rrule`. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.period">period</a></code> | <code>java.lang.Number</code> | How often to repeat as an integer. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.rrule">rrule</a></code> | <code>java.lang.String</code> | The RRULE standard for defining recurring events. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.untilDate">untilDate</a></code> | <code>java.lang.Number</code> | The date at which the recurrence should end as a POSIX timestamp. `until_occurrences` and `until_date` are mutually exclusive. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.untilOccurrences">untilOccurrences</a></code> | <code>java.lang.Number</code> | How many times the downtime will be rescheduled. `until_occurrences` and `until_date` are mutually exclusive. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.weekDays">weekDays</a></code> | <code>java.util.List<java.lang.String></code> | A list of week days to repeat on. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

One of `days`, `weeks`, `months`, `years`, or `rrule`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/downtime#type Downtime#type}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

How often to repeat as an integer.

For example to repeat every 3 days, select a `type` of `days` and a `period` of `3`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/downtime#period Downtime#period}

---

##### `rrule`<sup>Optional</sup> <a name="rrule" id="@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.rrule"></a>

```java
public java.lang.String getRrule();
```

- *Type:* java.lang.String

The RRULE standard for defining recurring events.

For example, to have a recurring event on the first day of each month, use `FREQ=MONTHLY;INTERVAL=1`. Most common rrule options from the iCalendar Spec are supported. Attributes specifying the duration in RRULE are not supported (for example, `DTSTART`, `DTEND`, `DURATION`). Only applicable when `type` is `rrule`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/downtime#rrule Downtime#rrule}

---

##### `untilDate`<sup>Optional</sup> <a name="untilDate" id="@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.untilDate"></a>

```java
public java.lang.Number getUntilDate();
```

- *Type:* java.lang.Number

The date at which the recurrence should end as a POSIX timestamp. `until_occurrences` and `until_date` are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/downtime#until_date Downtime#until_date}

---

##### `untilOccurrences`<sup>Optional</sup> <a name="untilOccurrences" id="@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.untilOccurrences"></a>

```java
public java.lang.Number getUntilOccurrences();
```

- *Type:* java.lang.Number

How many times the downtime will be rescheduled. `until_occurrences` and `until_date` are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/downtime#until_occurrences Downtime#until_occurrences}

---

##### `weekDays`<sup>Optional</sup> <a name="weekDays" id="@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.weekDays"></a>

```java
public java.util.List<java.lang.String> getWeekDays();
```

- *Type:* java.util.List<java.lang.String>

A list of week days to repeat on.

Choose from: `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat` or `Sun`. Only applicable when `type` is `weeks`. First letter must be capitalized.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/downtime#week_days Downtime#week_days}

---

## Classes <a name="Classes" id="Classes"></a>

### DowntimeRecurrenceOutputReference <a name="DowntimeRecurrenceOutputReference" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.downtime.DowntimeRecurrenceOutputReference;

new DowntimeRecurrenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetRrule">resetRrule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetUntilDate">resetUntilDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetUntilOccurrences">resetUntilOccurrences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetWeekDays">resetWeekDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPeriod` <a name="resetPeriod" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetPeriod"></a>

```java
public void resetPeriod()
```

##### `resetRrule` <a name="resetRrule" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetRrule"></a>

```java
public void resetRrule()
```

##### `resetUntilDate` <a name="resetUntilDate" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetUntilDate"></a>

```java
public void resetUntilDate()
```

##### `resetUntilOccurrences` <a name="resetUntilOccurrences" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetUntilOccurrences"></a>

```java
public void resetUntilOccurrences()
```

##### `resetWeekDays` <a name="resetWeekDays" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetWeekDays"></a>

```java
public void resetWeekDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.periodInput">periodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.rruleInput">rruleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.untilDateInput">untilDateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.untilOccurrencesInput">untilOccurrencesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.weekDaysInput">weekDaysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.period">period</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.rrule">rrule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.untilDate">untilDate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.untilOccurrences">untilOccurrences</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.weekDays">weekDays</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence">DowntimeRecurrence</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.periodInput"></a>

```java
public java.lang.Number getPeriodInput();
```

- *Type:* java.lang.Number

---

##### `rruleInput`<sup>Optional</sup> <a name="rruleInput" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.rruleInput"></a>

```java
public java.lang.String getRruleInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `untilDateInput`<sup>Optional</sup> <a name="untilDateInput" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.untilDateInput"></a>

```java
public java.lang.Number getUntilDateInput();
```

- *Type:* java.lang.Number

---

##### `untilOccurrencesInput`<sup>Optional</sup> <a name="untilOccurrencesInput" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.untilOccurrencesInput"></a>

```java
public java.lang.Number getUntilOccurrencesInput();
```

- *Type:* java.lang.Number

---

##### `weekDaysInput`<sup>Optional</sup> <a name="weekDaysInput" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.weekDaysInput"></a>

```java
public java.util.List<java.lang.String> getWeekDaysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

---

##### `rrule`<sup>Required</sup> <a name="rrule" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.rrule"></a>

```java
public java.lang.String getRrule();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `untilDate`<sup>Required</sup> <a name="untilDate" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.untilDate"></a>

```java
public java.lang.Number getUntilDate();
```

- *Type:* java.lang.Number

---

##### `untilOccurrences`<sup>Required</sup> <a name="untilOccurrences" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.untilOccurrences"></a>

```java
public java.lang.Number getUntilOccurrences();
```

- *Type:* java.lang.Number

---

##### `weekDays`<sup>Required</sup> <a name="weekDays" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.weekDays"></a>

```java
public java.util.List<java.lang.String> getWeekDays();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.internalValue"></a>

```java
public DowntimeRecurrence getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence">DowntimeRecurrence</a>

---



