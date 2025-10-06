# `securityMonitoringDefaultRule` Submodule <a name="`securityMonitoringDefaultRule` Submodule" id="@cdktf/provider-datadog.securityMonitoringDefaultRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityMonitoringDefaultRule <a name="SecurityMonitoringDefaultRule" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_default_rule datadog_security_monitoring_default_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_default_rule.SecurityMonitoringDefaultRule;

SecurityMonitoringDefaultRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .case(IResolvable|java.util.List<SecurityMonitoringDefaultRuleCase>)
//  .customMessage(java.lang.String)
//  .customName(java.lang.String)
//  .customTags(java.util.List<java.lang.String>)
//  .enabled(java.lang.Boolean|IResolvable)
//  .filter(IResolvable|java.util.List<SecurityMonitoringDefaultRuleFilter>)
//  .id(java.lang.String)
//  .options(SecurityMonitoringDefaultRuleOptions)
//  .query(IResolvable|java.util.List<SecurityMonitoringDefaultRuleQuery>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.case">case</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCase">SecurityMonitoringDefaultRuleCase</a>></code> | case block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.customMessage">customMessage</a></code> | <code>java.lang.String</code> | Custom Message (will override default message) for generated signals. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.customName">customName</a></code> | <code>java.lang.String</code> | The name (will override default name) of the rule. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.customTags">customTags</a></code> | <code>java.util.List<java.lang.String></code> | Custom tags for generated signals. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable the rule. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilter">SecurityMonitoringDefaultRuleFilter</a>></code> | filter block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_default_rule#id SecurityMonitoringDefaultRule#id}. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.options">options</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptions">SecurityMonitoringDefaultRuleOptions</a></code> | options block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.query">query</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery">SecurityMonitoringDefaultRuleQuery</a>></code> | query block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `case`<sup>Optional</sup> <a name="case" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.case"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCase">SecurityMonitoringDefaultRuleCase</a>>

case block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_default_rule#case SecurityMonitoringDefaultRule#case}

---

##### `customMessage`<sup>Optional</sup> <a name="customMessage" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.customMessage"></a>

- *Type:* java.lang.String

Custom Message (will override default message) for generated signals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_default_rule#custom_message SecurityMonitoringDefaultRule#custom_message}

---

##### `customName`<sup>Optional</sup> <a name="customName" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.customName"></a>

- *Type:* java.lang.String

The name (will override default name) of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_default_rule#custom_name SecurityMonitoringDefaultRule#custom_name}

---

##### `customTags`<sup>Optional</sup> <a name="customTags" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.customTags"></a>

- *Type:* java.util.List<java.lang.String>

Custom tags for generated signals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_default_rule#custom_tags SecurityMonitoringDefaultRule#custom_tags}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable the rule. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_default_rule#enabled SecurityMonitoringDefaultRule#enabled}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilter">SecurityMonitoringDefaultRuleFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_default_rule#filter SecurityMonitoringDefaultRule#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_default_rule#id SecurityMonitoringDefaultRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.options"></a>

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptions">SecurityMonitoringDefaultRuleOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_default_rule#options SecurityMonitoringDefaultRule#options}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.query"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery">SecurityMonitoringDefaultRuleQuery</a>>

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_default_rule#query SecurityMonitoringDefaultRule#query}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.putCase">putCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.putOptions">putOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.putQuery">putQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetCase">resetCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetCustomMessage">resetCustomMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetCustomName">resetCustomName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetCustomTags">resetCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetQuery">resetQuery</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCase` <a name="putCase" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.putCase"></a>

```java
public void putCase(IResolvable|java.util.List<SecurityMonitoringDefaultRuleCase> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.putCase.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCase">SecurityMonitoringDefaultRuleCase</a>>

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.putFilter"></a>

```java
public void putFilter(IResolvable|java.util.List<SecurityMonitoringDefaultRuleFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilter">SecurityMonitoringDefaultRuleFilter</a>>

---

##### `putOptions` <a name="putOptions" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.putOptions"></a>

```java
public void putOptions(SecurityMonitoringDefaultRuleOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptions">SecurityMonitoringDefaultRuleOptions</a>

---

##### `putQuery` <a name="putQuery" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.putQuery"></a>

```java
public void putQuery(IResolvable|java.util.List<SecurityMonitoringDefaultRuleQuery> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.putQuery.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery">SecurityMonitoringDefaultRuleQuery</a>>

---

##### `resetCase` <a name="resetCase" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetCase"></a>

```java
public void resetCase()
```

##### `resetCustomMessage` <a name="resetCustomMessage" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetCustomMessage"></a>

```java
public void resetCustomMessage()
```

##### `resetCustomName` <a name="resetCustomName" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetCustomName"></a>

```java
public void resetCustomName()
```

##### `resetCustomTags` <a name="resetCustomTags" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetCustomTags"></a>

```java
public void resetCustomTags()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetId"></a>

```java
public void resetId()
```

##### `resetOptions` <a name="resetOptions" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetOptions"></a>

```java
public void resetOptions()
```

##### `resetQuery` <a name="resetQuery" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetQuery"></a>

```java
public void resetQuery()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SecurityMonitoringDefaultRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_default_rule.SecurityMonitoringDefaultRule;

SecurityMonitoringDefaultRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_default_rule.SecurityMonitoringDefaultRule;

SecurityMonitoringDefaultRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_default_rule.SecurityMonitoringDefaultRule;

SecurityMonitoringDefaultRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_default_rule.SecurityMonitoringDefaultRule;

SecurityMonitoringDefaultRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SecurityMonitoringDefaultRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SecurityMonitoringDefaultRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SecurityMonitoringDefaultRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SecurityMonitoringDefaultRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_default_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SecurityMonitoringDefaultRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.case">case</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList">SecurityMonitoringDefaultRuleCaseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList">SecurityMonitoringDefaultRuleFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.options">options</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference">SecurityMonitoringDefaultRuleOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.query">query</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList">SecurityMonitoringDefaultRuleQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.caseInput">caseInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCase">SecurityMonitoringDefaultRuleCase</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.customMessageInput">customMessageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.customNameInput">customNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.customTagsInput">customTagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilter">SecurityMonitoringDefaultRuleFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.optionsInput">optionsInput</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptions">SecurityMonitoringDefaultRuleOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.queryInput">queryInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery">SecurityMonitoringDefaultRuleQuery</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.customMessage">customMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.customName">customName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.customTags">customTags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `case`<sup>Required</sup> <a name="case" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.case"></a>

```java
public SecurityMonitoringDefaultRuleCaseList getCase();
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList">SecurityMonitoringDefaultRuleCaseList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.filter"></a>

```java
public SecurityMonitoringDefaultRuleFilterList getFilter();
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList">SecurityMonitoringDefaultRuleFilterList</a>

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.options"></a>

```java
public SecurityMonitoringDefaultRuleOptionsOutputReference getOptions();
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference">SecurityMonitoringDefaultRuleOptionsOutputReference</a>

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.query"></a>

```java
public SecurityMonitoringDefaultRuleQueryList getQuery();
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList">SecurityMonitoringDefaultRuleQueryList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `caseInput`<sup>Optional</sup> <a name="caseInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.caseInput"></a>

```java
public IResolvable|java.util.List<SecurityMonitoringDefaultRuleCase> getCaseInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCase">SecurityMonitoringDefaultRuleCase</a>>

---

##### `customMessageInput`<sup>Optional</sup> <a name="customMessageInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.customMessageInput"></a>

```java
public java.lang.String getCustomMessageInput();
```

- *Type:* java.lang.String

---

##### `customNameInput`<sup>Optional</sup> <a name="customNameInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.customNameInput"></a>

```java
public java.lang.String getCustomNameInput();
```

- *Type:* java.lang.String

---

##### `customTagsInput`<sup>Optional</sup> <a name="customTagsInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.customTagsInput"></a>

```java
public java.util.List<java.lang.String> getCustomTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.filterInput"></a>

```java
public IResolvable|java.util.List<SecurityMonitoringDefaultRuleFilter> getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilter">SecurityMonitoringDefaultRuleFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.optionsInput"></a>

```java
public SecurityMonitoringDefaultRuleOptions getOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptions">SecurityMonitoringDefaultRuleOptions</a>

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.queryInput"></a>

```java
public IResolvable|java.util.List<SecurityMonitoringDefaultRuleQuery> getQueryInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery">SecurityMonitoringDefaultRuleQuery</a>>

---

##### `customMessage`<sup>Required</sup> <a name="customMessage" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.customMessage"></a>

```java
public java.lang.String getCustomMessage();
```

- *Type:* java.lang.String

---

##### `customName`<sup>Required</sup> <a name="customName" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.customName"></a>

```java
public java.lang.String getCustomName();
```

- *Type:* java.lang.String

---

##### `customTags`<sup>Required</sup> <a name="customTags" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.customTags"></a>

```java
public java.util.List<java.lang.String> getCustomTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityMonitoringDefaultRuleCase <a name="SecurityMonitoringDefaultRuleCase" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCase.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_default_rule.SecurityMonitoringDefaultRuleCase;

SecurityMonitoringDefaultRuleCase.builder()
    .status(java.lang.String)
//  .customStatus(java.lang.String)
//  .notifications(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCase.property.status">status</a></code> | <code>java.lang.String</code> | Status of the rule case to match. Valid values are `info`, `low`, `medium`, `high`, `critical`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCase.property.customStatus">customStatus</a></code> | <code>java.lang.String</code> | Status of the rule case to override. Valid values are `info`, `low`, `medium`, `high`, `critical`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCase.property.notifications">notifications</a></code> | <code>java.util.List<java.lang.String></code> | Notification targets for each rule case. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCase.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Status of the rule case to match. Valid values are `info`, `low`, `medium`, `high`, `critical`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_default_rule#status SecurityMonitoringDefaultRule#status}

---

##### `customStatus`<sup>Optional</sup> <a name="customStatus" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCase.property.customStatus"></a>

```java
public java.lang.String getCustomStatus();
```

- *Type:* java.lang.String

Status of the rule case to override. Valid values are `info`, `low`, `medium`, `high`, `critical`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_default_rule#custom_status SecurityMonitoringDefaultRule#custom_status}

---

##### `notifications`<sup>Optional</sup> <a name="notifications" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCase.property.notifications"></a>

```java
public java.util.List<java.lang.String> getNotifications();
```

- *Type:* java.util.List<java.lang.String>

Notification targets for each rule case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_default_rule#notifications SecurityMonitoringDefaultRule#notifications}

---

### SecurityMonitoringDefaultRuleConfig <a name="SecurityMonitoringDefaultRuleConfig" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_default_rule.SecurityMonitoringDefaultRuleConfig;

SecurityMonitoringDefaultRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .case(IResolvable|java.util.List<SecurityMonitoringDefaultRuleCase>)
//  .customMessage(java.lang.String)
//  .customName(java.lang.String)
//  .customTags(java.util.List<java.lang.String>)
//  .enabled(java.lang.Boolean|IResolvable)
//  .filter(IResolvable|java.util.List<SecurityMonitoringDefaultRuleFilter>)
//  .id(java.lang.String)
//  .options(SecurityMonitoringDefaultRuleOptions)
//  .query(IResolvable|java.util.List<SecurityMonitoringDefaultRuleQuery>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.case">case</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCase">SecurityMonitoringDefaultRuleCase</a>></code> | case block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.customMessage">customMessage</a></code> | <code>java.lang.String</code> | Custom Message (will override default message) for generated signals. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.customName">customName</a></code> | <code>java.lang.String</code> | The name (will override default name) of the rule. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.customTags">customTags</a></code> | <code>java.util.List<java.lang.String></code> | Custom tags for generated signals. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable the rule. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilter">SecurityMonitoringDefaultRuleFilter</a>></code> | filter block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_default_rule#id SecurityMonitoringDefaultRule#id}. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.options">options</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptions">SecurityMonitoringDefaultRuleOptions</a></code> | options block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.query">query</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery">SecurityMonitoringDefaultRuleQuery</a>></code> | query block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `case`<sup>Optional</sup> <a name="case" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.case"></a>

```java
public IResolvable|java.util.List<SecurityMonitoringDefaultRuleCase> getCase();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCase">SecurityMonitoringDefaultRuleCase</a>>

case block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_default_rule#case SecurityMonitoringDefaultRule#case}

---

##### `customMessage`<sup>Optional</sup> <a name="customMessage" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.customMessage"></a>

```java
public java.lang.String getCustomMessage();
```

- *Type:* java.lang.String

Custom Message (will override default message) for generated signals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_default_rule#custom_message SecurityMonitoringDefaultRule#custom_message}

---

##### `customName`<sup>Optional</sup> <a name="customName" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.customName"></a>

```java
public java.lang.String getCustomName();
```

- *Type:* java.lang.String

The name (will override default name) of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_default_rule#custom_name SecurityMonitoringDefaultRule#custom_name}

---

##### `customTags`<sup>Optional</sup> <a name="customTags" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.customTags"></a>

```java
public java.util.List<java.lang.String> getCustomTags();
```

- *Type:* java.util.List<java.lang.String>

Custom tags for generated signals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_default_rule#custom_tags SecurityMonitoringDefaultRule#custom_tags}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable the rule. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_default_rule#enabled SecurityMonitoringDefaultRule#enabled}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.filter"></a>

```java
public IResolvable|java.util.List<SecurityMonitoringDefaultRuleFilter> getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilter">SecurityMonitoringDefaultRuleFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_default_rule#filter SecurityMonitoringDefaultRule#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_default_rule#id SecurityMonitoringDefaultRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.options"></a>

```java
public SecurityMonitoringDefaultRuleOptions getOptions();
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptions">SecurityMonitoringDefaultRuleOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_default_rule#options SecurityMonitoringDefaultRule#options}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.query"></a>

```java
public IResolvable|java.util.List<SecurityMonitoringDefaultRuleQuery> getQuery();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery">SecurityMonitoringDefaultRuleQuery</a>>

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_default_rule#query SecurityMonitoringDefaultRule#query}

---

### SecurityMonitoringDefaultRuleFilter <a name="SecurityMonitoringDefaultRuleFilter" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_default_rule.SecurityMonitoringDefaultRuleFilter;

SecurityMonitoringDefaultRuleFilter.builder()
    .action(java.lang.String)
    .query(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilter.property.action">action</a></code> | <code>java.lang.String</code> | The type of filtering action. Allowed enum values: require, suppress Valid values are `require`, `suppress`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilter.property.query">query</a></code> | <code>java.lang.String</code> | Query for selecting logs to apply the filtering action. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilter.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

The type of filtering action. Allowed enum values: require, suppress Valid values are `require`, `suppress`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_default_rule#action SecurityMonitoringDefaultRule#action}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilter.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

Query for selecting logs to apply the filtering action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_default_rule#query SecurityMonitoringDefaultRule#query}

---

### SecurityMonitoringDefaultRuleOptions <a name="SecurityMonitoringDefaultRuleOptions" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_default_rule.SecurityMonitoringDefaultRuleOptions;

SecurityMonitoringDefaultRuleOptions.builder()
//  .decreaseCriticalityBasedOnEnv(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptions.property.decreaseCriticalityBasedOnEnv">decreaseCriticalityBasedOnEnv</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If true, signals in non-production environments have a lower severity than what is defined by the rule case, which can reduce noise. |

---

##### `decreaseCriticalityBasedOnEnv`<sup>Optional</sup> <a name="decreaseCriticalityBasedOnEnv" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptions.property.decreaseCriticalityBasedOnEnv"></a>

```java
public java.lang.Boolean|IResolvable getDecreaseCriticalityBasedOnEnv();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If true, signals in non-production environments have a lower severity than what is defined by the rule case, which can reduce noise.

The decrement is applied when the environment tag of the signal starts with `staging`, `test`, or `dev`. Only available when the rule type is `log_detection`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_default_rule#decrease_criticality_based_on_env SecurityMonitoringDefaultRule#decrease_criticality_based_on_env}

---

### SecurityMonitoringDefaultRuleQuery <a name="SecurityMonitoringDefaultRuleQuery" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_default_rule.SecurityMonitoringDefaultRuleQuery;

SecurityMonitoringDefaultRuleQuery.builder()
//  .agentRule(IResolvable|java.util.List<SecurityMonitoringDefaultRuleQueryAgentRule>)
//  .aggregation(java.lang.String)
//  .customQueryExtension(java.lang.String)
//  .dataSource(java.lang.String)
//  .distinctFields(java.util.List<java.lang.String>)
//  .groupByFields(java.util.List<java.lang.String>)
//  .hasOptionalGroupByFields(java.lang.Boolean|IResolvable)
//  .metric(java.lang.String)
//  .metrics(java.util.List<java.lang.String>)
//  .name(java.lang.String)
//  .query(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery.property.agentRule">agentRule</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRule">SecurityMonitoringDefaultRuleQueryAgentRule</a>></code> | agent_rule block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery.property.aggregation">aggregation</a></code> | <code>java.lang.String</code> | The aggregation type. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery.property.customQueryExtension">customQueryExtension</a></code> | <code>java.lang.String</code> | Query extension to append to the logs query. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery.property.dataSource">dataSource</a></code> | <code>java.lang.String</code> | Source of events. Valid values are `logs`, `audit`, `app_sec_spans`, `spans`, `security_runtime`, `network`, `events`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery.property.distinctFields">distinctFields</a></code> | <code>java.util.List<java.lang.String></code> | Field for which the cardinality is measured. Sent as an array. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery.property.groupByFields">groupByFields</a></code> | <code>java.util.List<java.lang.String></code> | Fields to group by. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery.property.hasOptionalGroupByFields">hasOptionalGroupByFields</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | When false, events without a group-by value are ignored by the rule. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery.property.metric">metric</a></code> | <code>java.lang.String</code> | The target field to aggregate over when using the `sum`, `max`, or `geo_data` aggregations. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery.property.metrics">metrics</a></code> | <code>java.util.List<java.lang.String></code> | Group of target fields to aggregate over when using the `sum`, `max`, `geo_data`, or `new_value` aggregations. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery.property.name">name</a></code> | <code>java.lang.String</code> | Name of the query. Not compatible with `new_value` aggregations. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery.property.query">query</a></code> | <code>java.lang.String</code> | Query to run on logs. |

---

##### `agentRule`<sup>Optional</sup> <a name="agentRule" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery.property.agentRule"></a>

```java
public IResolvable|java.util.List<SecurityMonitoringDefaultRuleQueryAgentRule> getAgentRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRule">SecurityMonitoringDefaultRuleQueryAgentRule</a>>

agent_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_default_rule#agent_rule SecurityMonitoringDefaultRule#agent_rule}

---

##### `aggregation`<sup>Optional</sup> <a name="aggregation" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery.property.aggregation"></a>

```java
public java.lang.String getAggregation();
```

- *Type:* java.lang.String

The aggregation type.

For Signal Correlation rules, it must be event_count. Valid values are `count`, `cardinality`, `sum`, `max`, `new_value`, `geo_data`, `event_count`, `none`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_default_rule#aggregation SecurityMonitoringDefaultRule#aggregation}

---

##### `customQueryExtension`<sup>Optional</sup> <a name="customQueryExtension" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery.property.customQueryExtension"></a>

```java
public java.lang.String getCustomQueryExtension();
```

- *Type:* java.lang.String

Query extension to append to the logs query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_default_rule#custom_query_extension SecurityMonitoringDefaultRule#custom_query_extension}

---

##### `dataSource`<sup>Optional</sup> <a name="dataSource" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery.property.dataSource"></a>

```java
public java.lang.String getDataSource();
```

- *Type:* java.lang.String

Source of events. Valid values are `logs`, `audit`, `app_sec_spans`, `spans`, `security_runtime`, `network`, `events`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_default_rule#data_source SecurityMonitoringDefaultRule#data_source}

---

##### `distinctFields`<sup>Optional</sup> <a name="distinctFields" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery.property.distinctFields"></a>

```java
public java.util.List<java.lang.String> getDistinctFields();
```

- *Type:* java.util.List<java.lang.String>

Field for which the cardinality is measured. Sent as an array.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_default_rule#distinct_fields SecurityMonitoringDefaultRule#distinct_fields}

---

##### `groupByFields`<sup>Optional</sup> <a name="groupByFields" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery.property.groupByFields"></a>

```java
public java.util.List<java.lang.String> getGroupByFields();
```

- *Type:* java.util.List<java.lang.String>

Fields to group by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_default_rule#group_by_fields SecurityMonitoringDefaultRule#group_by_fields}

---

##### `hasOptionalGroupByFields`<sup>Optional</sup> <a name="hasOptionalGroupByFields" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery.property.hasOptionalGroupByFields"></a>

```java
public java.lang.Boolean|IResolvable getHasOptionalGroupByFields();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

When false, events without a group-by value are ignored by the rule.

When true, events with missing group-by fields are processed with `N/A`, replacing the missing values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_default_rule#has_optional_group_by_fields SecurityMonitoringDefaultRule#has_optional_group_by_fields}

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery.property.metric"></a>

```java
public java.lang.String getMetric();
```

- *Type:* java.lang.String

The target field to aggregate over when using the `sum`, `max`, or `geo_data` aggregations.

**Deprecated.** Configure `metrics` instead. This attribute will be removed in the next major version of the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_default_rule#metric SecurityMonitoringDefaultRule#metric}

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery.property.metrics"></a>

```java
public java.util.List<java.lang.String> getMetrics();
```

- *Type:* java.util.List<java.lang.String>

Group of target fields to aggregate over when using the `sum`, `max`, `geo_data`, or `new_value` aggregations.

The `sum`, `max`, and `geo_data` aggregations only accept one value in this list, whereas the `new_value` aggregation accepts up to five values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_default_rule#metrics SecurityMonitoringDefaultRule#metrics}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the query. Not compatible with `new_value` aggregations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_default_rule#name SecurityMonitoringDefaultRule#name}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

Query to run on logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_default_rule#query SecurityMonitoringDefaultRule#query}

---

### SecurityMonitoringDefaultRuleQueryAgentRule <a name="SecurityMonitoringDefaultRuleQueryAgentRule" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_default_rule.SecurityMonitoringDefaultRuleQueryAgentRule;

SecurityMonitoringDefaultRuleQueryAgentRule.builder()
    .agentRuleId(java.lang.String)
    .expression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRule.property.agentRuleId">agentRuleId</a></code> | <code>java.lang.String</code> | **Deprecated**. It won't be applied anymore. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRule.property.expression">expression</a></code> | <code>java.lang.String</code> | **Deprecated**. It won't be applied anymore. |

---

##### `agentRuleId`<sup>Required</sup> <a name="agentRuleId" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRule.property.agentRuleId"></a>

```java
public java.lang.String getAgentRuleId();
```

- *Type:* java.lang.String

**Deprecated**. It won't be applied anymore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_default_rule#agent_rule_id SecurityMonitoringDefaultRule#agent_rule_id}

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRule.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

**Deprecated**. It won't be applied anymore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_default_rule#expression SecurityMonitoringDefaultRule#expression}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityMonitoringDefaultRuleCaseList <a name="SecurityMonitoringDefaultRuleCaseList" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_default_rule.SecurityMonitoringDefaultRuleCaseList;

new SecurityMonitoringDefaultRuleCaseList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.get"></a>

```java
public SecurityMonitoringDefaultRuleCaseOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCase">SecurityMonitoringDefaultRuleCase</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SecurityMonitoringDefaultRuleCase> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCase">SecurityMonitoringDefaultRuleCase</a>>

---


### SecurityMonitoringDefaultRuleCaseOutputReference <a name="SecurityMonitoringDefaultRuleCaseOutputReference" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_default_rule.SecurityMonitoringDefaultRuleCaseOutputReference;

new SecurityMonitoringDefaultRuleCaseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.resetCustomStatus">resetCustomStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.resetNotifications">resetNotifications</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomStatus` <a name="resetCustomStatus" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.resetCustomStatus"></a>

```java
public void resetCustomStatus()
```

##### `resetNotifications` <a name="resetNotifications" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.resetNotifications"></a>

```java
public void resetNotifications()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.customStatusInput">customStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.notificationsInput">notificationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.customStatus">customStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.notifications">notifications</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCase">SecurityMonitoringDefaultRuleCase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customStatusInput`<sup>Optional</sup> <a name="customStatusInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.customStatusInput"></a>

```java
public java.lang.String getCustomStatusInput();
```

- *Type:* java.lang.String

---

##### `notificationsInput`<sup>Optional</sup> <a name="notificationsInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.notificationsInput"></a>

```java
public java.util.List<java.lang.String> getNotificationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `customStatus`<sup>Required</sup> <a name="customStatus" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.customStatus"></a>

```java
public java.lang.String getCustomStatus();
```

- *Type:* java.lang.String

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.notifications"></a>

```java
public java.util.List<java.lang.String> getNotifications();
```

- *Type:* java.util.List<java.lang.String>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityMonitoringDefaultRuleCase getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCase">SecurityMonitoringDefaultRuleCase</a>

---


### SecurityMonitoringDefaultRuleFilterList <a name="SecurityMonitoringDefaultRuleFilterList" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_default_rule.SecurityMonitoringDefaultRuleFilterList;

new SecurityMonitoringDefaultRuleFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.get"></a>

```java
public SecurityMonitoringDefaultRuleFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilter">SecurityMonitoringDefaultRuleFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SecurityMonitoringDefaultRuleFilter> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilter">SecurityMonitoringDefaultRuleFilter</a>>

---


### SecurityMonitoringDefaultRuleFilterOutputReference <a name="SecurityMonitoringDefaultRuleFilterOutputReference" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_default_rule.SecurityMonitoringDefaultRuleFilterOutputReference;

new SecurityMonitoringDefaultRuleFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilter">SecurityMonitoringDefaultRuleFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityMonitoringDefaultRuleFilter getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilter">SecurityMonitoringDefaultRuleFilter</a>

---


### SecurityMonitoringDefaultRuleOptionsOutputReference <a name="SecurityMonitoringDefaultRuleOptionsOutputReference" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_default_rule.SecurityMonitoringDefaultRuleOptionsOutputReference;

new SecurityMonitoringDefaultRuleOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.resetDecreaseCriticalityBasedOnEnv">resetDecreaseCriticalityBasedOnEnv</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDecreaseCriticalityBasedOnEnv` <a name="resetDecreaseCriticalityBasedOnEnv" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.resetDecreaseCriticalityBasedOnEnv"></a>

```java
public void resetDecreaseCriticalityBasedOnEnv()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.property.decreaseCriticalityBasedOnEnvInput">decreaseCriticalityBasedOnEnvInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.property.decreaseCriticalityBasedOnEnv">decreaseCriticalityBasedOnEnv</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptions">SecurityMonitoringDefaultRuleOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `decreaseCriticalityBasedOnEnvInput`<sup>Optional</sup> <a name="decreaseCriticalityBasedOnEnvInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.property.decreaseCriticalityBasedOnEnvInput"></a>

```java
public java.lang.Boolean|IResolvable getDecreaseCriticalityBasedOnEnvInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `decreaseCriticalityBasedOnEnv`<sup>Required</sup> <a name="decreaseCriticalityBasedOnEnv" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.property.decreaseCriticalityBasedOnEnv"></a>

```java
public java.lang.Boolean|IResolvable getDecreaseCriticalityBasedOnEnv();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.property.internalValue"></a>

```java
public SecurityMonitoringDefaultRuleOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptions">SecurityMonitoringDefaultRuleOptions</a>

---


### SecurityMonitoringDefaultRuleQueryAgentRuleList <a name="SecurityMonitoringDefaultRuleQueryAgentRuleList" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_default_rule.SecurityMonitoringDefaultRuleQueryAgentRuleList;

new SecurityMonitoringDefaultRuleQueryAgentRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.get"></a>

```java
public SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRule">SecurityMonitoringDefaultRuleQueryAgentRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SecurityMonitoringDefaultRuleQueryAgentRule> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRule">SecurityMonitoringDefaultRuleQueryAgentRule</a>>

---


### SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference <a name="SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_default_rule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference;

new SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.property.agentRuleIdInput">agentRuleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.property.agentRuleId">agentRuleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRule">SecurityMonitoringDefaultRuleQueryAgentRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `agentRuleIdInput`<sup>Optional</sup> <a name="agentRuleIdInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.property.agentRuleIdInput"></a>

```java
public java.lang.String getAgentRuleIdInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `agentRuleId`<sup>Required</sup> <a name="agentRuleId" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.property.agentRuleId"></a>

```java
public java.lang.String getAgentRuleId();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityMonitoringDefaultRuleQueryAgentRule getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRule">SecurityMonitoringDefaultRuleQueryAgentRule</a>

---


### SecurityMonitoringDefaultRuleQueryList <a name="SecurityMonitoringDefaultRuleQueryList" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_default_rule.SecurityMonitoringDefaultRuleQueryList;

new SecurityMonitoringDefaultRuleQueryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.get"></a>

```java
public SecurityMonitoringDefaultRuleQueryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery">SecurityMonitoringDefaultRuleQuery</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SecurityMonitoringDefaultRuleQuery> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery">SecurityMonitoringDefaultRuleQuery</a>>

---


### SecurityMonitoringDefaultRuleQueryOutputReference <a name="SecurityMonitoringDefaultRuleQueryOutputReference" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_default_rule.SecurityMonitoringDefaultRuleQueryOutputReference;

new SecurityMonitoringDefaultRuleQueryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.putAgentRule">putAgentRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resetAgentRule">resetAgentRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resetAggregation">resetAggregation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resetCustomQueryExtension">resetCustomQueryExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resetDataSource">resetDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resetDistinctFields">resetDistinctFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resetGroupByFields">resetGroupByFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resetHasOptionalGroupByFields">resetHasOptionalGroupByFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resetMetric">resetMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resetMetrics">resetMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resetQuery">resetQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAgentRule` <a name="putAgentRule" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.putAgentRule"></a>

```java
public void putAgentRule(IResolvable|java.util.List<SecurityMonitoringDefaultRuleQueryAgentRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.putAgentRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRule">SecurityMonitoringDefaultRuleQueryAgentRule</a>>

---

##### `resetAgentRule` <a name="resetAgentRule" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resetAgentRule"></a>

```java
public void resetAgentRule()
```

##### `resetAggregation` <a name="resetAggregation" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resetAggregation"></a>

```java
public void resetAggregation()
```

##### `resetCustomQueryExtension` <a name="resetCustomQueryExtension" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resetCustomQueryExtension"></a>

```java
public void resetCustomQueryExtension()
```

##### `resetDataSource` <a name="resetDataSource" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resetDataSource"></a>

```java
public void resetDataSource()
```

##### `resetDistinctFields` <a name="resetDistinctFields" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resetDistinctFields"></a>

```java
public void resetDistinctFields()
```

##### `resetGroupByFields` <a name="resetGroupByFields" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resetGroupByFields"></a>

```java
public void resetGroupByFields()
```

##### `resetHasOptionalGroupByFields` <a name="resetHasOptionalGroupByFields" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resetHasOptionalGroupByFields"></a>

```java
public void resetHasOptionalGroupByFields()
```

##### `resetMetric` <a name="resetMetric" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resetMetric"></a>

```java
public void resetMetric()
```

##### `resetMetrics` <a name="resetMetrics" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resetMetrics"></a>

```java
public void resetMetrics()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetQuery` <a name="resetQuery" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.resetQuery"></a>

```java
public void resetQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.agentRule">agentRule</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList">SecurityMonitoringDefaultRuleQueryAgentRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.agentRuleInput">agentRuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRule">SecurityMonitoringDefaultRuleQueryAgentRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.aggregationInput">aggregationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.customQueryExtensionInput">customQueryExtensionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.dataSourceInput">dataSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.distinctFieldsInput">distinctFieldsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.groupByFieldsInput">groupByFieldsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.hasOptionalGroupByFieldsInput">hasOptionalGroupByFieldsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.metricInput">metricInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.metricsInput">metricsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.aggregation">aggregation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.customQueryExtension">customQueryExtension</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.dataSource">dataSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.distinctFields">distinctFields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.groupByFields">groupByFields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.hasOptionalGroupByFields">hasOptionalGroupByFields</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.metric">metric</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.metrics">metrics</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery">SecurityMonitoringDefaultRuleQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `agentRule`<sup>Required</sup> <a name="agentRule" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.agentRule"></a>

```java
public SecurityMonitoringDefaultRuleQueryAgentRuleList getAgentRule();
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRuleList">SecurityMonitoringDefaultRuleQueryAgentRuleList</a>

---

##### `agentRuleInput`<sup>Optional</sup> <a name="agentRuleInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.agentRuleInput"></a>

```java
public IResolvable|java.util.List<SecurityMonitoringDefaultRuleQueryAgentRule> getAgentRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryAgentRule">SecurityMonitoringDefaultRuleQueryAgentRule</a>>

---

##### `aggregationInput`<sup>Optional</sup> <a name="aggregationInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.aggregationInput"></a>

```java
public java.lang.String getAggregationInput();
```

- *Type:* java.lang.String

---

##### `customQueryExtensionInput`<sup>Optional</sup> <a name="customQueryExtensionInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.customQueryExtensionInput"></a>

```java
public java.lang.String getCustomQueryExtensionInput();
```

- *Type:* java.lang.String

---

##### `dataSourceInput`<sup>Optional</sup> <a name="dataSourceInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.dataSourceInput"></a>

```java
public java.lang.String getDataSourceInput();
```

- *Type:* java.lang.String

---

##### `distinctFieldsInput`<sup>Optional</sup> <a name="distinctFieldsInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.distinctFieldsInput"></a>

```java
public java.util.List<java.lang.String> getDistinctFieldsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `groupByFieldsInput`<sup>Optional</sup> <a name="groupByFieldsInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.groupByFieldsInput"></a>

```java
public java.util.List<java.lang.String> getGroupByFieldsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hasOptionalGroupByFieldsInput`<sup>Optional</sup> <a name="hasOptionalGroupByFieldsInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.hasOptionalGroupByFieldsInput"></a>

```java
public java.lang.Boolean|IResolvable getHasOptionalGroupByFieldsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.metricInput"></a>

```java
public java.lang.String getMetricInput();
```

- *Type:* java.lang.String

---

##### `metricsInput`<sup>Optional</sup> <a name="metricsInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.metricsInput"></a>

```java
public java.util.List<java.lang.String> getMetricsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.aggregation"></a>

```java
public java.lang.String getAggregation();
```

- *Type:* java.lang.String

---

##### `customQueryExtension`<sup>Required</sup> <a name="customQueryExtension" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.customQueryExtension"></a>

```java
public java.lang.String getCustomQueryExtension();
```

- *Type:* java.lang.String

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.dataSource"></a>

```java
public java.lang.String getDataSource();
```

- *Type:* java.lang.String

---

##### `distinctFields`<sup>Required</sup> <a name="distinctFields" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.distinctFields"></a>

```java
public java.util.List<java.lang.String> getDistinctFields();
```

- *Type:* java.util.List<java.lang.String>

---

##### `groupByFields`<sup>Required</sup> <a name="groupByFields" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.groupByFields"></a>

```java
public java.util.List<java.lang.String> getGroupByFields();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hasOptionalGroupByFields`<sup>Required</sup> <a name="hasOptionalGroupByFields" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.hasOptionalGroupByFields"></a>

```java
public java.lang.Boolean|IResolvable getHasOptionalGroupByFields();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.metric"></a>

```java
public java.lang.String getMetric();
```

- *Type:* java.lang.String

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.metrics"></a>

```java
public java.util.List<java.lang.String> getMetrics();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQueryOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityMonitoringDefaultRuleQuery getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleQuery">SecurityMonitoringDefaultRuleQuery</a>

---



