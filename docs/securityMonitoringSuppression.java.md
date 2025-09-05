# `securityMonitoringSuppression` Submodule <a name="`securityMonitoringSuppression` Submodule" id="@cdktf/provider-datadog.securityMonitoringSuppression"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityMonitoringSuppression <a name="SecurityMonitoringSuppression" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/security_monitoring_suppression datadog_security_monitoring_suppression}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_suppression.SecurityMonitoringSuppression;

SecurityMonitoringSuppression.Builder.create(Construct scope, java.lang.String id)
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
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .name(java.lang.String)
    .ruleQuery(java.lang.String)
//  .dataExclusionQuery(java.lang.String)
//  .description(java.lang.String)
//  .expirationDate(java.lang.String)
//  .startDate(java.lang.String)
//  .suppressionQuery(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the suppression rule is enabled. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the suppression rule. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.ruleQuery">ruleQuery</a></code> | <code>java.lang.String</code> | The rule query of the suppression rule, with the same syntax as the search bar for detection rules. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.dataExclusionQuery">dataExclusionQuery</a></code> | <code>java.lang.String</code> | An exclusion query on the input data of the security rules, which could be logs, Agent events, or other types of data based on the security rule. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description for the suppression rule. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.expirationDate">expirationDate</a></code> | <code>java.lang.String</code> | A RFC3339 timestamp giving an expiration date for the suppression rule. After this date, it won't suppress signals anymore. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.startDate">startDate</a></code> | <code>java.lang.String</code> | A RFC3339 timestamp giving a start date for the suppression rule. Before this date, it doesn't suppress signals. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.suppressionQuery">suppressionQuery</a></code> | <code>java.lang.String</code> | The suppression query of the suppression rule. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the suppression rule is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/security_monitoring_suppression#enabled SecurityMonitoringSuppression#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the suppression rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/security_monitoring_suppression#name SecurityMonitoringSuppression#name}

---

##### `ruleQuery`<sup>Required</sup> <a name="ruleQuery" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.ruleQuery"></a>

- *Type:* java.lang.String

The rule query of the suppression rule, with the same syntax as the search bar for detection rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/security_monitoring_suppression#rule_query SecurityMonitoringSuppression#rule_query}

---

##### `dataExclusionQuery`<sup>Optional</sup> <a name="dataExclusionQuery" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.dataExclusionQuery"></a>

- *Type:* java.lang.String

An exclusion query on the input data of the security rules, which could be logs, Agent events, or other types of data based on the security rule.

Events matching this query are ignored by any detection rules referenced in the suppression rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/security_monitoring_suppression#data_exclusion_query SecurityMonitoringSuppression#data_exclusion_query}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description for the suppression rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/security_monitoring_suppression#description SecurityMonitoringSuppression#description}

---

##### `expirationDate`<sup>Optional</sup> <a name="expirationDate" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.expirationDate"></a>

- *Type:* java.lang.String

A RFC3339 timestamp giving an expiration date for the suppression rule. After this date, it won't suppress signals anymore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/security_monitoring_suppression#expiration_date SecurityMonitoringSuppression#expiration_date}

---

##### `startDate`<sup>Optional</sup> <a name="startDate" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.startDate"></a>

- *Type:* java.lang.String

A RFC3339 timestamp giving a start date for the suppression rule. Before this date, it doesn't suppress signals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/security_monitoring_suppression#start_date SecurityMonitoringSuppression#start_date}

---

##### `suppressionQuery`<sup>Optional</sup> <a name="suppressionQuery" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.suppressionQuery"></a>

- *Type:* java.lang.String

The suppression query of the suppression rule.

If a signal matches this query, it is suppressed and is not triggered. It uses the same syntax as the queries to search signals in the Signals Explorer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/security_monitoring_suppression#suppression_query SecurityMonitoringSuppression#suppression_query}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.resetDataExclusionQuery">resetDataExclusionQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.resetExpirationDate">resetExpirationDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.resetStartDate">resetStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.resetSuppressionQuery">resetSuppressionQuery</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDataExclusionQuery` <a name="resetDataExclusionQuery" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.resetDataExclusionQuery"></a>

```java
public void resetDataExclusionQuery()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExpirationDate` <a name="resetExpirationDate" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.resetExpirationDate"></a>

```java
public void resetExpirationDate()
```

##### `resetStartDate` <a name="resetStartDate" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.resetStartDate"></a>

```java
public void resetStartDate()
```

##### `resetSuppressionQuery` <a name="resetSuppressionQuery" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.resetSuppressionQuery"></a>

```java
public void resetSuppressionQuery()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SecurityMonitoringSuppression resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_suppression.SecurityMonitoringSuppression;

SecurityMonitoringSuppression.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_suppression.SecurityMonitoringSuppression;

SecurityMonitoringSuppression.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_suppression.SecurityMonitoringSuppression;

SecurityMonitoringSuppression.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_suppression.SecurityMonitoringSuppression;

SecurityMonitoringSuppression.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SecurityMonitoringSuppression.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SecurityMonitoringSuppression resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SecurityMonitoringSuppression to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SecurityMonitoringSuppression that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/security_monitoring_suppression#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SecurityMonitoringSuppression to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.dataExclusionQueryInput">dataExclusionQueryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.expirationDateInput">expirationDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.ruleQueryInput">ruleQueryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.startDateInput">startDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.suppressionQueryInput">suppressionQueryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.dataExclusionQuery">dataExclusionQuery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.expirationDate">expirationDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.ruleQuery">ruleQuery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.startDate">startDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.suppressionQuery">suppressionQuery</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `dataExclusionQueryInput`<sup>Optional</sup> <a name="dataExclusionQueryInput" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.dataExclusionQueryInput"></a>

```java
public java.lang.String getDataExclusionQueryInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `expirationDateInput`<sup>Optional</sup> <a name="expirationDateInput" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.expirationDateInput"></a>

```java
public java.lang.String getExpirationDateInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ruleQueryInput`<sup>Optional</sup> <a name="ruleQueryInput" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.ruleQueryInput"></a>

```java
public java.lang.String getRuleQueryInput();
```

- *Type:* java.lang.String

---

##### `startDateInput`<sup>Optional</sup> <a name="startDateInput" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.startDateInput"></a>

```java
public java.lang.String getStartDateInput();
```

- *Type:* java.lang.String

---

##### `suppressionQueryInput`<sup>Optional</sup> <a name="suppressionQueryInput" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.suppressionQueryInput"></a>

```java
public java.lang.String getSuppressionQueryInput();
```

- *Type:* java.lang.String

---

##### `dataExclusionQuery`<sup>Required</sup> <a name="dataExclusionQuery" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.dataExclusionQuery"></a>

```java
public java.lang.String getDataExclusionQuery();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `expirationDate`<sup>Required</sup> <a name="expirationDate" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.expirationDate"></a>

```java
public java.lang.String getExpirationDate();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ruleQuery`<sup>Required</sup> <a name="ruleQuery" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.ruleQuery"></a>

```java
public java.lang.String getRuleQuery();
```

- *Type:* java.lang.String

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.startDate"></a>

```java
public java.lang.String getStartDate();
```

- *Type:* java.lang.String

---

##### `suppressionQuery`<sup>Required</sup> <a name="suppressionQuery" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.suppressionQuery"></a>

```java
public java.lang.String getSuppressionQuery();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityMonitoringSuppressionConfig <a name="SecurityMonitoringSuppressionConfig" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_suppression.SecurityMonitoringSuppressionConfig;

SecurityMonitoringSuppressionConfig.builder()
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
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .name(java.lang.String)
    .ruleQuery(java.lang.String)
//  .dataExclusionQuery(java.lang.String)
//  .description(java.lang.String)
//  .expirationDate(java.lang.String)
//  .startDate(java.lang.String)
//  .suppressionQuery(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the suppression rule is enabled. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the suppression rule. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.ruleQuery">ruleQuery</a></code> | <code>java.lang.String</code> | The rule query of the suppression rule, with the same syntax as the search bar for detection rules. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.dataExclusionQuery">dataExclusionQuery</a></code> | <code>java.lang.String</code> | An exclusion query on the input data of the security rules, which could be logs, Agent events, or other types of data based on the security rule. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description for the suppression rule. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.expirationDate">expirationDate</a></code> | <code>java.lang.String</code> | A RFC3339 timestamp giving an expiration date for the suppression rule. After this date, it won't suppress signals anymore. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.startDate">startDate</a></code> | <code>java.lang.String</code> | A RFC3339 timestamp giving a start date for the suppression rule. Before this date, it doesn't suppress signals. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.suppressionQuery">suppressionQuery</a></code> | <code>java.lang.String</code> | The suppression query of the suppression rule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the suppression rule is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/security_monitoring_suppression#enabled SecurityMonitoringSuppression#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the suppression rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/security_monitoring_suppression#name SecurityMonitoringSuppression#name}

---

##### `ruleQuery`<sup>Required</sup> <a name="ruleQuery" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.ruleQuery"></a>

```java
public java.lang.String getRuleQuery();
```

- *Type:* java.lang.String

The rule query of the suppression rule, with the same syntax as the search bar for detection rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/security_monitoring_suppression#rule_query SecurityMonitoringSuppression#rule_query}

---

##### `dataExclusionQuery`<sup>Optional</sup> <a name="dataExclusionQuery" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.dataExclusionQuery"></a>

```java
public java.lang.String getDataExclusionQuery();
```

- *Type:* java.lang.String

An exclusion query on the input data of the security rules, which could be logs, Agent events, or other types of data based on the security rule.

Events matching this query are ignored by any detection rules referenced in the suppression rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/security_monitoring_suppression#data_exclusion_query SecurityMonitoringSuppression#data_exclusion_query}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description for the suppression rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/security_monitoring_suppression#description SecurityMonitoringSuppression#description}

---

##### `expirationDate`<sup>Optional</sup> <a name="expirationDate" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.expirationDate"></a>

```java
public java.lang.String getExpirationDate();
```

- *Type:* java.lang.String

A RFC3339 timestamp giving an expiration date for the suppression rule. After this date, it won't suppress signals anymore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/security_monitoring_suppression#expiration_date SecurityMonitoringSuppression#expiration_date}

---

##### `startDate`<sup>Optional</sup> <a name="startDate" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.startDate"></a>

```java
public java.lang.String getStartDate();
```

- *Type:* java.lang.String

A RFC3339 timestamp giving a start date for the suppression rule. Before this date, it doesn't suppress signals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/security_monitoring_suppression#start_date SecurityMonitoringSuppression#start_date}

---

##### `suppressionQuery`<sup>Optional</sup> <a name="suppressionQuery" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.suppressionQuery"></a>

```java
public java.lang.String getSuppressionQuery();
```

- *Type:* java.lang.String

The suppression query of the suppression rule.

If a signal matches this query, it is suppressed and is not triggered. It uses the same syntax as the queries to search signals in the Signals Explorer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/security_monitoring_suppression#suppression_query SecurityMonitoringSuppression#suppression_query}

---



