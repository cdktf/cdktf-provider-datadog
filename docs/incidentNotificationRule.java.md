# `incidentNotificationRule` Submodule <a name="`incidentNotificationRule` Submodule" id="@cdktf/provider-datadog.incidentNotificationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IncidentNotificationRule <a name="IncidentNotificationRule" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/incident_notification_rule datadog_incident_notification_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.incident_notification_rule.IncidentNotificationRule;

IncidentNotificationRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .handles(java.util.List<java.lang.String>)
    .incidentType(java.lang.String)
    .trigger(java.lang.String)
//  .conditions(IResolvable|java.util.List<IncidentNotificationRuleConditions>)
//  .enabled(java.lang.Boolean|IResolvable)
//  .notificationTemplate(java.lang.String)
//  .renotifyOn(java.util.List<java.lang.String>)
//  .visibility(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.handles">handles</a></code> | <code>java.util.List<java.lang.String></code> | The notification handles (targets) for this rule. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.incidentType">incidentType</a></code> | <code>java.lang.String</code> | The ID of the incident type this notification rule is associated with. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.trigger">trigger</a></code> | <code>java.lang.String</code> | The trigger event for this notification rule. Valid values are: incident_created_trigger, incident_saved_trigger. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.conditions">conditions</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions">IncidentNotificationRuleConditions</a>></code> | conditions block. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether the notification rule is enabled. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.notificationTemplate">notificationTemplate</a></code> | <code>java.lang.String</code> | The ID of the notification template to use for this rule. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.renotifyOn">renotifyOn</a></code> | <code>java.util.List<java.lang.String></code> | List of incident fields that trigger re-notification when changed. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.visibility">visibility</a></code> | <code>java.lang.String</code> | The visibility of the notification rule. Valid values are: all, organization, private. Defaults to organization. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `handles`<sup>Required</sup> <a name="handles" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.handles"></a>

- *Type:* java.util.List<java.lang.String>

The notification handles (targets) for this rule.

Examples:

---

##### `incidentType`<sup>Required</sup> <a name="incidentType" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.incidentType"></a>

- *Type:* java.lang.String

The ID of the incident type this notification rule is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/incident_notification_rule#incident_type IncidentNotificationRule#incident_type}

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.trigger"></a>

- *Type:* java.lang.String

The trigger event for this notification rule. Valid values are: incident_created_trigger, incident_saved_trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/incident_notification_rule#trigger IncidentNotificationRule#trigger}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.conditions"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions">IncidentNotificationRuleConditions</a>>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/incident_notification_rule#conditions IncidentNotificationRule#conditions}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether the notification rule is enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/incident_notification_rule#enabled IncidentNotificationRule#enabled}

---

##### `notificationTemplate`<sup>Optional</sup> <a name="notificationTemplate" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.notificationTemplate"></a>

- *Type:* java.lang.String

The ID of the notification template to use for this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/incident_notification_rule#notification_template IncidentNotificationRule#notification_template}

---

##### `renotifyOn`<sup>Optional</sup> <a name="renotifyOn" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.renotifyOn"></a>

- *Type:* java.util.List<java.lang.String>

List of incident fields that trigger re-notification when changed.

Valid values are: status, severity, customer_impact, title, description, detected, root_cause, services, state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/incident_notification_rule#renotify_on IncidentNotificationRule#renotify_on}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.visibility"></a>

- *Type:* java.lang.String

The visibility of the notification rule. Valid values are: all, organization, private. Defaults to organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/incident_notification_rule#visibility IncidentNotificationRule#visibility}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetConditions">resetConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetNotificationTemplate">resetNotificationTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetRenotifyOn">resetRenotifyOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetVisibility">resetVisibility</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConditions` <a name="putConditions" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.putConditions"></a>

```java
public void putConditions(IResolvable|java.util.List<IncidentNotificationRuleConditions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.putConditions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions">IncidentNotificationRuleConditions</a>>

---

##### `resetConditions` <a name="resetConditions" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetConditions"></a>

```java
public void resetConditions()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetNotificationTemplate` <a name="resetNotificationTemplate" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetNotificationTemplate"></a>

```java
public void resetNotificationTemplate()
```

##### `resetRenotifyOn` <a name="resetRenotifyOn" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetRenotifyOn"></a>

```java
public void resetRenotifyOn()
```

##### `resetVisibility` <a name="resetVisibility" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetVisibility"></a>

```java
public void resetVisibility()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IncidentNotificationRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.datadog.incident_notification_rule.IncidentNotificationRule;

IncidentNotificationRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.datadog.incident_notification_rule.IncidentNotificationRule;

IncidentNotificationRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.datadog.incident_notification_rule.IncidentNotificationRule;

IncidentNotificationRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.datadog.incident_notification_rule.IncidentNotificationRule;

IncidentNotificationRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IncidentNotificationRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IncidentNotificationRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IncidentNotificationRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IncidentNotificationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/incident_notification_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IncidentNotificationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList">IncidentNotificationRuleConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.modified">modified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.conditionsInput">conditionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions">IncidentNotificationRuleConditions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.handlesInput">handlesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.incidentTypeInput">incidentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.notificationTemplateInput">notificationTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.renotifyOnInput">renotifyOnInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.triggerInput">triggerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.visibilityInput">visibilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.handles">handles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.incidentType">incidentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.notificationTemplate">notificationTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.renotifyOn">renotifyOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.trigger">trigger</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.visibility">visibility</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.conditions"></a>

```java
public IncidentNotificationRuleConditionsList getConditions();
```

- *Type:* <a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList">IncidentNotificationRuleConditionsList</a>

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `modified`<sup>Required</sup> <a name="modified" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.modified"></a>

```java
public java.lang.String getModified();
```

- *Type:* java.lang.String

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.conditionsInput"></a>

```java
public IResolvable|java.util.List<IncidentNotificationRuleConditions> getConditionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions">IncidentNotificationRuleConditions</a>>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `handlesInput`<sup>Optional</sup> <a name="handlesInput" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.handlesInput"></a>

```java
public java.util.List<java.lang.String> getHandlesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `incidentTypeInput`<sup>Optional</sup> <a name="incidentTypeInput" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.incidentTypeInput"></a>

```java
public java.lang.String getIncidentTypeInput();
```

- *Type:* java.lang.String

---

##### `notificationTemplateInput`<sup>Optional</sup> <a name="notificationTemplateInput" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.notificationTemplateInput"></a>

```java
public java.lang.String getNotificationTemplateInput();
```

- *Type:* java.lang.String

---

##### `renotifyOnInput`<sup>Optional</sup> <a name="renotifyOnInput" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.renotifyOnInput"></a>

```java
public java.util.List<java.lang.String> getRenotifyOnInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `triggerInput`<sup>Optional</sup> <a name="triggerInput" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.triggerInput"></a>

```java
public java.lang.String getTriggerInput();
```

- *Type:* java.lang.String

---

##### `visibilityInput`<sup>Optional</sup> <a name="visibilityInput" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.visibilityInput"></a>

```java
public java.lang.String getVisibilityInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `handles`<sup>Required</sup> <a name="handles" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.handles"></a>

```java
public java.util.List<java.lang.String> getHandles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `incidentType`<sup>Required</sup> <a name="incidentType" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.incidentType"></a>

```java
public java.lang.String getIncidentType();
```

- *Type:* java.lang.String

---

##### `notificationTemplate`<sup>Required</sup> <a name="notificationTemplate" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.notificationTemplate"></a>

```java
public java.lang.String getNotificationTemplate();
```

- *Type:* java.lang.String

---

##### `renotifyOn`<sup>Required</sup> <a name="renotifyOn" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.renotifyOn"></a>

```java
public java.util.List<java.lang.String> getRenotifyOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.trigger"></a>

```java
public java.lang.String getTrigger();
```

- *Type:* java.lang.String

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.visibility"></a>

```java
public java.lang.String getVisibility();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IncidentNotificationRuleConditions <a name="IncidentNotificationRuleConditions" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.incident_notification_rule.IncidentNotificationRuleConditions;

IncidentNotificationRuleConditions.builder()
    .field(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions.property.field">field</a></code> | <code>java.lang.String</code> | The incident field to evaluate. Common values include: state, severity, services, teams. Custom fields are also supported. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | The value(s) to compare against. Multiple values are ORed together. |

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

The incident field to evaluate. Common values include: state, severity, services, teams. Custom fields are also supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/incident_notification_rule#field IncidentNotificationRule#field}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

The value(s) to compare against. Multiple values are ORed together.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/incident_notification_rule#values IncidentNotificationRule#values}

---

### IncidentNotificationRuleConfig <a name="IncidentNotificationRuleConfig" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.incident_notification_rule.IncidentNotificationRuleConfig;

IncidentNotificationRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .handles(java.util.List<java.lang.String>)
    .incidentType(java.lang.String)
    .trigger(java.lang.String)
//  .conditions(IResolvable|java.util.List<IncidentNotificationRuleConditions>)
//  .enabled(java.lang.Boolean|IResolvable)
//  .notificationTemplate(java.lang.String)
//  .renotifyOn(java.util.List<java.lang.String>)
//  .visibility(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.handles">handles</a></code> | <code>java.util.List<java.lang.String></code> | The notification handles (targets) for this rule. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.incidentType">incidentType</a></code> | <code>java.lang.String</code> | The ID of the incident type this notification rule is associated with. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.trigger">trigger</a></code> | <code>java.lang.String</code> | The trigger event for this notification rule. Valid values are: incident_created_trigger, incident_saved_trigger. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.conditions">conditions</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions">IncidentNotificationRuleConditions</a>></code> | conditions block. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether the notification rule is enabled. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.notificationTemplate">notificationTemplate</a></code> | <code>java.lang.String</code> | The ID of the notification template to use for this rule. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.renotifyOn">renotifyOn</a></code> | <code>java.util.List<java.lang.String></code> | List of incident fields that trigger re-notification when changed. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.visibility">visibility</a></code> | <code>java.lang.String</code> | The visibility of the notification rule. Valid values are: all, organization, private. Defaults to organization. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `handles`<sup>Required</sup> <a name="handles" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.handles"></a>

```java
public java.util.List<java.lang.String> getHandles();
```

- *Type:* java.util.List<java.lang.String>

The notification handles (targets) for this rule.

Examples:

---

##### `incidentType`<sup>Required</sup> <a name="incidentType" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.incidentType"></a>

```java
public java.lang.String getIncidentType();
```

- *Type:* java.lang.String

The ID of the incident type this notification rule is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/incident_notification_rule#incident_type IncidentNotificationRule#incident_type}

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.trigger"></a>

```java
public java.lang.String getTrigger();
```

- *Type:* java.lang.String

The trigger event for this notification rule. Valid values are: incident_created_trigger, incident_saved_trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/incident_notification_rule#trigger IncidentNotificationRule#trigger}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.conditions"></a>

```java
public IResolvable|java.util.List<IncidentNotificationRuleConditions> getConditions();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions">IncidentNotificationRuleConditions</a>>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/incident_notification_rule#conditions IncidentNotificationRule#conditions}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether the notification rule is enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/incident_notification_rule#enabled IncidentNotificationRule#enabled}

---

##### `notificationTemplate`<sup>Optional</sup> <a name="notificationTemplate" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.notificationTemplate"></a>

```java
public java.lang.String getNotificationTemplate();
```

- *Type:* java.lang.String

The ID of the notification template to use for this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/incident_notification_rule#notification_template IncidentNotificationRule#notification_template}

---

##### `renotifyOn`<sup>Optional</sup> <a name="renotifyOn" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.renotifyOn"></a>

```java
public java.util.List<java.lang.String> getRenotifyOn();
```

- *Type:* java.util.List<java.lang.String>

List of incident fields that trigger re-notification when changed.

Valid values are: status, severity, customer_impact, title, description, detected, root_cause, services, state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/incident_notification_rule#renotify_on IncidentNotificationRule#renotify_on}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.visibility"></a>

```java
public java.lang.String getVisibility();
```

- *Type:* java.lang.String

The visibility of the notification rule. Valid values are: all, organization, private. Defaults to organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/incident_notification_rule#visibility IncidentNotificationRule#visibility}

---

## Classes <a name="Classes" id="Classes"></a>

### IncidentNotificationRuleConditionsList <a name="IncidentNotificationRuleConditionsList" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.incident_notification_rule.IncidentNotificationRuleConditionsList;

new IncidentNotificationRuleConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.get"></a>

```java
public IncidentNotificationRuleConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions">IncidentNotificationRuleConditions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IncidentNotificationRuleConditions> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions">IncidentNotificationRuleConditions</a>>

---


### IncidentNotificationRuleConditionsOutputReference <a name="IncidentNotificationRuleConditionsOutputReference" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.incident_notification_rule.IncidentNotificationRuleConditionsOutputReference;

new IncidentNotificationRuleConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.fieldInput">fieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.field">field</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions">IncidentNotificationRuleConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.fieldInput"></a>

```java
public java.lang.String getFieldInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.internalValue"></a>

```java
public IResolvable|IncidentNotificationRuleConditions getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions">IncidentNotificationRuleConditions</a>

---



