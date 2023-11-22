# `datadog_downtime_schedule`

Refer to the Terraform Registory for docs: [`datadog_downtime_schedule`](https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/downtime_schedule).

# `downtimeSchedule` Submodule <a name="`downtimeSchedule` Submodule" id="@cdktf/provider-datadog.downtimeSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DowntimeSchedule <a name="DowntimeSchedule" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/downtime_schedule datadog_downtime_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.downtime_schedule.DowntimeSchedule;

DowntimeSchedule.Builder.create(Construct scope, java.lang.String id)
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
    .scope(java.lang.String)
//  .displayTimezone(java.lang.String)
//  .message(java.lang.String)
//  .monitorIdentifier(DowntimeScheduleMonitorIdentifier)
//  .muteFirstRecoveryNotification(java.lang.Boolean)
//  .muteFirstRecoveryNotification(IResolvable)
//  .notifyEndStates(java.util.List<java.lang.String>)
//  .notifyEndTypes(java.util.List<java.lang.String>)
//  .oneTimeSchedule(DowntimeScheduleOneTimeSchedule)
//  .recurringSchedule(DowntimeScheduleRecurringSchedule)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.scope">scope</a></code> | <code>java.lang.String</code> | The scope to which the downtime applies. Must follow the [common search syntax](https://docs.datadoghq.com/logs/explorer/search_syntax/). |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.displayTimezone">displayTimezone</a></code> | <code>java.lang.String</code> | The timezone in which to display the downtime's start and end times in Datadog applications. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.message">message</a></code> | <code>java.lang.String</code> | A message to include with notifications for this downtime. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.monitorIdentifier">monitorIdentifier</a></code> | <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifier">DowntimeScheduleMonitorIdentifier</a></code> | monitor_identifier block. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.muteFirstRecoveryNotification">muteFirstRecoveryNotification</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If the first recovery notification during a downtime should be muted. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.notifyEndStates">notifyEndStates</a></code> | <code>java.util.List<java.lang.String></code> | States that will trigger a monitor notification when the `notify_end_types` action occurs. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.notifyEndTypes">notifyEndTypes</a></code> | <code>java.util.List<java.lang.String></code> | Actions that will trigger a monitor notification if the downtime is in the `notify_end_types` state. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.oneTimeSchedule">oneTimeSchedule</a></code> | <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeSchedule">DowntimeScheduleOneTimeSchedule</a></code> | one_time_schedule block. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.recurringSchedule">recurringSchedule</a></code> | <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringSchedule">DowntimeScheduleRecurringSchedule</a></code> | recurring_schedule block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.scope"></a>

- *Type:* java.lang.String

The scope to which the downtime applies. Must follow the [common search syntax](https://docs.datadoghq.com/logs/explorer/search_syntax/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/downtime_schedule#scope DowntimeSchedule#scope}

---

##### `displayTimezone`<sup>Optional</sup> <a name="displayTimezone" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.displayTimezone"></a>

- *Type:* java.lang.String

The timezone in which to display the downtime's start and end times in Datadog applications.

This is not used as an offset for scheduling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/downtime_schedule#display_timezone DowntimeSchedule#display_timezone}

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.message"></a>

- *Type:* java.lang.String

A message to include with notifications for this downtime.

Email notifications can be sent to specific users by using the same `@username` notation as events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/downtime_schedule#message DowntimeSchedule#message}

---

##### `monitorIdentifier`<sup>Optional</sup> <a name="monitorIdentifier" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.monitorIdentifier"></a>

- *Type:* <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifier">DowntimeScheduleMonitorIdentifier</a>

monitor_identifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/downtime_schedule#monitor_identifier DowntimeSchedule#monitor_identifier}

---

##### `muteFirstRecoveryNotification`<sup>Optional</sup> <a name="muteFirstRecoveryNotification" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.muteFirstRecoveryNotification"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If the first recovery notification during a downtime should be muted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/downtime_schedule#mute_first_recovery_notification DowntimeSchedule#mute_first_recovery_notification}

---

##### `notifyEndStates`<sup>Optional</sup> <a name="notifyEndStates" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.notifyEndStates"></a>

- *Type:* java.util.List<java.lang.String>

States that will trigger a monitor notification when the `notify_end_types` action occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/downtime_schedule#notify_end_states DowntimeSchedule#notify_end_states}

---

##### `notifyEndTypes`<sup>Optional</sup> <a name="notifyEndTypes" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.notifyEndTypes"></a>

- *Type:* java.util.List<java.lang.String>

Actions that will trigger a monitor notification if the downtime is in the `notify_end_types` state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/downtime_schedule#notify_end_types DowntimeSchedule#notify_end_types}

---

##### `oneTimeSchedule`<sup>Optional</sup> <a name="oneTimeSchedule" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.oneTimeSchedule"></a>

- *Type:* <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeSchedule">DowntimeScheduleOneTimeSchedule</a>

one_time_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/downtime_schedule#one_time_schedule DowntimeSchedule#one_time_schedule}

---

##### `recurringSchedule`<sup>Optional</sup> <a name="recurringSchedule" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.recurringSchedule"></a>

- *Type:* <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringSchedule">DowntimeScheduleRecurringSchedule</a>

recurring_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/downtime_schedule#recurring_schedule DowntimeSchedule#recurring_schedule}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.putMonitorIdentifier">putMonitorIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.putOneTimeSchedule">putOneTimeSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.putRecurringSchedule">putRecurringSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetDisplayTimezone">resetDisplayTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetMonitorIdentifier">resetMonitorIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetMuteFirstRecoveryNotification">resetMuteFirstRecoveryNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetNotifyEndStates">resetNotifyEndStates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetNotifyEndTypes">resetNotifyEndTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetOneTimeSchedule">resetOneTimeSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetRecurringSchedule">resetRecurringSchedule</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putMonitorIdentifier` <a name="putMonitorIdentifier" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.putMonitorIdentifier"></a>

```java
public void putMonitorIdentifier(DowntimeScheduleMonitorIdentifier value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.putMonitorIdentifier.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifier">DowntimeScheduleMonitorIdentifier</a>

---

##### `putOneTimeSchedule` <a name="putOneTimeSchedule" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.putOneTimeSchedule"></a>

```java
public void putOneTimeSchedule(DowntimeScheduleOneTimeSchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.putOneTimeSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeSchedule">DowntimeScheduleOneTimeSchedule</a>

---

##### `putRecurringSchedule` <a name="putRecurringSchedule" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.putRecurringSchedule"></a>

```java
public void putRecurringSchedule(DowntimeScheduleRecurringSchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.putRecurringSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringSchedule">DowntimeScheduleRecurringSchedule</a>

---

##### `resetDisplayTimezone` <a name="resetDisplayTimezone" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetDisplayTimezone"></a>

```java
public void resetDisplayTimezone()
```

##### `resetMessage` <a name="resetMessage" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetMessage"></a>

```java
public void resetMessage()
```

##### `resetMonitorIdentifier` <a name="resetMonitorIdentifier" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetMonitorIdentifier"></a>

```java
public void resetMonitorIdentifier()
```

##### `resetMuteFirstRecoveryNotification` <a name="resetMuteFirstRecoveryNotification" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetMuteFirstRecoveryNotification"></a>

```java
public void resetMuteFirstRecoveryNotification()
```

##### `resetNotifyEndStates` <a name="resetNotifyEndStates" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetNotifyEndStates"></a>

```java
public void resetNotifyEndStates()
```

##### `resetNotifyEndTypes` <a name="resetNotifyEndTypes" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetNotifyEndTypes"></a>

```java
public void resetNotifyEndTypes()
```

##### `resetOneTimeSchedule` <a name="resetOneTimeSchedule" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetOneTimeSchedule"></a>

```java
public void resetOneTimeSchedule()
```

##### `resetRecurringSchedule` <a name="resetRecurringSchedule" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetRecurringSchedule"></a>

```java
public void resetRecurringSchedule()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DowntimeSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.datadog.downtime_schedule.DowntimeSchedule;

DowntimeSchedule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.datadog.downtime_schedule.DowntimeSchedule;

DowntimeSchedule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.datadog.downtime_schedule.DowntimeSchedule;

DowntimeSchedule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.datadog.downtime_schedule.DowntimeSchedule;

DowntimeSchedule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DowntimeSchedule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DowntimeSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DowntimeSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DowntimeSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/downtime_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DowntimeSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.monitorIdentifier">monitorIdentifier</a></code> | <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference">DowntimeScheduleMonitorIdentifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.oneTimeSchedule">oneTimeSchedule</a></code> | <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference">DowntimeScheduleOneTimeScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.recurringSchedule">recurringSchedule</a></code> | <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference">DowntimeScheduleRecurringScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.displayTimezoneInput">displayTimezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.messageInput">messageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.monitorIdentifierInput">monitorIdentifierInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifier">DowntimeScheduleMonitorIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.muteFirstRecoveryNotificationInput">muteFirstRecoveryNotificationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.notifyEndStatesInput">notifyEndStatesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.notifyEndTypesInput">notifyEndTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.oneTimeScheduleInput">oneTimeScheduleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeSchedule">DowntimeScheduleOneTimeSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.recurringScheduleInput">recurringScheduleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringSchedule">DowntimeScheduleRecurringSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.displayTimezone">displayTimezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.muteFirstRecoveryNotification">muteFirstRecoveryNotification</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.notifyEndStates">notifyEndStates</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.notifyEndTypes">notifyEndTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `monitorIdentifier`<sup>Required</sup> <a name="monitorIdentifier" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.monitorIdentifier"></a>

```java
public DowntimeScheduleMonitorIdentifierOutputReference getMonitorIdentifier();
```

- *Type:* <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference">DowntimeScheduleMonitorIdentifierOutputReference</a>

---

##### `oneTimeSchedule`<sup>Required</sup> <a name="oneTimeSchedule" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.oneTimeSchedule"></a>

```java
public DowntimeScheduleOneTimeScheduleOutputReference getOneTimeSchedule();
```

- *Type:* <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference">DowntimeScheduleOneTimeScheduleOutputReference</a>

---

##### `recurringSchedule`<sup>Required</sup> <a name="recurringSchedule" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.recurringSchedule"></a>

```java
public DowntimeScheduleRecurringScheduleOutputReference getRecurringSchedule();
```

- *Type:* <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference">DowntimeScheduleRecurringScheduleOutputReference</a>

---

##### `displayTimezoneInput`<sup>Optional</sup> <a name="displayTimezoneInput" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.displayTimezoneInput"></a>

```java
public java.lang.String getDisplayTimezoneInput();
```

- *Type:* java.lang.String

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.messageInput"></a>

```java
public java.lang.String getMessageInput();
```

- *Type:* java.lang.String

---

##### `monitorIdentifierInput`<sup>Optional</sup> <a name="monitorIdentifierInput" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.monitorIdentifierInput"></a>

```java
public java.lang.Object getMonitorIdentifierInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifier">DowntimeScheduleMonitorIdentifier</a>

---

##### `muteFirstRecoveryNotificationInput`<sup>Optional</sup> <a name="muteFirstRecoveryNotificationInput" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.muteFirstRecoveryNotificationInput"></a>

```java
public java.lang.Object getMuteFirstRecoveryNotificationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `notifyEndStatesInput`<sup>Optional</sup> <a name="notifyEndStatesInput" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.notifyEndStatesInput"></a>

```java
public java.util.List<java.lang.String> getNotifyEndStatesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `notifyEndTypesInput`<sup>Optional</sup> <a name="notifyEndTypesInput" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.notifyEndTypesInput"></a>

```java
public java.util.List<java.lang.String> getNotifyEndTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `oneTimeScheduleInput`<sup>Optional</sup> <a name="oneTimeScheduleInput" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.oneTimeScheduleInput"></a>

```java
public java.lang.Object getOneTimeScheduleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeSchedule">DowntimeScheduleOneTimeSchedule</a>

---

##### `recurringScheduleInput`<sup>Optional</sup> <a name="recurringScheduleInput" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.recurringScheduleInput"></a>

```java
public java.lang.Object getRecurringScheduleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringSchedule">DowntimeScheduleRecurringSchedule</a>

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `displayTimezone`<sup>Required</sup> <a name="displayTimezone" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.displayTimezone"></a>

```java
public java.lang.String getDisplayTimezone();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `muteFirstRecoveryNotification`<sup>Required</sup> <a name="muteFirstRecoveryNotification" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.muteFirstRecoveryNotification"></a>

```java
public java.lang.Object getMuteFirstRecoveryNotification();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `notifyEndStates`<sup>Required</sup> <a name="notifyEndStates" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.notifyEndStates"></a>

```java
public java.util.List<java.lang.String> getNotifyEndStates();
```

- *Type:* java.util.List<java.lang.String>

---

##### `notifyEndTypes`<sup>Required</sup> <a name="notifyEndTypes" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.notifyEndTypes"></a>

```java
public java.util.List<java.lang.String> getNotifyEndTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DowntimeScheduleConfig <a name="DowntimeScheduleConfig" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.downtime_schedule.DowntimeScheduleConfig;

DowntimeScheduleConfig.builder()
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
    .scope(java.lang.String)
//  .displayTimezone(java.lang.String)
//  .message(java.lang.String)
//  .monitorIdentifier(DowntimeScheduleMonitorIdentifier)
//  .muteFirstRecoveryNotification(java.lang.Boolean)
//  .muteFirstRecoveryNotification(IResolvable)
//  .notifyEndStates(java.util.List<java.lang.String>)
//  .notifyEndTypes(java.util.List<java.lang.String>)
//  .oneTimeSchedule(DowntimeScheduleOneTimeSchedule)
//  .recurringSchedule(DowntimeScheduleRecurringSchedule)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.scope">scope</a></code> | <code>java.lang.String</code> | The scope to which the downtime applies. Must follow the [common search syntax](https://docs.datadoghq.com/logs/explorer/search_syntax/). |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.displayTimezone">displayTimezone</a></code> | <code>java.lang.String</code> | The timezone in which to display the downtime's start and end times in Datadog applications. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.message">message</a></code> | <code>java.lang.String</code> | A message to include with notifications for this downtime. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.monitorIdentifier">monitorIdentifier</a></code> | <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifier">DowntimeScheduleMonitorIdentifier</a></code> | monitor_identifier block. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.muteFirstRecoveryNotification">muteFirstRecoveryNotification</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If the first recovery notification during a downtime should be muted. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.notifyEndStates">notifyEndStates</a></code> | <code>java.util.List<java.lang.String></code> | States that will trigger a monitor notification when the `notify_end_types` action occurs. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.notifyEndTypes">notifyEndTypes</a></code> | <code>java.util.List<java.lang.String></code> | Actions that will trigger a monitor notification if the downtime is in the `notify_end_types` state. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.oneTimeSchedule">oneTimeSchedule</a></code> | <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeSchedule">DowntimeScheduleOneTimeSchedule</a></code> | one_time_schedule block. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.recurringSchedule">recurringSchedule</a></code> | <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringSchedule">DowntimeScheduleRecurringSchedule</a></code> | recurring_schedule block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

The scope to which the downtime applies. Must follow the [common search syntax](https://docs.datadoghq.com/logs/explorer/search_syntax/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/downtime_schedule#scope DowntimeSchedule#scope}

---

##### `displayTimezone`<sup>Optional</sup> <a name="displayTimezone" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.displayTimezone"></a>

```java
public java.lang.String getDisplayTimezone();
```

- *Type:* java.lang.String

The timezone in which to display the downtime's start and end times in Datadog applications.

This is not used as an offset for scheduling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/downtime_schedule#display_timezone DowntimeSchedule#display_timezone}

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

A message to include with notifications for this downtime.

Email notifications can be sent to specific users by using the same `@username` notation as events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/downtime_schedule#message DowntimeSchedule#message}

---

##### `monitorIdentifier`<sup>Optional</sup> <a name="monitorIdentifier" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.monitorIdentifier"></a>

```java
public DowntimeScheduleMonitorIdentifier getMonitorIdentifier();
```

- *Type:* <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifier">DowntimeScheduleMonitorIdentifier</a>

monitor_identifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/downtime_schedule#monitor_identifier DowntimeSchedule#monitor_identifier}

---

##### `muteFirstRecoveryNotification`<sup>Optional</sup> <a name="muteFirstRecoveryNotification" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.muteFirstRecoveryNotification"></a>

```java
public java.lang.Object getMuteFirstRecoveryNotification();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If the first recovery notification during a downtime should be muted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/downtime_schedule#mute_first_recovery_notification DowntimeSchedule#mute_first_recovery_notification}

---

##### `notifyEndStates`<sup>Optional</sup> <a name="notifyEndStates" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.notifyEndStates"></a>

```java
public java.util.List<java.lang.String> getNotifyEndStates();
```

- *Type:* java.util.List<java.lang.String>

States that will trigger a monitor notification when the `notify_end_types` action occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/downtime_schedule#notify_end_states DowntimeSchedule#notify_end_states}

---

##### `notifyEndTypes`<sup>Optional</sup> <a name="notifyEndTypes" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.notifyEndTypes"></a>

```java
public java.util.List<java.lang.String> getNotifyEndTypes();
```

- *Type:* java.util.List<java.lang.String>

Actions that will trigger a monitor notification if the downtime is in the `notify_end_types` state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/downtime_schedule#notify_end_types DowntimeSchedule#notify_end_types}

---

##### `oneTimeSchedule`<sup>Optional</sup> <a name="oneTimeSchedule" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.oneTimeSchedule"></a>

```java
public DowntimeScheduleOneTimeSchedule getOneTimeSchedule();
```

- *Type:* <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeSchedule">DowntimeScheduleOneTimeSchedule</a>

one_time_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/downtime_schedule#one_time_schedule DowntimeSchedule#one_time_schedule}

---

##### `recurringSchedule`<sup>Optional</sup> <a name="recurringSchedule" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.recurringSchedule"></a>

```java
public DowntimeScheduleRecurringSchedule getRecurringSchedule();
```

- *Type:* <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringSchedule">DowntimeScheduleRecurringSchedule</a>

recurring_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/downtime_schedule#recurring_schedule DowntimeSchedule#recurring_schedule}

---

### DowntimeScheduleMonitorIdentifier <a name="DowntimeScheduleMonitorIdentifier" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifier.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.downtime_schedule.DowntimeScheduleMonitorIdentifier;

DowntimeScheduleMonitorIdentifier.builder()
//  .monitorId(java.lang.Number)
//  .monitorTags(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifier.property.monitorId">monitorId</a></code> | <code>java.lang.Number</code> | ID of the monitor to prevent notifications. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifier.property.monitorTags">monitorTags</a></code> | <code>java.util.List<java.lang.String></code> | A list of monitor tags. |

---

##### `monitorId`<sup>Optional</sup> <a name="monitorId" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifier.property.monitorId"></a>

```java
public java.lang.Number getMonitorId();
```

- *Type:* java.lang.Number

ID of the monitor to prevent notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/downtime_schedule#monitor_id DowntimeSchedule#monitor_id}

---

##### `monitorTags`<sup>Optional</sup> <a name="monitorTags" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifier.property.monitorTags"></a>

```java
public java.util.List<java.lang.String> getMonitorTags();
```

- *Type:* java.util.List<java.lang.String>

A list of monitor tags.

For example, tags that are applied directly to monitors, not tags that are used in monitor queries (which are filtered by the scope parameter), to which the downtime applies. The resulting downtime applies to monitors that match **all** provided monitor tags. Setting `monitor_tags` to `[*]` configures the downtime to mute all monitors for the given scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/downtime_schedule#monitor_tags DowntimeSchedule#monitor_tags}

---

### DowntimeScheduleOneTimeSchedule <a name="DowntimeScheduleOneTimeSchedule" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.downtime_schedule.DowntimeScheduleOneTimeSchedule;

DowntimeScheduleOneTimeSchedule.builder()
//  .end(java.lang.String)
//  .start(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeSchedule.property.end">end</a></code> | <code>java.lang.String</code> | ISO-8601 Datetime to end the downtime. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeSchedule.property.start">start</a></code> | <code>java.lang.String</code> | ISO-8601 Datetime to start the downtime. |

---

##### `end`<sup>Optional</sup> <a name="end" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeSchedule.property.end"></a>

```java
public java.lang.String getEnd();
```

- *Type:* java.lang.String

ISO-8601 Datetime to end the downtime.

Must include a UTC offset of zero. If not provided, the downtime never ends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/downtime_schedule#end DowntimeSchedule#end}

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeSchedule.property.start"></a>

```java
public java.lang.String getStart();
```

- *Type:* java.lang.String

ISO-8601 Datetime to start the downtime.

Must include a UTC offset of zero. If not provided, the downtime starts the moment it is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/downtime_schedule#start DowntimeSchedule#start}

---

### DowntimeScheduleRecurringSchedule <a name="DowntimeScheduleRecurringSchedule" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.downtime_schedule.DowntimeScheduleRecurringSchedule;

DowntimeScheduleRecurringSchedule.builder()
//  .recurrence(IResolvable)
//  .recurrence(java.util.List<DowntimeScheduleRecurringScheduleRecurrence>)
//  .timezone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringSchedule.property.recurrence">recurrence</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrence">DowntimeScheduleRecurringScheduleRecurrence</a>></code> | recurrence block. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringSchedule.property.timezone">timezone</a></code> | <code>java.lang.String</code> | The timezone in which to schedule the downtime. |

---

##### `recurrence`<sup>Optional</sup> <a name="recurrence" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringSchedule.property.recurrence"></a>

```java
public java.lang.Object getRecurrence();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrence">DowntimeScheduleRecurringScheduleRecurrence</a>>

recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/downtime_schedule#recurrence DowntimeSchedule#recurrence}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringSchedule.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

The timezone in which to schedule the downtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/downtime_schedule#timezone DowntimeSchedule#timezone}

---

### DowntimeScheduleRecurringScheduleRecurrence <a name="DowntimeScheduleRecurringScheduleRecurrence" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrence.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.downtime_schedule.DowntimeScheduleRecurringScheduleRecurrence;

DowntimeScheduleRecurringScheduleRecurrence.builder()
    .duration(java.lang.String)
    .rrule(java.lang.String)
//  .start(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrence.property.duration">duration</a></code> | <code>java.lang.String</code> | The length of the downtime. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrence.property.rrule">rrule</a></code> | <code>java.lang.String</code> | The `RRULE` standard for defining recurring events. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrence.property.start">start</a></code> | <code>java.lang.String</code> | ISO-8601 Datetime to start the downtime. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrence.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

The length of the downtime.

Must begin with an integer and end with one of 'm', 'h', d', or 'w'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/downtime_schedule#duration DowntimeSchedule#duration}

---

##### `rrule`<sup>Required</sup> <a name="rrule" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrence.property.rrule"></a>

```java
public java.lang.String getRrule();
```

- *Type:* java.lang.String

The `RRULE` standard for defining recurring events.

For example, to have a recurring event on the first day of each month, set the type to `rrule` and set the `FREQ` to `MONTHLY` and `BYMONTHDAY` to `1`. Most common `rrule` options from the [iCalendar Spec](https://tools.ietf.org/html/rfc5545) are supported.  **Note**: Attributes specifying the duration in `RRULE` are not supported (for example, `DTSTART`, `DTEND`, `DURATION`). More examples available in this [downtime guide](https://docs.datadoghq.com/monitors/guide/suppress-alert-with-downtimes/?tab=api).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/downtime_schedule#rrule DowntimeSchedule#rrule}

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrence.property.start"></a>

```java
public java.lang.String getStart();
```

- *Type:* java.lang.String

ISO-8601 Datetime to start the downtime.

Must not include a UTC offset. If not provided, the downtime starts the moment it is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/downtime_schedule#start DowntimeSchedule#start}

---

## Classes <a name="Classes" id="Classes"></a>

### DowntimeScheduleMonitorIdentifierOutputReference <a name="DowntimeScheduleMonitorIdentifierOutputReference" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.downtime_schedule.DowntimeScheduleMonitorIdentifierOutputReference;

new DowntimeScheduleMonitorIdentifierOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.resetMonitorId">resetMonitorId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.resetMonitorTags">resetMonitorTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMonitorId` <a name="resetMonitorId" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.resetMonitorId"></a>

```java
public void resetMonitorId()
```

##### `resetMonitorTags` <a name="resetMonitorTags" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.resetMonitorTags"></a>

```java
public void resetMonitorTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.property.monitorIdInput">monitorIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.property.monitorTagsInput">monitorTagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.property.monitorId">monitorId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.property.monitorTags">monitorTags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifier">DowntimeScheduleMonitorIdentifier</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `monitorIdInput`<sup>Optional</sup> <a name="monitorIdInput" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.property.monitorIdInput"></a>

```java
public java.lang.Number getMonitorIdInput();
```

- *Type:* java.lang.Number

---

##### `monitorTagsInput`<sup>Optional</sup> <a name="monitorTagsInput" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.property.monitorTagsInput"></a>

```java
public java.util.List<java.lang.String> getMonitorTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `monitorId`<sup>Required</sup> <a name="monitorId" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.property.monitorId"></a>

```java
public java.lang.Number getMonitorId();
```

- *Type:* java.lang.Number

---

##### `monitorTags`<sup>Required</sup> <a name="monitorTags" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.property.monitorTags"></a>

```java
public java.util.List<java.lang.String> getMonitorTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifier">DowntimeScheduleMonitorIdentifier</a>

---


### DowntimeScheduleOneTimeScheduleOutputReference <a name="DowntimeScheduleOneTimeScheduleOutputReference" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.downtime_schedule.DowntimeScheduleOneTimeScheduleOutputReference;

new DowntimeScheduleOneTimeScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.resetEnd">resetEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.resetStart">resetStart</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnd` <a name="resetEnd" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.resetEnd"></a>

```java
public void resetEnd()
```

##### `resetStart` <a name="resetStart" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.resetStart"></a>

```java
public void resetStart()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.property.endInput">endInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.property.startInput">startInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.property.end">end</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.property.start">start</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeSchedule">DowntimeScheduleOneTimeSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.property.endInput"></a>

```java
public java.lang.String getEndInput();
```

- *Type:* java.lang.String

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.property.startInput"></a>

```java
public java.lang.String getStartInput();
```

- *Type:* java.lang.String

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.property.end"></a>

```java
public java.lang.String getEnd();
```

- *Type:* java.lang.String

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.property.start"></a>

```java
public java.lang.String getStart();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeSchedule">DowntimeScheduleOneTimeSchedule</a>

---


### DowntimeScheduleRecurringScheduleOutputReference <a name="DowntimeScheduleRecurringScheduleOutputReference" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.downtime_schedule.DowntimeScheduleRecurringScheduleOutputReference;

new DowntimeScheduleRecurringScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.putRecurrence">putRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.resetRecurrence">resetRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.resetTimezone">resetTimezone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRecurrence` <a name="putRecurrence" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.putRecurrence"></a>

```java
public void putRecurrence(IResolvable OR java.util.List<DowntimeScheduleRecurringScheduleRecurrence> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.putRecurrence.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrence">DowntimeScheduleRecurringScheduleRecurrence</a>>

---

##### `resetRecurrence` <a name="resetRecurrence" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.resetRecurrence"></a>

```java
public void resetRecurrence()
```

##### `resetTimezone` <a name="resetTimezone" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.resetTimezone"></a>

```java
public void resetTimezone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.property.recurrence">recurrence</a></code> | <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList">DowntimeScheduleRecurringScheduleRecurrenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.property.recurrenceInput">recurrenceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrence">DowntimeScheduleRecurringScheduleRecurrence</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.property.timezoneInput">timezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.property.timezone">timezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringSchedule">DowntimeScheduleRecurringSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.property.recurrence"></a>

```java
public DowntimeScheduleRecurringScheduleRecurrenceList getRecurrence();
```

- *Type:* <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList">DowntimeScheduleRecurringScheduleRecurrenceList</a>

---

##### `recurrenceInput`<sup>Optional</sup> <a name="recurrenceInput" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.property.recurrenceInput"></a>

```java
public java.lang.Object getRecurrenceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrence">DowntimeScheduleRecurringScheduleRecurrence</a>>

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.property.timezoneInput"></a>

```java
public java.lang.String getTimezoneInput();
```

- *Type:* java.lang.String

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringSchedule">DowntimeScheduleRecurringSchedule</a>

---


### DowntimeScheduleRecurringScheduleRecurrenceList <a name="DowntimeScheduleRecurringScheduleRecurrenceList" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.downtime_schedule.DowntimeScheduleRecurringScheduleRecurrenceList;

new DowntimeScheduleRecurringScheduleRecurrenceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.get"></a>

```java
public DowntimeScheduleRecurringScheduleRecurrenceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrence">DowntimeScheduleRecurringScheduleRecurrence</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrence">DowntimeScheduleRecurringScheduleRecurrence</a>>

---


### DowntimeScheduleRecurringScheduleRecurrenceOutputReference <a name="DowntimeScheduleRecurringScheduleRecurrenceOutputReference" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.downtime_schedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference;

new DowntimeScheduleRecurringScheduleRecurrenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.resetStart">resetStart</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStart` <a name="resetStart" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.resetStart"></a>

```java
public void resetStart()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.durationInput">durationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.rruleInput">rruleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.startInput">startInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.duration">duration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.rrule">rrule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.start">start</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrence">DowntimeScheduleRecurringScheduleRecurrence</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.durationInput"></a>

```java
public java.lang.String getDurationInput();
```

- *Type:* java.lang.String

---

##### `rruleInput`<sup>Optional</sup> <a name="rruleInput" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.rruleInput"></a>

```java
public java.lang.String getRruleInput();
```

- *Type:* java.lang.String

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.startInput"></a>

```java
public java.lang.String getStartInput();
```

- *Type:* java.lang.String

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

---

##### `rrule`<sup>Required</sup> <a name="rrule" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.rrule"></a>

```java
public java.lang.String getRrule();
```

- *Type:* java.lang.String

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.start"></a>

```java
public java.lang.String getStart();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrence">DowntimeScheduleRecurringScheduleRecurrence</a>

---



